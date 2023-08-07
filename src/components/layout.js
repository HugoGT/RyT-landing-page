import React from "react"
import { SEO } from "./seo"

export function Layout({ title, children }) {
  return (
    <>
      <SEO title={title} />
      <main className="font-nsans bg-gray-700">{children}</main>
    </>
  )
}
