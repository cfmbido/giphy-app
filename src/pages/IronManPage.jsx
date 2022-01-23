import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import GiftList from "../components/GiftList";

function IronmanPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=iron+man&limit=9&offset=0&rating=g&lang=en`,
    })
      .then(({ data }) => {
        setList(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center py-5">
      <h3 className="fw-bold" style={{ marginBottom: "4rem" }}>
        IRON MAN GIPHY
      </h3>
      <GiftList gifs={list} />
    </div>
  );
}

export default IronmanPage;
