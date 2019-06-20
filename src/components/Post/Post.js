import React from "react";
import { withRouter } from "react-router-dom";

import styles from "./Post.module.css";

/* Making the Post component aware that it is rendered by the Router and gets some props passed by the Router */
const post = (props) => {
    // console.log(props);
    return (
        <article className={styles.post} onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className={styles.info}>
                <div className={styles.author}>{props.author}</div>
            </div>
        </article>
    );
};

/* Another way to get the props passed automatically by the router in a child component
 is to import the withRouter hoc and wrap the export default with it */

export default withRouter(post);
