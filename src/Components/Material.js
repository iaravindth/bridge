import React from 'react';
import '../Components/Material.css';


function Material() {
    return (
        <div className="row pl-5 pt-3">
            <div className="col-11 form-box mt-2 mb-4">
                <div className="float-right">
                    <button type="button" class="btn btn-line-primary-bridge " data-toggle="modal" data-target=".bd-example-modal-lg" >Add</button>
                </div>
            </div>


            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Material</h5>

                        </div>
                        <div class="modal-body">

                            <div className="row pr-3 pl-3">

                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Client Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Client Name"></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Business Registration Number</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Business Registration Number"></input>
                                </div>

                                <div className="col-12 form-box mt-2">
                                    <label for="exampleFormControlInput1">Client Address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Client Address"></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">VAT</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="VAT"></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">TIN</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="TIN"></input>
                                </div>

                            </div>

                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-primary-bridge-close" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary-bridge ">Save </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-11">
                <table class="table">
                    <thead class="">
                        <tr>
                            <th scope="col">Colum 1</th>
                            <th scope="col">Colum 2</th>
                            <th scope="col">Colum 3</th>
                            <th scope="col">Colum 4</th>
                            <th scope="col">Colum 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>

                        </tr>
                        <tr>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                        </tr>
                        <tr>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>






        </div>

    );
}

export default Material;

