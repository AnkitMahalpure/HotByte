import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import OrderMenuItem from "./OrderMenuItem";
const OrderItem = ({ order }) => {
  //const menuItem =  ? realUser.cart : ;
  const [menuItems, setmenuItems] = useState({});

  useEffect(() => {
    setmenuItems(order.orderItems);
  }, []);
  const keys = Object.keys(menuItems);
  console.log(keys);
  return (
    <div style={{ padding: "0 10px" ,border: "2px solid #843de6"}}>
      <div style={{ display: "flex" }}>
        <div className="col-5">
          <Card>
            <Card.Body>
              <Card.Title>{{ ...order.hotelID }.hotelName}</Card.Title>
              <Card.Text>Total: {order.amount}</Card.Text>
              <Card.Text>OrderTime: {order.orderTime}</Card.Text>
              <Card.Text>DeliveryTime: {order.deliveryTime}</Card.Text>
              <Card.Text>Order Status: {order.orderStatus}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-7">
          {keys.map((item) => (
            <OrderMenuItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
