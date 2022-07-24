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
            <div className={`${styles.section_top} py-3 px-5`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'>
                        Best Courier Service in the World
                    </p>
                    <div className='d-flex justify-content-end align-items-center'>
                        <p className='mb-0 mx-2'>
                            <FontAwesomeIcon icon={faPhoneAlt} className='me-2' />
                             (49) 2900 4800
                        </p>
                        <p className='mb-0 mx-2'>
                        <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                             support@abcdelivery.com
                        </p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p className='mb-0 mx-2'>
                                <Link href='https://www.twitter.com'>
                                    <FontAwesomeIcon icon={faTwitter} className={styles.link} />
                                </Link>
                            </p>
                            <p className='mb-0 mx-2'>
                                <Link href='https://www.instagram.com'>
                                    <FontAwesomeIcon icon={faInstagram} className={styles.link} />
                                </Link>
                            </p>
                            <p className='mb-0 mx-2'>
                                <Link href='https://www.facebook.com'>
                                    <FontAwesomeIcon icon={faFacebook} className={styles.link} />
                                </Link>
                            </p>
                            <p className='mb-0 mx-2'>
                                <Link href='https://www.facebook.com'>
                                    <FontAwesomeIcon icon={faYoutube} className={styles.link} />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
            <div className={`d-flex flex-column justify-content-center align-items-center p-5 mx-auto ${styles.section_bottom}`}>
                <h5 className='text-center'>WELCOME TO ABC DELIVERY</h5>
                <h1 className='text-center'>We Provide Best Courier and Parcel Services</h1>
                <a href='/contact' className='btn btn-lg btn-block btn-secondary mt-5'>Contact Us</a>
            </div>
        </header>
    )
}

export default Header;