import React from 'react';
import bridge from '../img/BRIDGE.svg'
import '../Components/Login.css';



function Login() {
  return (
    <div className="container ">
      <div className="row justify-content-center align-self-center ">
        <div className="col-lg-6 mx-auto pb-5 pt-5">
<div className="row">
<div className="col-lg-12">
<img src={bridge} className="mx-auto d-block mb-5" ></img></div>
  <div className="col-lg-6">
        <div className="form-group">
          <label >User Name</label>
          <input type="text" className="form-control" id="" placeholder="User Name"></input>
        </div>

        <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control" id="" placeholder="Password"></input>
        </div>
        <div className="form-group">
          <label >Retype Password</label>
          <input type="password" className="form-control" id="" placeholder="Retype Password"></input>
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type="email" className="form-control" id="" placeholder="Email"></input>
        </div>
       
          </div>
          <div className="col-lg-6">
          <div className="form-group">
          <label >First Name</label>
          <input type="test" className="form-control" id="" placeholder="First Name"></input>
        </div>
        <div className="form-group">
          <label >Last Name</label>
          <input type="test" className="form-control" id="" placeholder="Last Name"></input>
        </div>
        <div className="form-group">
          <label >Contact Number</label>
          <input type="test" className="form-control" id="" placeholder=" Contact Number"></input>
        </div>
        <div className="form-group">
          <label >Company Name</label>
          <input type="test" className="form-control" id="" placeholder=" Company Name"></input>
        </div>
          </div>
          </div>
          <div className="col-lg-12 p-0">
        <button type="button" class="btn btn-primary-bridge btn-block mt-5" href="./Dashboard" >Sign Up</button>
        <div className="mx-auto text-center pt-2">
          <p className="d-inline">Don’t have an account </p><a href="./Dashboard">Sign In</a>
          </div>
</div>
        </div>
        </div>
    </div>


  );
}

export default Login;