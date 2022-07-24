import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg p-3 sticky-top ${styles.section}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">ABC Delivery</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                            <li className="nav-item me-4">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" href="/about">About Us</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" href="/services">Services</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" href="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;