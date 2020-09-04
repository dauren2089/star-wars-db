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
    // Реализация функции по получению данных c сервера
    // > Чтобы получить данные с сервера, нужно выполнять два вызова (каждый вернет Promise):
    // > res = await fetch(url);
    // > body = await res.json();
    async getResource(url){
        const response = await fetch(`${this._apiBase}${url}`);
        // ловим ошибки в полученном ответе
        // > Чтобы проверить код результата, можно использовать result.status
        // > result.ok содержит TRUE, если result.status содержит один из ОК-статусов (200-299)
        if (!response.ok) {
            throw new Error(`Couldn't fetch ${url}` + `, received ${response.status}`)
        }
        return await response.json();
    }
    async getAllPeople(){
        const res = await this.getResource('/people/');
        return res.results.map(this._transformPerson);
    }

    async getPerson(id){
       const person = await this.getResource(`/people/${id}`);
       return this._transformPerson(person)
    }

    async getAllPlanets(){
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships(){
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarship);
    }

    async getStarship(id){
        const starship = this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    // функция для извлечения ID-элемента из URL
    _extractId(item) {
        // находим ID элемента из URL используя regEx
        // regEx: "\/([0-9]*)\/$" - позваоляет найти только последние цифры в URL
        const idRegExp = /\/([0-9]*)\/$/;
        return  item.url.match(idRegExp)[1];
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
            terrain: planet.terrain
        }
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.name,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
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


