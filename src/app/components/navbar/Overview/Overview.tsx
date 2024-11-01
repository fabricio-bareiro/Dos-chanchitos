import { dataSocialNetwork } from "@/app/data/dataSocialNetwork"
import Image from "next/image"

export const Overview = () => {
  return (
    <div id="overview" className="p-5 mt-3 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 md:px-24 lg:py-52">
        <div className="item-center md:grid md:grid-cols-2">
            <div>
                <h1 className="text-4xl font-bold text-white md:leading-snug md:text-6xl">Dos Chanchitos<br/> alfajores artesanales</h1>
                    <p className="mt-5 text-white">Te invitamos a descubrir nuestras delicias, elaboradas con amor y los mejores ingredientes. Desde los clásicos que siempre adoras hasta nuestras innovadoras creaciones, cada bocado está diseñado para hacerte sonreír.</p>
            </div>
            <div>
                <Image src="/assets/Overview.png" alt="overview" width="350" height="500" />
            </div>
        </div>
    </div>
  )
}
