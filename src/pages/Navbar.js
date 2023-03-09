import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Logo from "../assets/img/logo.jpg";
import Logout from "../assets/img/logout.png";
import Profile from "../assets/img/profile.png";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFillCalculatorFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img className="myLogo" src={Logo} alt="Logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="aLink" href="/">
              <BsHouseDoorFill className="myIcon" /> Home Page
            </Nav.Link>
            <Nav.Link className="aLink" href="/countpage">
              <BsFillCalculatorFill /> Count Page
            </Nav.Link>
            <Nav.Link className="aLink" href="/documentation">
              <BsFillFileEarmarkTextFill /> Documentation
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>

            <Nav.Link href="/profile">
              <img className="profile" src={Profile} alt="Logo" />
            </Nav.Link>

            <Nav.Link href="/login">
              <img className="logout" src={Logout} alt="Logo" />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
