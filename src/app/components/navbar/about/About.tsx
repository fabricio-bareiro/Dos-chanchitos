import Image from "next/image"
import { Motiontransition } from "../Motiontransition"


export const About = () => {
  return (
    <div id="about" className="grid items-center py-20 md:grid-cols-2 lg:py-56">
        <Motiontransition>
            <Image src="/assets/about.png" alt="about image" width="600" height="400" />
        </Motiontransition>
        <div className="md:pr-20">
            <h2 className="mb_10 text-4xl font-extrabold"> Hemos estado <br/>
            <span className="text-pink-400">mejorando nuestros productos</span>
            </h2>
            <p className="mb-10">Ponemos todo nuestro esfuerzo en ofrecerte los mejores <span className="text-pink-400 font-extrabold">alfajores</span></p>
        </div>
    </div>
  )
}
