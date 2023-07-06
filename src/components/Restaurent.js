import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const Restaurent = () => {
  const [restaurent, setRestaurent] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    RestaurentData();
  }, []);

  const RestaurentData = async () => {
    const data = await fetch(MENU_URL + resId);
    const res = await data.json();
    setRestaurent(res.data);
  };

  if (restaurent === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurent?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurent?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Recommended Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{" Rs."} {item?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Restaurent;
