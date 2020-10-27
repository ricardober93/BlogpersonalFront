import React from 'react'
import { Link } from "gatsby"

export default function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                 <Link to="/portafolio">Portafolio</Link>
            </ul>
        </nav>
    )
}
