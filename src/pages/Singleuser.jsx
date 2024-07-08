import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Singleuser() {
    const obj1=useParams();
    useEffect(()=>{
     axios.get("http://localhost:users/getsingleuser/"+user)
    },[])
  return (
    <div>
      single user
    </div>
  )
}
