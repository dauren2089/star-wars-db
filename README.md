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

## 2.1. Темы разделов

> Работа с REST сервисами

> Жизненный цикл React компонентов 

> Компоненты высшего порядка и render-функции

> Context API

> React Router


## 2.2. Создание нового проекта

> XMLHttpRequest - использовалься последние 20 лет, но сейчас устаревает

> Fetch - API, который мы будем использовать

> Fetch доступен во всех современных браузерах, но не все продвинутые возможности поддерживаются одинаково хорошо


## 2.3. Как работает Fetch API

> Чтобы получить данные с сервера, нужно выполнять два вызова (каждый вернет Promise):

> res = await fetch(url);

> body = await res.json();

> Кроме .json() есть и другие функции для других типов ответа: ArrayBuffer(), Blob(), text(), formData().

## 2.4. Обработка ошибок в Fetch API

> Fetch отклоняет (reject) Promise, только если произошла ошибка сети (сервер недоступен)

> Чтобы проверить код результата, можно использовать result.status

> result.ok содержит TRUE, если result.status содержит один из ОК-статусов (200-299)

## 2.5. API-клиент

> Код который работает с сетью лучше изолировать в отдельный класс-сервис

> Компоненты не должны знать откуда именно берутся данные

> такой подход упростить тестирование и поддержку кода, который работает с API

## 2.7.  Компоненты STARDB

> Начинать разработку React приложения удобно с создания разметки компонентов

> Такие компоненты ничего не делают, они просто отображают данные

> В финальной версии приложения "разбивка" на компоненты может измениться, но такой шаблон на React - хорошее начало

## 2.8.  Компоненты, который получет данные из API

> В конструктор компонента вызываем сервис, который получит данные

> В then() обновляем состояние компонента

## 2.9.  Трансформация данных API

> Изолируйте код, который обрабатывает данные

> Отделяйте модель данных API от модели данных приложения

> Такая практика чаще применяется для крупных проектов со сложными моделями данных, которые могут изменяться

## 2.10.  Создаем индикатор загрузки

> Хороший стиль применять индикаторы для скрытия еще не отображеных компонентов (которые еще загружаются или нет данных)

## 2.11.  Логика индикатор загрузки

> "Состояние" загрузки можно хранить в State

> В зависимости от этого состояния рендерим индикатор загрузки или содержимое компонента (уже с данными) 

> Старайтесь разделять логику и рендаринг

> React.Fragment позволяет группировать элементы не создавая лишних DOM-объектов.

## 2.12. Обработка ошибок сети в компоненте

> В state добавим поле, где будем хранить флаг: нужно ли отобразить ошибку

> В зависимости от этого флага, отображаем ошибку, или нормальное содержимое контента

> Будьте внимательны с async/await - код с await может выбросить ERROR

## Выводы по работе с сервером

> React ничего не знает о работе с сервером - это задача других библиотек

> Сетевой код следует изолировать от кода компонентов

> Если необходимо, то трансформируйте данные до того, как их получит компонент

> Обрабатывайте состояние "Загрузка" "Ошибка"

> Разделяйте ответственность компонентов: Логику отдельно, и рендеринг отдельно согласно принципу: Разделение обязанности


## 3.1. Жизненный цикл React компонентов

В React каждый компонент проходит через несколько жизненных циклов.

> Компонентам нужно выполнять код в определенные моменты своей жизни

> К примеру, перед тем, как компонент будет удаен, необходимо очистить ресурсы
 
> В React для этого есть механизм - Методы жизненного цикла (Lifecycle hooks)


## 3.2. Список этапов жизненного цикла 
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

## 3.3. ComponentDidMount()

> этот метод вызывается после того, как компонент первый раз удачно проинициализировался (constructor()) и отрисовался на странице (render());

> Этот метод подходящее место для того, чтобы делать первоначальное инициализация компонента или отправлять запросы к API и начитать получение асинхронных данных.

