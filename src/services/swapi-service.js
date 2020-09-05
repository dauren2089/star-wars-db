// 1. пример реализации получения данных с сервера с помощью fetch
// fetch('https://swapi.dev/api/people/1/')
//     // отправляем запрос на получение тела JSON
//     .then( function (res){
//         return res.json();
//     // Выполняется PROMISE, ожидаем пока не завершиться пред. задание по получению данных
//     }).then(function (body) {
//         console.log(body);
// });
// 2. пример функции для вывыда данных и ошибок с API
// getResource('https://swapi.dev/api/people/1123123213/')
//     .then(function (body){
//         console.log(body);
//     }).catch( function (error) {
//         console.log('Could not fetch', error);
// });

// SwapiService - класс клиент ассинхронной обработки данных с сервера
// Код который работает с сетью лучше изолировать в отдельный класс-сервис
export default class SwapiService {
    // приватная часть класса (Convention)
    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';
    // Реализация функции по получению данных c сервера
    // > Чтобы получить данные с сервера, нужно выполнять два вызова (каждый вернет Promise):
    // > res = await fetch(url);
    // > body = await res.json();
    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);
        // ловим ошибки в полученном ответе
        // > Чтобы проверить код результата, можно использовать result.status
        // > result.ok содержит TRUE, если result.status содержит один из ОК-статусов (200-299)
        if (!response.ok) {
            throw new Error(`Couldn't fetch ${url}` + `, received ${response.status}`)
        }
        return await response.json();
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results
            .map(this._transformPerson)
            .slice(0, 5);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results
            .map(this._transformPlanet)
            .slice(0, 5);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results
            .map(this._transformStarship)
            .slice(0, 5);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    };

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    };

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    };

    // функция для извлечения ID-элемента из URL
    _extractId = (item) => {
        // находим ID элемента из URL используя regEx
        // regEx: "\/([0-9]*)\/$" - позваоляет найти только последние цифры в URL
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}

// Запуск функции для получения данных сервера 'https://swapi.dev/api/'
//const swapi = new SwapiService();

// swapi.getAllPeople().then(function (people){
//     people.forEach((p) => {
//         console.log(p.name);
//     });
// })
//
// swapi.getPerson(3).then(function (people){
//     console.log(people.name);
// })


