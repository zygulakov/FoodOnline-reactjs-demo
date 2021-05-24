import {createStore,combineReducers} from 'redux'
import defaultReducer from './reducers/DefaultReducer'

const store = createStore(defaultReducer)

export default store;