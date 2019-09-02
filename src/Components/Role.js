import React from 'react';



function Role () {
    return (
        <div className="">
<div className="row pr-5 pl-5 pt-3 ">
          <div className="col-lg-12">
            <h5>Add Role</h5>
            <hr></hr>
          </div>
          <div className="col-lg-6">
          <div className="form-group">
            <label >Role Name</label>
            <input type="test" className="form-control" id="" placeholder="Enter your Role Name" readOnly></input>
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

export default Role;

