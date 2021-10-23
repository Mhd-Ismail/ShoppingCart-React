import React from 'react'
import './Navbar.css'

const Navbar = ({ totalQTY, totalPrice }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark mainColor py-3">
                <div className="container">
                    <a className="navbar-brand storeColor " href="#">Store</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent ">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item navbarOptions">
                                <span>$ {totalPrice.toFixed(2)}</span>
                                <span className="icon">Cart <i className="fas fa-shopping-cart"></i></span>
                                <span className="badge p-1 cartTitle">{totalQTY}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
