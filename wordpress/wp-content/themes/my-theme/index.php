<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Document</title><script src="https://www.cbr-xml-daily.ru/money.js"></script><script src="//code.jivo.ru/widget/yagzagWCNh" async></script><style>.preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            visibility: hidden;
            z-index: 9999;
            opacity: 0;
            transition: all 0.2s ease-in-out;
            background-color: #1C1C1C;
        }

        .preloader__image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            object-fit: contain;
        }

        .preloader--active {
            visibility: visible;
            opacity: 1;
        }</style> <?= wp_head() ?> <script defer="defer" src="assets/js/main.js"></script></head><body><div id="app"></div><div class="preloader"><img class="preloader__image" src="<?= CFS()->get('settings_preloader_icon', 154) ?>" alt="general_preloader-icon"></div><div id="app"></div> <?= wp_footer() ?> </body></html>