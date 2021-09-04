import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbarcontainer'>
            <Link className='navbarlink'>The Classics</Link>
            <Link className='navbarlink'>Creative Choices</Link>
            <Link className='navbarlink'>Symmetry & Asymmetry</Link>
            <Link className='navbarlink'>Form & Style</Link>
            <Link className='navbarlink'>Behind The Scenes</Link>
        </div>
    )
}

export default Navbar
