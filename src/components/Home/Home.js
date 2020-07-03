import React from 'react';

import styles from './Home.module.css';
import Navbar from '../UI/Navbar/Navbar';
import Cover from './Cover';
import LatestMusic from './LatestMusic';
import LatestLTV from './LatestLTV';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Cover />
            <LatestMusic />
            <LatestLTV />
        </div>
    )
}

export default Home;