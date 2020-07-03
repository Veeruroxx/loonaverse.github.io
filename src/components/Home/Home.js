import React from 'react';

import styles from './Home.module.css';
import Navbar from '../UI/Navbar/Navbar';
import Cover from './Cover';
import LatestMusic from './LatestMusic';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Cover />
            <LatestMusic />
        </div>
    )
}

export default Home;