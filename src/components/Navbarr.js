import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
          <div className="container">
            <div className="logo">
              <Link to='/'>
                <h1><span className="make_red">A1</span> Fitters</h1>
              </Link>
            </div>
            <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button"
              data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`${classOne}`} id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/gadpro">Become a Pro Artisan</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Register  <i className="fas fa-user-plus pull-right" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login <i className="fas fa-sign-in-alt pull-right" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default Nav;