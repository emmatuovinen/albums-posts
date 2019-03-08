import React, { Component } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import "../style.css";

class NavigationBar extends Component {
  render() {
    return (
      <Nav vertical className="nav">
        <NavItem>
          <NavLink href="/albums">ALBUMS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts">POSTS</NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default NavigationBar;
