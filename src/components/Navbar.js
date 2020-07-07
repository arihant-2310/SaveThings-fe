import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper purple accent-4">
          <a
            href="/"
            className="left brand-logo"
            style={{ marginLeft: "10px" }}
          >
            SaveThings
          </a>

          <ul className="right">
            <li>
              <a
                href="/create"
                className="waves-effect waves-light btn-small #b388ff deep-purple accent-1"
                style={{ borderRadius: "5px" }}
              >
                <span className="nav-button">Create</span>
                <i className="material-icons right">add</i>
              </a>
            </li>
            <li>
              <a
                href="/find"
                className="waves-effect waves-light btn-small #b388ff deep-purple accent-1"
                style={{ borderRadius: "5px" }}
              >
                <span className="nav-button">Find</span>
                <i className="material-icons right">search</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
