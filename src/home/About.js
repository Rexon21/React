import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div style={{ backgroundColor: "#f4f3fc", minHeight: "100vh", padding: "20px" }}>
      {/* About Section */}
      <div className="container">
        <h1 className="text-center mb-4" style={{ color: "rgb(51, 8, 82)", fontFamily: "serif" }}>
          About Us
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
          Welcome to Shopify, your trusted destination for online shopping. Our mission is to deliver the best
          shopping experience by providing a diverse selection of quality products at competitive prices.
          We are passionate about connecting customers with products they love and aim to make every
          interaction delightful and hassle-free.
        </p>

        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
          Established in 2025, Shopify has grown into a platform that values customer satisfaction and
          innovation. Our team works tirelessly to bring you the latest trends and timeless essentials,
          ensuring there is something for everyone. Thank you for being a part of our journey.
        </p>

        {/* Vision and Mission Section */}
        <div className="row mt-5">
          <div className="col-md-6">
            <h3 style={{ color: "rgb(51, 8, 82)", fontFamily: "serif" }}>Our Vision</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
              To be a global leader in e-commerce by building a community-driven platform where customers can
              discover, shop, and share their favorite products with ease and confidence.
            </p>
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "rgb(51, 8, 82)", fontFamily: "serif" }}>Our Mission</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
              To empower our customers with a seamless shopping experience, leveraging cutting-edge technology
              and exceptional customer service, while fostering sustainable and ethical business practices.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-5">
          <h2 className="text-center mb-4" style={{ color: "rgb(51, 8, 82)", fontFamily: "serif" }}>
            Meet Our Team
          </h2>
          <div className="row g-4">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="col-sm-6 col-md-3 text-center">
                  <img
                    src={`https://via.placeholder.com/150?text=Team+Member+${index + 1}`}
                    className="rounded-circle mb-3"
                    alt={`Team Member ${index + 1}`}
                  />
                  <h5 style={{ color: "rgb(51, 8, 82)", fontWeight: "bold" }}>Member {index + 1}</h5>
                  <p style={{ fontSize: "0.9rem", color: "#555" }}>Position {index + 1}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-white py-4 mt-5" style={{ backgroundColor: "rgb(51, 8, 82)" }}>
          <p className="mb-0">&copy; 2025 Shopify. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default About;
