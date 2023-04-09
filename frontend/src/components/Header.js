import React from "react";


function Header() {
  return (
    <div className="bg-dark">
      <nav class="navbar navbar-expand-lg bg-dark text-light">
        <div class="container-fluid text-light">
          <img
            src="https://t4.ftcdn.net/jpg/03/30/97/33/360_F_330973348_C5NspYzrYo56bfo5GjBClbY2JWeIYwNa.jpg"
            className="App-logo m-2"
            alt="logo"
            style={{ height: "7vmin", alignItem: "left" }}
          />

          <span
            className="text-light fw-bold fs-1 align-center"
            style={{ alignItem: "center" }}
          >
            {" "}
            PORTABLE
          </span>

          <div class="justify-conetent-end" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <span
                  className="text-light fs-6 align-right"
                  style={{ alignItem: "right" }}
                >
                  {" "}

                </span>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="post"
                placeholder=""
                aria-label="post"
              />
              <button class="btn btn-outline-success" type="submit">
                Post
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
