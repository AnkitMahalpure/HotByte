import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout as userlogout } from "../store/userRedux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/hotelRedux";

const DashboardHeader = () => {
  const User = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userlogout());
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      <header class="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <h2 style={{ width: "30%" }}>{User.username}</h2>
        <div style={{ width: "50%" }}>
          <div>
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
