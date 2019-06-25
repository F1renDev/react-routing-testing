import React from "react";
/* The NavLink allows to add styling to the link because the 'actie' class is added for the active link */
/* To make this active styling work with css modules we should add a "activeClassName" prop to the NavLink component
the css should look something like this: a.navActiveStyle {}
or we can set active styling inline like activeStyle={{ color: 'red'}}  */
import { Route, NavLink, Switch } from "react-router-dom";
import styles from "./Blog.module.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends React.Component {
    render() {
        return (
            <div className={styles.blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    /* Can set the active style with inline activeStyle prop */
                                    // activeStyle={{ color: 'red'}}
                                    activeClassName={styles.navActiveStyle}
                                    exact>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName={styles.navActiveStyle}
                                    to={{
                                        /* pathname can be absolute (from the root of the app) like below
 or it can be relative {pathname: (this.)props.match.url + '/new-posts'} appending 'new-posts' to the current path */
                                        pathname: "/new-post",
                                        /* hash is used to add something ('#submit' in this case) to jump to that id tag after the load is complete*/
                                        hash: "#submit",
                                        /* search allows to add some query parametrs to the get request */
                                        search: "?quick-submit=ture"
                                    }}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* Rendering different components dynamically based on the path in the URL */}
{/* Switch Component is used to only load only one of possible Routs even if the several conditions are matched */}
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
{/* :id for path is used when we expect dynamic element in the url (the id of the post in this case)*/}
                    <Route path="/:id" component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
