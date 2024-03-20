import "bootstrap/dist/css/bootstrap.min.css";
import "../routes/App.css";
import PublicService from "../services/PublicService";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import MainPageContainer from "../component/MainPageContainer";
import { useDispatch, useSelector } from "react-redux";
import { hotellist } from "../store/hotelRedux";
import HotelService from "../services/HotelService";

function App() {
  const city = useRef();
  const name = useRef();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user.currentUser);
  //const [hotels, setHotels] = useState([]);
  
  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     try {
  //       let result = await PublicService.getAllHotels();
  //       dispatch(hotellist(result.data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchHotels();
  // }, []);

  // const fetchHotels = async () => {
  //   try {
  //     let result = await PublicService.getAllHotels();
  //     console.log(result.data);
  //     setHotels(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const searchHotelByCity = async (city) => {
    console.log("City " + city.current.value);
    try {
      let result = await PublicService.getHotelByCity(city.current.value);
      console.log(result.data);
      //setHotels(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchHotelByName = async (name) => {
    console.log("name " + name.current.value);
    try {
      let result = await PublicService.getHotelByName(name.current.value);
      console.log(result.data);
      //setHotels(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <MainPageContainer />
      {/* <h1>HotByte</h1>
      <button onClick={fetchHotels} className="btn btn-primary">
        Get All Hotels
      </button>
      {hotels.map((hotel, key) => (
        <p key={key}>{hotel.hotelName}</p>
      ))}
      <br />
      <label>
        <h1>Get Hotel By City</h1>
      </label>
      <br />
      <input type="text" placeholder="Enter City Name" ref={city} />
      <button
        onClick={() => {
          searchHotelByCity(city);
        }}
      >
        Search
      </button>
      <br />
      <label>
        <h1>Get Hotel By Name</h1>
      </label>
      <br />
      <input type="text" placeholder="Enter Hotel Name" ref={name} />
      <button
        onClick={() => {
          searchHotelByName(name);
        }}
      >
        Search
      </button> */}
      <Footer />
    </>
  );
}

export default App;
