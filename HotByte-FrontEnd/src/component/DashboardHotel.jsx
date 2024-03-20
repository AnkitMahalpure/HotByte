import React from "react";
import { useSelector } from "react-redux";

const DashboardHotel = () => {
  const hotel = useSelector((state) => state.hotel.currentHotel);
  //console.log("DashboardHotel");
  if (!hotel) {
    // Data is not yet loaded, you can show a loader or a message
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div class="px-4 py-5 my-5">
        <img
          class="d-block mx-auto mb-4"
          src={hotel.hotelImagesList}
          alt=""
          width="172"
          height="157"
        />
        <h1 class="display-5 fw-bold text-body-emphasis text-center">
          {hotel.hotelName}
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">{hotel.hotelDescription}</p>
          <div>
            <p>{hotel.hotelAddress.street1}</p>
            <p>{hotel.hotelAddress.street2}</p>
            <p>{hotel.hotelAddress.landmark}</p>
            <p>{hotel.hotelAddress.city}</p>
            <p>{hotel.hotelAddress.postalCode}</p>
          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Edit Address
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Edit Profile
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Active Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHotel;
