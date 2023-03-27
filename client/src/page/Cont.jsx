import React,{useEffect,useState} from 'react'
import {useHistory} from "react-router-dom"


function Cont() {

  const [UserData , setUserData]=useState("");

  const history=useHistory();
  const callAbout=async()=>{

    try {
      const res=await fetch("/Cont",{
method:"GET",
headers:{
  Accept:"application/json",
  "Content-Type": "application/json",
},
credentials:"include"

      })

      const data=await res.json()
      console.log(data)
      setUserData(data)
      if(!res.status===200){
        const error=new Error(res.error)
        throw error;
      }
      

    } catch (error) {

      console.log(error)
      history.push("/login")
     
      
    }

  }
  useEffect(()=>{
    callAbout()
  },[])
 


  return (
    <div>
     <h1>{UserData.name }</h1>
     <h1>{UserData.email}</h1>
     <h1>{UserData.password}</h1>
    </div>
  )
}

export default Cont
