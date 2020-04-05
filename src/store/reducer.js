import {combineReducers} from 'redux'
import headerReducer from '../common/Header/store/reducer'

const rootReducer = combineReducers({
  header: headerReducer
})

export default rootReducer