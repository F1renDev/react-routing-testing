import React, { Suspense } from "react";
/* The NavLink allows to add styling to the link because the 'actie' class is added for the active link */
/* To make this active styling work with css modules we should add a "activeClassName" prop to the NavLink component
the css should look something like this: a.navActiveStyle {}
or we can set active styling inline like activeStyle={{ color: 'red'}}  */
import { Route, NavLink, Switch /*Redirect*/ } from "react-router-dom";
import styles from "./Blog.module.css";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";

/*The import is happening only when we go to the New Posts page*/
const NewPosts = React.lazy(()=>import('./NewPost/NewPost'));

class Blog extends React.Component {
    state = {
        auth: true
    };

    render() {
        return (
            <div className={styles.blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts/"
                                    /* Can set the active style with inline activeStyle prop */
                                    // activeStyle={{ color: 'red'}}
                                    activeClassName={styles.navActiveStyle}
                                    exact>
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName={styles.navActiveStyle}
                                    to={{
                               /* pathname can be absolute (from the root of the app) like below
 or it can be relative {pathname: (this.)props.match.url + '/new-posts'} appending 'new-posts' to the current path*/
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
 {/* The lazy loading of the NewPosts component: 
render a Suspence component with a fallback prop and nest a NewPosts in Suspense */}
                    {this.state.auth ? <Route path="/new-post" render={() => (
                        <Suspense fallback={<div>Loading...</div>}>
                            <NewPosts/>
                        </Suspense>
                    )} /> : null}
                    <Route path="/posts" component={Posts} />
 {/*Redirect component is used within switch to redirect the user from a certain url to a needed url */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* This is an alternative to Redirect for handling 404 error cases */}
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
