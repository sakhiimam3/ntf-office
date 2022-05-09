import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "../styles/signup.css";
// import axios from 'axios'

const Signup = () => {
  const Naviagte = useNavigate();
  // signp form states
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [records, setRecords] = useState([]);

  //  login form states
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [loginRecord, setloginRecord] = useState([]);

  // post functionality  of sign up form
  // const signUpRequest= async ()=>{
  //       try {
  //         const response= await axios.post("", submit )
  //       } catch (error) {
  //             console.log(error)
  //       }
  // }

  // call post request function here
  // useEffect(() => {
  //   signUpRequest()
  // }, [])

  // handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserRegistration({
      ...userRegistration,
      [e.target.name]: value,
    });
  };

  // handle sumission form
console.log(records)
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegistration };
    setRecords([...records, newRecord]);

    setUserRegistration({ username: "", email: "", password: "" });
  };

  return (
    <>
     
           <section className="sign_up-main">
            <div className=" my-5">
              <form className="signup_form" onSubmit={handleSubmit}>
                <div className="signup_logo">
                    <img className="img-fluid" src="https://thumbs.dreamstime.com/b/nft-non-fungible-token-logo-header-banner-vector-illustration-digital-art-concept-216051358.jpg" alt="" />
                </div>
                <h1> Create account</h1>
                <div className="input_fields">
                  <label className="mb-3 ">Name</label> <br />
                  <AiOutlineUser />{" "}
                  <input
                    type="text"
                    className="p-1"
                    value={userRegistration.username}
                    onChange={handleInputChange}
                    name="username"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mt-3 input_fields">
                  <label className="mb-3 ">Email</label> <br />
                  <AiOutlineMail />{" "}
                  <input
                    type="email"
                    className="p-1"
                    value={userRegistration.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div className="mt-3 input_fields">
                  <label className="mb-3 ">Password</label> <br />
                  <RiLockPasswordLine />{" "}
                  <input
                    type="password"
                    className="p-1"
                    value={userRegistration.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>

                <div className="mt-5 submit_btn text-center">
                  <button type="submit" className="btn btn-success btn-lg">
                    Submit
                  </button>
                </div>
                <div className="already_an_account my-3">
                  <span onClick={() => Naviagte("/login")}>
                    already have an account?
                  </span>
                </div>
                
              </form>
           
            </div>
       	
          </section> 
          

  
        
    </>
  );
};

export default Signup;
