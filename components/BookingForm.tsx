"use client"

import { useState } from "react"

export default function BookingForm() {

  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [car,setCar] = useState("")

  const book = () => {

    const msg =
`Hello Vihan Tour & Travels
Name: ${name}
Phone: ${phone}
Car: ${car}`

    const url =
`https://wa.me/917760835594?text=${encodeURIComponent(msg)}`

    window.open(url)
  }

  return (

    <div className="booking">

      <h2>Book Your Car</h2>

      <input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Phone"
        onChange={(e)=>setPhone(e.target.value)}
      />

      <input
        placeholder="Car"
        onChange={(e)=>setCar(e.target.value)}
      />

      <button onClick={book}>Book via WhatsApp</button>

    </div>

  )
}