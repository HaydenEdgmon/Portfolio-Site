import {combineReducers} from 'redux'
import {MainReducer} from './MainReducer'
import {NavReducer} from './NavReducer'

const rootReducer = combineReducers({
    MainReducer,
    NavReducer,
})

export default rootReducer