"use client"

import { div } from "framer-motion/client"
import { Motiontransition } from "../navbar/Motiontransition"
import { dataProperties } from "./Properties.data"

export function Properties() {
    return (
        <div id="propierties" className="px-4 my-8 md:py-32 md:px-40">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {dataProperties.map(({id,price,image,description}) =>
                <div key={id}
                className="relative-z-[1]" >
                    <div className="absolute flex items-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secondary"></div>
                    <img className="objet-cover w-full max-h-full h-[200px] rounded-t-1xl" src={`/assets/${image}`} alt="product" width={150} height={150}
                        
                    />
                    <div className="px-3 py-5">
                        <p className="text-primary text-semibold">{description}</p>
                        <p className="font-bold text-pink-500">{price}</p>
                    </div>
                </div>
                )}

            </div>
        </div>
    )
}