import React from "react";
import GifCard from "./GifCard";

function GiftList({ gifs }) {
  return (
    <div className="row col-12 col-xl-8">
      {gifs.map((gif) => {
        return <GifCard data={gif} />;
      })}
    </div>
  );
}

export default GiftList;
