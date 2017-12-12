import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRace, getRaces } from '../../redux/mainReducer';
import './Race.css';

class Race extends Component {

    componentDidMount() {
        const { num } = this.props.match.params;
        this.props.getRace(num);
        this.props.getRaces(); // run this so the navigation links work if a user goes directly to the first or last race (puts the races array on state)
    }

    componentWillReceiveProps(nextProps) {
        const { num } = nextProps.match.params;
        if (num !== this.props.match.params.num) {
            this.props.getRace(num);
        }
    }

    render() {
        const { race, races } = this.props;

        if (race.length === 0) {
            return <div>Loading...</div>
        }

        return (
            <div className="raceComponent">
                <div className="navLinks">
                    <Link className="prevRaceLink" to={`/races/${race[0].num === 1 ? races.length : race[0].num - 1}`} >Prev</Link>
                    <Link className="seasonSummaryLink" to='/races'>Summary</Link>
                    <Link className="nextRaceLink" to={`/races/${race[0].num === races.length ? 1 : race[0].num + 1}`} >Next</Link>
                </div>
                <div className="raceInfo">
                    <div className="raceName">{race[0].race_name}</div>
                    <div className="raceNumber">(RACE {race[0].num} of 18)</div>
                    <img className="fullFlag" src={require(`../../assets/flags/${race[0].abbrev.toLowerCase()}-flag.svg`)} alt="Flag of host country" />
                    <div className="raceCircuit">{race[0].circuit}</div>
                    <img className="circuitImg" src={require(`../../assets/circuits/${race[0].abbrev.toLowerCase()}-circuit.svg`)} alt="Map of circuit" />
                    <div className="raceWinner">RACE WINNER: {race[0].winner}</div>
                    <div className="winnerNat">{`(${race[0].nationality})`}</div>
                    <img className="winnerImg" src={require(`../../assets/winners/${race[0].abbrev.toLowerCase()}-winner.jpg`)} alt="Race winner" />
                    <div className="winnerTeam">{race[0].team}</div>
                    <img className="fullMfgLogo" src={require(`../../assets/logos/${race[0].mfg_logo_url}`)} alt="Logo of winning manufacturer" />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        race: state.main.race,
        races: state.main.races
    }
}

export default connect(mapStateToProps, { getRace, getRaces })(Race);