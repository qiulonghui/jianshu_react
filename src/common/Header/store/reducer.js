import * as types from './actionTypes'

const initialState = {
  focused: false
}

export default (state=initialState,action)=>{
  if(action.type === types.INPUT_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = true
    return newState
  }
  if(action.type === types.INPUT_BlUR) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = false
    return newState
  }
  return state
}
