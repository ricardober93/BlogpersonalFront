import React from "react"
import About from "../components/About"
import Destacados from "../components/Destacados"
import Layout from "../components/Layout"
import RecentPost from "../components/RecentPost"


export default function Home() {
  return (
    <Layout>
      <About />
      <RecentPost />
      <Destacados />
    </Layout>
  )
}
