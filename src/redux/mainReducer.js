import axios from 'axios';

const initialState = {
    races: []
}

// action types
const GET_RACES = 'GET_RACES';
const GET_RACE = 'GET_RACE';


// action creators
export function getRaces() {
    const races = axios.get(`/api/races`).then(res => res)
    return {
        type: GET_RACES,
        payload: races
    }
}

export function getRace(id) {
    const race = axios.get(`/api/races/${id}`).then(res => res)
    return {
        type: GET_RACE,
        payload: race
    }
}


// reducer
export default function mainReducer(state = initialState, action) {
    switch (action.type) {

        case GET_RACES + '_PENDING':
            return state;
        case GET_RACES + '_FULFILLED':
            return Object.assign({}, state, { races: action.payload.data })
        case GET_RACES + 'REJECTED':
            return state;

        case GET_RACE + '_PENDING':
            return state;
        case GET_RACE + '_FULFILLED':
            return Object.assign({}, state, { race: action.payload.data })
        case GET_RACE + '_REJECTED':
            return state;

        default:
            return state;
    }
}