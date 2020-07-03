import React from 'react';

import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.socialIcons}>
                <a href="http://loonatheworld.com/" target="_blank">
                    <FontAwesomeIcon icon={faGlobe} size="2x" color="#E44C65" />
                </a>
                <a href="https://twitter.com/loonatheworld" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="#E44C65" />
                </a>
                <a href="https://www.instagram.com/loonatheworld/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="#E44C65" />
                </a>
                <a href="https://www.youtube.com/loonatheworld/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" color="#E44C65" />
                </a>
                <a href="https://www.facebook.com/loonatheworld/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" color="#E44C65" />
                </a>
                <a href="https://github.com/loonaverse/loonaverse.github.io" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="#E44C65" />
                </a>
            </div>
            <div>Made with <span style={{color: '#FF0000'}}>❤</span> by LOOΠΔVERSE</div>
            <div>This is a Fan Site and is not associated with BlockBerryCreative or LOOΠΔ.</div>
        </div>
    )
}

export default Footer;