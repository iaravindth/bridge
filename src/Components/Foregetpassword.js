import React from 'react';
import bridge from '../img/BRIDGE.svg'
import '../Components/Login.css';



function Login() {
  return (
    <div className="container login">
      <div className="row login_inner justify-content-center align-self-center ">
        <div className="col-lg-6 mx-auto">
        <img src={bridge} className="mx-auto d-block mb-5" ></img>

     

        <div className="form-group">
          <label >Email</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"></input>
        </div>

        <button type="button" class="btn btn-primary-bridge btn-block mt-5" href="./Dashboard" >Reset</button>
        <div className="mx-auto text-center pt-2">
          <p className="d-inline">Oh! I remember now </p><a href="./Dashboard">Sign In</a>
          </div>
        </div>
        </div>
    </div>


  );
}

export default Login;
