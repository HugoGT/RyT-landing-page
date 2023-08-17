import React from "react"

const misVis = [
  {
    name: "Misión",
    description:
      "Desarrollar proyectos de ingeniería, arquitectura y construcción con integridad y ética, añadiendo valor a las necesidades de nuestros clientes. Comprometidos con los más altos estándares de eficiencia y calidad, brindamos servicios que trascienden expectativas.",
  },
  {
    name: "Visión",
    description:
      "Desarrollar proyectos de ingeniería, arquitectura y construcción con integridad y ética, añadiendo valor a las necesidades de nuestros clientes. Comprometidos con los más altos estándares de eficiencia y calidad, brindamos servicios que trascienden expectativas.",
  },
]

export function About() {
  return (
    <section id="about" className="p-8 sm:py-12 text-justify">
      <h2 className="text-2xl font-bold text-center md:text-4xl">
        Sobre nosotros
      </h2>
      {misVis.map((item, index) => (
        <div key={index} className="p-8 pb-0">
          <h3 className="text-xl font-bold text-center sm:text-2xl">
            {item.name}
          </h3>
          <div className="flex flex-col md:flex-row max-w-4xl m-auto py-4 gap-8 md:items-center">
            <img
              className={`max-h-${index % 2 === 0 ? "64" : "60"}`}
              src={`svg/${index % 2 === 0 ? "objectives" : "vision"}.svg`}
              alt={item.name}
            />
            <p className="md:text-lg">{item.description}</p>
          </div>
        </div>
      ))}
      <h3 className="text-xl font-bold text-center py-8 sm:text-2xl">
        Nuestros Valores
      </h3>
      <div className="flex flex-wrap row-span-1 gap-4 sm:flex-col justify-evenly max-w-4xl sm:text-right">
        <b className="md:text-lg">Innovación</b>
        <b className="md:text-lg">Integridad</b>
        <b className="md:text-lg">Responsabilidad</b>
        <b className="md:text-lg">Liderazgo</b>
        <b className="md:text-lg">Competitividad</b>
        <b className="md:text-lg">Espíritu de Equipo</b>
      </div>
    </section>
  )
}
