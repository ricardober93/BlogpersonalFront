import React from 'react'
import '../styles/Destacados.css'
import imagenPortafolio from '../../static/portafolio.png'
export default function Destacados() {
    return (
        <section className="Destacados">
            <div className="title_destacados">
                Trabajos Destacados
            </div>
            <div className="grid">
                {[0, 0, 0].map(el => (
                    <article className="portafolio_grid">
                        <div className="imagen_portafolio">
                            <img src={imagenPortafolio} alt="Iamgen del portafolio" />
                        </div>
                        <div className="contenido_portafolio">
                            <div className="title_contenido">
                                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, aspernatur?</h1>
                            </div>
                            <span>2020</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus numquam officiis modi minima minus harum nesciunt eaque facere!</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
