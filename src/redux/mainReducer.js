import axios from 'axios';
import _ from 'lodash';

const initialState = {
    races: {}
}

// action types
const GET_RACES = 'GET_RACES';


// action creators
export function getRaces() {
    const races = axios.get('/api/races').then(res => res)
    return {
        type: GET_RACES,
        payload: races
    }
}


// reducer
export default function mainReducer(state = initialState, action) {
    switch (action.type) {

        case GET_RACES + '_PENDING':
            return state;
        case GET_RACES + '_FULFILLED':
            const racesList = _.mapKeys(action.payload.data, 'id');
            return Object.assign({}, state, { races: racesList });
        case GET_RACES + 'REJECTED':
            return state;

        default:
            return state;
    }
}