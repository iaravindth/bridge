import React from 'react';
import '../Components/Accept_User.css';


function AcceptUser() {
  return (
    <div className="">
      <div className="row pr-5 pl-5 pt-3 ">
        <div className="col-lg-12 user_row">
            <div className="row ">
              <div className="col-lg-8 user-name">
                <div className="">User name 1</div>
            </div>
              <div className="col-lg-4">
              <div className="float-right">
              <button type="button" class="btn btn-primary-bridge mr-2" data-toggle="modal" data-target=".bd-example-modal-lg2">Activate</button>
              <button type="button" class="btn btn-primary-bridge-dark">Reject</button>
              </div>
              </div>
            </div>

        </div>
        <div className="col-lg-12 user_row mt-3">
         

         <div className="row ">
           <div className="col-lg-8 user-name">
             <div className="">User name 2 </div>
         </div>
           <div className="col-lg-4">
           <div className="float-right">
           <button type="button" class="btn btn-primary-bridge mr-2"  data-toggle="modal" data-target=".bd-example-modal-lg2">Activate</button>
           <button type="button" class="btn btn-primary-bridge-dark">Reject</button>
           </div>
           </div>
         </div>
         <div class="modal fade bd-example-modal-lg2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Accept User1</h5>
                        </div>
                        <div class="modal-body">
                            <div className="row pr-3 pl-3">
                             
                          
                            </div>
           
                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-primary-bridge-close" data-dismiss="modal">Reject</button>
                            <button type="button" class="btn btn-primary-bridge ">Activate </button>
                        </div>
                    </div>
                </div>
            </div>

     </div>
      </div>
    </div>



  );
}

export default AcceptUser;

