import React from 'react'
import Layout from '../components/Layout'

export default function blogtemplates({ pageContext }) {
    const { blog } = pageContext
    return (
        <Layout>
            <section>
                <h1>{blog.title}</h1>
                <div>
                    <span> {blog.publishAt} </span>
                    <p> {blog.categoria.name} </p>
                </div>
                <div className="">
                    {blog.content}
                </div>
                <div>
                    {
                        blog.autor.picture ? (<img src={`http://localhost:8000/${blog.autor.picture.publicURL}`} alt={blog.autor.name} />) : null
                    }

                    <p> {blog.autor.name} </p>
                </div>
            </section>
        </Layout>
    )
}
