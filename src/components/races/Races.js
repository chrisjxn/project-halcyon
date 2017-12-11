import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRaces } from '../../redux/mainReducer';
import RaceListItem from './raceListItem/RaceListItem';
import './Races.css';

class Races extends Component {

    componentDidMount() {
        this.props.getRaces();
    }

    renderRaces() {
        return this.props.races.map(race => {
            return (
                <RaceListItem key={race.id} race={race} />
            )
        })
    }

    render() {
        return (
            <div className="racesComponent">
                <Link className="homeLink" to='/'>Home</Link>
                <h1 className="title">2017 MotoGP Season Summary</h1>
                <div className="raceListContainer">
                    {this.renderRaces()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        races: state.main.races
    }
}

export default connect(mapStateToProps, { getRaces })(Races);