import React from 'react';
import '../Components/Login.css';



function Login() {
  return (
    <div className="">
      <div className="row pr-5 pl-5 pt-3  ">
        <div className="col-lg-12">
          <h5>User Info</h5>
          <hr></hr>
        </div>
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
      <div className="row pr-5 pl-5 pt-3 ">
        <div className="col-lg-12">
          <h5>User Permissions</h5>
          <hr></hr>
        </div>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
             <h5>Page Name</h5>
            </div>
            <div className="col-lg-2">
           
              <span class="badge badge-dark">Read</span>
            </div>
            <div className="col-lg-2">
          
              <span class="badge badge-secondary">write</span>
            </div>
            <div className="col-lg-2">
           
              <span class="badge badge-dark">Upload</span>
            </div>
            <div className="col-lg-2">
           
              <span class="badge badge-secondary">Create</span>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
             <h5>Page Name 2</h5>
            </div>
            <div className="col-lg-2">
           
              <span class="badge badge-dark">Read</span>
            </div>
            <div className="col-lg-2">
          
              <span class="badge badge-dark">write</span>
            </div>
            <div className="col-lg-2">
           
              <span class="badge badge-dark">Upload</span>
            </div>
            <div className="col-lg-2">
              <span class="badge badge-secondary">Create</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Login;
