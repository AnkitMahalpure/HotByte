import React, { useEffect, useState } from "react";
import FiltersContainer from "./FiltersContainer";
import HotelCard from "./HotelCard";
import PublicService from "../services/PublicService";
import { useSelector } from "react-redux";
import axios from "axios";

const HotelList = () => {
  const [Hotels, setHotels] = useState([]);
  const city = useSelector((state) => state.city.city);
  useEffect(() => {
    const fetchHotels = async () => {
      if (city === "All Cities") {
        try {
          let result = await PublicService.getAllHotels();
          setHotels(result.data);
        } catch (error) {
          console.log(error);
        }
      }
      else{
        try {
          let result = await axios.get(`http://localhost:8080/home/all-hotel/bycity?query=${city}`);
          setHotels(result.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchHotels();
  }, [city]);
  return (
    <div className="main-container">
      <FiltersContainer />
      <div className="row row-cols-lg-3 row-cols-xxl-4 row-cols-sm-2 row-cols-1">
        {Hotels.map((hotel) => (
          <HotelCard {...hotel} key={hotel.hotelId} />
        ))}
        {/* <HotelCard /> */}
      </div>
    </div>
  );
};

export default HotelList;
