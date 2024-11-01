import Image from "next/image"

export  function Navbar() {
  return (
    <div className="grid items-center justify-between md:grid-cols-2 gap:4 
    md:gap20 md:px-20">
        <Image src="/assets/logo.png" alt="logo navbar" width="200" height="25" className="mx-auto lg:mx-0" />
            <div className="flex gap-4 text-center">
                <a href="#overview">Inicio</a>
                <a href="#features">Nosotros</a>
                <a href="#about">Nuestra misión</a>
                <a className="text-pink-400" href="#discount">Gracias!</a>
                <a href="#propierties">Productos</a>
            </div>
    </div>
  )
}
