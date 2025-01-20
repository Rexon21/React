import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Sidebar";


function Home() {
  return (
    <div style={{ backgroundColor: "#f4f3fc" }}>
      {/* Header / Navbar */}
      {/* <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(51, 8, 82)" }}
      >
        <div className="container">
          <a
            className="navbar-brand text-white"
            href="#"
            style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "serif" }}
          >
            Shopify
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* Banner */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "50vh",
          background:"rgb(51, 8, 82)",
           padding: "0 15px", border: "2px solid rgb(253, 247, 247)"
         
        }}
      >
        <div className="text-center text-white">
          <h1 style={{ fontWeight: "bold", fontSize: "3rem", fontFamily: "serif", color:"#fdff00"}}>
            Welcome to Shopify
          </h1>
          <p style={{ fontSize: "1.5rem" }}>Your one-stop shop for everything!</p>
          <a
            href="#products"
            className="btn btn-light mt-3"
            style={{ color: "rgb(51, 8, 82)", fontWeight: "bold" }}
            // onClick={()=>Sidebar.handleClick("Products")
            // }
          >

            Shop Now
          </a>
        </div>
      </div>

      {/* Featured Products */}
      <div id="products" className="container my-5">
        <h2 className="text-center mb-4" style={{ color: "rgb(51, 8, 82)" }}>
          Featured Products
        </h2>
        <div className="row g-4">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="col-sm-6 col-md-4">
                <div
                  className="card"
                  style={{
                    border: "none",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={`https://via.placeholder.com/300x200?text=Product+${index + 1}`}
                    className="card-img-top"
                    alt={`Product ${index + 1}`}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Product {index + 1}</h5>
                    <p className="card-text">$19.99</p>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "rgb(51, 8, 82)",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4" style={{ color: "rgb(51, 8, 82)" }}>
          Shop by Category
        </h2>
        <div className="row g-4">
          {["Electronics", "Fashion", "Home", "Books", "Beauty", "Toys"].map(
            (category, index) => (
              <div key={index} className="col-sm-6 col-md-4">
                <div
                  className="card text-center"
                  style={{
                    border: "none",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={`https://via.placeholder.com/300x200?text=${category}`}
                    className="card-img-top"
                    alt={category}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                    <a
                      href="#"
                      className="btn"
                      style={{
                        backgroundColor: "rgb(51, 8, 82)",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-center text-white py-4"
        style={{ backgroundColor: "rgb(51, 8, 82)" }}
      >
        <p className="mb-0">&copy; 2025 Shopify. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
