import React from 'react';
import {useNavigate} from "react-router-dom"
export default function Side(props){
  const navigate =useNavigate()
  const func=()=>{
    navigate('/about')
    
  }
  return(
      <button onClick={func}>click</button>
  )
}