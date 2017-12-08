import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRaces } from '../../redux/mainReducer';

class Races extends Component {

    componentDidMount() {
        this.props.getRaces();
    }

    renderRaces() {
        return _.map(this.props.races, race => {
            return (
                <li key={race.id}>
                    <Link to={`/races/${race.id}`}>
                        {race.race_name}
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>This is the Races Component</h1>
                <ul>
                    {this.renderRaces()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        races: state.main.races
    }
}

export default connect(mapStateToProps, { getRaces })(Races);