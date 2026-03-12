"use client"

import {useState} from "react"

export default function CarCard({car}:any){

const[open,setOpen]=useState(false)

const[name,setName]=useState("")
const[phone,setPhone]=useState("")
const[start,setStart]=useState("")
const[end,setEnd]=useState("")

const sendBooking=()=>{

if(!name || !phone || !start || !end){
alert("Please fill all fields")
return
}

const message=

`Hello Vihan Tour & Travels

Car: ${car.name}

Name: ${name}

Phone: ${phone}

Start Date: ${start}

End Date: ${end}`

const url=
`https://wa.me/917760835594?text=${encodeURIComponent(message)}`

window.open(url)

}

return(

<>

<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

<img
src={car.image}
className="h-48 w-full object-cover"
/>

<div className="p-4">

<h3 className="font-semibold text-lg">
{car.name}
</h3>

<p className="text-green-600 font-semibold">
{car.price}
</p>

<button
onClick={()=>setOpen(true)}
className="mt-3 w-full bg-black text-white py-2 rounded-lg"
>

Book Now

</button>

</div>

</div>

{open && (

<div className="fixed inset-0 bg-black/60 flex items-center justify-center">

<div className="bg-white p-6 rounded-xl w-80">

<h2 className="font-semibold mb-4">
Book {car.name}
</h2>

<input
placeholder="Name"
className="border w-full p-2 mb-2 rounded"
onChange={e=>setName(e.target.value)}
/>

<input
placeholder="Phone"
className="border w-full p-2 mb-2 rounded"
onChange={e=>setPhone(e.target.value)}
/>

<input
type="date"
className="border w-full p-2 mb-2 rounded"
onChange={e=>setStart(e.target.value)}
/>

<input
type="date"
className="border w-full p-2 mb-2 rounded"
onChange={e=>setEnd(e.target.value)}
/>

<button
onClick={sendBooking}
className="bg-green-500 text-white w-full py-2 rounded mt-2"
>

Send Booking

</button>

<button
onClick={()=>setOpen(false)}
className="text-gray-500 mt-2 text-sm"
>

Close

</button>

</div>

</div>

)}

</>

)

}