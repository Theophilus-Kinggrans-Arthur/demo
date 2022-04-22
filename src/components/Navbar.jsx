import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <button
            class="navbar-toggler"
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
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <a className="navbar-brand fw-bolder fs-4 mx-auto" href="#">
              RUTH ABOSEDE ART
            </a>
            <a
              href="#"
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
            >
              <i className="fa fa-sign-in me-2"></i>Login
            </a>
            <a
              href="#"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <i className="fa fa-user-plus me-2"></i>Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
