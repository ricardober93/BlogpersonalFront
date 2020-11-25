import React from 'react'
import Layout from '../components/Layout'
import '../styles/blog-templates.css'
import { dateFtm } from '../utils/helper'
export default function blogtemplates({ pageContext }) {
    const { blog } = pageContext
    console.log(blog)
    return (
        <Layout>
            <section className="blog_templates">
                <h1 className="blog_templates_title">{blog.title}</h1>
                <div>
                    <span> {dateFtm(blog.publishAt)} </span>
                    <p className="blog_templates_categoria"> {blog.categoria.name} </p>
                </div>
                <div className="blog_templates_imgen">
                    {
                        blog.imagen ? (<img src={`http://localhost:8000/${blog.imagen.publicURL}`} alt={blog.imagen.name} />) : null
                    }
                </div>
                <div className="blog_templates_content">
                    {blog.content}
                </div>
                <div className="blog_templates_autor">
                    <p className="blog_templates_autor_profile">Autor:</p>
                    {
                        blog.autor.picture ? (<img src={`http://localhost:8000/${blog.autor.picture.publicURL}`} alt={blog.autor.name} />) : null
                    }

                    <p className="blog_templates_autor_name"> {blog.autor.name} </p>
                </div>
            </section>
        </Layout>
    )
}
