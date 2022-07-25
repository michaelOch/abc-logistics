import React from 'react';
import Navbar from '@/components/navbar';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function Header() {
    return (
        <header className={styles.section}>
            <Navbar />
            <div className={`d-flex flex-column justify-content-center align-items-center p-5 mx-auto ${styles.section_content}`}>
                <h5 className='text-center'>WELCOME TO DELIS</h5>
                <h1 className='text-center'>We Provide Best Courier and Parcel Services</h1>
                <a href='/contact' className='btn btn-lg btn-block btn-primary mt-5'>Request Delivery</a>
            </div>
        </header>
    )
}

export default Header;