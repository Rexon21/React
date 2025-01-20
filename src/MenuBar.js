import React, { useState } from 'react';

import './MenuBar.css'; // Ensure you have relevant styles here
import 'bootstrap/dist/css/bootstrap.min.css';
import { YouTube } from './imgurl';


const MenuBar = () => {
 

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 p-3">
    {/* Navbar */}
    <nav className="d-flex justify-content-between align-items-center">
      <h1 className="text-white">My App</h1>
      {/* Dropdown Button */}
      <div className="dropdown">
        <button
          className="btn btn-secondary  text-white "
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false" 
          style={{ backgroundColor: "rgba(245, 244, 247, 0)", border: "none" }}
        >
         <i class="bi bi-grid-3x3-gap-fill"></i>
        </button>
        {/* Dropdown Menu */}
        <ul
          className="dropdown-menu dropdown-menu-dark custom-dropdown"
          aria-labelledby="dropdownMenuButton"
          style={{ width: "300px", height: "500px"}}
        >
          <div className="row row-cols-3 g-3 p-3 " style={{ height: "500px", overflowY: "scroll"
           }}>
            {[
              { name: "Account", icon: "icon-placeholder.png" },
              { name: "Search", icon: "icon-placeholder.png" },
              { name: "Maps", icon: "icon-placeholder.png" },
              { name: "YouTube", icon: YouTube },
              { name: "News", icon: "icon-placeholder.png" },
              { name: "Gmail", icon: "icon-placeholder.png" },
              { name: "Drive", icon: "icon-placeholder.png" },
              { name: "Contacts", icon: "icon-placeholder.png" },
              { name: "Chat", icon: "icon-placeholder.png" },
              { name: "Meet", icon: "icon-placeholder.png" },
            ].map((app, index) => (
              <div className="col text-center custom-scroll" key={index}>
                <img
                  src={app.icon}
                  alt={app.name}
                  className="img-fluid"
                  style={{ maxWidth: "50px",minWidth:"50px", maxHeight: "50px",minHeight:"50px" }}
                />
                <p className="mt-2">{app.name}</p>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default MenuBar;

