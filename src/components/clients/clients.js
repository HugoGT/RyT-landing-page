import React from "react"
import { Carousel } from "./carousel"

export const Clients = () => {
  const images = [
    "images/tiendas_efe.png",
    "images/la_curacao.png",
    "images/acnur.jpg",
    "images/inkafarma.jpg",
    "images/clinica_centenario.jpg",
    "images/motocorp.jpg",
    "images/financiera_efectiva.png",
    "images/schorth_papelera.jpg",
  ]

  return (
    <div id="clientes">
      <h2 className="block text-2xl font-bold text-center pb-4 md:pb-8 md:text-4xl">
        Confían en R&T
      </h2>
      <Carousel images={images} />
    </div>
  )
}
