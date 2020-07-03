import React from 'react';

import styles from './LatestLTV.module.css'
import RespEmbed from '../UI/RespEmbed/RespEmbed';

const LatestLTV = () => {
    return (
        <div className={styles.LatestLTV}>
            <div className={styles.header}>Latest LTV</div>
            <div className={styles.videoEmbed}>
                <RespEmbed src="https://www.youtube.com/embed/videoseries?list=PLn2nfuATkZsQzaTPcar9B0vPVO2a59hf5&cc_lang_pref=en&cc_load_policy=1&rel=0" />
            </div>
        </div>
    )
}

export default LatestLTV;