import React from 'react'
import perfil from '../../static/perfil.jpg'
import '../styles/About.css'
import { StaticQuery, graphql } from "gatsby"


export default function About() {

return (
<StaticQuery
  query={graphql`
    query HeadingQuery {
        strapiHome{
          name
          profile
          profesion
        }
      }
  `}
  render={data => (
    <section className="About">
                <div className="About_description" >
                    <h1>{data.strapiHome.name}</h1>
                    <h1>{data.strapiHome.profesion}</h1>
                    <p>{data.strapiHome.profile}</p>
                    <button className="download" >Descargar Hoja de Vida</button>
                </div>
      <div className="About_imagen">
        <img
          src={perfil}
          srcSet={perfil}
          alt="Foto de perfil" />
      </div>
            </section>
  )}
/>
)
}
