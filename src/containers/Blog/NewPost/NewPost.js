import React from "react";
// import { Redirect } from "react-router-dom";
import axios from "axios";

import styles from "./NewPost.module.css";

/* Component for adding new posts */
class NewPost extends React.Component {
    state = {
        title: "",
        content: "",
        author: "Admin"
        // submitted: false
    };

    componentDidMount() {
        /* Loggin the props that are passed automatically by the Route component */
        // console.log(this.props);
    }

    /* Faking the post request to jsonplaceholder API */
    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post("/posts", data).then((response) => {
/* Redirecting can be achieved either by using the Redirect component and by setting the state (submitted in this example)
Or by using this.props.history prop to push the needed redirect path */
            // console.log(response);
            // this.setState({ submitted: true });
            this.props.history.push('/posts');
        });
    };

    render() {

        /* Redirecting conditionally and outisde of Switch component after a new post was submitted */
        // let redirect = null;
        // if (this.state.submitted) {
        //     redirect = <Redirect to="/posts" />;
        // }

        return (
            <div className={styles.newPost}>
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) =>
                        this.setState({ title: event.target.value })
                    }
                />
                <label>Content</label>
                <textarea
                    rows="4"
                    value={this.state.content}
                    onChange={(event) =>
                        this.setState({ content: event.target.value })
                    }
                />
                <label>Author</label>
                <select
                    value={this.state.author}
                    onChange={(event) =>
                        this.setState({ author: event.target.value })
                    }>
                    <option value="Author-1">Author-1</option>
                    <option value="Author-2">Author-2</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
