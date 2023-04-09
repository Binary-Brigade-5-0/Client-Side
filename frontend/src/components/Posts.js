import React, { useState } from "react";
import moment from 'moment';

function Posts() {
  const [data, setData] = useState([]); 
  const [newPostDesc, setNewPostDesc] = useState('');
  const addPost = () => {
    if(!newPostDesc) return;
    const item = {
      desc: newPostDesc,
      time: moment()
    }
    setData([
      ...data, item
    ]);
    setNewPostDesc('');
  }
  return (
    <div>
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
                  onChange={(event) => {
                    setNewPostDesc(event.target.value);
                  }}
                  value={newPostDesc}
                />
                <a class="btn btn-outline-success" onClick={addPost}>
                  Post
                </a>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="p-3 m-0" style={{ backgroundColor: "#5F7161" }}>
        <h3>FEEDS</h3>
        {data.map((user) => (
          <div
            class="card text-center mx-auto"
            style={{ width: "70vw", marginTop: "10vh" }}
          >
            <div class="card-body">
              <p class="card-text">{user.desc}</p>
            </div>
            <div
              class="card-footer text-muted"
              style={{ backgroundColor: "#D8D8D8" }}
            >
              {
                moment(user.time).format("dddd, MMMM Do YYYY, h:mm:ss a")
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
