import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomContextMenu() {
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
    <div
      className="container-fluid"
      style={{
        height: "100vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onContextMenu={handleContextMenu} // Override right-click
      onClick={handleCloseMenu} // Close the menu on click anywhere
    >
      <h1>Right-Click Anywhere to See the Custom Menu</h1>

      {/* Custom Context Menu */}
      {contextMenu && (
        <div
          style={{
            position: "absolute",
            top: `${contextMenu.y}px`,
            left: `${contextMenu.x}px`,
            backgroundColor: "#fff",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            borderRadius: "5px",
            zIndex: 1000,
            padding: "10px",
          }}
        >
          <ul
            className="list-unstyled m-0"
            style={{ padding: "0", margin: "0", cursor: "pointer" }}
          >
            <li
              className="p-2"
              style={{ borderBottom: "1px solid #ddd" }}
              onClick={() => alert("Option 1 clicked!")}
            >
              Option 1
            </li>
            <li
              className="p-2"
              style={{ borderBottom: "1px solid #ddd" }}
              onClick={() => alert("Option 2 clicked!")}
            >
              Option 2
            </li>
            <li
              className="p-2"
              onClick={() => alert("Option 3 clicked!")}
            >
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CustomContextMenu;
