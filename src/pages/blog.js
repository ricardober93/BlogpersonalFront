import React from "react"
import Layout from "../components/Layout"
import '../styles/blog.css'
import { graphql, Link } from "gatsby"
import { dateFtm } from "../utils/helper"

export default function blog({ data }) {



    const substrContent = (content) => {
        let newContent = content.slice(0, 100)
        return newContent
    }


    return (
        <Layout>
            <section className="blog_header">
                Blog
            </section>
            <div className="blog_content">
                {
                    data.allStrapiBlog.nodes.map(el => (
                        <div className="blog_content_card" key={el.id}>
                            <Link to={`/blog/${el.id}`} >{el.title}</Link>
                            <div className="publish">
                                <p>{dateFtm(el.publishAt)} </p>
                                <p>|</p>
                                <p> {el.categoria.name} </p>
                            </div>
                            <div>
                                <p className="content">
                                    {substrContent(el.content)}
                                </p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </Layout>)
}

export const query = graphql`
      query BlogPage {
    allStrapiBlog(sort:{ fields: publishAt, order: DESC}){
    nodes{
      id
      title
      content
      publishAt
      status
      categoria{
            name
               }
    }
    
  }
      }
`