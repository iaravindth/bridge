import React from 'react';
import bridge from '../img/BRIDGE.svg'
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
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                <label class="custom-control-label" for="customSwitch1">Read</label>
              </div>
            </div>
            <div className="col-lg-2">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                <label class="custom-control-label" for="customSwitch1">write</label>
              </div>
            </div>
            <div className="col-lg-2">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                <label class="custom-control-label" for="customSwitch1">Upload</label>
              </div>
            </div>
            <div className="col-lg-2">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                <label class="custom-control-label" for="customSwitch1">Create</label>
              </div>
            </div>
          </div>
        </div>
<div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
             <h5>Page Name</h5>
            </div>
            <div className="col-lg-2">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                <label class="custom-control-label" for="customSwitch1">Read</label>
              </div>
            </div>
            <div className="col-lg-2">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                <label class="custom-control-label" for="customSwitch1">write</label>
              </div>
            </div>
            <div className="col-lg-2">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                <label class="custom-control-label" for="customSwitch1">Upload</label>
              </div>
            </div>
            <div className="col-lg-2">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                <label class="custom-control-label" for="customSwitch1">Create</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Login;
