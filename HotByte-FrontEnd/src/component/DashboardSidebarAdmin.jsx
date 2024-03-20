import React from "react";
import { Link } from "react-router-dom";
import LOGO from "/LOGO.png";

const DashboardSidebarAdmin = () => {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
      style={{ width: "280px", minHeight: "800px" }}
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src={LOGO} alt="" style={{ height: "40px", margin: " 0 25px" }} />
        <span class="fs-4">HotByte</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <Link to={"/admin"} class="nav-link active" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Home
          </Link>
        </li>
        <li>
          <Link to={"register-hotel"} class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#table"></use>
            </svg>
            Register Hotel
          </Link>
        </li>
        <li>
          <Link to={"View-Hotel"} class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#table"></use>
            </svg>
            <strong>View Hotels</strong>
          </Link>
        </li>
        <li>
          <Link to={"View-User"} class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#table"></use>
            </svg>
            <strong>View Users</strong>
          </Link>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu text-small shadow">
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebarAdmin;
