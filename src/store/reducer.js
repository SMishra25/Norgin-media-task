import { all, call, put, takeEvery} from 'redux-saga/effects';
import { getShowsApi } from './../data/api'

// ActionTypes - generic
const GET_SHOWS = 'GET_SHOWS';
const SET_SHOWS = 'SET_SHOWS';
const SET_CLOCK = 'SET_CLOCK';

// Initial states
export const initialStateMain = {
    shows: {},
    clock: new Date()
}

// Reducers
export function reducerMain (state = initialStateMain, action) {
    switch (action.type) {
        // generic
        case SET_SHOWS:
            return {
                ...state,
                shows: action.payload
            }
        case SET_CLOCK:
            return {
                ...state,
                clock: new Date()
            }
        default:
            return state
    }
}

// Actions Generic
export const fetchShowDetails = () => ({ type: GET_SHOWS });
export const setClockNow = (action) => ({ type: SET_CLOCK, payload: action });

//Generator functions
export function* getShows () {
    try {
        const response = yield call(getShowsApi)
        yield put({type:SET_SHOWS, payload: response});
    } catch (e) {
        console.error(e);
    }
}

// rootSaga
export function* rootSaga () {
    yield all ([
        yield takeEvery(GET_SHOWS, getShows)
    ])
}