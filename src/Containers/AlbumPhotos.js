import React, { Component } from "react";
import { GetAlbumPhotos } from "../serviceClient";
import { Container, Spinner } from "reactstrap";

class AlbumPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      albumId: this.props.match.params.albumId,
      isLoading: true
    };
  }

  componentDidMount() {
    GetAlbumPhotos(this.state.albumId, response => {
      if (response !== undefined) {
        const albumPhotos = response;
        this.setState({ photos: albumPhotos, isLoading: false });
      } else {
        console.log("error");
      }
    });
  }

  render() {
    const spinner = <Spinner color="primary" />;
    const albumPhotos = this.state.photos.map((photo, id) => {
      return <img src={photo.thumbnailUrl} key={id} alt="albumContent" />;
    });
    return (
      <Container>
        <h2 id="headline">Photos</h2>
        {this.state.isLoading ? spinner : albumPhotos}
      </Container>
    );
  }
}

export default AlbumPhotos;
