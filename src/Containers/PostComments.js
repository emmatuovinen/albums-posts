import React, { Component } from "react";
import { GetPostComments } from "../serviceClient";
import { Container, Spinner } from "reactstrap";

class PostComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      postId: this.props.match.params.postId,
      isLoading: true
    };
  }

  componentDidMount() {
    GetPostComments(this.state.postId, response => {
      if (response !== undefined) {
        const postComments = response;
        this.setState({ comments: postComments, isLoading: false });
      } else {
        console.log("error");
      }
      console.log(this.props);
    });
  }

  render() {
    const spinner = <Spinner color="primary" />;
    const comments = this.state.comments.map((comment, id) => {
      return (
        <li key={id}>
          {comment.email}: {comment.name}
        </li>
      );
    });
    return (
      <Container>
        <h2 id="headline">Comments</h2>
        <ul>{this.state.isLoading ? spinner : comments}</ul>
      </Container>
    );
  }
}

export default PostComments;
