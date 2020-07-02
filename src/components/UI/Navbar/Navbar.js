import React, { useState } from 'react';

import styles from './Navbar.module.css';
import NavbarExpand from './NavbarExpand';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <div className={styles.navbar}>
                <button className={styles.navCollapseBtn} onClick={() => setExpanded(!expanded)}>
                    <hr />
                    <hr />
                    <hr />
                </button>
                <div className={styles.navHeader}>
                    <h1>LOOΠΔVERSE</h1>
                </div>
            </div>
            <NavbarExpand expanded={expanded}/>
        </div>
    )
}

export default Navbar;