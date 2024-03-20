import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LOGO from "/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/realUserRedux";
import CartItem from "../component/CartItem";
import { hotel, logout } from "../store/cartHotel";

const Cart = () => {
  const User = useSelector((state) => state.user.currentUser);
  const realUser = useSelector((state) => state.realUser.currentRealUser);
  const hotelCartID = useSelector((state) => state.cart.Hotel);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItem = realUser ? realUser.cart : {};
  console.log(cartItem);

  const [cartItems, setCartItems] = useState(cartItem);
  const [note, setNote] = useState(" ");
  const keys = Object.keys(cartItems);
  const values = Object.values(cartItems);
  //console.log(keys);

  const placeOrder = async () => {
    try {
      const result = await axios.post(
        `http://localhost:8080/user/create-order`,
        {
          user: {
            userId: realUser.userId,
          },
          hotel: {
            hotelId: hotelCartID,
          },
          note: note,
          isPaid: false,
          orderStatus: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${User.jwtToken}`,
          },
        }
      );
      console.log(result.data);
      dispatch(logout());
    } catch (error) {}
  };

  useEffect(() => {
    if (User !== null) {
      console.log("useefect");
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
    }
  }, []);
  useEffect(() => {
    if (!User) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    // Check if cart is empty and dispatch logout if true
    if (Object.keys(cartItem).length === 0) {
      dispatch(logout());
    }
  }, [cartItem]);
  return (
    <div>
      <div>
        {Object.keys(cartItem).length !== 0 ? (
          <Container>
            <Row className="mb-4">
              {/* Space for logo */}
              <Col xs={12}>
                <Link to={"/"}>
                  <img
                    src={LOGO}
                    alt="Your Logo"
                    className="img-fluid"
                    style={{ height: "100px" }}
                  />
                </Link>
              </Col>
            </Row>

            <h2 className="my-4">Checkout</h2>

            <Row style={{ border: "2px solid #843de6" }}>
              <Col md={6} style={{ borderRight: "3px solid #843de6" }}>
                <h4>Shipping Information</h4>
                <div>
                  <p>
                    <strong>Name:</strong> {realUser.username}
                  </p>
                  <p>
                    <strong>Address:</strong> {{ ...realUser.address }.street2}
                  </p>
                  <p>
                    <strong>Landmark :</strong>{" "}
                    {{ ...realUser.address }.landmark}
                  </p>
                  <p>
                    <strong>City:</strong> {{ ...realUser.address }.city}
                  </p>
                  {/* Display more address details as needed */}
                </div>
              </Col>

              <Col md={6}>
                <h4>Order Summary</h4>
                <ul className="list-group">
                  {keys.map((item) => (
                    <CartItem item={item} cartItems={cartItems} />
                  ))}
                  {/* Delivery Fee row */}
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>Delivery Fee</div>
                    <div>₹ 70</div>
                  </li>
                </ul>

                <div className="mt-3">
                  <h5>Total: ₹{realUser.cartTotal + 70}</h5>
                </div>
                <button className="btn btn-outline-primary">
                  <Link
                    to={`/restaurants/${hotelCartID}`}
                    style={{ textDecoration: "none" }}
                  >
                    Add More Items
                  </Link>
                </button>
                <div class="form-group" style={{ margin: "20px" }}>
                  <label for="note">Note:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="note"
                    placeholder="Enter your note here..."
                    onChange={(e) => {
                      setNote(e.target.value);
                    }}
                  />
                </div>

                <div
                  style={{
                    margin: "30px 0",
                    padding: "10px 20px",
                    backgroundColor: "#fc8019",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "15px",
                    width: "25%",
                  }}
                  onClick={placeOrder}
                >
                  PLACE ORDER
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="cart">
            <div className="empty-cart">
              <div
                style={{
                  height: "calc(100vh - 80px)",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    width: "290px",
                    height: "256px",
                    backgroundImage:
                      "url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>

                <div
                  style={{
                    marginTop: "24px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#535665",
                  }}
                >
                  Your cart is empty
                </div>

                <div
                  style={{
                    marginTop: "9px",
                    color: "#7e808c",
                  }}
                >
                  You can go to home page to view more restaurants
                </div>

                <Link to={"/"}>
                  <div
                    style={{
                      marginTop: "30px",
                      padding: "10px 20px",
                      backgroundColor: "#fc8019",
                      color: "#fff",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    SEE RESTAURANTS NEAR YOU
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
