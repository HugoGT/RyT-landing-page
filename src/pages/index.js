import * as React from "react"
import { About } from "../components/about"
import { Clients } from "../components/clients"
import { Contact } from "../components/contact"
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Layout } from "../components/layout"
import { Services } from "../components/services"

const links = [
  { url: "#", name: "Inicio" },
  { url: "#", name: "Servicios" },
  { url: "#", name: "Nosotros" },
  { url: "#", name: "Contacto" },
  { url: "#", name: "Confían en R&T" },
]

export default function index() {
  return (
    <Layout title="R&T Inmobiliaria">
      <Header main={"#"} links={links} />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
    </Layout>
  )
}
