import React from "react";
import styles from "./Posts.module.css";
import Post from "../../../components/Post/Post";
import { Link } from "react-router-dom";
import axios from "../../../axios";

export default class Posts extends React.Component {
    state = {
        posts: []
    };

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    /* Getting dummy data from jsonplaceholder and selecting the first four entrances and updating the 
    state with them + adding a new field 'author' */
    componentDidMount() {
        /* Loggin the props that are passed automatically by the Route component */
        // console.log(this.props);
        axios
            .get("/posts")
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: "TestAuthor"
                    };
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch((error) => {
                console.log(error);
                // this.setState({ error: true });
            });
    }

    render() {
        /* If the data was retrieved showing a list of posts + click event to show the complete selected post
        Or showing some error message if failed to retrieve posts */
        let posts = (
            <p style={{ textAlign: "center" }}>Something went wrong!</p>
        );
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    <Link to={"/" + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            /* We can get the props passed by the router either by passing all props with the spread operator
 or by using the withRouter function (match, location, history props etc) on a component that renders
 the component where we need this props */
                            // {...this.props}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>
                );
            });
        }

        return <section className={styles.posts}>{posts}</section>;
    }
}
