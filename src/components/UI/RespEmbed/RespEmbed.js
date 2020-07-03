import React from 'react';

import styles from './RespEmbed.module.css';

const RespEmbed = (props) => {
    return (
        <div className={styles.embedContainer}>
            <iframe src={props.link} frameborder='0' allowfullscreen allow="fullscreen" />
        </div>
    )
}

export default RespEmbed;