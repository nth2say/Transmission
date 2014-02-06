var get_lang = function(lang) {
    var lang_arr_en = {
        t: 'en',
        0: 'Start',
        1: 'Pause',
        2: 'Stop',
        3: 'Start now',
        4: 'Resume',
        5: 'Force Re-Check',
        6: 'Remove',
        7: 'Remove and',
        8: 'Delete torrent',
        9: 'Delete data',
        10: 'Delete data + torrent',
        11: 'Label',
        12: 'Remove label',
        13: ['Name', 'Name'],
        14: ['Size', 'Size'],
        15: ['Done', 'Done'],
        16: ['Status', 'Status'],
        17: ['ETA', 'ETA'],
        18: ['Down S', 'Down Speed'],
        19: ['Up S', 'Up Speed'],
        20: ['S/P', 'Seeds/Peers'],
        21: ['Controls', 'Controls'],
        22: 'Connected',
        23: 'Error',
        24: 'Refresh',
        26: 'Transmission web-interface',
        34: 'Authorization error!',
        35: 'Page not found! Transmission not found!',
        36: 'Transmission not found. Address not valid!',
        38: 'Failed to get token! Possible wrong path.',
        57: 'Status: ',
        59: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'],
        60: ['b/s', 'Kb/s', 'Mb/s', 'Gb/s', 'Tb/s', 'Pb/s', 'Eb/s', 'Zb/s', 'Yb/s'],
        61: ['w', 'd', 'h', 'm', 's'],
        67: 'Pause all torrents',
        68: 'Resume all torrents',
        69: 'Unlimited',
        70: ['All', 'Downloading', 'Seeding', 'Completed', 'Active', 'Inactive', 'No label'],
        73: 'Are you sure that you want to delete selected torrent?',
        74: ['#', '#'],
        75: ['Remaining', 'Remaining'],
        76: ['Seeds', 'Seeds'],
        77: ['Peers', 'Peers'],
        78: ['Up', 'Uploaded'],
        79: ['Down', 'Downloaded'],
        80: ['Ratio', 'Ratio'],
        81: ['Avail.', 'Avail.'],
        82: ['Label', 'Label'],
        87: ['Don\'t download', 'Low', 'Normal', 'High'],
        88: ['File name', 'File name'],
        89: ['Priority', 'Priority'],
        90: 'Get file(s)',
        91: ['Select all', 'Update', 'Close'],
        102: 'Torrent file is added!',
        103: 'Unexpected error!',
        104: 'Add to Transmission',
        107: ['Save your settings first!', 'free', 'Add', 'Delete selected', 'Sub-path', 'Path', 'Folders in context menu', 'Sub-path must exist!'],
        110: ['Yes', 'No'],
        111: 'File list',
        112: 'Probably torrent file already exists!',
        113: ['', 'Select all'],
        114: 'Create label',
        115: 'Enter new label name:',
        116: ['Save', 'Cancel'],
        117: 'Select directory',
        118: 'Add torrent file',
        119: ['Ok','Cancel'],
        120: 'Add link',
        121: 'Enter URL',
        122: ['Can\'t download file', 'File is too large'],
        tsl: 'Temporary Speed Limits',
        "settings": {
            1: "Transmission",
            2: "Notifications",
            3: "Interface",
            4: "Context menu",
            5: "Restoring settings",
            6: "Web-UI",
            7: "Extra settings",
            8: "Notifications",
            9: "Other",
            10: "Interface pop-up window",
            11: "Update interval of torrent list",
            12: "Management of the columns of torrent list",
            13: "Management of the columns of file list",
            14: "Control context menu",
            15: "Directory management",
            16: "Backup and restore settings",
            17: "Save all!",
            18: "Restore",
            19: "Update",
            20: "Recovery",
            21: "Backup",
            22: "Delete selected",
            23: "Subdirectory",
            24: "Directory (full path)",
            25: "Automatically switch to the section \"Downloading\" when successfully added torrent file",
            26: "Enable context menu",
            27: "Reset settings",
            28: "Reset settings",
            29: "Update torrent list every",
            30: "Popup height",
            31: "Sort torrent list after update",
            32: "Show chart of speed",
            33: "Hide all torrents, which seeding",
            34: "Hide all torrents that have been downloaded, but don't seeding",
            35: "Automatically hide notification over",
            36: "Update torrent list in background every",
            37: "seconds",
            38: "seconds, 0 - don't hide",
            39: "Show number of downloading torrents on the extension icon",
            40: "Display a notification when download torrent file is complete",
            41: "SSL",
            42: "Path",
            43: "Port",
            44: "IP-address",
            45: "Password",
            46: "Username",
            47: "seconds",
            48: "Add",
            49: "show",
            50: "width",
            51: "I can't restore settings!",
            52: "Saved!",
            53: "Connection error!",
            54: "Language",
            55: "Yandex.Money",
            56: "If possible please",
            57: " make a donation through",
            58: "or",
            59: "Save settings in the cloud",
            60: "Get settings from the cloud",
            61: "Help",
            62: 'Open Transmission application',
            63: 'Go in "Options" > "Preferences"',
            64: 'Open "Advanced" section > "Web UI"',
            65: 'Check the box "Enable Web UI", enter "Username" and "Password"',
            66: 'Check the box "Alternative listening port", enter port number 8080',
            67: 'Now enter "Username". "Password", "IP-address" and "Port". If you do not know your "IP-address" try enter 127.0.0.1',
            68: 'Press the button "Save all"',
            69: 'Replace the directories on the label (with the addition of the label will be assigned)',
            70: 'Down',
            71: 'Up'
        }
    };
    var lang_arr_fr = {
        t: 'fr',
        0: 'Démarrer',
        1: 'Pause',
        2: 'Stop',
        3: 'Démarrer maintenant',
        4: 'Reprendre',
        5: 'Forcer la revérification',
        6: 'Supprimer',
        7: 'Supprimer et',
        8: 'Supprimer le torrent',
        9: 'Supprimer les données',
        10: 'Supprimer les données + le torrent',
        11: 'Etiquette',
        12: 'Supprimer l\'étiquette',
        13: ['Nom', 'Nom'],
        14: ['Taille', 'Taille'],
        15: ['Avancement', 'Avancement'],
        16: ['Statut', 'Statut'],
        17: ['Estimé', 'Estimé'],
        18: ['Réception', 'Réception'],
        19: ['Émissi', 'Émission'],
        20: ['S/C', 'Sources/Clients'],
        21: ['Gestion', 'Gestion'],
        22: 'Connecté',
        23: 'Erreur',
        24: 'Rafraichir',
        26: 'Interface web Transmission',
        34: 'Erreur d\'autorisation !',
        35: 'Page non trouvée ! Transmission non trouvé !',
        36: 'Transmission non trouvé. L\'adresse n\'est pas valide !',
        38: 'Impossible d\'obtenir le jeton ! Certainement mauvais chemin.',
        57: 'Statut : ',
        59: ['o', 'Ko', 'Mo', 'Go', 'To', 'Po', 'Eo', 'Zo', 'Yo'],
        60: ['o/s', 'Ko/s', 'Mo/s', 'Go/s', 'To/s', 'Po/s', 'Eo/s', 'Zo/s', 'Yo/s'],
        61: ['w', 'd', 'h', 'm', 's'],
        67: 'Mettre en pause tous les torrents',
        68: 'Reprendre le téléchargement de tous les torrents',
        69: 'Illimité',
        70: ['Tous', 'Téléchargement en cours', 'Envoi', 'Terminé', 'Actif', 'Inactif', 'Aucun libelé'],
        73: 'Êtes-vous sûr de vouloir supprimer le torrent sélectionné ?',
        74: ['#', '#'],
        75: ['Restant', 'Restant'],
        76: ['Sources', 'Sources'],
        77: ['Clients', 'Clients'],
        78: ['Envoi', 'Envoyé'],
        79: ['Téléchagement', 'Téléchargé'],
        80: ['Ratio', 'Ratio'],
        81: ['Dispo.', 'Disponible'],
        82: ['Etiquette', 'Etiquette'],
        87: ['Arrêter le téléchargement', 'Basse', 'Normale', 'Haute'],
        88: ['Nom du fichier', 'Nom du fichier'],
        89: ['Priorité', 'Priorité'],
        90: 'Télécharger le ou les fichiers séléctionnés',
        91: ['Tout séléctionner', 'Mettre à jour', 'Fermer'],
        102: 'Le torrent a été ajouté !',
        103: 'Erreur inconnue !',
        104: 'Ajouter à Transmission',
        107: ['Enregistrez en premier vos paramètres !', 'libre', 'Ajouter', 'Supprimé le fichier sélectionné', 'Sous-répertoire', 'Chemin', 'Répertoires dans le menu contextuel', 'Le sous-répertoire doit exister !'],
        110: ['Oui', 'Non'],
        111: 'Liste des fichiers',
        112: 'Probablement le fichier torrent existe déjà !',
        113: ['', 'Tout sélectionner'],
        114: 'Créer une étiquette',
        115: 'Entrer le nom de l\'étiquette :',
        116: ['Enregistrer', 'Fermer'],
        117: 'Sélectionnez le répertoire',
        118: 'Ajouter de fichier torrent',
        119: ['Ok','Fermer'],
        120: 'Ouvrir URL',
        121: 'Entrez l\'URL',
        122: ['Vous ne pouvez pas télécharger le fichier', 'Le fichier est trop gros'],
        tsl: 'Temporaire Des Limites De Vitesse',
        "settings": {
            1: "Transmission",
            2: "Notifications",
            3: "Interface",
            4: "Menu contextuel",
            5: "Restaurer les paramètres",
            6: "Web-UI",
            7: "Paramètres additionnels",
            8: "Notifications",
            9: "Autre",
            10: "Interface de la fenêtre",
            11: "L\'intervalle de la mise à jour de la liste des torrents",
            12: "Arrangement des colonnes et de la liste des torrents",
            13: "Arrangement des colonnes et de la liste des fichiers",
            14: "Menu contextuel",
            15: "Gestion des répertoires",
            16: "Sauvegarder et restaurer les paramètres",
            17: "Tout enregistrer !",
            18: "Restaurer",
            19: "Mettre à jour",
            20: "Récuperer",
            21: "Sauvegarder",
            22: "Delete the selected",
            23: "Sous-répertoire",
            24: "Répertoire (chemin complet)",
            25: "Automatiquement aller dans la section \"Téléchargement\" quand un fichier torrent est ajouté",
            26: "Activer le menu contextuel",
            27: "Remise à zéro",
            28: "Remise à zéro",
            29: "Mettre à jour la liste des torrents tous les",
            30: "Hauteur de la fenêtre",
            31: "Trier la liste après la mise à jour",
            32: "Montrer ue graphique de téléchargement",
            33: "Cacher tous les torrents qui sont en émission",
            34: "Cacher tous les torrents qui ont été téléchargés, mais qui ne sont pas en émission",
            35: "Masquer automatiquement la notification au bout de",
            36: "Mettre à jour la liste des torrents en fond toutes les",
            37: "secondes",
            38: "secondes, 0 - non caché",
            39: "Afficher le nombre de torrents en téléchargement dans l\'icone Transmission",
            40: "Afficher une notification lorsque un téléchargement est terminé",
            41: "SSL",
            42: "Chemin",
            43: "Port",
            44: "Adresse IP",
            45: "Mot de passe",
            46: "Nom d'utilisateur",
            47: "secondes",
            48: "Ajouter",
            49: "afficher",
            50: "largeur",
            51: "Impossible de restaurer les paramètres !",
            52: "Enregistré !",
            53: "Connection error!",
            54: "Langue",
            55: "Yandex.Money",
            56: "Si possible, s'il vous plaît",
            57: " faites un don sur",
            58: "ou",
            59: "Enregistrer la configuration dans le cloud",
            60: "Obtenir la configuration à partir du cloud",
            61: "Aide",
            62: 'Ouvrir l\'application Transmission',
            63: 'Aller dans "Options" > "Préferences"',
            64: 'Ouvrir la section "Avancé" > "Plugin WebUI"',
            65: 'Cliquez sur "Activer le plugin WebUI", entrez le "Nom" et "Mot de passe"',
            66: 'Cliquez sur le "Port d\'écoute alternatif", entez le port 8080',
            67: 'Maintenant entrez le "Nom", "Mot de passe", "l\'adresse IP" et le "Port". Si vous ne connaissez pas votre "adresse IP", essayez 127.0.0.1',
            68: 'Cliquez sur "OK"',
            69: 'Remplacez les répertoires sur l\'étiquette (avec l\'ajout de l\'étiquette va être affecté)',
            70: 'Vers le bas',
            71: 'Vers le haut'
        }
    };
    var lang_arr_ru = {
        t: 'ru',
        0: 'Запустить',
        1: 'Пауза',
        2: 'Остановить',
        3: 'Запустить сейчас',
        4: 'Возобновить',
        5: 'Перехешировать',
        6: 'Удалить',
        7: 'Удалить и',
        8: 'только .torrent',
        9: 'стереть файлы',
        10: '.torrent и файлы',
        11: 'Метка',
        12: 'Удалить метку',
        13: ['Имя торрента', 'Имя торрента'],
        14: ['Размер', 'Размер'],
        15: ['%', '%'],
        16: ['Статус', 'Статус'],
        17: ['Время', 'Время'],
        18: ['Загр. скор.', 'Скорость загрузки'],
        19: ['Отд. скор.', 'Скорость отдачи'],
        20: ['С/П', 'Сиды/Пиры'],
        21: ['Действия', 'Действия'],
        22: 'Соединение установлено',
        23: 'Ошибка',
        24: 'Обновить',
        26: 'Веб интерфейс Transmission',
        34: 'Ошибка авторизации!',
        35: 'Страница не найдена! Transmission не найден!',
        36: 'Transmission не найден. Неверный адрес!',
        38: 'Ошибка получения token! Возможно неправильный путь.',
        57: 'Статус: ',
        59: ['б', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб', 'Eb', 'Zb', 'Yb'],
        60: ['б/с', 'Кб/с', 'Мб/с', 'Гб/с', 'Тб/с', 'Пб/с', 'Eb/s', 'Zb/s', 'Yb/s'],
        61: ['н', 'д', 'ч', 'м', 'с'],
        67: 'Пауза для всех',
        68: 'Продолжить все загрузки',
        69: 'Неограниченно',
        70: ['Все', 'Загружаемые', 'Сидирование', 'Готовые', 'Активные', 'Неактивные', 'Без метки'],
        73: 'Вы действительно хотите удалить выбранный торрент?',
        74: ['#', 'Позиция'],
        75: ['Осталось', 'Осталось'],
        76: ['Сиды', 'Сиды'],
        77: ['Пиры', 'Пиры'],
        78: ['Отдано', 'Отдано'],
        79: ['Получено', 'Получено'],
        80: ['Коэф.', 'Коэффициент'],
        81: ['Доступно', 'Доступно'],
        82: ['Метка', 'Метка'],
        87: ['Не загружать', 'Низкий', 'Средний', 'Высокий'],
        88: ['Имя файла', 'Имя файла'],
        89: ['Приоритет', 'Приоритет'],
        90: 'Загрузить файл(ы)',
        91: ['Выбрать всё', 'Обновить', 'Закрыть'],
        102: 'Торрент файл добавлен!',
        103: 'Неожиданная ошибка!',
        104: 'Добавить в Transmission',
        107: ['Сначала сохраните текущие настройки!', 'свободно', 'Добавить', 'Удалить выбранное', 'Подкаталог', 'Каталог', 'Каталоги', 'Подкаталог должен существовать!'],
        110: ['Да', 'Нет'],
        111: 'Список файлов',
        112: 'Возможно торрент файл уже существует!',
        113: ['', 'Выбрать все'],
        114: 'Создать метку',
        115: 'Введите имя метки:',
        116: ['Сохранить', 'Отменить'],
        117: 'Выберите каталог',
        118: 'Добавить торрент файл',
        119: ['Ок','Отменить'],
        120: 'Добавить ссылку',
        121: 'Введите URL',
        122: ['Не могу загрузить торрент-файл', 'Файл больше 10 мб'],
        tsl: 'Временное ограничение скорости',
        "settings": {
            1: "Transmission",
            2: "Уведомления",
            3: "Интерфейс",
            4: "Контекстное меню",
            5: "Восст. наcтроек",
            6: "Веб-интерфейс",
            7: "Дополнительные настройки",
            8: "Уведомления",
            9: "Прочие",
            10: "Интерфейс всплывающего окна",
            11: "Интервал обновления списка торрентов",
            12: "Управление столбцами списка торрентов",
            13: "Управление столбцами списка файлов",
            14: "Управление контекстным меню",
            15: "Управление каталогами",
            16: "Резервное копирование и восстановление настроек",
            17: "Сохранить всё!",
            18: "Восстановить",
            19: "Обновить",
            20: "Восстановление",
            21: "Бэкап",
            22: "Удалить выбранное",
            23: "Подкаталог",
            24: "Каталог (полный путь)",
            25: "Автоматически переходить в раздел \"Загрузки\" при успешном добавлении торрент-файла",
            26: "Включить контекстное меню",
            27: "Сбросить настройки",
            28: "Сбросить настройки",
            29: "Обновлять список торрентов каждые",
            30: "Высота окна",
            31: "Выполнять сортировку списка после обновления",
            32: "Показывать график скорости",
            33: "Скрывать все торренты, которые раздаются",
            34: "Скрывать все торренты, которые загружены, но не раздаются",
            35: "Автоматически скрывать уведомление через",
            36: "Обновлять список торрентов в фоне каждые",
            37: "секунд",
            38: "секунд, 0 - не скрывать",
            39: "Показывать количество загружаемых торрентов на иконке приложения",
            40: "Выводить уведомление при завершении загрузки торрент-файла",
            41: "SSL",
            42: "Путь",
            43: "Порт",
            44: "IP-адрес",
            45: "Пароль",
            46: "Имя",
            47: "секунд",
            48: "Добавить",
            49: "показывать",
            50: "ширина",
            51: "Не могу восстановить настройки!",
            52: "Сохранено!",
            53: "Ошибка соединения!",
            54: "Язык",
            55: "Яндекс.Деньги",
            56: "Если возможно, пожалуйста",
            57: ", сделайте пожертвование через",
            58: "или",
            59: "Сохранить настройки в облако",
            60: "Получить из облака",
            61: "Справка",
            62: 'Откройте приложение Transmission',
            63: 'Войдите в "Настройки" > "Настройки приложения"',
            64: 'Откройте раздел "Дополнительно" > "Веб-интерфейс"',
            65: 'Поставьте галочку "Использовать Веб-интерфейс", введите "Имя" и "Пароль"',
            66: 'Поставьте галочку "Альтернативный порт", введите номер порта 8080',
            67: 'Теперь введите "Имя" и "Пароль", "IP-адрес" и "Порт". Если вы не знаете ваш "IP-адрес" попробуйте ввести 127.0.0.1',
            68: 'Нажмите "Сохранить всё"',
            69: 'Заменить каталоги на метки (при добавлении будет присваиваться метка)',
            70: 'Вниз',
            71: 'Вверх'
        }
    };
    if (lang === undefined) {
        lang = localStorage["lang"];
    }
    if (lang === undefined) {
        lang = 'en';
        if (chrome.i18n.getMessage("lang") === 'ru') {
            lang = 'ru';
        } else
        if (chrome.i18n.getMessage("lang") === 'fr') {
            lang = 'fr';
        }
    }
    if (lang === 'ru') {
        return lang_arr_ru;
    } else
    if (lang === 'fr') {
        return lang_arr_fr;
    } else {
        return lang_arr_en;
    }
};
var lang_arr = get_lang();
window.onload = function() {
    if (window.options === undefined) {
        get_lang = null;
    }
};