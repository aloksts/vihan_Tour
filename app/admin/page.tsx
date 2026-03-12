"use client"

import { useState } from "react"

export default function Admin() {

  const [pass,setPass] = useState("")
  const [login,setLogin] = useState(false)

  if(!login){

    return(

      <div style={{padding:40}}>

        <h2>Admin Login</h2>

        <input
          placeholder="Password"
          onChange={(e)=>setPass(e.target.value)}
        />

        <button
          onClick={()=>pass==="admin@123" && setLogin(true)}
        >
          Login
        </button>

      </div>
    )
  }

  return(

    <div style={{padding:40}}>

      <h1>Admin Dashboard</h1>

      <p>Bookings will appear here.</p>

    </div>

  )
}