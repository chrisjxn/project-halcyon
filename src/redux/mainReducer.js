import axios from 'axios';

const initialState = {
    races: [],
    race: []
}

// action types
const GET_RACES = 'GET_RACES';
const GET_RACE = 'GET_RACE';
const ADD_RACE = 'ADD_RACE';


// action creators
export function getRaces() {
    const races = axios.get(`/api/races`).then(res => res)
    return {
        type: GET_RACES,
        payload: races
    }
}

export function getRace(num) {
    const race = axios.get(`/api/races/${num}`).then(res => res)
    return {
        type: GET_RACE,
        payload: race
    }
}

export function addRace(values, callback) {
    const newRace = axios.post(`/api/races`, values).then(() => callback());
    return {
        type: ADD_RACE,
        payload: newRace
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