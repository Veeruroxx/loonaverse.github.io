import React from 'react';

import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMoon, faUser, faTv, faComment, faQuestionCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const NavbarExpand = (props) => {

    const navPosition = {
        transform: props.expanded ? 'translateX(0%)'  : 'translateX(-100%)',
        transition: '0.3s ease-in',
    }

    return (
        <div 
            className={styles.NavbarExpand} 
            style={navPosition}
            onMouseLeave={() => props.vertical && props.expanded ? props.setExpanded(false) : null}
        >
            {props.vertical ?
                <div className={styles.navbarExpTab}>
                    <div className={styles.navbarExpLogo}>
                        <FontAwesomeIcon icon={faMoon} size="2x" color="#FFFFFF"  />
                    </div>
                    <div className={styles.navbarExpTabText}>LOOΠΔVERSE</div>
                </div>
            : null}
            <div className={styles.navbarExpTab}>
                <div className={styles.navbarExpLogo}>
                    <FontAwesomeIcon icon={faHome} size="2x" color="#FFFFFF"  />
                </div>
                <div className={styles.navbarExpTabText}>Home</div>
            </div>
            <div className={styles.navbarExpTab}>
                <div className={styles.navbarExpLogo}>
                    <FontAwesomeIcon icon={faUser} size="2x" color="#FFFFFF" />
                </div>
                <div className={styles.navbarExpTabText}>Profile</div>
            </div>
            <div className={styles.navbarExpTab}>
                <div className={styles.navbarExpLogo}>
                    <FontAwesomeIcon icon={faTv} size="2x" color="#FFFFFF" />
                </div>
                <div className={styles.navbarExpTabText}>LOOΠΔ TV</div>
            </div>
            <div className={styles.navbarExpTab}>
                <div className={styles.navbarExpLogo}>
                    <FontAwesomeIcon icon={faComment} size="2x" color="#FFFFFF" />
                </div>
                <div className={styles.navbarExpTabText}>Community</div>
            </div>
            <div className={styles.navbarExpTab}>
                <div className={styles.navbarExpLogo}>
                    <FontAwesomeIcon icon={faQuestionCircle} size="2x" color="#FFFFFF" />
                </div>
                <div className={styles.navbarExpTabText}>About</div>
            </div>
            <div className={styles.navbarExpTab}>
                <div className={styles.navbarExpLogo}>
                    <FontAwesomeIcon icon={faPlayCircle} size="2x" color="#FFFFFF" />
                </div>
                <div className={styles.navbarExpTabText}>Stream</div>
            </div>
        </div>
    )
}

export default NavbarExpand;