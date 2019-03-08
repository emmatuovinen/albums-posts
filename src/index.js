import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AlbumsList from "./Containers/AlbumsList";
import PostsList from "./Containers/PostsList";
import AlbumPhotos from "./Containers/AlbumPhotos";
import PostComments from "./Containers/PostComments";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./Containers/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <div className="pageBody">
    <NavigationBar />
    <BrowserRouter>
      <Switch>
        <Route path="/posts/" component={PostsList} />
        <Route path="/albums/" component={AlbumsList} />
        <Route path="/photos/:albumId" component={AlbumPhotos} />
        <Route path="/comments/:postId" component={PostComments} />
        <Route exact path="/" component={AlbumsList} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
