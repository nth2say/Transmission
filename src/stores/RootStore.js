import {flow, types} from "mobx-state-tree";
import ConfigStore from "./ConfigStore";
import getLogger from "../tools/getLogger";
import ClientStore from "./ClientStore";
import callApi from "../tools/callApi";
import FileListStore from "./FileListStore";
import TorrentListStore from "./TorrentListStore";
import PutFilesDialogStore from "./PutFilesDialogStore";
import RemoveConfirmDialogStore from "./RemoveConfirmDialogStore";
import PutUrlDialogStore from "./PutUrlDialogStore";
import SpaceWatcherStore from "./SpaceWatcherStore";
import RenameDialogStore from "./RenameDialogStore";
import CopyMagnetUrlDialogStore from "./CopyMagnetUrlDialogStore";
import MoveDialogStore from "./MoveDialogStore";
import mobxApplyPatchLine from "../tools/mobxApplyPatchLine";

const promiseLimit = require('promise-limit');

const logger = getLogger('RootStore');

let dialogIndex = 0;

/**
 * @typedef {Object} RootStore
 * @property {string} [state]
 * @property {ConfigStore|undefined} config
 * @property {ClientStore|undefined} client
 * @property {TorrentListStore} [torrentList]
 * @property {FileListStore|undefined} fileList
 * @property {SpaceWatcherStore|undefined} spaceWatcher
 * @property {Map<*,*>} dialogs
 * @property {function:Promise} init
 * @property {function:Promise} syncClient
 * @property {function:Promise} _syncClient
 * @property {function} flushTorrentList
 * @property {function} createFileList
 * @property {function} destroyFileList
 * @property {function} createDialog
 * @property {function} destroyDialog
 * @property {function} createSpaceWatcher
 * @property {function} destroySpaceWatcher
 * @property {*} isPopup
 */
const RootStore = types.model('RootStore', {
  state: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
  config: types.maybe(ConfigStore),
  client: types.maybe(ClientStore),
  torrentList: types.optional(TorrentListStore, {}),
  fileList: types.maybe(FileListStore),
  spaceWatcher: types.maybe(SpaceWatcherStore),
  dialogs: types.map(types.union(
    PutFilesDialogStore, PutUrlDialogStore, RemoveConfirmDialogStore,
    RenameDialogStore, CopyMagnetUrlDialogStore, MoveDialogStore
  )),
}).actions((self) => {
  const oneLimit = promiseLimit(1);

  const bgStoreSession = {
    id: null,
    patchId: null
  };

  return {
    init: flow(function* () {
      if (self.state === 'pending') return;
      self.state = 'pending';
      try {
        self.config = yield fetchConfig();
        yield self.syncClient();
        self.state = 'done';
      } catch (err) {
        logger.error('init error', err);
        self.state = 'error';
      }
    }),
    syncClient: flow(function* (isForce) {
      return yield oneLimit(() => self._syncClient(isForce));
    }),
    _syncClient: flow(function* (isForce) {
      try {
        const response = yield fetchBgStoreDelta(bgStoreSession);
        mobxApplyPatchLine(self, bgStoreSession, response);
      } catch (err) {
        logger.error('_syncClient error', err);
        if (err.code === 'APPLY_PATH_ERROR' && !isForce) {
          self.syncClient(true);
        }
      }
    }),
    flushTorrentList() {
      return self.torrentList = {};
    },
    createFileList(id) {
      return self.fileList = {id};
    },
    destroyFileList() {
      self.fileList = undefined;
    },
    createDialog(dialog) {
      const id = `dialog_${++dialogIndex}`;
      self.dialogs.set(id, Object.assign({id}, dialog));
      return self.dialogs.get(id);
    },
    destroyDialog(id) {
      self.dialogs.delete(id);
    },
    createSpaceWatcher() {
      self.spaceWatcher = {};
    },
    destroySpaceWatcher(id) {
      self.spaceWatcher = undefined;
    }
  };
}).views((self) => {
  return {
    get isPopup() {
      return location.hash === '#popup';
    }
  };
});

const fetchBgStoreDelta = ({id, patchId}) => {
  return callApi({action: 'getBgStoreDelta', id, patchId});
};

const fetchConfig = () => {
  return callApi({
    action: 'getConfigStore'
  });
};

export default RootStore;