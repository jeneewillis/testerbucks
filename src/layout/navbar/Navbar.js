import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import logo from '../../media/image/logo.jpg'

const navbar = () => {
    return (
        <div className={classes.navbarWrapper}>
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>
        </div>
    )
}

export default navbar
