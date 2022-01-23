import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import GiftList from "../components/GiftList";

function SearchPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.giphy.com/v1/gifs/trending?api_key=exzUUnMWr2Cbxa1adYjjYGY1COctJhC4&limit=9&rating=g",
    })
      .then(({ data }) => {
        console.log(data);
        setList(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;
    axios({
      method: "GET",
      url: value
        ? `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${value}&limit=9&offset=0&rating=g`
        : `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=9&rating=g`,
    })
      .then(({ data }) => {
        setList(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const debounceOnChange = debounce(handleSearch, 1000);

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center py-5">
      <h3 className="fw-bold mb-4">SEARCH YOUR GIPHY</h3>
      <div class="col-6 col-lg-4 mb-4">
        <input
          type="text"
          class="form-control"
          placeholder="Search Giphy"
          onChange={debounceOnChange}
        />
      </div>
      <GiftList gifs={list} />
    </div>
  );
}

export default SearchPage;