> Используется для инициализации (получения данных, работа с DOM, и т.д)

> когда этот метод вызван, это означает, что DOM уже гарантированно загрузился.

> Не используйте конструктор, для кода, который создает побочные эффекты

> ComponentDidMoiunt() - хорошее место, для того, чтобы получать данные.

## 3.4. ComponentDidUpdate()

> ComponentDidUpdate() - вызывается после того, как компонент обновился

> Компонент обновляется посл того, как поулчает новые свойства или State

> Этот метод вызывается после render() - в нем можно, к примеру, запрашивать новые данные для обновленных свойств

> Мы использовали этот метод, чтобы подгрузить новые данные, когда personId изменился 

> Очень важный момент: если в это методе может измениться state - обязательно проверять, какое именно свойство изменилось

> ... иначе компонент рискует уйти в "вечный цикл" обновления

## 3.5. ComponentWillUnmount()

> Компонент будет удален

> используется для очистки ресурсов (таймеры, интервалы, запросы к серверу)
 
> в момент вызова DOM все еще находиться на странице

## 3.6. ComponentDidCatch()

>  ComponentDidCatch() - отлавливает ошибки, которые произошли в методах жизненного цикла ниже по иерархии

> Принцип работы похож на try/catch - ошибку отлавливает ближайший блок

> Не обрабатываются ошибки в eventListener'ах и в асинхронно коде (запросе к серверу, и т.п)

> Чтобы определить границы ошибок, нужны компоненты, которые будут разделять независимые блоки приложения

>ComponentDidCatch() принимает два аргумента - error и info с дополнительной информацией об источнике ошибок.

##4.1. Паттерны React

> В этом разделе мы рассмотрим основные паттерны работы с React кодом

> наша цель -научиться переиспользовать аспекты поведения React компонентов и разделять ответственность компонентов

> Большинство паттернов основано на чистом javaScript и здравом смысле.

## 4.2. Исползование функций

> Функции, которые мы передаем компоненту могут быть не только обработчиками событий 

> Функция, к примеру, может инкапсулировать получение данных (тогда компонент становиться независимым от источника данных)

## 4.3. Render() функции

> Паттерн React - в компонент передается функция, которая рендерит часть компонента (или весь компонент)

```js
 <Card renderBody={() => <p>Hello</p>} />
```
> Такая функция обычно возвращает строку или React элемент

## 4.4. Свойства-элеменотов

> В качестве значения свойства можно передать React элемент
```js
<Card title={ <h1> Hi </h1>} />
```

> Так можно создавать элементы - "Контейнеры"
 
> ... или элементы, которые умеют выбирать, что рендерить в зависимости от условия (загрузка, ошибка, и т.п.)

## 4.5. Children

> Компоненту можно передавать одно из свойств, поместив его в тело элемента

```js
	<Card>How are you</Card>
```
> Это свойство доступно через props.children

> Поддерживает любые типы данных: элементы, функции, объекты и другие.

> Компонент может решать, как именно использовать children

> Функция React.Children.map() упрощает обработку props.children

> Child элементы можно заменять, оборачивать в другие компоненты или скрывать (если вернуть null)

## 4.7. Клонирование элементов

> React элементы нельзя изменять (они считаются immutable) 

> ...но можно создовать модифицированные копии при помощи React.cloneElement()

> К примеру, элементам можно добавлять новые свойства

## 4.8. Компоненты высшего порядка

> Функция, которая создает компоненты и оборачивает существующие

```js
const hoc = (Wrapped) => {
	return class extends Component {
		render() {
			return <Wrapped {...this.props} />
		}
	}
}

const MyWrappedComponent = hoc(InnerComponent);
```

## 4.9. Рефакторинг компонентов

> обратная сторона "гибкости" компонентов это громоздкая конфигурация

> Код будет более читабельным, если вынести детали конфигуарции в отдельные компоненты

