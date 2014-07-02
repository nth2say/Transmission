/**
 * Created by Anton on 21.06.2014.
 *
 * Mono cross-browser engine.
 */
var mono = function (env) {
    var mono = function() {
        // mono like console.log
        var args = Array.prototype.slice.call(arguments);
        args.unshift('monoLog:');
        console.log.apply(console, args);
    };

    var defaultId = 'monoScope';
    var addon;
    if (typeof window === 'undefined') {
        mono.isModule = true;
        mono.isFF = true;
        addon = env;
    } else {
        if (window.chrome !== undefined) {
            mono.isChrome = true;
        } else
        if (window.opera !== undefined) {
            mono.isOpera = true;
        } else {
            addon = window.addon || window.self;
            if (addon !== undefined) {
                mono.isFF = true;
            }
        }
    }
    mono.addon = addon;
    mono.pageId = defaultId;
    mono.debug = {};

    var externalStorage = {
        get: function(src, cb) {
            mono.sendMessage({action: 'get', data: src}, cb, 'monoStorage');
        },
        set: function(obj, cb) {
            mono.sendMessage({action: 'set', data: obj}, cb, 'monoStorage');
        },
        clear: function(cb) {
            mono.sendMessage({action: 'clear'}, cb, 'monoStorage');
        }
    };
    var localStorageMode = {
        get: function (src, cb) {
            var key, obj = {};
            if (src === undefined || src === null) {
                for (key in localStorage) {
                    if (!localStorage.hasOwnProperty(key)) {
                        continue;
                    }
                    obj[key] = localStorage[key];
                }
                return cb(obj);
            }
            if (typeof src === 'string') {
                src = [src];
            }
            if (Array.isArray(src) === true) {
                for (var i = 0, len = src.length; i < len; i++) {
                    key = src[i];
                    obj[key] = localStorage[key];
                }
            } else {
                for (key in src) {
                    obj[key] = localStorage[key];
                }
            }
            cb(obj);
        },
        set: function (obj, cb) {
            var key;
            for (key in obj) {
                localStorage[key] = obj[key];
            }
            cb && cb();
        },
        clear: function (cb) {
            localStorage.clear();
            cb && cb();
        }
    };
    var monoStorage = function() {
        var ss = require("sdk/simple-storage");
        return {
            get: function (src, cb) {
                var key, obj = {};
                if (src === undefined || src === null) {
                    for (key in ss.storage) {
                        if (!ss.storage.hasOwnProperty(key)) {
                            continue;
                        }
                        obj[key] = ss.storage[key];
                    }
                    return cb(obj);
                }
                if (typeof src === 'string') {
                    src = [src];
                }
                if (Array.isArray(src) === true) {
                    for (var i = 0, len = src.length; i < len; i++) {
                        key = src[i];
                        obj[key] = ss.storage[key];
                    }
                } else
                    for (key in src) {
                        obj[key] = ss.storage[key];
                    }
                cb(obj);
            },
            set: function (obj, cb) {
                var key;
                for (key in obj) {
                    ss.storage[key] = obj[key];
                }
                cb && cb();
            },
            clear: function (cb) {
                var key;
                for (key in ss.storage) {
                    delete ss.storage[key];
                }
                cb && cb();
            }
        }
    };
    var storage_fn = function(mode) {
        if (mono.isModule) {
            if (monoStorage.get === undefined) {
                monoStorage = monoStorage();
            }
            return monoStorage;
        } else
        if (mono.isFF) {
            return externalStorage;
        } else
        if (mono.isChrome &&
            chrome.storage !== undefined) {
            return chrome.storage[mode];
        } else
        if (window.localStorage !== undefined) {
            return localStorageMode;
        }
        return {};
    };
    mono.storage = storage_fn('local');
    mono.storage.local = mono.storage;
    mono.storage.sync = storage_fn('sync');

    var msgTools = function() {
        var cbObj = {};
        var cbStack = [];
        var id = 0;
        return {
            cbCollector: function (message, cb) {
                if (cb !== undefined) {
                    if (cbStack.length > 10) {
                        delete cbObj[cbStack.shift()];
                    }
                    id++;
                    message.monoCallbackId = id;
                    cbObj[id] = cb;
                    cbStack.push(id);
                }
            },
            cbCaller: function(message, pageId) {
                if (cbObj[message.monoResponseId] === undefined) {
                    return mono(pageId+':','Message response not found!', message);
                }
                cbObj[message.monoResponseId](message.data);
                delete cbObj[message.monoResponseId];
                cbStack.splice(cbStack.indexOf(message.monoResponseId), 1);
            },
            mkResponse: function(message, pageId) {
                var response;
                if (message.monoCallbackId !== undefined) {
                    response = function(responseMessage) {
                        responseMessage = {
                            data: responseMessage,
                            monoResponseId: message.monoCallbackId,
                            monoTo: message.monoFrom,
                            monoFrom: pageId
                        };
                        mono.sendMessage.send(responseMessage);
                    }
                }
                return response;
            }
        }
    }();

    var ffMessaging = {
        send: function(message, cb) {
            msgTools.cbCollector(message, cb);
            addon.port.emit(message.monoTo, message);
        },
        on: function(cb) {
            var pageId = mono.pageId;
            var onMessage = function(message) {
                if (message.monoTo !== pageId && message.monoTo !== defaultId) {
                    return;
                }
                if (message.monoResponseId) {
                    return msgTools.cbCaller(message, pageId);
                }
                var response = msgTools.mkResponse(message, pageId);
                cb(message.data, response);
            };
            if (pageId !== defaultId) {
                addon.port.on(pageId, onMessage);
            }
            addon.port.on(defaultId, onMessage);
        }
    };

    var chMessaging = {
        send: function(message, cb) {
            msgTools.cbCollector(message, cb);
            chrome.runtime.sendMessage(message);
        },
        on: function(cb) {
            var pageId = mono.pageId;
            chrome.runtime.onMessage.addListener(function(message) {
                if (message.monoTo !== pageId && message.monoTo !== defaultId) {
                    return;
                }
                if (message.monoResponseId) {
                    return msgTools.cbCaller(message, pageId);
                }
                var response = msgTools.mkResponse(message, pageId);
                cb(message.data, response);
            });
        }
    };

    var opMessaging = {
        send: function(message, cb) {
            msgTools.cbCollector(message, cb);
            opera.extension.postMessage(message);
        },
        on: function(cb) {
            var pageId = mono.pageId;
            opera.extension.onmessage = function(message) {
                if (message.monoTo !== pageId && message.monoTo !== defaultId) {
                    return;
                }
                if (message.monoResponseId) {
                    return msgTools.cbCaller(message, pageId);
                }
                var response = msgTools.mkResponse(message, pageId);
                cb(message.data, response);
            };
        }
    };

    mono.sendMessage = function(message, cb, to) {
        message = {
            data: message,
            monoTo: to || defaultId,
            monoFrom: mono.pageId
        };
        mono.sendMessage.send(message, cb);
    };

    if (mono.isChrome) {
        mono.sendMessage.send = chMessaging.send;
        mono.onMessage = chMessaging.on;
    } else
    if (mono.isFF) {
        mono.sendMessage.send = ffMessaging.send;
        mono.onMessage = ffMessaging.on;
    } else
    if (mono.isOpera) {
        mono.sendMessage.send = opMessaging.send;
        mono.onMessage = opMessaging.on;
    }


    if (!mono.isModule) {
        window.mono = mono;
    } else {
        return mono;
    }
};
if (typeof window !== "undefined") {
    mono(window);
} else {
    exports.init = mono;
}