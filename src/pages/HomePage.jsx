import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h3 className="fw-bold" style={{ marginBottom: "60px" }}>
        WELCOME TO YOUR GIPHY
      </h3>
      <img
        style={{ width: "360px", marginBottom: "120px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Giphy-logo.svg/1280px-Giphy-logo.svg.png"
        alt=""
      />
      <Link className="fs-4" to="iron_man">
        IRON MAN
      </Link>
      <Link className="fs-4" to="search">
        SEARCH YOUR GIPHY
      </Link>
    </div>
  );
}

export default HomePage;
