import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const [navTheme, setNavTheme] = useState(false);
    
    const [scrollY, setScrollY] = useState(0);
    const [screenY, setScreenY] = useState(0);

    const handleScroll = () => {
        setScreenY(Number(window.screen.height));
        setScrollY(Number(window.scrollY));
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {

        if (scrollY > (screenY * 0.8)) {
            setNavTheme(true);
        } else {
            setNavTheme(false);
        }

    }, [scrollY, screenY]);

    return (
        <header className={styles.section}>
            <Navbar changeTheme={navTheme} />
            <div className={`d-flex flex-column justify-content-center align-items-center pt-5 px-2 mx-auto ${styles.section_content}`}>
                <h5 className='text-center'>WELCOME TO DELIS</h5>
                <h1 className='text-center'>We Provide Best Courier and Parcel Services</h1>
                <button type='button' className='btn btn-lg btn-block btn-primary mt-5' data-bs-toggle='modal' data-bs-target='#requestDeliveryForm'>
                    Order a Delivery
                </button>
                <div className={`d-flex justify-content-center align-items-center mt-5 ${styles.arrow_container}`}>
                    <Link href='#about-section'>
                        <a className={`${styles.animation_bounce}`}>
                            <FontAwesomeIcon icon={faAngleDoubleDown} size='2x' />
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;