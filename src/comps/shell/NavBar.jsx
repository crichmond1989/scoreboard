import React from "react";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Scoreboard
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
