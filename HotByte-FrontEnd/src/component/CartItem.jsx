import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/realUserRedux";

const CartItem = ({ item, cartItems }) => {
  const User = useSelector((state) => state.user.currentUser);
  const realUser = useSelector((state) => state.realUser.currentRealUser);
  const [menuItem, setMenuItem] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const getMenuItem = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/user/menu?id=${item}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${User.jwtToken}`,
            },
          }
        );
        console.log(result.data);
        setMenuItem(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMenuItem();
  }, []);

  const handleAdd = async (menuID) => {
    try {
      const result = await axios.post(
        `http://localhost:8080/user/add-to-cart?userId=${realUser.userId}&menuItemId=${item}&quantity=1`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${User.jwtToken}`,
          },
        }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
    const fetchCart = async () => {
      try {
        const realUser = await axios.get(
          `http://localhost:8080/user/${User.username}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${User.jwtToken}`,
            },
          }
        );
        console.log(realUser);
        dispatch(addUser(realUser.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  };

  const handleSubtract = async (menuID) => {
    try {
      const result = await axios.post(
        `http://localhost:8080/user/remove-from-cart?userId=${realUser.userId}&menuItemId=${item}&quantity=1`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${User.jwtToken}`,
          },
        }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
    const fetchCart = async () => {
      try {
        const realUser = await axios.get(
          `http://localhost:8080/user/${User.username}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${User.jwtToken}`,
            },
          }
        );
        console.log(realUser);
        dispatch(addUser(realUser.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  };

  return (
    <div>
      <li
        key={item}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          {menuItem.menuItemName}{" "}
          <span
            className="badge badge-primary badge-pill"
            style={{ color: "#34d900" }}
          >
            ₹{menuItem.menuItemPrice}
          </span>
        </div>
        <div>
          <button
            className="btn btn-sm btn-info"
            style={{
              fontSize: "1.5rem",
              width: "35px",
              marginRight: "10px",
            }}
            onClick={() => handleSubtract()}
          >
            -
          </button>{" "}
          {realUser.cart[item]}{" "}
          <button
            className="btn btn-sm btn-info"
            style={{
              fontSize: "1.5rem",
              width: "35px",
              marginLeft: "10px",
            }}
            onClick={() => handleAdd()}
          >
            +
          </button>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
