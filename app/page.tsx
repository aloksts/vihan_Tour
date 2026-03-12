import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CarCard from "../components/CarCard"
import {cars} from "../data/cars"

export default function Home(){

return(

<main>

<Navbar/>

<section className="text-center py-20 bg-gradient-to-r from-green-50 to-blue-50">

<h1 className="text-5xl font-bold">
Rent a Car in Goa
</h1>

<p className="text-gray-600 mt-4">
Affordable • Comfortable • Reliable
</p>

</section>

<section
id="cars"
className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 p-6"
>

{cars.map((car,i)=>(
<CarCard key={i} car={car}/>
))}

</section>

<section
id="location"
className="max-w-7xl mx-auto p-6 mt-10"
>

<h2 className="text-2xl font-bold mb-4 text-center">
Pickup Location
</h2>

<iframe
src="https://www.google.com/maps?q=Goa%20Airport%20Dabolim&output=embed"
className="w-full h-96 rounded-xl"
/>

</section>

<Footer/>

</main>

)

}