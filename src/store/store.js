import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import reducers from './reducers';

import { getVacancies } from '../store/actions/getVacancies';

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(getVacancies())

export default store;