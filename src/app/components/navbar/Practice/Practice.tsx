import Image from "next/image"
import { Motiontransition } from "../Motiontransition"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Practice = () => {
  return (
    <Motiontransition>
        <div id="practice" className="grid items-center py-20 md:grid-cols-2 md:py-56">
            <div className="md:pr-20">
                <h2 className="mb-10 text-4xl font-extrabold">Gracias por ser parte<br/> de este proceso
                <span className="text-pink-400"> Dos Chanchitos</span>
                </h2>
            </div>

            <Image src="/assets/doschanchitosfi.jpg" alt="nosotros" width="350" height="350" className="mx-auto" />
        </div>
    </Motiontransition>
  )
}

export default Practice