import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo2.png'
//import {FaAlignRight} from 'react-icons/fa'

export default class NavBar extends Component {
    state={
        isOpen: false
    }

    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="LMU logo" />
                        </Link>
                    </div>
                    <ul className="nav-links show-nav">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/schools'>Institutions</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
