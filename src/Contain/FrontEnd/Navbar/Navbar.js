import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Harivara
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link " href="/user">
            User
          </a>
          <a className="nav-item nav-link" href="/comments">
            Comments
          </a>
          <a className="nav-item nav-link" href="/photos">
            Photos
          </a>
          <a className="nav-item nav-link" href="/albums">
            Albums
          </a>
        </div>
      </div>
    </nav>
  );
}
