import Header from '@/components/header';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ABC Delivery | Home</title>
                <meta name="description" content="ABC Delivery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </div>
    )
}
