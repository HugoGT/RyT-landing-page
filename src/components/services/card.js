import React from "react"

export function Card({
  name = "No name",
  image = "/images/ryt-logo.png",
  description = "No description",
  alignImageRight = true,
}) {
  return (
    <div
      id="diseño"
      className={`flex flex-col lg:flex-row ${
        alignImageRight ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:items-center max-w-xl lg:max-w-full border bg-gray-900 border-gray-400 rounded-lg shadow-md overflow-hidden`}
    >
      <img
        className="object-cover lg:w-1/2"
        src={image}
        alt="Diseño de proyectos"
      />
      <div className="p-8 text-center md:p-10">
        <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
