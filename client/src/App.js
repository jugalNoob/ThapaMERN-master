import React, { createContext, useReducer } from 'react'
import {Route} from  "react-router-dom"
import Home from "./page/Home"
import Login from "./page/Login"
import Sig from "./page/Sig"
import Cont from "./page/Cont"
import Logout from './page/Logout'
import Nav from './page/Nav'
import { initialState ,reducer } from "../src/reducer/UserReducer"


export const UserContext=createContext()
function App() {

 
const [state , dispatch]=useReducer(reducer , initialState)

  return (
    <div>

<UserContext.Provider value={{state , dispatch}}>



    <Nav/>

<Route exact path="/">

<Home/>
</Route>



<Route path="/cont">
<Cont/>

</Route>

<Route path="/login">

<Login/>
</Route>


<Route path="/sig">

<Sig/>
</Route>

<Route path="/logout">

<Logout/>
</Route>
</UserContext.Provider>
    </div>
  )
}

export default App