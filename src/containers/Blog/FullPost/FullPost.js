import React from "react";
import styles from "./FullPost.module.css";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

/* Component to read the full post on the main page */
class FullPost extends React.Component {
    state = {
        loadedPost: null
    };

    /* The full post should only send a new post request if we got a new post id
     that is different from the one we have at the moment
     or if we don't have a post id at the moment */
    componentDidUpdate() {
        if (this.props.id) {
            if (
                !this.state.loadedPost ||
                (this.state.loadedPost &&
                    this.state.loadedPost.id !== this.props.id)
            ) {
                axios.get("/posts/" + this.props.id).then((response) => {
                    // console.log(response);
                    this.setState({ loadedPost: response.data });
                });
            }
        }
    }

    /* Faking a delete request to the jsonplaceholder API */
    deletePostHandler = () => {
        axios.delete("/posts/" + this.props.id).then((response) => {
            console.log(response);
        });
    };

    /* Untill no post is selected for the full view a placeholder is used
    When a post is selected but not yet loaded a spinner is shown */
    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <Spinner />;
        }
        if (this.state.loadedPost) {
            post = (
                <div className={styles.fullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={styles.edit}>
                        <button
                            onClick={this.deletePostHandler}
                            className={styles.delete}>
                            Delete
                        </button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;
