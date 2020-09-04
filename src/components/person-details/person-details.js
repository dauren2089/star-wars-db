import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            loading: false
        });
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then(this.onPlanetLoaded)
            .then((person) => {
                this.setState({ person });
            })

    }

    render() {

        if (!this.state.person) {
            return <span> Select Person </span>
        }
        const { person, loading } = this.state;

        const hasData = !(loading);

        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PersonView person={person} /> : null;

        return (
            <div className="person-details card">
                {spinner}
                {content}
            </div>
        )
    }
}

const PersonView =  ({ person }) => {
    const { id, name, gender,
        birthYear, eyeColor } = person;

    return (
            <React.Fragment>
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt="character"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>
            </React.Fragment>
    )
}