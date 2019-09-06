import React from 'react';
import '../Components/Role.css';


function Role () {
    return (
        <div className="">
<div className="row pr-5 pl-5 pt-3 ">
          <div className="col-lg-12">
         
            <div className="row">
          <div className="col-lg-3 pt-2"> <h5 >Add Role</h5></div>
          <div className="col-lg-9"> <button type="button" class="btn btn-primary-bridge float-right" href="./Dashboard">Save</button></div>
            </div>
          
            <hr></hr>
          </div>
          <div className="col-lg-6 pb-3">
          <div className="form-group">
            <label >Role Name</label>
            <input type="test" className="form-control" id="" placeholder="Enter your Role Name" ></input>
          </div>
          </div>
  
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4">
              <div class="">
                                        <label for="exampleFormControlSelect1">Page</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
              </div>
              <div className="col-lg-2 permision-item">
              <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                  <label class="custom-control-label" for="customSwitch1">Read</label>
                </div>
              </div>
              <div className="col-lg-2 permision-item">
              <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                  <label class="custom-control-label" for="customSwitch1">write</label>
                </div>
              </div>
              <div className="col-lg-2 permision-item">
              <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                  <label class="custom-control-label" for="customSwitch1">Upload</label>
                </div>
              </div>
              <div className="col-lg-2 permision-item">
              <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch"></input>
                  <label class="custom-control-label" for="customSwitch1">Create</label>
                </div>
              </div>
            </div>
            <div class=" col-12 form-box"><button type="button" class="btn btn-primary-bridge-close float-right">Add another page</button></div>
          </div>
</div>
      </div>
  
  

    );
}

export default Role;

