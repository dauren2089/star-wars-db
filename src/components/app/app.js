import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import Row from "../row";
import ErrorButton from "../error-button";

import { SwapiServiceProvider } from "../swapi-service-context";

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {

    //swapiService = new SwapiService();
    swapiService = new DummySwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>

                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />

                        <PersonDetails itemId={20} />

                        <PlanetDetails itemId={2} />

                        <StarshipDetails itemId={10} />

                        <PersonList />

                        <StarshipList />

                        <PlanetList />

                    </div>
                </ SwapiServiceProvider >
            </ErrorBoundry>
        );
    }
}



class App2 extends Component {
    swapiService = new SwapiService();
    // храним статус showRandomPlanet
    state = {
        showRandomPlanet: true,
        //selectedPerson: 1,
        // hasError: false
    };
    // скрыть и раскрыть компонент showRandomPlanet
    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    // componentDidCatch() {
    //     this.setState({ hasError: true });
    // }

    // onPersonSelected = (id) => {
    //     this.setState({
    //         selectedPerson: id
    //     })
    // }

    render() {
        // if (this.state.hasError) {
        //     return <ErrorIndicator />
        // }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={3}
                getData={getStarship}
                getImageUrl={getStarshipImage}>

                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
            </ItemDetails>

        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    {planet}
                    <div className="row mb2 button-row">
                         <button
                              className="toggle-planet btn btn-warning btn-lg"
                              onClick={this.toggleRandomPlanet}>
                              Toggle Random Planet
                         </button>
                         <ErrorButton />
                    </div>
                    <Row
                        left={personDetails}
                        right={starshipDetails} />
                </div>
            </ErrorBoundry>

            // <div className="app">
            //     <Header/>
            //     { planet }
            //     {/*<RandomPlanet/>*/}
            //     <div className="row mb2 button-row">
            //         <button
            //             className="toggle-planet btn btn-warning btn-lg"
            //             onClick={this.toggleRandomPlanet}>
            //             Toggle Random Planet
            //         </button>
            //         <ErrorButton />
            //     </div>
            //     <PeoplePage />
            //     <br/>
            //     <div className="row mb2">
            //         <div className="col-md-6">
            //             <ItemList
            //                 onItemSelected={this.onPersonSelected}
            //                 getData={this.swapiService.getAllPlanets} />
            //         </div>
            //         <div className="col-md-6">
            //             <PersonDetails personId={this.state.selectedPerson} />
            //         </div>
            //     </div>
            //     <br/>
            //     <div className="row mb2">
            //         <div className="col-md-6">
            //             <ItemList
            //                 onItemSelected={this.onPersonSelected}
            //                 getData={this.swapiService.getAllStarships} />
            //         </div>
            //         <div className="col-md-6">
            //             <PersonDetails personId={this.state.selectedPerson} />
            //         </div>
            //     </div>
            //
            // </div>
        );
    }
}