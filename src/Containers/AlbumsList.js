import React, { Component } from "react";
import { GetAlbumsOfUser } from "../serviceClient";
import AlbumCard from "../Components/AlbumCard";
import { Container, Row } from "reactstrap";

const userId = "1"; // hard coded user ID for testing

export default class AlbumsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      userId: userId,
      isLoading: true
    };
  }

  componentDidMount() {
    GetAlbumsOfUser(this.state.userId, response => {
      if (response.length !== 0) {
        const allAlbums = response;
        this.setState({ albums: allAlbums, isLoading: false });
      } else {
        alert("Couldn't find any albums right now, sorry!");
      }
    });
  }

  render() {
    const albums = this.state.albums.map((album, userId) => {
      return (
        <AlbumCard
          key={userId}
          title={album.title}
          id={album.id}
          isLoading={this.state.isLoading}
        />
      );
    });
    return (
      <Container className="titles">
        <h2 id="headline">Albums</h2>
        <Row>{albums}</Row>
      </Container>
    );
  }
}
