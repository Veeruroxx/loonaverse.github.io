import React from 'react';

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