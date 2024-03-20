import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import MenuItem from "../component/MenuItem";
import RestaurantFooter from "../component/RestaurantFooter";
import MenuList from "../component/MenuList";
import { useParams } from "react-router-dom";
import PublicService from "../services/PublicService";
import axios from "axios";

const Restaurant = () => {
  const [isChecked, setChecked] = useState(false);
  const [hotel, setHotel] = useState({});
  const [menuList, setMenuList] = useState([]);

  const { id } = useParams();

  console.log(id);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        let result = await PublicService.getHotelById(id);
        setHotel(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHotel();

    const fetchMenu = async () => {
      if (isChecked === false) {
        try {
          const result = await PublicService.fetchallmenu(Number(id));
          console.log(result.data);
          setMenuList(result.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const result = await axios.get(
            `http://localhost:8080/home/hotel/isveg?hotelId=${id}&query=Yes`
          );
          console.log(result.data);
          setMenuList(result.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchMenu();
  }, [isChecked]);

  return (
    <div>
      {console.log(hotel)}
      <Header />
      <div className="restaurant">
        <div className="restaurant-header">
          <div className="restaurant-header-wrapper">
            <div className="hotel-header">
              <h3>{hotel.hotelName}</h3>
              <p className="hotel-desc">{hotel.hotelDescription}</p>
              <p className="hotel-desc">{{ ...hotel.hotelAddress }.street2}</p>
              <p className="hotel-desc">{{ ...hotel.hotelAddress }.city}</p>
            </div>
            <div className="rating" style={{ textAlign: "center" }}>
              <div>Rating</div>
              <div>{hotel.hotelRating}★</div>
            </div>
          </div>
        </div>
        <hr className="border" />
        <div>
          <div style={{ paddingLeft: "50px" }}>
            <div class="form-check form-switch">
              <label class="form-check-label" for="flexSwitchCheckChecked">
                Veg Only
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <hr className="border" />
          <div>
            <MenuList menuList={menuList} hotelId={id} />
            <RestaurantFooter hotel={hotel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
