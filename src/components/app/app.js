import React, {Component}  from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from "../../services/swapi-service";

import './app.css';

export default class App extends Component {
    swapiService = new SwapiService();
    // храним статус showRandomPlanet
    state = {
        showRandomPlanet: true,
        //selectedPerson: 1,
        hasError: false
    };
    // скрыть и раскрыть компонент showRandomPlanet
    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    // onPersonSelected = (id) => {
    //     this.setState({
    //         selectedPerson: id
    //     })
    // }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div className="app">
                <Header/>
                { planet }
                {/*<RandomPlanet/>*/}
                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>

                <PeoplePage />

                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList onItemSelected={this.onPersonSelected}/>*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <PersonDetails personId={this.state.selectedPerson}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<br/>*/}
                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList*/}
                {/*            onItemSelected={this.onPersonSelected}*/}
                {/*            getData={this.swapiService.getAllPlanets} />*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <PersonDetails personId={this.state.selectedPerson} />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<br/>*/}
                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList*/}
                {/*            onItemSelected={this.onPersonSelected}*/}
                {/*            getData={this.swapiService.getAllStarships} />*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <PersonDetails personId={this.state.selectedPerson} />*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        );
    }
}