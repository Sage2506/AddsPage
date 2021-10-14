import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from "../reducers/rootReducer";
import { getStateLocalStorage, setStateLocalStorage } from '../utils/localStorage';

const localStorage = getStateLocalStorage();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    localStorage,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

store.subscribe(() => {
    setStateLocalStorage({
        data: store.getState().data
    })
})

export default store;