import React,{useState,useContext} from 'react'
import {NavLink} from "react-router-dom"
import "./style/nav.css"
import { UserContext } from '../App';

function Nav() {
  const {state , dispatch}= useContext(UserContext);
  const RenderMenu=()=>{

    if(state){

      return(

<>

      <NavLink to="/">home</NavLink>
<br />
<br />


      <NavLink to="cont">count</NavLink>
      <br />
      <br />
      <NavLink to="logout">logout</NavLink>


</>

      )
    }else{

      return(
<>




<NavLink to="/">home</NavLink>
<br />
<br />

<NavLink to="sig">sig</NavLink>
      <br />
      <br />
      <NavLink to="login">login</NavLink>
      <br />
      <br />

    

</>

      )
    }

  }

  return (
    <div>
          
      <div className="div-all">

<div className="nav">

<RenderMenu/>

      {/* <NavLink to="sig">sig</NavLink>
      <br />
      <br />
      <NavLink to="login">login00</NavLink>
      <br />
      <br />
      <NavLink to="cont">count</NavLink>
      <br />
      <br />
      <NavLink to="logout">logout</NavLink> */}
      </div>
      </div>
    

{/* 
      last row class line */}
    </div>
  )
}

export default Nav
