import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/mockData";
import "../styles/Body.scss";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurent(json?.data?.cards[2]?.data?.data?.cards);
  };

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="body-top-container">
          <div className="search">
            <input
              className="input-search-box"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                const filteredRes = listOfRestaurents.filter((res) =>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurent(filteredRes);
              }}
            >
              Search!
            </button>
          </div>
          <div className="filter-res">
            <button
              className="filter-res-btn total-res"
              onClick={() => {}}
            >
              Total Restaurents
            </button>
          </div>
          <div className="filter-res">
            <button
              className="filter-res-btn"
              onClick={() => {
                const filteredList = listOfRestaurents.filter((res) => {
                  return res.data.avgRating > 4;
                });
                setListOfRestaurents(filteredList);
              }}
            >
              Top Rated Restaurents
            </button>
          </div>
        </div>
        <div className="res-container">
          {filteredRestaurent.map((restaurent) => {
            return (
              <Link to={"/restaurent/" + restaurent.data.id} key={restaurent.data.id}><RestaurentCard resData={restaurent} /></Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
