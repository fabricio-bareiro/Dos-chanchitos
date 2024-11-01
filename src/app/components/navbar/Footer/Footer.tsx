import { footer } from 'framer-motion/client'
import React from 'react'
import { FooterLinks } from './FooterLinks'

export  function Footer() {
  return (
    <footer id="practice" className="p-5 mt-10 text-white bg-blue-950 md:px-20 md:py-10">
        <div className='grid md:grid-cols-[350px_1fr_1fr_1fr] md:gap-10'>
            <div>
                <img src="/assets/logo-removebg-preview.png" alt="logo website" className='w-24 md:w-48' />
                <p className='mt-4'>Agradecemos sinceramente su interés en nuestros alfajores de 'Dos chanchitos'. Su apoyo en esta muestra significa mucho para nosotros. ¡Gracias por ser parte de esta experiencia! <a  className='text-pink-400 font-extrabold'>-Dos Chanchitos, Ignacia y Fabricio.</a></p>
            </div>
        </div>    
    </footer>
  )
}
