import React, { useState } from "react";

const Footer = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  return (
    <div>
      <div className="footer-container" style={{ marginBottom: "0" }}>
        <footer
          className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 border-top "
          style={{ margin: "0px 150px 0px 150px" }}
        >
          <div className="col mb-3  white-text">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <p>© HotByte 2024 Technologies Private limited.</p>
          </div>

          <div className="col mb-3">
            <h5 className="white-text">Company</h5>
            <ul className="nav flex-column  white-text">
              <li className="nav-item">About</li>
              <li className="nav-item mb-2">Careers</li>
              <li className="nav-item mb-2">Team</li>
            </ul>
          </div>

          <div className="col mb-3 ">
            <h5 className="white-text">Contact us</h5>
            <ul className="nav flex-column white-text">
              <li className="nav-item mb-2">Help and Support</li>
              <li className="nav-item mb-2">Partner with us</li>
              <li className="nav-item mb-2">Ride with us</li>
            </ul>
            <div className="Legal">
              <h5 className="white-text">Legal</h5>
              <ul className="nav flex-column white-text">
                <li className="nav-item mb-2">Terms & Conditions</li>
                <li className="nav-item mb-2">Cookie Policy</li>
                <li className="nav-item mb-2">Privacy</li>
              </ul>
            </div>
          </div>

          <div className="col mb-3">
            <h5 className="white-text">We deliver to:</h5>
            <ul className="nav flex-column white-text">
              <li className="nav-item mb-2">Banglore</li>
              <li className="nav-item mb-2">Hyderabad</li>
              <li className="nav-item mb-2">Uttarakhand</li>
              <li className="nav-item mb-2">Pune</li>
              <select value={selectedCity} onChange={handleCityChange}>
                <option value="" disabled hidden>
                  Other cities
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </ul>
          </div>
        </footer>
      </div>
    </div>
    /*
    <div class="footer">
      <div class="container foot">
        <footer
          class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top"
          style={{ marginBottom: "0" }}
        >
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <p class="text-body-secondary">© 2024</p>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
    */
  );
};

export default Footer;
