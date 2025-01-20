import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import "bootstrap-icons/font/bootstrap-icons.css";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";


import Dropdown from "./Dropdown";

function Sidebar() {
  const [content, setContent] = useState("Home");
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const email = location.state;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState([
    { name: "Home", icon: "bi-house-door" },
    { name: "Products", icon: "bi-cart" },
    { name: "Contact", icon: "bi-envelope" },
    { name: "Profile", icon: "bi-person" },
    { name: "About", icon: "bi-info-circle" },
  ]);




  {/* Function to handle the click event on the sidebar items */ }
  const handleClick = (name) => {
    const selectedItem = name.trim(); // Get the clicked item's text
    setContent(selectedItem);
    setActiveItem(selectedItem);
    setIsMenuOpen(false);
  };






 
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);

  };

  // const styleBg=()=>{
  //   return isDarkMode  ? 
  //   {
  //     backgroundColor: "rgb(51, 8, 82)",
  //     color: "white",
  //     transition: "all 0.3s ease",
  //   } : {
  //     backgroundColor: "black",
  //     color: "white",
  //     transition: "all 0.3s ease",
  //   }
  // };


  const getListItemStyle = (item) => {
    return item === activeItem
      ? {
        backgroundColor: "white",
        color: "rgb(51, 8, 82)",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "5px",
      }



      : { color: "white", cursor: "pointer", padding: "10px" };
  };

  const toggleMenuSidebar = () => {
    setIsMenuOpen(!isMenuOpen);


  };

  {/* Custom Context Menu */ }
  const [contextMenu, setContextMenu] = useState(null); // To track the context menu position

  // Function to handle right-click
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default browser context menu
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Function to close the custom menu
  const handleCloseMenu = () => {
    setContextMenu(null);
  };





  return (
    <div className="container-fluid p-0 bg-light"
      onContextMenu={handleContextMenu} // Override right-click
      onClick={handleCloseMenu} // Close the menu on click anywhere
    >

      {contextMenu && (
        <div
          style={{
            position: "absolute",
            top: `${contextMenu.y}px`,
            left: `${contextMenu.x}px`,
            backgroundColor: " rgb(188, 243, 5)",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            borderRadius: "5px",
            zIndex: 1000,
            padding: "10px",
            width: "200px",
          }}
        >
          <ul
            className="list-unstyled m-0"
            style={{ padding: "0", margin: "0", cursor: "pointer" }}
          >
            <li
              className="p-2"
              style={{ borderBottom: "1px solid #ddd" }}
              onClick={()=>handleClick( "Home")}
            >
              Home
            </li>
            <li
              className="p-2"
              style={{ borderBottom: "1px solid #ddd" }}
              onClick={()=>handleClick("Products")}
            >
              Products
            </li>
            <li
              className="p-2"
              onClick={()=>handleClick("About")}
            >
              About
            </li>
          </ul>
        </div>
      )}
      {/* Static Sidebar */}
      <div
        className="position-fixed d-flex flex-column align-items-center"
        style={{
          top: 0,
          left: 0,
          height: "100vh",
          width: "60px",
          backgroundColor: "rgb(51, 8, 82)",
          zIndex: isMenuOpen ? 0 : 1050, // Lower z-index when menu sidebar is open
          transition: "z-index 2s ease",
          borderRight: "2px solid white",
        }}

      >
        <h1 className="d-flex pt-3 pb-3" style={{ fontFamily: "serif", color: "white", fontSize: "15px" }}>
          shopify
        </h1>
        {items.map((item) => (
          <button
            key={item.name}
            type="button"
            className="btn p-3"
            onClick={() => handleClick(item.name)}
            style={{
              color: activeItem === item.name ? "rgb(51 8 82)" : "white",
              background: activeItem === item.name ? "white" : "rgb(51, 8, 82)",
              border: "none",
              fontSize: "1rem",
            }}
          >
            <i className={`bi ${item.icon}`}></i>
          </button>
        ))}
      </div>

      {/* Collapsible Header */}
      <div
        className="container vh-10 p-0 d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: isDarkMode ? "black" : "rgb(51, 8, 82)",
          color: "white",
          maxWidth: "100%",
        }}

      >

        {/* Menu */}
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar"
          onClick={toggleMenuSidebar}
          style={{
            left: "80px",
            position: "absolute",
            backgroundColor: "#33085200",
            color: "white",
            border: "none",
            fontSize: "1.8rem"
          }}
        >
          <i className="bi bi-list"></i>
        </button>
        <h1 className="d-flex" style={{ fontFamily: "Jokerman" }}>
          shopify <i className="bi bi-shop"></i>
        </h1>

        <button
          className="btn btn-primary p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasProfilebar"
          aria-controls="offcanvasProfilebar"
          style={{
            right: "30px",
            position: "absolute",
            backgroundColor: "rgba(51, 8, 82, 0)",
            color: "white",
            border: "none",
            fontSize: "1.5rem"
          }}
        >
          <i className="bi bi-person-circle"

          ></i>
        </button>

        <Dropdown></Dropdown>

      </div>





      {/* Render Content */}
      {content === "Home" && <Home />}
      {content === "About" && <About />}
      {content === "Products" && <Product />}
      {content === "Profile" && <Profile email={email} />}

      {/* Collapsible Profilebar */}

      <div
        className="offcanvas offcanvas-end "
        tabIndex="-1"
        id="offcanvasProfilebar"
        aria-labelledby="offcanvasSidebarLabel"
        style={{
          backgroundColor: "rgb(51, 8, 82)",
          width: "300px",
          zIndex: 1100, // Higher z-index for menu sidebar
          height: "30%"
        }}
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title"
            id="offcanvasSidebarLabel"
            style={{ color: "white", fontFamily: "Georgia, serif" }}
          >
            Your Profile
          </h5>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li
              style={{ color: "white", cursor: "pointer", padding: "10px" }}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => { setContent("Profile"); setActiveItem("Profile") }}

            >

              <i className="bi bi-gear" style={{ paddingRight: "20px" }}></i>
              Profile
              Settings</li>

            {/* Dark Mode */}

            <li className="d-flex align-items-center ">


              <div
                className="d-flex align-items-center"
                style={{
                  width: "60px",
                  height: "20px",
                  backgroundColor: isDarkMode ? "#333" : "#ddd",
                  borderRadius: "20px",
                  padding: "5px",
                  cursor: "pointer",
                  justifyContent: isDarkMode ? "flex-end" : "flex-start",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                }}
                onClick={toggleMode}
              >
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                ></div>
              </div>
              <p style={{ color: "white", paddingTop: "10px", paddingLeft: "5px" }}> Dark Mode</p>
            </li>

          </ul>
        </div>




      </div>

      {/* Collapsible Sidebar */}
      <div
        className={`offcanvas offcanvas-start ${isMenuOpen === true ? "show" : ""} `}
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
        style={{
          backgroundColor: "rgb(51, 8, 82)",
          width: "300px",
          zIndex: 1100, // Higher z-index for menu sidebar
        }}
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title"
            id="offcanvasSidebarLabel"
            style={{ color: "white", fontFamily: "Georgia, serif" }}
          >
            shopify
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleMenuSidebar}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            {items.map((item) => (
              <li
                key={item.name}
                style={getListItemStyle(item.name)}
                onClick={() => handleClick(item.name)}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i
                  className={`bi ${item.icon}`}
                  style={{ paddingRight: "20px" }}
                ></i>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
