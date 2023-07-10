import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurentMenu = (resId) => {
  const [restaurentInfo, setRestaurentInfo] = useState(null);

  useEffect(() => {
    RestaurentData();
  }, []);

  const RestaurentData = async () => {
    const data = await fetch(MENU_URL + resId);
    const res = await data.json();
    setRestaurentInfo(res.data);
  };

  return restaurentInfo;
};

export default useRestaurentMenu;
