import React from "react";
import Posts from "./Posts/Posts";
import styles from "./Blog.module.css";
import { Route } from "react-router-dom";

class Blog extends React.Component {
    render() {
        return (
            <div className={styles.blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/new-post">New Post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* Rendering different components dynamically based on the path in the URL */}
                <Route path="/" exact render={() => <Posts />} />
            </div>
        );
    }
}

export default Blog;
