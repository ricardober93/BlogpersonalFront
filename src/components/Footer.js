import React from 'react'
import '../styles/Footer.css'
import fb from '../../static/fb.svg'
import insta from '../../static/insta.svg'
import Linkedin from '../../static/Linkedin.svg'
import twt from '../../static/twt.svg'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_gid">
                <img src={fb} alt="perfil de red social Facebook" />
                <img src={insta} alt="perfil de instagram" />
                <img src={Linkedin} alt="perfil de Linkedin" />
                <img src={twt} alt="perfil de twitter" />
            </div>
            <p className="derechosAtor">
                Copyright ©2020 All rights reserved by Ricardo
            </p>
        </div>
    )
}
