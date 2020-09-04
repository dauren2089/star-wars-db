This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Документация

## 1. Темы разделов

> Работа с REST сервисами

> Жизненный цикл React компонентов 

> Компоненты высшего порядка и render-функции

> Context API

> React Router


## 3. Создание нового проекта

> XMLHttpRequest - использовалься последние 20 лет, но сейчас устаревает

> Fetch - API, который мы будем использовать

> Fetch доступен во всех современных браузерах, но не все продвинутые возможности поддерживаются одинаково хорошо


## 4. Как работает Fetch API

> Чтобы получить данные с сервера, нужно выполнять два вызова (каждый вернет Promise):

> res = await fetch(url);

> body = await res.json();

> Кроме .json() есть и другие функции для других типов ответа: ArrayBuffer(), Blob(), text(), formData().

## 5. Обработка ошибок в Fetch API

> Fetch отклоняет (reject) Promise, только если произошла ошибка сети (сервер недоступен)

> Чтобы проверить код результата, можно использовать result.status

> result.ok содержит TRUE, если result.status содержит один из ОК-статусов (200-299)

## 6. API-клиент

> Код который работает с сетью лучше изолировать в отдельный класс-сервис

> Компоненты не должны знать откуда именно берутся данные

> такой подход упростить тестирование и поддержку кода, который работает с API

## 7.  Компоненты STARDB

> Начинать разработку React приложения удобно с создания разметки компонентов

> Такие компоненты ничего не делают, они просто отображают данные

> В финальной версии приложения "разбивка" на компоненты может измениться, но такой шаблон на React - хорошее начало

## 8.  Компоненты, который получет данные из API

> В конструктор компонента вызываем сервис, который получит данные

> В then() обновляем состояние компонента

## 9.  Трансформация данных API

> Изолируйте код, который обрабатывает данные

> Отделяйте модель данных API от модели данных приложения

> Такая практика чаще применяется для крупных проектов со сложными моделями данных, которые могут изменяться

## 10.  Создаем индикатор загрузки

> Хороший стиль применять индикаторы для скрытия еще не отображеных компонентов (которые еще загружаются или нет данных)

## 11.  Логика индикатор загрузки

> "Состояние" загрузки можно хранить в State

> В зависимости от этого состояния рендерим индикатор загрузки или содержимое компонента (уже с данными) 

> Старайтесь разделять логику и рендаринг

> React.Fragment позволяет группировать элементы не создавая лишних DOM-объектов.

## 12. Обработка ошибок сети в компоненте

> В state добавим поле, где будем хранить флаг: нужно ли отобразить ошибку

> В зависимости от этого флага, отображаем ошибку, или нормальное содержимое контента

> Будьте внимательны с async/await - код с await может выбросить ERROR

## Выводы по работе с сервером

> React ничего не знает о работе с сервером - это задача других библиотек

> Сетевой код следует изолировать от кода компонентов

> Если необходимо, то трансформируйте данные до того, как их получит компонент

> Обрабатывайте состояние "Загрузка" "Ошибка"

> Разделяйте ответственность компонентов: Логику отдельно, и рендеринг отдельно согласно принципу: Разделение обязанности


## 21. Жизненный цикл React компонентов

В React каждый компонент проходит через несколько жизненных циклов.

> Компонентам нужно выполнять код в определенные моменты своей жизни

> К примеру, перед тем, как компонент будет удаен, необходимо очистить ресурсы
 
> В React для этого есть механизм - Методы жизненного цикла (Lifecycle hooks)


## 22. Список этапов жизненного цикла 
Список этапов жизненного цикла компонента и специальных методов-фукнции (Lifecycle hooks) которые вызываются на каждом этапе цикла.

1. Mounting 

	constructor() => render() => componentDidMount()
> компонент подключен (DOM элементов уже на странице)

2. Updates

New Props
				=> render() => componentDidUpdate()
setState()	
> компонент обновился

3. Unmounting

componentDidUnmount()

> компонент будет удален (но DOM еще на странице)

4. Error

componentDidCatch()

> когда в компоненте (или в его child-компонентах) произошла ошибка

## 23. ComponentDidMount()

> этот метод вызывается после того, как компонент первый раз удачно проинициализировался (constructor()) и отрисовался на странице (render());

> Этот метод подходящее место для того, чтобы делать первоначальное инициализация компонента или отправлять запросы к API и начитать получение асинхронных данных.

> Используется для инициализации (получения данных, работа с DOM, и т.д)

> когда этот метод вызван, это означает, что DOM уже гарантированно загрузился.

> Не используйте конструктор, для кода, который создает побочные эффекты

> ComponentDidMoiunt() - хорошее место, для того, чтобы получать данные.

## 23. ComponentDidUpdate()

> ComponentDidUpdate() - вызывается после того, как компонент обновился

> Компонент обновляется посл того, как поулчает новые свойства или State

> Этот метод вызывается после render() - в нем можно, к примеру, запрашивать новые данные для обновленных свойств

> Мы использовали этот метод, чтобы подгрузить новые данные, когда personId изменился 

> Очень важный момент: если в это методе может измениться state - обязательно проверять, какое именно свойство изменилось

> ... иначе компонент рискует уйти в "вечный цикл" обновления

## 24. ComponentWillUnmount()

> Компонент будет удален

> используется для очистки ресурсов (таймеры, интервалы, запросы к серверу)
 
> в момент вызова DOM все еще находиться на странице

## 24. ComponentDidCatch()

>  ComponentDidCatch() - отлавливает ошибки, которые произошли в методах жизненного цикла ниже по иерархии

> Принцип работы похож на try/catch - ошибку отлавливает ближайший блок

> Не обрабатываются ошибки в eventListener'ах и в асинхронно коде (запросе к серверу, и т.п)

> Чтобы определить границы ошибок, нужны компоненты, которые будут разделять независимые блоки приложения

>ComponentDidCatch() принимает два аргумента - error и info с дополнительной информацией об источнике ошибок