> Для этого можно использовать НОС (компоненты высшего порядка) или просто написать компонент-обертку вручную

## 4.10. Композиция HOC

> Композиция - применение одной функции к результату другой: f(g(x))

> Компоненты высшего порядка это обычные функции, которые возвращают компоненты. Композиция работает и для них.

> Так же мы можем применять несколько "Эффектов" HOC

> HOC - Higher Order Component

## 4.11. Контекст Context.API

> Контекст нуже для того, чтобы решить проблему "глобальных" данных

> Вместо того, чтобы передавать props через все слои приложения, данные можно передавать через контекст

> С помощью контекста мы сможем сделать так, чтобы компоненты не создавали объекты сервиса, а получали его

> создадим контектс
```js
const {
    Provider : SwapiServiceProvider,
    Consumer : SwapiServiceConsumer
} = React.createContext();

<Provider value={some value}>
	.../// провайдер оборачивает часть приложения
</Provider>

<Consumer> {
	(someValue) => <MyComponent data={someValue}>
}
</Consumer>

```

>


## 4.12. HOC + Context

> Обязанность получать данные из контектса можно вынести в компонент высшего порядка

```js
	const withValueFromContext = (Wrapped) => {
		return (
			<Consumer>
				{ (value) => <Wrapped value={value}/>}
			</Consumer>
			)
	}
``` 

## 4.14.  Трансформация свойств

> НОС может переобразовывать свойства перед тем, как передавать их компоненту

> Например, изменять их имена и выбирать, какие именно свойства нужны передать

> При помощи дополнительной функции (mapMethodsToProps) можно определять это поведение для каждого компонента.


## 4.15 .  Обновление контекста

> Значение в контексте можно обновлять как любое другое свойство компонента

> Компоненты должны поддерживать изменение нужных свойств

> componentDidUpdate() - функция в которой можно проверить, какие свойства изменились.

## 4.17 .  Рефакторинг НОС

> Техника, которую мы использовали называется "Частично примененные функции" (partially apllied functions)

```js
const add = (a) => (b) => a + b
```

## 4.17 .  Функция compose

> Реализует композицию в виде функции

```js
compose = (...func) => (comp) => {
	return funcs.reduceRight(
		(wrapped, f) => f(wrapped), comp);
};

const MyComp = compose(withService, 
	withData, 
	withChild(renderName))
	(SimpleComponent)
```

## 4.18 .  DefaultProps

> Позволяет установит значения по-умолчанию для свойств

```js
const Comp = ({ name }) => (<p> {name} </p>);
Comp.defaultProps = {
	name: 'Bob'
}
```

## 4.19 .  propsTypes

> Позволяет проверить значение свойств (props), которые получет компонент

```js
const Comp = ({name}) => {
	(<p> {name} </p>);
}

Comp.propsTypes = {
	name: (props, propName, compName ) => {...}
}
```

> Проверка срабатывает после defaultProps

> функция-валидатор возвращает null или объект Error

> библиотека prop-types - набор стандартных функций-валидаторов

```js
MyComponent.propsTypes = {
	'some_number': PropsTypes.number
	"some_mandatory_number": PropsTypes.number.isRequired
}
``` 

> Есть и другие библиотеки, с дополнительными валидаторами. К примеру, airbnb-prop-types

# REACT HOOKS

> Хуки дают возможность компонентам-функция работать со состоянием, жизненным циклом и контекстом.

> Пример хука:
```js
	const HookSwitcher = () => {
		const [num, setNum] = useState(42);
		return <button onClick = {setNum(100)}>{num}...
	}
```

## UseState()

> Добавляет state в функциональные компоненты

```js
const [color, setColor ] = useState('green');
const [age, setAge ] = useAge('33');

setNum(100);
```

> Возвращает массив: текущее значение и функция для установки нового значения

> Всегда обновляет объект полностью, а не отдельные поля, как setState()

