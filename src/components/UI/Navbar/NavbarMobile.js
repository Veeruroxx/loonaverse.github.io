import React from 'react';

import styles from './Navbar.module.css';

const NavbarMobile = (props) => {
    return (
        <div className={styles.navbarMobile}>
            <button className={styles.navMobileCollapseBtn} onClick={() => props.setExpanded(!props.expanded)}>
                <hr />
                <hr />
                <hr />
            </button>
            <div className={styles.navMobileHeader}>
                <h1>LOOΠΔVERSE</h1>
            </div>
        </div>
    )
}

export default NavbarMobile;