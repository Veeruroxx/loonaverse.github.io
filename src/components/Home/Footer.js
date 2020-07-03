import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.socialIcons}>
                <div>O</div>
                <div>O</div>
                <div>O</div>
                <div>O</div>
                <div>O</div>
                <div>O</div>
            </div>
            <div>Made with <span style={{color: '#FF0000'}}>❤</span> by LOOΠΔVERSE</div>
            <div>This is a Fan Site and is not associated with BlockBerryCreative or LOOΠΔ.</div>
        </div>
    )
}

export default Footer;