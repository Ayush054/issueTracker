//import { Switch } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({darkTheme, setDarkTheme}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="/home">
            <img
              src="https://st2.depositphotos.com/2100659/6870/v/950/depositphotos_68708405-stock-illustration-letter-a-vector-logo-concept.jpg"
              height="35"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Register">
                Register
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Track">
                Track
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Issues">
                Add Issues
              </NavLink>
            </li>
            
            {/* <li class="nav-item">
              <Switch checked={darkTheme} onChange={(e, v)=> {setDarkTheme(v) }} ></Switch>
            </li> */}
          </ul>
        </div>

        <div class="d-flex align-items-center">
         
         
          <div class="dropdown">
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
              <Link className="dropdown-item" to="#">
                   My profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Settings
                </Link>
              </li>
              <li>
              <Link className="dropdown-item" to="#">
                   Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
