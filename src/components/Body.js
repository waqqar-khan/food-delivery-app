import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Search from "./Search";
// import resList from "../utils/mockData";
import "../styles/Body.scss";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurents(json?.data?.cards[2]?.data?.data?.cards)
  };

  return (
    <>
      <div className="body">
        <div className="body-top-container">
          <div className="search">
            <Search />
          </div>
          <div className="filter-res">
            <button
              className="filter-res-btn"
              onClick={() => {
                const filteredList = listOfRestaurents.filter((res) => {
                  return res.data.avgRating > 4;
                });
                setListOfRestaurents(filteredList);
                console.log("filtered list: ", listOfRestaurents);
              }}
            >
              Top Rated Restaurents
            </button>
          </div>
        </div>
        <div className="res-container">
          {listOfRestaurents.map((restaurent) => {
            return (
              <RestaurentCard key={restaurent.data.id} resData={restaurent} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
