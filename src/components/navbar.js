import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

function Navbar({ changeTheme }) {
    return (
        <nav className={`navbar navbar-expand-lg px-3 py-4 fixed-top ${styles.section} ${changeTheme && styles.theme_primary}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/"><h4 className='mb-0'>DELIS</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                            <li className="nav-item me-4">
                                <Link className="nav-link active" aria-current="page" href="/#home-section">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" href="/#about-section">About Us</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" href="/#request-section">Request Delivery</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" href="/#partner-section">Become a Partner</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" href="/#contact-section">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;