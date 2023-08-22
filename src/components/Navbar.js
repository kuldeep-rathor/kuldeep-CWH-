import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} navbar-${props.col} bg-${props.col}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
                <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/About">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable dark mode
            </label>
          </div>
          <div
            className={`form-check form-switch text-${
              props.col === "cyan" ? "dark" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckCyan"
              onClick={props.cyanMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckCyan">
              Enable cyan mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  // mode: PropTypes.string.isRequired,
  // toggleMode: PropTypes.func.isRequired,
  // cyanMode: PropTypes.func.isRequired,
};
Navbar.defaultProps = {
  aboutText: "About",
};

export default Navbar;
