import React from "react"
import { Card } from "./card"

const services = [
  {
    name: "DISEÑO DE PROYECTOS",
    img: "/images/ryt-logo.png",
    description:
      "Diseñamos proyectos en conjunto para tus ambientes deseados, planificando la estructura y criterios de éxito. Desarrollamos varios diseños para elegir el mejor en la ejecución del proyecto. Entregamos planos de arquitectura, seguridad, estructuras, instalaciones eléctricas e instalaciones sanitarias, además de memorias descriptivas, esquemas, detalles 3d y perspectivas que sirven para llevar a cabo la edificación de cualquier construcción.",
  },
  {
    name: "GERENCIA DE PROYECTOS",
    img: "/images/ryt-logo.png",
    description:
      "Utilizaremos todos nuestros conocimientos y estrategias para llevar a cabo la planeación, ejecución y monitoreo de su proyecto, utilizando el método Lean Construction o Construcción sin pérdidas, cumpliendo las metas deseadas en los plazos establecidos.",
  },
  {
    name: "TRÁMITES DE INDECI",
    img: "/images/ryt-logo.png",
    description:
      "Diseñamos proyectos en conjunto para tus ambientes deseados, planificando la estructura y criterios de éxito. Desarrollamos varios diseños para elegir el mejor en la ejecución del proyecto. Entregamos planos de arquitectura, seguridad, estructuras, instalaciones eléctricas e instalaciones sanitarias, además de memorias descriptivas, esquemas, detalles 3d y perspectivas que sirven para llevar a cabo la edificación de cualquier construcción.",
  },
  {
    name: "LICENCIAS DE CONSTRUCCIÓN",
    img: "/images/ryt-logo.png",
    description:
      "Utilizaremos todos nuestros conocimientos y estrategias para llevar a cabo la planeación, ejecución y monitoreo de su proyecto, utilizando el método Lean Construction o Construcción sin pérdidas, cumpliendo las metas deseadas.",
  },
  {
    name: "LICENCIAS DE FUNCIONAMIENTO",
    img: "/images/ryt-logo.png",
    description:
      "Diseñamos proyectos en conjunto para tus ambientes deseados, planificando la estructura y criterios de éxito. Desarrollamos varios diseños para elegir el mejor en la ejecución del proyecto. Entregamos planos de arquitectura, seguridad, estructuras, instalaciones eléctricas e instalaciones sanitarias, además de memorias descriptivas, esquemas, detalles 3d y perspectivas que sirven para llevar a cabo la edificación de cualquier construcción.",
  },
  {
    name: "DECLARATORIA DE FÁBRICA",
    img: "/images/ryt-logo.png",
    description:
      "Inscribimos tu construcción con el lote en el Registro de Predios correspondiente, consignando las características y condiciones técnicas de la obra. Al inscribir la declaratoria de fábrica de tu predio, le damos el carácter legal a lo construido, facilitando la transferencia del mismo además de revalorizarlo. Asimismo, la inscripción de la declaratoria de fábrica permite, en caso se trate de departamentos, la independización de los mismos.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-gray-800 pb-6 lg:pb-12">
      <h2 className="block text-2xl font-bold text-center py-6 md:text-4xl md:py-12">
        Servicios
      </h2>
      <div className="flex flex-col gap-6 items-center px-6 max-w-6xl m-auto pb-8">
        {services.map((service, index) => (
          <Card
            key={service.name}
            {...service}
            alignImageRight={index % 2 === 0}
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <a href="/servicios/#contacto">
          <button className="bg-custom_blue-500 hover:bg-custom_blue-600 text-white font-bold shadow-lg rounded-lg py-4 px-8 text-lg md:text-xl">
            Contáctanos
          </button>
        </a>
      </div>
    </section>
  )
}
