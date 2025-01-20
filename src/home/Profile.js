import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile({email}) {
  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <div
        className="card shadow-sm"
        style={{ borderRadius: "10px", backgroundColor: "#f8f9fa" }}
      >
        <div className="card-header text-center" style={{ backgroundColor: "rgb(51, 8, 82)", color: "white" }}>
          <h2>My Profile</h2>
        </div>
        <div className="card-body">
          <div className="text-center mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Avatar"
              className="rounded-circle"
              style={{ width: "150px", height: "150px" }}
            />
          </div>

          <h5 className="text-center mb-4">Rexon</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Email:</strong> {email}
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li className="list-group-item">
              <strong>Address:</strong> 123 Main St, Springfield, USA
            </li>
          </ul>

          <div className="text-center mt-4">
            <button className="btn btn-primary me-2" style={{ backgroundColor: "rgb(51, 8, 82)", border: "none" }}>
              Edit Profile
            </button>
            <button className="btn btn-secondary">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
