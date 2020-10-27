import React from 'react'
import perfil from '../../static/perfil.jpg'
import '../styles/About.css'
export default function About() {
    return (
        <>
            <section className="About">
                <div className="About_description" >
                    <h1>Hola, Soy Ricardo,</h1>
                    <h1>Diseñador Grafico y Desarrollador Frontend</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro optio voluptatibus nostrum rerum tenetur facilis eligendi atque veniam ducimus recusandae quibusdam commodi repellat consectetur laudantium nulla, quae quas beatae cum deserunt ea. Cumque?</p>
                    <button className="download" >Descargar Hoja de Vida</button>
                </div>
                <div className="About_imagen"> <img src={perfil} alt="Foto de perfil" /> </div>
            </section>
        </>
    )
}
