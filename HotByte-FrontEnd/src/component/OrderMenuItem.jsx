import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
const OrderMenuItem = ({ item }) => {
  const User = useSelector((state) => state.user.currentUser);
  const realUser = useSelector((state) => state.realUser.currentRealUser);
  const [menuItem, setMenuItem] = useState({});
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
  return (
      <Card>
        <Card.Body>
          <Card.Title>{menuItem.menuItemName}</Card.Title>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
  );
};

export default OrderMenuItem;
