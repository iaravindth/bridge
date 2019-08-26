import React from 'react';
import bridge from '../img/BRIDGE.svg'
import '../Components/Login.css';



function Login() {
  return (
    <div className="">
      <div className="row p-5">
        <div className="col-lg-6">
        <div className="form-group">
          <label >Company Name</label>
          <input type="test" className="form-control" id="" placeholder="Enter your Company Name" readOnly></input>
        </div>

        <div className="form-group">
          <label >User Name</label>
          <input type="text" className="form-control" id="" placeholder="Enter your User Name" readOnly></input>
        </div>

        <div className="form-group">
          <label >User ID</label>
          <input type="text" className="form-control" id="" placeholder="Enter your User ID" readOnly></input>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="form-group">
          <label >Email</label>
          <input type="email" className="form-control" id="" placeholder="Enter your email"></input>
        </div>
        <div className="form-group">
          <label >Contact Number</label>
          <input type="test" className="form-control" id="" placeholder="Enter your Contact Number"></input>
        </div>
        <hr></hr>
       
        <div className="form-group">
          <label >First Name</label>
          <input type="test" className="form-control" id="" placeholder="Enter your First Name"></input>
        </div>
        <div className="form-group">
          <label >Last Name</label>
          <input type="test" className="form-control" id="" placeholder="Enter your Last Name"></input>
        </div>
      
        </div>
        </div>
    </div>


  );
}

export default Login;
