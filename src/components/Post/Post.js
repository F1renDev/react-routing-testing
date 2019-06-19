import React from 'react';

import styles from './Post.module.css';

/* Component for previewing posts */
const post = (props) => (
    <article className={styles.post} onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className={styles.info}>
            <div className={styles.author}>{props.author}</div>
        </div>
    </article>
);

export default post;