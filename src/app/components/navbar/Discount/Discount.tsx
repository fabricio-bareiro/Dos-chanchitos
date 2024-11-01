import Image from "next/image"
import { Motiontransition } from "../Motiontransition"

export const Discount = () => {
  return (
    <Motiontransition>
        <div id="discount" className="grid items-center px-5 py-30 md:grid-cols-2 md:p-20 rounded-3xl bg-gradient-to-r from-violet-700 to-fuchsia-500">
            <div>
              <Motiontransition>
                <h2 className="text-3xl font-extrabold text-white md:text-5xl">¡Gracias!</h2>
                <p className="my-10 text-white">Al cerrar este proyecto final, queremos expresar nuestra gratitud por su apoyo a <span className="text-pink-400 text-extrabold">'Dos Chanchitos'.</span> Cada alfajor es una parte de nuestro esfuerzo en esta etapa. ¡Gracias por acompañarnos en este viaje y por ser parte de nuestra historia!</p>
                </Motiontransition>
            </div>
            <Image src="/assets/doschanchitosfi.jpg" alt="Discount image" width="350" height="350" className="mx-auto p-4 rounded-3xl" />
        </div> 
    </Motiontransition>
  )
}
