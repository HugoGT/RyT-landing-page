import React from "react"
import { NavLink } from "./navLink.js"
import { RxHamburgerMenu } from "react-icons/rx"

export function Header({ main, links }) {
  return (
    <header className="py-3 px-6 sm:px-12 bg-gray-800 flex justify-between items-center text-white">
      <a href={main} className="h-12 px-2 mt-1">
        <img src="/images/ryt-logo.png" alt="logo RyT" className="h-full" />
      </a>
      <ul className="hidden sm:flex gap-6 pr-4">
        {links.map(link => (
          <NavLink key={link.url} {...link} />
        ))}
      </ul>
      <details className="group sm:hidden">
        <summary className="list-none p-2 group-open:before:fixed group-open:before:inset-0">
          <RxHamburgerMenu className="text-2xl" />
        </summary>
        <nav className="absolute top-16 left-0 bg-gray-800 w-full p-4 text-xl z-20 text-center">
          <ul>
            {links.map(link => (
              <NavLink key={link.url} {...link} />
            ))}
          </ul>
        </nav>
      </details>
    </header>
  )
}
