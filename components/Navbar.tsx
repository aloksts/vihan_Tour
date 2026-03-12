import Image from "next/image"

export default function Navbar(){

return(

<header className="bg-white shadow-md sticky top-0 z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

<div className="flex items-center gap-2">

<Image
src="/logo.png"
alt="logo"
width={40}
height={40}
/>

<h1 className="font-bold text-lg">
Vihan Travels
</h1>

</div>

<nav className="flex gap-6 text-sm">

<a href="#cars" className="hover:text-green-600">
Cars
</a>

<a href="#location" className="hover:text-green-600">
Location
</a>

<a
href="https://wa.me/917760835594"
className="bg-green-500 text-white px-4 py-2 rounded-full"
>
Contact
</a>

</nav>

</div>

</header>

)

}