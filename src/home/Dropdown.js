import React from 'react'
import { Drive, Gemini, Gmail, GMap, google, YouTube } from "../imgurl";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import "../MenuBar.css";

const Dropdown = () => {
      const [apps, setApps] = useState([
        { name: "Account", icon: "icon-placeholder.png", url: "https://www.google.com/" },
        { name: "Google", icon: google, url: "https://www.google.com/" },
        { name: "Maps", icon: GMap, url: "https://g.co/kgs/WG2pw4r" },
        { name: "YouTube", icon: YouTube, url: "https://www.youtube.com/" },
        { name: "Gemini", icon: Gemini, url: "https://gemini.google.com/" },
        { name: "Gmail", icon: Gmail, url: "https://mail.google.com/" },
        { name: "Drive", icon: Drive, url: "https://drive.google.com/" },
        { name: "Contacts", icon: "icon-placeholder.png", url: "www.google.com" },
        { name: "Chat", icon: "icon-placeholder.png", url: "www.google.com" },
        { name: "Meet", icon: "icon-placeholder.png", url: "www.google.com" },
      ]);

      
  const [draggedItem, setDraggedItem] = useState(null);
      
  const handleDragStart = (e, app) => {
    setDraggedItem(app); // Store the dragged item/

  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    // Remove the dragged item from its original position
    const updatedItems = apps.filter((item) => item.name !== draggedItem.name);

    // Insert the dragged item at the new position
    updatedItems.splice(dropIndex, 0, draggedItem);

    // Update the items state
    setApps(updatedItems);

    // Clear dragged item state
    setDraggedItem(null);
  };

  return (
    
    
    <div className="dropdown d-flex justify-content-center align-items-center" style={{ position: "absolute", right: "5%" ,paddingTop:"0dx"}}>
          
         
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
              style={{ width: "300px", height: "350px" }}
            >
              <div
                className="row row-cols-3 g-3 p-3 custom-scroll"
                style={{
                  height: "320px",
                  overflowY: "scroll",
                }}
              >
                {apps.map((app, index) => (
                  <div
                    className="col text-center custom-scroll draggable-item" 
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, app)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, index)}
  
  
                  >
                    <a href={app.url} target="_parent" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="img-fluid"
                        style={{
                          maxWidth: "50px",
                          minWidth: "50px",
                          maxHeight: "50px",
                          minHeight: "50px",
                          cursor: "grab",
                        }}
                      />
                      <p className="mt-2" >{app.name}</p>
                    </a>
                  </div>
                ))}
              </div>
  
            </ul>
       
      
    </div>
  )
}

export default Dropdown
