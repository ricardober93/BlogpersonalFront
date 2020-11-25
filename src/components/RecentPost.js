import React from 'react'
import '../styles/RecentPost.css'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import { dateFtm } from '../utils/helper'
export default function RecentPost() {

  const data = useStaticQuery(graphql`
  query BlogsQuery {
     allStrapiBlog(limit: 2){
    nodes{
      id
      title
      content
      publishAt
      categoria{
        name
      }
    }
    
  }
      }
`)
  
  const substrContent = (content) => {
    let newContent = content.slice(0,100)
    return newContent
  }

    return (
        
      <div className="RecentPost">
            <div className="RecentPost_header">
                <h4>Recent Post</h4>
                <Link to="/blog" >Ver más</Link>
            </div>
            <section className="RecentPost_lastPost">
            {
              data.allStrapiBlog.nodes.map(el => (
                  <div className="lastPost" key={el.id}>
                      <div className="title_lastPost">
                          <h1> <Link to={`/blog/${el.id}`} >{el.title}</Link></h1>
                          <div className="group_last">
                              <p> {dateFtm(el.publishAt)} </p>
                              <span className="divider">|</span>
                              <p> {el.categoria.name} </p>
                          </div>
                          <div className="content_lastPost">
                              <p> {substrContent(el.content)} </p>
                          </div>
                      </div>
                  </div>
              ))
          }
            </section>
        </div>
    )
}


