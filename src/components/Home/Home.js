import React from 'react';

import styles from './Home.module.css';
import Navbar from '../UI/Navbar/Navbar';
import Cover from './Cover';
import LatestMusic from './LatestMusic';
import LatestLTV from './LatestLTV';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Cover />
            <LatestMusic />
            <LatestLTV />
            <Footer />
        </div>
    )
}

export default Home;