```js
const Person = () => {
	const [person, setPerson] = useState({
		firstName: 'Bob',
		lastName: 'Smith'
	});

	setPerson((person) => {
		return {...person, firstName: 'Mike'};
	});
}
```

```js
class Person extends Component {
	state = {
		firstName: 'Bob',
		lastName: 'Smith'
	};

	updateFirstName() {
		this.setState({ 
			firstName: 'Mike'
		});
	}

	render() {
		return <p>{this.state.firstName} {this.state.lastName }</p>;
	}
}
```

##  USECONTEXT ()

> Получает значение из заданного контекста

```js
const a = useContext(Context_A);
const b = useContext(Context_B);
```

> Код создания контекста и установки значения остается без изменений

> В useContext() передается именно объект-контекст (а не Consumer)

Пример создания с применением Context.Provider и Context.Сonsumer
```js
const App = () => {
    return (
        <MyContext.Provider value="Hello world!">
            <Child />
        </ MyContext.Provider>
    );
};

const Child = () => {
	return (
	    <MyContext.Consumer>
	        { (value => {
	            return (
	                <p> {value} </p>
	             )
	        })}
	    </MyContext.Consumer>
	)
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

Пример создания с применением useContext:
```js
const MyContext = React.createContext();

const App = () => {
    return (
        <MyContext.Provider value="Hello world!">
            <Child />
        </MyContext.Provider>
    );
};

