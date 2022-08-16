# Prodev Chat

## Menu

- [Figma](#figma)
- [Netlify](#netlify)
- [История релизов](#история-релизов)
    - [sprint 1](#sprint-1)
        - [Техническое задание спринта](#ТЗ-1-спринта)
        - [Задачи](#задачи-1-спринта)
  - [sprint 2](#sprint-2)
      - [Техническое задание спринта](#ТЗ-2-спринта)
      - [Задачи](#задачи-2-спринта)

### Figma
https://www.figma.com/file/CA7wA3xpoIsKt4jieXv2QL/Yandex-Chat?node-id=0%3A1

### Netlify
https://lucky-centaur-1a1b81.netlify.app

### История релизов

<hr>

### sprint 1 

<hr>

#### ТЗ 1 спринта

Нарисовать прототипы приложения чат. Собрать проект используя parcel. Подключить шаблонизатор. Использовать scss.

    [] - Нарисовать прототип экранов проекта.
      [*] - Авторизация (с формой, имена полей: login, password).
            Название для кнопки отправки формы входа: Войти
            Название для ссылки на страницу регистрации: Регистрация
      [*] - Регистрация (с формой, имена полей: first_name, second_name, login, email, password, phone).
            Название для кнопки отправки формы регистрации: Создать аккаунт
      [*] - Настройки пользователя
            Имена полей для изменения информации о пользователе: 
              first_name, 
              second_name, 
              display_name, 
              login, 
              email, 
              phone;
            Поле для изменения аватара: avatar;
            Поля для изменения пароля: oldPassword, newPassword.
      [*] - Страница 404
      [*] - Страница 5**
    [*] - Подключить Parcel.
    [*] - Выбрать (или реализовать свой) шаблонизатор для проекта и подключить его.
          Сверстать страницы, используя шаблонизатор.
          Вместо страницы со списком чатов и лентой переписки пока может быть заглушка.
    [*] - Разбить проект на модули.
    [*] - Настроить dev-окружение и NodeJS + Express для раздачи статических файлов на локальном компьютере.
    [*] - Настроить выкладку статических файлов в Netlify и выложить свёрстанные макеты в интернет.
        [*] - подключите клонированный репозиторий,
        [*] - добавьте домен из Netlify в README.md,
        [*] - настройте автодеплой из ветки deploy.
    [*] - Удалить текст, который был по умолчанию сгенерирован в README.md. Рассказать в README.md о проекте 
          Перечислить команды, которые в нём используются (например для сборки и запуска)
    [*] - Указать версию NodeJS в .nvmrc или engine в package.json. Она должна быть не ниже 12.
    [*] - Проект должен запускаться на 3000 порту, команда для запуска — npm run start.
    [*] - Связать аккаунты на Яндекс.Практикуме и GitHub и клонировать репозиторий. 
          Не переименовывать его и убедиться, что он публичный в GitHub.

<hr>

#### Задачи 1 спринта

    [*] - v0.1.0 - sprint_1
      [*][pcjs-1] - npm init
      [*][pcjs-2] - index.html
      [*][pcjs-3] - error handler
      [*][pcjs-4] - express init
      [*][pcjs-5] - 404 page
      [*][pcjs-6] - check list readme.md
      [*][pcjs-7] - button component
      [*][pcjs-8] - parcel init
      [*][pcjs-9] - handlebars
      [*][pcjs-11] - Страница авторизации
      [*][pcjs-12] - Страница регистрации
      [*][pcjs-13] - Страница просмотра профайла
      [*][pcjs-14] - Страница редактирования профайла
      [*][pcjs-15] - Страница чатов
      [*][pcjs-16] - SPA роутинг
      [*][pcjs-17] - Указать версию NodeJS
      [*][pcjs-18] - Настроить Netlify
      [*][pcjs-19] - Страница 5**
      [*][pcjs-20] - Рефакторинг 1
        [*] - Почистить папки с изображениями
        [*] - Заголовки h1, h2...
        [*] - Почистить css файлы. 
          [*] - Убрать по возможности !important
          [*] - src/assets/css/dialog/__content/dialog__content.css комментарий
          [*] - src/pages/profile/edit/template.hbs инлайн стили
          [*] - стандартизация определения цветов
          [*] - src/pages/chat/template.hbs инлайн стили
          [*] - src/pages/profile/show/template.hbs инлайн стили
        [*] - src/components/button/template.hbs оптимизировать
        [*] - src/components/example.tmpl.js убрать
        [*] - Убрать ошибку dialog
      [*][pcjs-25] - Страница edit password
      [*][pcjs-26] - layouts

<hr>

### sprint 2

<hr>

#### ТЗ 2 спринта

    [] - Нарисовать прототип экранов проекта.
      [] - Список чатов и лента переписки (поле для ввода сообщения: message).
    [] - Выбрать препроцессор либо PostCSS. Использовать один из инструментов для стилей.
    [] - Внедрите TypeScript.
    [*] - Добавьте компонентный подход в проект:
      [*] - Используйте реализацию блока и Event Bus;
      [*] - Разделите проект на папки с компонентами и страницами (components и blocks или pages).
    [*] - Сделайте сбор данных из формы. В console.log должен выводиться объект со всеми заполненными полями формы.
    [] - Добавьте валидацию на все формы (авторизация, регистрация, отправка сообщения (например, недопустимые символы), настройки пользователя). 
        Валидация должна работать по focus/blur событиям и второй раз проверяться при нажатии на submit. Используйте 
        регулярные выражения. У валидации должен быть единый механизм:
      [] - first_name, second_name — латиница или кириллица, первая буква должна быть заглавной, без пробелов и без 
          цифр, нет спецсимволов (допустим только дефис).
      [] - login — от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без 
          спецсимволов (допустимы дефис и нижнее подчёркивание).
      [] - email — латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и 
          точка после неё, но перед точкой обязательно должны быть буквы.
      [] - password — от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
      [] - phone — от 10 до 15 символов, состоит из цифр, может начинается с плюса.
      [] - message — не должно быть пустым.
    [*] - Генерация страниц должна происходить на стороне клиента;
    [*] - Сборка должна быть при помощи Parcel;
    [*] - Структурируйте проект в соответствии с советами по архитектуре:
      [*] - Разбейте на папки единым образом. Например, если у вас в папке Button лежит Button.ts, index.ts, Button.css, 
          types.ts, то в папке Input не должен быть просто Input.ts. Как минимум там тоже должен быть свой index.ts;
      [*] - Настройте правильные экспорты и импорты;
      [*] - Декомпозируйте и максимально уменьшите связность.
      [*] - Проверьте, что ваше приложения соответствует шаблону MVC (тема «Паттерны», урок "MV*?").
    [*] - В следующем спринте вы напишете свой роутер и добавите его в проект, использовать express.Router() нельзя. 
        Сейчас для перехода между страницами можете применить, например, ссылки в тегах <a>.
    [] - Добавьте класс для работы с запросами:
      [] - Fetch, axios и подобные инструменты использовать нельзя. Только Promise и XHR;
      [] - Реализуйте методы GET, POST, PUT, DELETE;
      [] - Добавьте работу с query string в GET-запросе и с body для других методов.
    [*] - Добавьте ESLint:
      [*] - Опишите свои правила или наследуйтесь от уже готовых наборов: например Airbnb или Google;
      [*] - Настройте editorconfig и другие статические анализаторы и инструменты для кода;
      [*] - Весь код должен проходить линтинг и тесты.
    [] - Добавьте Stylelint.
    [] - Обновите README.md, а именно информацию о функционале и использованных инструментах.

<hr>

#### Задачи 2 спринта
     
    [] - v0.2.0 - sprint_2
      [][pcjs-10] - postcss
      [*][pcjs-21] - Компонент profile-avatar
      [][pcjs-22] - Компонент form
      [][pcjs-23] - Компонент dialog
      [*][pcjs-24] - class Component
      [*][pcjs-27] - exceptions
      [][pcjs-28] - chat page content
      [*][pcjs-29] - eslint
      [][pcjs-30] - шрифты из cdn в проект
      [][pcjs-31] - иконки из cdn в проект
      [][pcjs-32] - Рефакторинг 2
        [] - src/components/input/style.css
            Очищать состояние фокуса для интерактивных элементов - не самая хорошая практика, потому что в таком случае 
            пользователям, которые пользуются вашим сайтом с помощью клавиатуры, труднее будет понять, на каком элементе 
            они находятся сейчас. Поэтому я бы тут посоветовал лучше добавить стили к фокусу, чтобы внешний вид данного 
            состояния вас устраивал.
        [] - src/components/nav/nav-drawer/navDrawer.js
            Я бы посоветовал те классы, на которые вы вешаете js-логику, называть с префиксом js-. В таком случае если 
            с вашим кодом будет работать кто-то еще, то он сразу поймет, что данный класс не только про стили.
        [] - src/components/nav/nav-drawer/style.css конкретизировать стили
        [] - src/pages/error/404/template.hbs задать картинку с помощью background
        [] - src/pages/login/template.hbs вход по enter
        [] - Привести страницы к общему виду
        [] - Компоненты kebab-case. Страницы CamelCase с постфиксом Page
        [] - Добавить префикс plc в компоненты
        [] - Иконка бургер для открытия меню. Переместить наверх
        [] - Изменение container в зависимости от ширины nav
        [] - debounce mouseover avatar
        [] - nav-drawer по умолчанию collapsed
        [] - button убрать <a>
        [] - Оптимизировать изображения
        [] - Один error layout, 2 error pages
        [] - Почистить js файлы
        [] - Читаемый цвет надписи полей ввода
        [] - input lable top if input is filled
      [][pcjs-33] - typesript
      [*][pcjs-34] - event bus
      [][pcjs-35] - form validation
      [][pcjs-36] - http service
      [][pcjs-37] - stylelint
      [][pcjs-38] - Описать движок в readme
      [*][pcjs-39] - Button partial to class
      [][pcjs-40] - Компоненты через теневой DOM
      [][pcjs-41] - Рефакторинг 3
      [*][pcjs-42] - Input partial to class
      [][pcjs-43] - NavDrawer partial to class
      [][pcjs-44] - Inputs in cycle
      [][pcjs-45] - Export default classes | Instances array elements
      [][pcjs-46] - Loading element component



