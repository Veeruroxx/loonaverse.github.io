import React from 'react';

import styles from './LatestMusic.module.css'

const LatestMusic = () => {
    return (
        <div className={styles.LatestMusic}>
            <div className={styles.embedContainer}>
                <iframe src='https://www.youtube.com/embed/videoseries?list=PLn2nfuATkZsQfG8no7wsG2t6GnYtAy8OB&cc_lang_pref=en&cc_load_policy=1&rel=0' frameborder='0' allowfullscreen allow="fullscreen" />
                <div className={styles.musicDesc}>
                    <div className={styles.musicDescTitle}>
                        <p className={styles.musicDescTagline}>Latest Music Release</p>
                        <p className={styles.musicDescName}>[#]</p>
                        <p className={styles.musicDescDate}><strong>Released: </strong>02 Feb 2020</p>
                    </div>
                    <p className={styles.musicDescText}>
                        {"Fate collides fate in LOOΠΔ to make coincidence.\n\n12th member, Olivia Hye and the 1st member HeeJin meets in fate and made LOOΠΔ as a whole world.\n\n[#] does not mean much when it is used alone, but it means that when # is used in combination with words or letters, they realize the result of a multi-use combination when they are together, just as they perform a special function or great ability.... read more"}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default LatestMusic;