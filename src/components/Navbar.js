import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import '../styles/Navbar.css';
import { Navbar, NavDropdown, Nav, NavItem } from 'react-bootstrap';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  onFocus() {
    document.getElementById("responsive-navbar-nav")
    document.getElementById("collasible-nav-dropdown")
  }
  render() {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" className="top-nav">
          <div className="container">
            <Navbar.Brand>
              <div className="logo">
                <Link to='/'>
                  <h1>G <span className="make_red">A</span> D</h1>
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="menu-list">
              <Nav >
                <LinkContainer to="/gadpro">
                  <Nav.Link>Become a Pro Artisan</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blog">
                  <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Hello Guest" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <LinkContainer to="/login">
                      <NavItem>
                        Login {" "}
                        <i className="fas fa-sign-in-alt pull-right" aria-hidden="true"></i>
                      </NavItem>
                    </LinkContainer>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <LinkContainer to="/signup">
                      <NavItem>
                        Register {" "}
                        <i className="fas fa-user-plus pull-right" aria-hidden="true"></i>
                      </NavItem>
                    </LinkContainer>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    );
  }
}


export default MyNavbar