import React from 'react';

import styles from './Home.module.css';
import Navbar from '../UI/Navbar/Navbar';

const Home = () => {
    return (
        <div className={styles.Home}>
            <Navbar />
            <div className={styles.homeContent}>
                <h1>LOOΠΔVERSE</h1>
                <p>A content aggregator of the Korean girl group LOOΠΔ.</p>
                <p>Check back frequently for updates!</p>
            </div>
        </div>
    )
}

export default Home;