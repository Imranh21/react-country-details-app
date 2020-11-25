import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/css/bootstrap.min.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" bg="light" d-flex>
          <Nav>
            <li>
              <Link to="/">Home</Link>
            </li>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
