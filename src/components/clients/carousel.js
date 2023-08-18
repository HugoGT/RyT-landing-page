import React from "react"

export const Carousel = ({ images }) => {
  return (
    <div className="relative max-w-[100rem] m-auto overflow-x-hidden pb-8 before:bg-gradient-to-r before:absolute before:z-10 before:h-48 sm:before:w-48 before:w-24 before:top-0 before:left-0 before:from-gray-700 after:bg-gradient-to-l after:absolute after:z-10 after:h-48 after:w-24 after:top-0 after:right-0 sm:after:w-48 after:from-gray-700">
      <div className="grid grid-cols-[repeat(16,minmax(0,200px))] filter grayscale place-items-center gap-12 w-[200rem] p-6 animate-scroll">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Carousel client ${index}`} />
        ))}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Carousel client ${index}`} />
        ))}
      </div>
    </div>
  )
}
