import React from 'react'
import '../styles/RecentPost.css'
export default function RecentPost() {
    return (
        <div className="RecentPost">
            <div className="RecentPost_header">
                <h4>Recent Post</h4>
                <a href>Ver más</a>
            </div>
            <section className="RecentPost_lastPost">
                {
                    [0, 0].map(el => (
                        <div className="lastPost">
                            <div className="title_lastPost">
                                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quo praesentium itaque.</h1>
                                <div className="group_last">
                                    <p>12 Feb 2020</p>
                                    <span className="divider">|</span>
                                    <p>Categoria</p>
                                </div>
                                <div className="content_lastPost">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laboriosam cupiditate mollitia molestias accusantium? Dolorum delectus, illum, iure, saepe soluta nobis aperiam optio dolor aut cupiditate odio pariatur neque fuga.</p>
                                </div>
                            </div>
                        </div>
                    ))
             }
             
            </section>
        </div>
    )
}


