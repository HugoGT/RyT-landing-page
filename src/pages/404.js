import * as React from "react"

const NotFoundPage = () => {
  return (
    <div className="absolute w-full h-full bg-gray-800">
      <div className="relative top-1/3 w-full m-auto pt-6 text-center text-white text-6xl font-extrabold sm:text-8xl">
        <p>404</p>
        <p>NOT FOUND</p>
        <a href="../" className="text-4xl underline">
          VOLVER AL INICIO
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
