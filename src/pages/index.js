import Header from '@/components/header';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import about from '../assets/images/about.webp';

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
                                    <Image src={about} alt='about' />
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
            </main>
        </div>
    )
}
