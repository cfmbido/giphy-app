import React from "react";

function GifCard({ data }) {
  return (
    <div
      key={data.id}
      className="col-12 col-md-6 col-lg-4 my-4"
      style={{ height: "300px" }}
    >
      <img className="w-100 h-100" src={data?.images?.original?.url} />
    </div>
  );
}

export default GifCard;
