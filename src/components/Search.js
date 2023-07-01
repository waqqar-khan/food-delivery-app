import React from "react";
import "../styles/Search.scss";

const Search = () => {
  return (
    <>
      <div className="search-wrapper">
        <input className="input-search-box" type="text" />
        <button className="search-btn">Search!</button>
      </div>
    </>
  );
};

export default Search;
