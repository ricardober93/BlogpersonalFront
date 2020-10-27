import React from 'react'
import Nav from './Nav'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <>
      {/* <Seo seo={seo} /> */}
      <Nav />
      <main>{children}</main>
    </>
  )
}
