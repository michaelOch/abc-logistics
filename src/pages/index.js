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

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>DELIS</title>
                <meta name="description" content="ABC Delivery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className=''>
                {/* About Section */}
                <section id='about-section' className={`${styles.about_section}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
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
                            <div className='col-md-5 offset-md-1'>
                                <div className=''>
                                    <Image src={aboutImg} alt='about' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* How It Works */}
                <section id='works-section' className={styles.works_section}>
                    <div className='container'>
                        <h2 className='text-center'>HOW IT WORKS</h2>
                        <div className={`${styles.line} mx-auto mb-4`}></div>
                        <div className='row'>
                            <div className='col-md-4'>
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
                            <div className='col-md-4'>
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
                            <div className='col-md-4'>
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
                    </div>
                </section>
                {/* Testimonials */}
                <section className={styles.testimonial_section}>
                    <div className='container'>
                        <h2 className='text-center'>TESTIMONIALS</h2>
                        <div className={`${styles.line} mx-auto mb-4`}></div>
                        <div className=''>
                            <div id='testimonialCarousel' className='carousel slide'>
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
                            <div className='col-md-4'>
                                <div className='card card-body'>
                                    <h4 className='text-center mb-4'>Affordable</h4>
                                    <p className='text-center'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card card-body'>
                                    <h4 className='text-center mb-4'>Timely</h4>
                                    <p className='text-center'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card card-body'>
                                    <h4 className='text-center mb-4'>Reliable</h4>
                                    <p className='text-center'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Link href='#'>
                                <a className='btn btn-lg btn-block btn-primary mt-5'>Order a Delivery</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
