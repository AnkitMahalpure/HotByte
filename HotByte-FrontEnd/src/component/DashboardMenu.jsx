import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";
import PublicService from "../services/PublicService";
import { useSelector } from "react-redux";

const DashboardMenu = () => {
  const [menuList, setMenuList] = useState([]);
  const hotelId = useSelector((state) => state.hotel.currentHotel.hotelId);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const result = await PublicService.fetchallmenu(Number(hotelId));
        console.log(result.data);
        setMenuList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenu();
  }, []);
  return (
    <div>
      <MenuList menuList={menuList} />
    </div>
  );
};

export default DashboardMenu;
