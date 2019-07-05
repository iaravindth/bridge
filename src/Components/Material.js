import React from 'react';
import '../Components/Material.css';


function Material() {
    return (
        <div className="row pl-5 pt-3">
            <div className="col-11 pl-0" ><h4 className="pt-3 tile-txt">Create Material</h4></div>
            <div className="col-5 form-box mt-2">
                <label for="exampleFormControlInput1">Client Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Client Name"></input>
            </div>

            <div className=" col-5 form-box mt-2">
                <label for="exampleFormControlInput1">Business Registration Number</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Business Registration Number"></input>
            </div>

            <div className="col-10 form-box mt-2">
                <label for="exampleFormControlInput1">Client Address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Client Address"></input>
            </div>

            <div className=" col-5 form-box mt-2">
                <label for="exampleFormControlInput1">VAT</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="VAT"></input>
            </div>

            <div className="col-5 form-box mt-2">
                <label for="exampleFormControlInput1">TIN</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="TIN"></input>
            </div>

            <div className="col-10 form-box mt-2">
           <div className="float-right">
            <button type="button" class="btn btn-primary-bridge " href="./Dashboard" >Save</button>
            </div>
            </div>

            

        </div>

    );
}

export default Material;

