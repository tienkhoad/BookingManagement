import { legacy_createStore as createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'login':
      const {username, password} = rest;
      if(username === 'admin' && password === 'admin') {
        return {...state, isAuthenticated: true};
      }
      else {
        return state;
      }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
