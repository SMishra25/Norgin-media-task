// Import dependencies
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Import Saga
import {
    reducerMain,
    rootSaga
} from './reducer';

export default function (mockWindow) {
    const rootReducer = combineReducers({
        main: reducerMain
    });
    const sagaMiddleware = createSagaMiddleware()

    // Receive mock window or use global window
    let finalWindow = mockWindow;
    if (typeof window !== 'undefined') {
        finalWindow = window;
    }

    // Redux dev tool extension snippet
    const composeEnhancers = finalWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // Creating the store and connecting the sagas with the redux devtool extension
    let store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware
            )
        )
    );

    sagaMiddleware.run(rootSaga)

    return store
}
