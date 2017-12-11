import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRace } from '../../redux/mainReducer';

class Race extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getRace(id);
    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/races'>Season Summary</Link>
                <div>Race Component!</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        race: state.main.race
    }
}

export default connect(mapStateToProps, { getRace })(Race);