const Child = () => {
    const value = useContext(MyContext);

    return <p> { value } </p>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

##  useEffect()

> Запускает функцию каждый раз, когда определенный набор данных изменяется

```js
useEffect( () => {
	console.log(a + b + c);
	return () => console.log('Cleanup');
}, [a, b, c]);
```

> Усли вернуть 2 функцию, она будет вызываться для очистки предыдущего эффекта (похоже на componentWillUnmount());

> Пример: работа с Компонентом классом
```js

import React, {useState, Component} from "react";
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if(visible) {
        return (
            <div>
                <button
                onClick={ ()=> setValue((v) => v + 1 )}>
                    +
                </button>
                <button
                    onClick={ ()=> setVisible(false)}>
                    hide
                </button>
                <ClassCounter value={value}/>
                <HookCounter value={value} />
            </div>
        );
    } else {
        return (
            <button
                onClick={ () => setVisible(true)}>
                show
            </button>
        )
    }
};

const HookCounter = ({ value }) => {
    return <p> {value} </p>
};

class ClassCounter extends Component {
    componentDidMount() {
        console.log('class: MOUNT')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('class: UPDATE')
    }

    componentWillUnmount() {
        console.log('class: UNMOUNT')
    }

    render() {
        return <p>{this.props.value}</p>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

```

> Пример использования UseEffect вместо использования Компонент классов
```js

import React, {useState, useEffect, Component} from "react";
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if(visible) {
        return (
            <div>
                <button
                onClick={ ()=> setValue((v) => v + 1 )}>
                    +
                </button>
                <button
                    onClick={ ()=> setVisible(false)}>
                    hide
                </button>
                <ClassCounter value={value}/>
                <HookCounter value={value} />
            </div>
        );
    } else {
        return (
            <button
                onClick={ () => setVisible(true)}>
                show
            </button>
        )
    }
};

const HookCounter = ({ value }) => {
    useEffect( () => {
        console.log('useEffect() ');
        return () => console.log('clear');
    }, [ value ])
    return <p> {value} </p>
};

class ClassCounter extends Component {
    componentDidMount() {
        console.log('class: MOUNT')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('class: UPDATE')
    }

    componentWillUnmount() {
        console.log('class: UNMOUNT')
    }

    render() {
        return <p>{this.props.value}</p>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

```

## UseEffect() - Загрузка данных

> Если данные зависят от параметра (например, ID ресурса) - обязательно укажите его в массиве. 

> Promise нельзя отменить, но можно проигнорировать результат

```js
	useEffect(() => {
		let cancelled = false;

		fetch(`/users/${id}`)
			.then(res => res.json())
			.then(data => !cancelled && setName(data.name));

		return () => cancelled =true}, [id]);
```

## UseCallback() и UseMemo()

> UseCallback() - сохраняет функцию между вызовами, если данные в массиве зависимостей не изменились

> useMemo() - работает так же, но для значений

## Правила использования Hook-ов

> Хуки нельзя использовать в циклах и условиях
 
> Хуки можно использовать только в React компонентах и в других хуках

> Хуки нельзя использовать в классах

> Не все возможности React можно реализовать при помощи хуков (например, componentDidCatch() работает только в классах)

# Routing

> Роутинг - переключение между виртуальными "страницами" UI приложения

> Роутинг нужен, чтобы упростить структуру приложения и организовать навигацию

> В Single Page Application страница, на самом деле, одна и она не перезагружается 

## Основы React Router

> Пример роутинга для приложения:

```js
<Router>
	<Route path="/blog" component={Blog} />
	<Route path="/about" component={About} />
	<Route path="/shop" component={Shop} />
</Router>
```

> React Router это не часть React. Есть и другие библиотеки для роутинга (к примеру, UI-Router)

## Link

> Чтобы переключить страницы, используйте компонент Link из react-router
```js
	<Link to="/people">People</Link
```
> Link работает почти как тэг <a href="#">Название ссылки</>, но не перегружает страницу (и при этом обновляет URL в адресной строке).

## Как работает Route

> В Route можно передать render функцию

```js
  <Route path="/"
         render={() => <h2> Welcome to StarDB </h2> }
         exact={true} />
```
> Route работает как фильтр - сравнивая path с текущим адресом он решает, отрисовать содержимое или нет

> Параметр exact говорит, что нужно использовать чтоное сопадение (а не "Path является частью адреса")

## Динамические пути

> В Route можно передать параметры:

```js
 <Route path="/people/:id" render={({match}) => <p>{
 	match.params.id
 }</p>} />
```
> :id может быть любой строкой, которая идет после /people/

> Если не установить exact, то путь /people будет срабатывать всегда, когда срабатывает /people/:id

## withRouter()

> withRouter - это компонент высшего порядка (HOC), он перадает компоненту объекты react router: 

```js
const MyComponent = ({ match, location, history }) => {
	return (
		<button onClick = { () => history.push('/new/path')} > Click Me </button>
		);
};

export default withRouter(MyComponent);
```

## Относительные пути

> В React-router можно использовать относительные пути

history.push('/person') => абсолютный путь

history.push('person') => относительный путь

> Закрывающий слеш - очень важен

history.push('person');

// текущий адрес - /site/catalog/
// результат - /site/catalog/person

// текущий адрес - /site/catalog (без слеша)
// результат - /site/person

## Опциональные параметры

> В path параметры могут быть опциональными:
<Route path="/people/:id" ... />

> Приложение должно позволять перезагружать страницы, или передавать URL другим пользователям

> Адрес должен содержать ID открытого элемента (тогда открыв URL пользователь попадет на то-же "экран")

## Авторизация и "закрытые" страницы

> Можно использовать компоненты Redirect, чтобы переслать пользователя на логин-страницу:

<Redirect to "/login" />

> Система авторизации, которую мы рассмотрели, не обеспечивает безопасность в приложении (проверка прав должна проводиться на сервере!)

## Switch
> Компонент Switch оборачивает другие компоненты (Route и Redirect)

```js
	<Switch>
		<Route path="/page1" .../>
		<Route path="/page2" .../>
	</Switch>
```

> Switch отрисует только первый элемент, который соответствует адресу.

<Redirect to="/" />

> Route без свойства path срабатывает всегда.

<Route render={ () => <h2>Page not found</h2>} />
