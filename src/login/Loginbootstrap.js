import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { blackcat } from "../imgurl";



const Loginbootstrap = () => {

    const navigate = useNavigate();



    const HandleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        if (email === "rexonrexon47@gmail.com" && password === "Rexon@2002") {
            alert("Login Successful");
            navigate("/home", {state:email});

        } else {
            alert("Login Failed");
        }
    };

    return (

        <div className="container-fluid vh-100">
            <div className="row h-100">

                {/* Left Side: Image */}
                <div className="col-md-6 d-none d-md-block p-0">
                    <img
                        src={blackcat}
                        alt="Login"
                        className="img-fluid w-100 h-100"
                    //style={{ objectFit: "cover" }}
                    />
                </div>

                {/* Right Side: Login Form */}
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="p-4" style={{ maxWidth: "400px", width: "100%" }}>
                        <h2 className="mb-4 text-center">Login</h2>
                        <form onSubmit={HandleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-50 mx-auto d-flex align-items-center justify-content-center" style={{ backgroundColor: "#542950" }} >
                                Login
                            </button>
                            <p className="text-center mt-3">
                                New User? <Link to="/signup" className="text-decoration-none">Register Here !!!</Link></p>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Loginbootstrap;
