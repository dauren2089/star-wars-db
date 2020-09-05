import React, {Component}  from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ErrorButton from '../error-button';
//import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from "../../services/swapi-service";
import Record from '../item-details'
import ItemDetails from '../item-details'
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import './app.css';

export default class App extends Component {
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