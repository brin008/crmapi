import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { loginReduser } from './Components/login/loginReducer'
import { langReduser } from './Components/langs/langReducer'
import { ProfInfoReduser } from './Components/profile/profInfoReducer'


let reducers=combineReducers({
   Login:loginReduser,
   Lang:langReduser,
   InfoData:ProfInfoReduser
})

let newStore=createStore(reducers, applyMiddleware(thunkMiddleware))
window.store=newStore
export default newStore