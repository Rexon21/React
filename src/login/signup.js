import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate , Link } from "react-router-dom";
import { orangecat } from "../imgurl";



const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const nav = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [formData, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
  });


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const minLength = value.length >= 8;
    const hasSpecialChar = /[!@#$%&*]/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);

    if (!minLength || !hasSpecialChar || !hasUpperCase) {
      setPasswordError("Password must be at least 8 characters long, include a special character(!@#$%&*), and an uppercase letter.");
    } else {
      setPasswordError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords not match");
    } else {
      setError("");
    }
    if (mobile.length !== 10) {
      setMobileError("Mobile number should be 10 digits");

    } else {
      setMobileError("");
    }

    if(passwordError === "" && error === "" && mobileError === ""){

       nav("/editpage", { state: { formData } });
      // const encodedData = encodeURIComponent(JSON.stringify(formData));
      // nav(`/loginboot/${encodedData}`);
    }
  };

  return (
  
    <div className="container-fluid vh-100">
        <div className="row h-100 ">
          <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#8a9491" }}>
            <div className="p-4" style={{ maxWidth: "400px", width: "100%" }}>
              <h4 className="mb-4 text-center">CREATE YOUR ACCOUNT</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-person"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                      value={formData.fname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Last Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-person"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                      value={formData.lname}
                      onChange={handleChange}
                      
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-phone"></i></span>
                    <input
                      type="number"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      placeholder="Enter Your Mobile Number"
                      value={formData.mobile}
                      onChange={(e) => {
                        handleChange(e);
                        setMobile(e.target.value);
                      }}
                      required
                    />
                  </div>
                  {mobileError && <p className="text-danger">{mobileError}</p>}
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Username <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-person-circle"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-lock"></i></span>
                    <input
                      type={passwordVisible ? "password" :  "text"}
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        handlePasswordChange(e);
                        handleChange(e);
                      }}
                      required
                    />
                    <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                      <i className={passwordVisible ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </span>
                  </div>
                  {passwordError && <p className="text-danger">{passwordError}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-lock"></i></span>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        handleChange(e);
                      }}
                      required
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a><span className="text-danger">*</span>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-50 mx-auto d-flex align-items-center justify-content-center" style={{ backgroundColor: "#530de1" }}>
                  Sign Up
                </button>
                <p className="text-center mt-3">
                  Already have an account?<Link to="/" className="text-decoration-none">Login</Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block p-0">
            <img
              src={orangecat}
              alt="Signup"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
    </div>
    );


 
};

export default Signup;
