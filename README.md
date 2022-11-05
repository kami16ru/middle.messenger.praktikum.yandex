<h1 align="center">Prodev Chat</h1>

# Menu

- [Figma](#figma)
- [Netlify](#netlify)
- [Heroku](#heroku)
- [Описание проекта](#описание-проекта)
  - [Используемые технологии](#используемые-технологии)
  - [Архитектура](#архитектура)
- [Запуск проекта](#запуск-проекта)
  - [Описание команд](#описание-команд)
  - [docker](#запуск-docker-контейнера)
- [История релизов](#история-релизов)
  - [sprint 1](#sprint-1)
    - [Техническое задание спринта](#ТЗ-1-спринта)
    - [Задачи](#задачи-1-спринта)
  - [sprint 2](#sprint-2)
    - [Техническое задание спринта](#ТЗ-2-спринта)
    - [Задачи](#задачи-2-спринта)
  - [sprint 3](#sprint-3)
    - [Техническое задание спринта](#ТЗ-3-спринта)
    - [Задачи](#задачи-3-спринта)

## Figma
https://www.figma.com/file/CA7wA3xpoIsKt4jieXv2QL/Yandex-Chat?node-id=0%3A1

## Netlify
https://lucky-centaur-1a1b81.netlify.app

## Heroku
https://prodev-chat.herokuapp.com/

## Описание проекта
Приложение чат с возможностью переключаться между чатами.

### Используемые технологии
- Typescript
- Handlebars - шаблонизатор, чтобы не дублировать код
- Parcel - сборщик модулей
- Eslint
- Stylelint
- UUID - для генерации случайных строк
- express server - для раздачи статики

### Архитектура
Проект представляет собой SPA фреймворк, написанный на typescript, handlebars, css. Использовано минимальное количество
библиотек, необходимых для существования проекта.

Используется компонентный подход, иерархические модули.

Модули бизнес логики находятся в папке src/modules. В папке модуля находится жизненно необходимые для модуля сущности.
На данный момент это могут быть компоненты (components), страницы (pages), сервисы (services), конфиги (configs).

Страницы содержат в себе компоненты. Компоненты тоже могут содержать в себе компоненты.

Настройки приложения находятся в папке config.

Движок приложения находится в папке lib. Там же лежат helper'ы - переиспользуемые функции и процедуры. Присутствует 
сервисный слой.

Http запросы находятся в папке services/api.

В конце данной документации представлена история релизов, с описанием тз и задач. Выполненные задачи отмечаются *.
Не критичные фиксы добавляются в задачу с именем "Рефакторинг №". Это задачи с низким приоритетом, которые будут 
выполнены после задач бизнеса. Правки по ревью и задачи не выполненные в текущем релизе, переносятся на следующий релиз.

Теги релиза вносятся после сдачи спринтов (например 0.1.0, 0.2.0 ...) После выполнения MVP проекта, вносится тег 1.0.0. 
Далее все теги итерируются по второму уровню. Тег 2.0.0 вносится после изменений, коренным образом меняющих движок проекта.

## Запуск проекта

### Описание команд

### `npm install`
> Устанавливает зависимости

### `npm run test`
> Запуск модульных тестов

### `npm run dev`
> Запуск проекта в dev режиме

### `npm start`
> Запуск проекта в предрелизном режиме

### `npm run build`
> Сборка проекта для продакшна

### `npm run stylelint`
> Приведенией файлов стилей к соответствующим договоренностям

### Запуск docker контейнера

### `cp .env.example .env`
> Копируйте .env.example в .env
> Затем наберите в командной строке
### `docker-compose up`
## История релизов

<hr>

## sprint 1 

<hr>

### ТЗ 1 спринта

Нарисовать прототипы приложения чат. Собрать проект используя parcel. Подключить шаблонизатор. Использовать scss.

- [x] Нарисовать прототип экранов проекта.
  - [x] Авторизация (с формой, имена полей: login, password).
    - Название для кнопки отправки формы входа: Войти 
    - Название для ссылки на страницу регистрации: Регистрация
  - [x] Регистрация (с формой, имена полей: first_name, second_name, login, email, password, phone).
    - Название для кнопки отправки формы регистрации: Создать аккаунт
  - [x] Настройки пользователя
    - Имена полей для изменения информации о пользователе: 
      - first_name, 
      - second_name, 
      - display_name, 
      - login, 
      - email, 
      - phone;
    - Поле для изменения аватара: avatar;
    - Поля для изменения пароля: oldPassword, newPassword.
  - [x] Страница 404
  - [x] Страница 5**
- [x] Подключить Parcel.
- [x] Выбрать (или реализовать свой) шаблонизатор для проекта и подключить его.
  - Сверстать страницы, используя шаблонизатор.
  - Вместо страницы со списком чатов и лентой переписки пока может быть заглушка.
- [x] Разбить проект на модули.
- [x] Настроить dev-окружение и NodeJS + Express для раздачи статических файлов на локальном компьютере.
- [x] Настроить выкладку статических файлов в Netlify и выложить свёрстанные макеты в интернет.
  - [x] подключите клонированный репозиторий,
  - [x] добавьте домен из Netlify в README.md,
  - [x] настройте автодеплой из ветки deploy.
- [x] Удалить текст, который был по умолчанию сгенерирован в README.md.
  - Рассказать в README.md о проекте 
  - Перечислить команды, которые в нём используются (например для сборки и запуска)
- [x] Указать версию NodeJS в .nvmrc или engine в package.json. Она должна быть не ниже 12.
- [x] Проект должен запускаться на 3000 порту, команда для запуска — npm run start.
- [x] Связать аккаунты на Яндекс.Практикуме и GitHub и клонировать репозиторий. 
  Не переименовывать его и убедиться, что он публичный в GitHub.

<hr>

### Задачи 1 спринта

- [x] v0.1.0 - sprint_1
  - [x] pcjs-1 - npm init
  - [x] pcjs-2 - index.html
  - [x] pcjs-3 - error handler
  - [x] pcjs-4 - express init
  - [x] pcjs-5 - 404 page
  - [x] pcjs-6 - check list readme.md
  - [x] pcjs-7 - button component
  - [x] pcjs-8 - parcel init
  - [x] pcjs-9 - handlebars
  - [x] pcjs-11 - Страница авторизации
  - [x] pcjs-12 - Страница регистрации
  - [x] pcjs-13 - Страница просмотра профайла
  - [x] pcjs-14 - Страница редактирования профайла
  - [x] pcjs-15 - Страница чатов
  - [x] pcjs-16 - SPA роутинг
  - [x] pcjs-17 - Указать версию NodeJS
  - [x] pcjs-18 - Настроить Netlify
  - [x] pcjs-19 - Страница 5**
  - [x] pcjs-20 - Рефакторинг 1
    - [x] Почистить папки с изображениями
    - [x] Заголовки h1, h2...
    - [x] Почистить css файлы. 
    - [x] Убрать по возможности !important
    - [x] src/assets/css/dialog/__content/dialog__content.css комментарий
    - [x] src/pages/profile/edit/template.hbs инлайн стили
    - [x] стандартизация определения цветов
    - [x] src/pages/chat/template.hbs инлайн стили
    - [x] src/pages/profile/show/template.hbs инлайн стили
    - [x] src/components/button/template.hbs оптимизировать
    - [x] src/components/example.tmpl.js убрать
    - [x] Убрать ошибку dialog
  - [x] pcjs-25 - Страница edit password
  - [x] pcjs-26 - layouts

<hr>

## sprint 2

<hr>

### ТЗ 2 спринта

- [x] Внедрите TypeScript.
- [x] Добавьте компонентный подход в проект:
  - [x] Используйте реализацию блока и Event Bus;
  - [x] Разделите проект на папки с компонентами и страницами (components и blocks или pages).
- [x] Сделайте сбор данных из формы. В console.log должен выводиться объект со всеми заполненными полями формы.
- [x] Добавьте валидацию на все формы (авторизация, регистрация, отправка сообщения (например, недопустимые символы), настройки пользователя). 
        Валидация должна работать по focus/blur событиям и второй раз проверяться при нажатии на submit. Используйте 
        регулярные выражения. У валидации должен быть единый механизм:
  - [x] first_name, second_name — латиница или кириллица, первая буква должна быть заглавной, без пробелов и без 
          цифр, нет спецсимволов (допустим только дефис).
  - [x] login — от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без 
          спецсимволов (допустимы дефис и нижнее подчёркивание).
  - [x] email — латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и 
          точка после неё, но перед точкой обязательно должны быть буквы.
  - [x] password — от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
  - [x] phone — от 10 до 15 символов, состоит из цифр, может начинается с плюса.
  - [x] message — не должно быть пустым.
- [x] Генерация страниц должна происходить на стороне клиента;
- [x] Сборка должна быть при помощи Parcel;
- [x] Структурируйте проект в соответствии с советами по архитектуре:
  - [x] Разбейте на папки единым образом. Например, если у вас в папке Button лежит Button.ts, index.ts, Button.css, 
          types.ts, то в папке Input не должен быть просто Input.ts. Как минимум там тоже должен быть свой index.ts;
  - [x] Настройте правильные экспорты и импорты;
  - [x] Декомпозируйте и максимально уменьшите связность.
  - [x] Проверьте, что ваше приложения соответствует шаблону MVC (тема «Паттерны», урок "MV*?").
- [x] В следующем спринте вы напишете свой роутер и добавите его в проект, использовать express.Router() нельзя. 
        Сейчас для перехода между страницами можете применить, например, ссылки в тегах `<a>`.
- [x] Добавьте класс для работы с запросами:
  - [x] Fetch, axios и подобные инструменты использовать нельзя. Только Promise и XHR;
  - [x] Реализуйте методы GET, POST, PUT, DELETE;
  - [x] Добавьте работу с query string в GET-запросе и с body для других методов.
- [x] Добавьте ESLint:
  - [x] Опишите свои правила или наследуйтесь от уже готовых наборов: например Airbnb или Google;
  - [x] Настройте editorconfig и другие статические анализаторы и инструменты для кода;
  - [x] Весь код должен проходить линтинг и тесты.
- [x] Добавьте Stylelint.
- [x] Обновите README.md, а именно информацию о функционале и использованных инструментах.

<hr>

### Задачи 2 спринта
     
- [x] v0.2.0 - sprint_2
  - [x] pcjs-21 - Компонент profile-avatar
  - [x] pcjs-24 - class Component
  - [x] pcjs-27 - exceptions
  - [x] pcjs-29 - eslint
  - [x] pcjs-32 - Рефакторинг 2
    - [x] `src/components/nav/nav-drawer/style.css` конкретизировать стили
    - [x] Читаемый цвет надписи полей ввода
  - [x] pcjs-33 - typesript
  - [x] pcjs-34 - event bus
  - [x] pcjs-35 - form validation
  - [x] pcjs-36 - http service
  - [x] pcjs-37 - stylelint
  - [x] pcjs-38 - Описать движок в readme
  - [x] pcjs-39 - Button partial to class
  - [x] pcjs-41 - Рефакторинг 3
    - [x] Убрать комментарии
    - [x] Обновить ссылку на netlify
    - [x] Обновить настройки ts
      ```json
      "strictNullChecks": true
      ```
  - [x] pcjs-42 - Input partial to class
  - [x] pcjs-43 - NavDrawer partial to class
  - [x] pcjs-47 - fix typings for hbs
  - [x] pcjs-49 - Copy static files parcel plugin

<hr>

## sprint 3

<hr>

### ТЗ 3 спринта

- [x] Нарисовать прототип экранов проекта.
  - [x] Список чатов и лента переписки (поле для ввода сообщения: message).
- [x] Добавьте роутинг в проект.
  - [x] У всех страниц должен быть собственный роут:
    - [x] /sign-up — страница регистрации,
    - [x] /settings — настройки профиля пользователя,
    - [x] /messenger — чат.
  - [x] В DOM может быть активна только одна страница (при переходе на новую страницу, не забудьте проверить, что старая была удалена из него).
  - [x] При обновлении страницы с определённым URL должна отображаться та же самая страница. То есть если пользователь зашел, например, на страницу регистрации и обновил её, она загрузится снова.
  - [x] Должны работать переходы по страницам через нажатие на кнопки в интерфейсе приложения. Если, например, на странице с настройками пользователя, есть кнопка «Вернуться», по нажатию на неё должна загрузиться страница с чатами.
  - [x] Должны работать переходы «назад» и «вперёд», как через интерфейс браузера, так и через роутер.
- [x] Внедрите HTTP API чатов, авторизации и пользователей. Описание API найдёте по ссылке. После регистрации пользователь должен попадать сразу на страницу чата. Также в уроках этого спринта описаны «ручки» и как делать к ним запросы. Нужно добавить:
  - [x] авторизацию в полном объеме (регистрация, авторизация, выход из системы)
  - [x] работу с информацией пользователя (изменять данные пользователя, изменять аватар, изменять пароль)
  - [x] работу с чатами (список чатов пользователя, создать новый чат, добавить пользователя в чат, удалить пользователя из чата).
  - [x] Попробуйте добавить в роутер хотя бы самую простую проверку авторизации пользователя. То есть чтобы он перенаправлял неавторизованного пользователя на страницу логина.
- [x] Подключите WebSocket для работы с real-time сообщениями.
- [x] Напишите тесты для шаблонизатора, роутера, компонента, модуля отправки запросов. Файлы с тестами необходимо хранить рядом с тестируемыми элементами. Например, тесты для роутера должны лежать в той же папке, что и файл с кодом роутера. Используйте Mocha и Chai. С Jest вы будете работать в следующем модуле.
- [x] Проверьте, что ваш проект защищён от XSS и DOS.
- [x] Обновите README.md, а именно информацию о функционале и использованных инструментах. Также укажите, как именно можно запустить тесты.

<hr>

### Задачи 3 спринта

- [x] v0.3.0 - sprint_3
  - [x] pcjs-22 - Компонент form
  - [x] pcjs-28 - chat nav menu
    - [x] - переключатель меню
    - [x] - ChatList
    - [x] - ChatListItem
    - [x] - Рефакторинг отрисовки компонентов
  - [x] pcjs-44 - Inputs in cycle
  - [x] pcjs-45 - Export default classes || Instances array elements
  - [x] pcjs-48 - Рефакторинг 4
    - [x] Иконка бургер для открытия меню. Переместить наверх
    - [x] nav-drawer по умолчанию collapsed
  - [x] pcjs-50 - readme sprint 3
  - [x] pcjs-51 - router update
  - [x] pcjs-52 - http api services
    - [x] auth
    - [x] profile
    - [x] chat
    - [x] dynamic http requests
  - [x] pcjs-53 - websockets
  - [x] pcjs-54 - unit tests
    - [x] компонент
    - [x] сервис обмена сообщениями
    - [x] helpers
  - [x] pcjs-55 - helmet.js
  - [x] pcjs-56 - Рефакторинг 5
    - [x] Использовать деструкторизацию для импортов часто используемых модулей
    - [x] Исправить отображение кнопок на страницах авторизации и регистрации
    - [x] props with children
    - [x] переписать compile
    - [x] Переписать отрисовку компонентов
      - [x] login page
      - [x] register page
      - [x] profile page
      - [x] messenger page
    - [x] Починить валидацию
  - [x] pcjs-57 - README.md update
  - [x] pcjs-58 - store
  - [x] pcjs-60 - Modules update
  - [x] pcjs-66 - ChatWrapper component
    - [x] - ChatsController
    - [x] - MessagingController
  - [x] pcjs-69 - Обновить ссылку netlify
  - [x] pcjs-78 - ChatService
  - [x] pcjs-79 - npm audit fix
  - [x] pcjs-82 - element replaceWith
  - [x] pcjs-84 - auth module
  - [x] pcjs-85 - Refactor events
  - [x] pcjs-86 - Обновить nav drawer. Починить роутинг
  - [x] pcjs-88 - Chat list component. Messenger page styles
  - [x] pcjs-89 - Route config not found route fix
  - [x] pcjs-91 - Fix project dev run
  - [x] pcjs-92 - Fix 404 history

### ТЗ 4 спринта

  - [ ] Напишите тесты. Файлы с тестами необходимо хранить рядом с тестируемыми элементами. Используйте Mocha и Chai.
    - [ ] роутера
    - [x] компонента
    - [x] модуля отправки запросов.
  - [x] Настройте Webpack в вашем проекте. Настройте loader для работы с:
    - [x] TypeScript
    - [x] вашим препроцессором
    - [x] вашим шаблонизатором
  - [x] Настройте Docker-сборку статического приложения.
  - [x] Разместите в Heroku проект с Docker-сборкой.
  - [x] Настройте precommit на проект.
  - [x] Проведите аудит пакетов, обновите их и приведите в актуальное и безопасное состояние.
  - [x] Обновите README.md проекта. Обновите описание функциональности и использованных технологий, проверьте
        актуальность информации о том, как собрать ваш проект. Также укажите, как именно можно запустить тесты.
  
### Задачи 4 спринта

- [ ] v0.4.0 - sprint_4
  - [ ] pcjs-63 - Router middleware
  - [x] pcjs-68 - Http requests error handler
    - [x] Лучше убрать дублирование типизации одинаковых методов (функций)
    - [x] HTTPErrorHandler
    - [x] ChatsController error handling
    - [x] AuthController error handling
    - [x] ProfileController error handling
  - [x] pcjs-71 - Рефакторинг 6
    - [x] починить webpack
    - [x] ошибка консоли call
    - [x] починить импорт стилей компонентов
  - [x] pcjs-72 - webpack
  - [x] pcjs-73 - docker
  - [x] pcjs-74 - heroku
  - [x] pcjs-87 - Рефакторинг 7
    - [x] История сообщений в чатах
    - [x] Заглушка аватара
    - [x] Валидация инпута чата на пустоту
  - [x] pcjs-93 - precommit
  - [x] pcjs-94 - аудит пакетов
  - [x] pcjs-95 - обновить readme
  - [ ] pcjs-97 - Рефакторинг 8
    - [ ] не виден текст сообщения в инпуте чата, когда много сообщений в нем
    - [ ] если пытаться изменить профиль, то после этого не могу попасть в чаты
    - [ ] нельзя изменить данные профиля
    - [ ] class Block нужно сделать абстрактным с помощью abstract class Block<P extends Record<string, any> .
    - [ ] `<div class="button-group__row">` этот блок с кнопками должен быть внутри тега form, чтобы кнопка сабмита
          вызывала событие submit и сабмитила форму. Обработчик сабмита нужно навешивать только на тег form с событием 
          submit, а не на кнопку сабмита с событием click, так как сабмит формы происходит ещё при нажатии Enter, и он 
          не будет работать, если навесить обработчик клика на кнопку только. Это нужно исправить везде, где есть 
          инпуты и форма. Другим кнопкам, которые не должны сабмитить форму, нужно добавлять type="button"
    - [ ] Почистить класс Validator от закомментированного кода
    - [ ] в задеплоенном приложении не отображается заглушка под аватар чата
    - [ ] Нужно настроить еще webpack под production
    - [ ] в прекоммит нужно было и запуск линтеров делать, чтобы не дать закоммитить неотформатированный код
    - [ ] export default Validator
  - [ ] pcjs-98 - Рефакторинг 9
    - [ ] Нужно добавить парочку тестов для других методов запросов в HTTPTransport.test.ts. И побольше сделать тестов 
          в каждом файле, чтобы обезопасить свое приложение от багов и ошибок в большей степени
    - [ ] Лучше не обращаться к нативному тегу, а задать для него отдельный css-класс. При изменении тэгов в шаблоне в 
          таком случае код будет продолжать работать, если в стили прописаны через имена классов
    - [ ] Чтобы сделать сайт более доступным для пользователя, нужно стараться придерживаться семантической верстки.
          Несколько полезных статей на эту тему:
  - [x] pcjs-99 - теперь parcel Вам не нужен. Его можно удалить и скрипты тоже
  - [x] pcjs-100 - Websockets error handling
    - [x] JSON.parse может выкинуть исключение, если данные невалидные. Стоит добавить блок try/catch для отлова
          возможной ошибки. Нужно в классе WSTransport добавить отлов на 78й строчке

### Задачи релиза 1.0.0

- [ ] v1.0.0 - develop
  - [ ] pcjs-10 - postcss
  - [ ] pcjs-23 - Компонент dialog
  - [ ] pcjs-30 - шрифты из cdn в проект
  - [ ] pcjs-31 - иконки из cdn в проект
  - [ ] pcjs-40 - Компоненты через теневой DOM
  - [ ] pcjs-46 - Loading element component
  - [ ] pcjs-59 - Изменение container в зависимости от ширины nav
  - [ ] pcjs-62 - Children routes
  - [ ] pcjs-64 - Middleware pipeline
  - [ ] pcjs-65 - Button icon component
  - [ ] pcjs-67 - .env
  - [ ] pcjs-75 - Entity types в отдельную папку
  - [ ] pcjs-76 - Entity collection class
  - [ ] pcjs-77 - http response types
  - [ ] pcjs-80 - заменить uuid на nano-id
  - [ ] pcjs-81 - обновить eslint rules
  - [ ] pcjs-96 - Рефакторинг 9
    - [ ] button убрать `<a>`
    - [ ] debounce mouseover avatar
    - [ ] При схлопывании навигации оставлять только аватарку у чата
    - [ ] Убрать лишнюю верстку из logout page
    - [ ] Валидация всех полей
    - [ ] Валидация подтверждения пароля
    - [ ] Сделать приватные свойства js классов приватными
    - [ ] `src/pages/login/template.hbs` вход по enter
    - [ ] `src/components/input/style.css`
      Очищать состояние фокуса для интерактивных элементов - не самая хорошая практика, потому что в таком случае
      пользователям, которые пользуются вашим сайтом с помощью клавиатуры, труднее будет понять, на каком элементе
      они находятся сейчас. Поэтому я бы тут посоветовал лучше добавить стили к фокусу, чтобы внешний вид данного
      состояния вас устраивал.
    - [ ] `src/components/nav/nav-drawer/navDrawer.js`
      Я бы посоветовал те классы, на которые вы вешаете js-логику, называть с префиксом js-. В таком случае если
      с вашим кодом будет работать кто-то еще, то он сразу поймет, что данный класс не только про стили.
    - [ ] `src/pages/error/404/template.hbs` задать картинку с помощью background
    - [ ] Оптимизировать изображения
    - [ ] Проверить везде Error handling. Убрать console.log
    - [ ] Unit test Router fix
    - [ ] Отображение автара
