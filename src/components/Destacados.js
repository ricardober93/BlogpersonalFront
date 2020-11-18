import React from 'react'
import '../styles/Destacados.css'
import { useStaticQuery, graphql } from "gatsby"

export default function Destacados() {


    const data = useStaticQuery(graphql`
  query WorksQuery {
     allStrapiWork(limit: 2){
    nodes{
      id
      title
      content
      publishAt
       image{
        publicURL
        absolutePath
      }
      seo{
        MetaDescription
        MetaTitle
      }
      autor{
        name
        picture{
          publicURL
        }
      }
    }
    
  }
      }
`)
    
      const dateFtm = fecha => {
    let date = new Date(fecha)
    let normalizeDate = new Intl.DateTimeFormat("es-ES").format(date)
    return normalizeDate

  }
  
  const substrContent = (content) => {
    let newContent = content.slice(0,300)
    return newContent
  }

    return (
        <section className="Destacados">
            <div className="title_destacados">
                Trabajos Destacados
            </div>
            <div className="grid">
                { data.allStrapiWork.nodes.map(el => (
                    <article className="portafolio_grid" key={el.id}>
                        <div className="imagen_portafolio">
                            <img src={`http://localhost:8000/${el.image.publicURL}`} alt="Iamgen del portafolio" />
                        </div>
                        <div className="contenido_portafolio">
                            <div className="title_contenido">
                                <h1>{ el.title }</h1>
                            </div>
                            <span>{dateFtm(el.publishAt)}</span>
                            <p>{substrContent(el.content)}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
