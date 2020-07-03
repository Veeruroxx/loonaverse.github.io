import React from 'react';

import styles from './Navbar.module.css';

const NavbarFull = (props) => {
    return (
        <div className={styles.navbarFull} onMouseEnter={() => props.setExpanded(true)}>
            <div className={styles.navbarFullLogo}>Logo</div>
            <div className={styles.navbarFullLogo}>Home</div>
            <div className={styles.navbarFullLogo}>Profile</div>
            <div className={styles.navbarFullLogo}>TV</div>
            <div className={styles.navbarFullLogo}>Comm.</div>
            <div className={styles.navbarFullLogo}>About</div>
            <div className={styles.navbarFullLogo}>Stream</div>
        </div>
    )
}

export default NavbarFull;