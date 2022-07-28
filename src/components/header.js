import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const [navTheme, setNavTheme] = useState(false);
    

    return (
        <header className={styles.section}>
            <Navbar changeTheme={navTheme} />
            <div className={`d-flex flex-column justify-content-center align-items-center pt-5 mx-auto ${styles.section_content}`}>
                <h5 className='text-center'>WELCOME TO DELIS</h5>
                <h1 className='text-center'>We Provide Best Courier and Parcel Services</h1>
                <Link href='#'>
                    <a className='btn btn-lg btn-block btn-primary mt-5'>Request Delivery</a>
                </Link>
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Link href='#about-section'>
                        <a className=''>
                            <FontAwesomeIcon icon={faArrowDown} size='2x' />
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;