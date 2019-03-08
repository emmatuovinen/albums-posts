import React, { Component } from "react";
import { GetPostsOfUser } from "../serviceClient";
import PostCard from "../Components/PostCard";
import { Container, Row } from "reactstrap";

const userId = 1; // hard coded for testing

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      userId: userId,
      isLoading: true
    };
  }

  componentDidMount() {
    GetPostsOfUser(this.state.userId, response => {
      if (response.length !== 0) {
        const allPosts = response;
        this.setState({ posts: allPosts, isLoading: false });
      } else {
        alert("Couldn't find any posts right now, sorry!");
      }
    });
  }

  render() {
    const posts = this.state.posts.map((post, id) => {
      return (
        <PostCard
          key={id}
          title={post.title}
          id={post.id}
          isLoading={this.state.isLoading}
        />
      );
    });
    return (
      <Container className="titles">
        <h2 id="headline">Posts</h2>
        <Row>{posts}</Row>
      </Container>
    );
  }
}

export default PostsList;
