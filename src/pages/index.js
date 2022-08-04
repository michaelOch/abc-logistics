import Header from '@/components/header';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import aboutImg from '../assets/images/about.webp';
import customer1 from '../assets/images/customer-1.webp';
import customer2 from '../assets/images/customer-2.webp';
import customer3 from '../assets/images/customer-3.webp';
import customer4 from '../assets/images/customer-4.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Register from '@/components/register';
import RequestDelivery from '@/components/requestDelivery';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>DELIS</title>
                <meta name="description" content="ABC Delivery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id='home-section'></div>
            <Header />
            <main className=''>
                {/* About Section */}
                <section id='about-section' className={`${styles.about_section}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 mt-2'>
                                <div className=''>
                                    <h2 className=''>ABOUT US</h2>
                                    <div className={`${styles.line} mb-4`}></div>
                                    <p className=''>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos ipsam voluptas.
                                    </p>
                                    <p className=''>
                                        Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam laborum quo obcaecati similique iusto delectus quasi!
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-5 offset-md-1 mt-2'>
                                <div className=''>
                                    <Image src={aboutImg} alt='about' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* How It Works */}
                <section id='request-section' className={styles.works_section}>
                    <div className='container'>
                        <h2 className='text-center'>HOW IT WORKS</h2>
                        <div className={`${styles.line} mx-auto mb-4`}></div>
                        <div className='row'>
                            <div className='col-md-4 mt-2'>
                                <div className=''>
                                    <div className={`${styles.wheel_icon} d-flex justify-content-center align-items-center my-4`}>1</div>
                                    <h5 className='mb-4'>Make An Order</h5>
                                    <p className=''>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                    <p className=''>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 mt-2'>
                                <div className=''>
                                    <div className={`${styles.wheel_icon} d-flex justify-content-center align-items-center my-4`}>2</div>
                                    <h5 className='mb-4'>Make A Payment</h5>
                                    <p className=''>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                    <p className=''>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 mt-2'>
                                <div className=''>
                                    <div className={`${styles.wheel_icon} d-flex justify-content-center align-items-center my-4`}>3</div>
                                    <h5 className='mb-4'>Track Your Order</h5>
                                    <p className=''>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                    <p className=''>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button type='button' className='btn btn-lg btn-block btn-primary mt-5' data-bs-toggle='modal' data-bs-target='#requestDeliveryForm'>Order a Delivery</button>
                        </div>
                    </div>
                </section>
                {/* Request Delivery Form */}
                <RequestDelivery />
                {/* Testimonials */}
                <section className={styles.testimonial_section}>
                    <div className='container'>
                        <h2 className='text-center'>TESTIMONIALS</h2>
                        <div className={`${styles.line} mx-auto mb-4`}></div>
                        <div className=''>
                            <div id='testimonialCarousel' className='carousel slide' data-bs-ride='carousel'>
                                <div className='carousel-inner'>
                                    <div className='carousel-item active'>
                                        <div className={`${styles.testimonial_content} d-flex flex-column justify-content-center align-items-center mx-auto`}>
                                            <div className={`${styles.customer_avatar} mx-auto mb-4`}>
                                                <Image src={customer1} alt='customer avatar' />
                                            </div>
                                            <p className='text-center'>
                                                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                            </p>
                                            <small className=''>- Jon Doe</small>
                                        </div>
                                    </div>
                                    <div className='carousel-item'>
                                        <div className={`${styles.testimonial_content} d-flex flex-column justify-content-center align-items-center mx-auto`}>
                                            <div className={`${styles.customer_avatar} mx-auto mb-4`}>
                                                <Image src={customer2} alt='customer avatar' />
                                            </div>
                                            <p className='text-center'>
                                                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                            </p>
                                            <small className=''>- Mark Hilton</small>
                                        </div>
                                    </div>
                                    <div className='carousel-item'>
                                        <div className={`${styles.testimonial_content} d-flex flex-column justify-content-center align-items-center mx-auto`}>
                                            <div className={`${styles.customer_avatar} mx-auto mb-4`}>
                                                <Image src={customer3} alt='customer avatar' />
                                            </div>
                                            <p className='text-center'>
                                                3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                            </p>
                                            <small className=''>- Janet Shan</small>
                                        </div>
                                    </div>
                                    <div className='carousel-item'>
                                        <div className={`${styles.testimonial_content} d-flex flex-column justify-content-center align-items-center mx-auto`}>
                                            <div className={`${styles.customer_avatar} mx-auto mb-4`}>
                                                <Image src={customer4} alt='customer avatar' />
                                            </div>
                                            <p className='text-center'>
                                                4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                            </p>
                                            <small className=''>- Tommy Jakes</small>
                                        </div>
                                    </div>
                                </div>
                                <button type='button' className='carousel-control-prev' data-bs-target='#testimonialCarousel' data-bs-slide='prev'>
                                    <span className='carousel-control-prev-icon bg-secondary' aria-hidden='true'></span>
                                    <span className='visually-hidden'>Previous</span>
                                </button>
                                <button type='button' className='carousel-control-next' data-bs-target='#testimonialCarousel' data-bs-slide='next'>
                                    <span className='carousel-control-next-icon bg-secondary' aria-hidden='true'></span>
                                    <span className='visually-hidden'>Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Why people choose us */}
                <section className={styles.why_section}>
                    <div className='container'>
                        <h2 className='text-center'>WHY PEOPLE CHOOSE US</h2>
                        <div className={`${styles.line} mx-auto mb-4`}></div>
                        <div className='row'>
                            <div className='col-md-4 mt-2'>
                                <div className={`card card-body text-light border-light ${styles.transparent}`}>
                                    <h4 className='text-center mb-4'>Affordable</h4>
                                    <p className='text-center'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 mt-2'>
                                <div className={`card card-body text-light border-light ${styles.transparent}`}>
                                    <h4 className='text-center mb-4'>Timely</h4>
                                    <p className='text-center'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 mt-2'>
                                <div className={`card card-body text-light border-light ${styles.transparent}`}>
                                    <h4 className='text-center mb-4'>Reliable</h4>
                                    <p className='text-center'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='d-flex justify-content-center align-items-center'>
                            <Link href='#'>
                                <a className='btn btn-lg btn-block btn-primary mt-5'>Order a Delivery</a>
                            </Link>
                        </div> */}
                    </div>
                </section>
                {/* Become a partner */}
                <section id='partner-section' className={styles.partner_section}>
                    <div className='container'>
                        <div className={styles.partner_content}>
                            <div className='row'>
                                <div className='col-md-5 mt-2'>
                                    <div className='p-5'>
                                        <h4 className=''>Have something to deliver?</h4>
                                        <h2 className=''>Deliver Today</h2>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <button type='button' className='btn btn-lg btn-block btn-primary mt-5' data-bs-toggle='modal' data-bs-target='#requestDeliveryForm'>Order a Delivery</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-2'>
                                    <div className={`${styles.bar} mx-auto`}></div>
                                </div>
                                <div className='col-md-6 mt-2'>
                                    <div className='p-5'>
                                        <h4 className=''>Sign up today. Start delivering items.</h4>
                                        <h2 className=''>For Riders and Car Owners</h2>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <button type='button' className='btn btn-lg btn-block btn-primary mt-5' data-bs-toggle='modal' data-bs-target='#signupForm'>SIgn Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Register Form */}
                <Register />
                {/* Footer section */}
                <footer id='contact-section' className={styles.footer_section}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5 mt-2'>
                                <div className=''>
                                    <h6 className='mb-3'>About Us</h6>
                                    <p className=''>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iure deserunt ut architecto dolores quo beatae laborum aliquam ipsam rem impedit obcaecati ea consequatur.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <div className=''>
                                    <h6 className='mb-3'>Quick Links</h6>
                                    <div className=''>
                                        <p className='mb-1'>
                                            <Link href='#about-section'>
                                                <a className=''>About Us</a>
                                            </Link>
                                        </p>
                                        <p className='mb-1'>
                                            <Link href='#request-section'>
                                                <a className=''>Request Delivery</a>
                                            </Link>
                                        </p>
                                        <p className='mb-1'>
                                            <Link href='#partner-section'>
                                                <a className=''>Become a Partner</a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <div className=''>
                                    <h6 className='mb-3'>Contact Us</h6>
                                    <div className={`d-flex justify-content-between ${styles.social_media}`}>
                                        <p className='mb-0'>
                                            <Link href='#'>
                                                <a className=''>
                                                    <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                                                </a>
                                            </Link>
                                        </p>
                                        <p className='mb-0'>
                                            <Link href='#'>
                                                <a className=''>
                                                    <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                                                </a>
                                            </Link>
                                        </p>
                                        <p className='mb-0'>
                                            <Link href='#'>
                                                <a className=''>
                                                    <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                                                </a>
                                            </Link>
                                        </p>
                                        <p className='mb-0'>
                                            <Link href='#'>
                                                <a className=''>
                                                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                                                </a>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className='mt-1'>
                                        <p className='mb-1'>
                                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                                            &nbsp; info@delis.com
                                        </p>
                                        <p className='mb-1'>
                                            <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
                                            &nbsp; +49 0800 7500
                                        </p>
                                        <p className='mb-1'>
                                            <FontAwesomeIcon icon={faLocationPin} className={styles.icon} />
                                            &nbsp; 15 Saxton, Texas USA.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <div className=''>
                                    <h6 className='mb-3'>Subscribe Newsletter</h6>
                                    <div className='input-group'>
                                        <input type='email' className={`form-control ${styles.email}`}placeholder='Enter Email' />
                                        <span className={`input-group-text ${styles.email_send}`}>
                                            <Link href='#'>
                                                <a className=''>SEND</a>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className={`text-light ${styles.footer_hr}`} />
                        <p className='mb-0 text-center'>Copyright &copy;2022 | All rights reserved</p>
                    </div>
                </footer>
            </main>
        </div>
    )
}
