import React from "react"

export function Hero() {
  return (
    <section className="h-[26rem] w-full flex flex-col-reverse items-center overflow-hidden sm:h-[32rem] lg:flex-row lg:justify-evenly">
      <img
        className="max-h-80 px-8 pb-16 lg:p-12 xl:p-16 xl:min-h-full"
        src="images/ryt-logo.png"
        alt="RYT Inmobiliaria"
      />
      <h1 className="p-6 text-2xl font-bold text-center my-auto sm:text-3xl md:text-4xl lg:text-5xl lg:mx-12 lg:max-w-screen-md">
        SOMOS ESPECIALISTAS EN GESTIÓN DE PROYECTOS
      </h1>
    </section>
  )
}
