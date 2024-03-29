import React from 'react';
import '../Components/Client.css';


function Client() {
    return (
        <div className="row pl-5 pt-4">



            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Client</h5>

                        </div>
                        <div class="modal-body">

                            <div className="row pr-3 pl-3">

                                <div className="col-6 form-box mt-2">
                                    <label for="">Client ID</label>
                                    <input type="email" class="form-control  " id="" placeholder="Client ID" readOnly ></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="">Client Name</label>
                                    <input type="email" class="form-control" id="" placeholder="Client Name"></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="">Client Address</label>
                                    <input type="email" class="form-control" id="" placeholder="Client Address"></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="">Client Contact Details</label>
                                    <input type="email" class="form-control" id="" placeholder="Client Contact Details"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">VAT</label>
                                    <input type="email" class="form-control" id="" placeholder="VAT"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">TIN</label>
                                    <input type="email" class="form-control" id="" placeholder="TIN"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Business Registration Number</label>
                                    <input type="email" class="form-control" id="" placeholder="Business Registration Number"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Contact Number</label>
                                    <input type="email" class="form-control" id="" placeholder="Contact Number"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="exampleFormControlSelect1">Demurrages Category</label>
                                        <select class="form-control" id="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>


                            </div>

                            <hr>
                            </hr>
                            <h5 className="pb-3">Attachment</h5>
                            <div className="row pr-3 pl-3">
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Description</label>
                                    <input type="email" class="form-control" id="" placeholder="Description"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Type</label>
                                    <input type="email" class="form-control" id="" placeholder="Type"  ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">

                                    <label for="">Attachment</label>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile"></input>
                                        <label class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Remarks</label>
                                    <input type="email" class="form-control" id="" placeholder="Remarks"  ></input>
                                </div>
                            </div>
                            <hr></hr>
                            <h5 className="pb-3">Contact</h5>
                            <div className="row pr-3 pl-3">

                                <div className=" col-6 form-box mt-2">
                                    <label for="">Contact Name</label>
                                    <input type="email" class="form-control" id="" placeholder="Contact Name"  ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Designation</label>
                                    <input type="email" class="form-control" id="" placeholder="Designation" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Contact Number</label>
                                    <input type="email" class="form-control" id="" placeholder="Contact Number" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Email</label>
                                    <input type="email" class="form-control" id="" placeholder="Email" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Other Contact Details</label>
                                    <input type="email" class="form-control" id="" placeholder="Other Contact Details" ></input>
                                </div>
                            </div>

                            <hr></hr>
                            <h5 className="pb-3">Entity</h5>
                            <div className="row pr-3 pl-3">

                                <div className=" col-6 form-box mt-2">
                                    <label for="">Entity Name</label>
                                    <input type="email" class="form-control" id="" placeholder="Entity Name"  ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Address</label>
                                    <input type="email" class="form-control" id="" placeholder="Address" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Tax Identification Number</label>
                                    <input type="email" class="form-control" id="" placeholder="Tax Identification Number" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">VAT Number</label>
                                    <input type="email" class="form-control" id="" placeholder="VAT Number" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Business Registration Number</label>
                                    <input type="email" class="form-control" id="" placeholder="Business Registration Number" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="exampleFormControlSelect1">Status</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <hr></hr>
                            <h5 className="pb-3">Type of export</h5>
                            <div className="row pr-3 pl-3">
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Type of export</label>
                                    <input type="email" class="form-control" id="" placeholder="Type of export" ></input>
                                </div>
                            </div>

                            <hr></hr>
                            <h5 className="pb-3">Export Category</h5>
                            <div className="row pr-3 pl-3">
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Export Category</label>
                                    <input type="email" class="form-control" id="" placeholder="Export Category" ></input>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-primary-bridge-close" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary-bridge ">Save </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-11 table-wraper">
                <div className="">
                    <div className="col-12 form-box mt-2 mb-4">
                        <div className="float-right">
                            <button type="button" class="btn btn-line-primary-bridge " data-toggle="modal" data-target=".bd-example-modal-lg" >Add Client</button>
                        </div>
                    </div>
                    <table class="table table-hover">
                        <thead class="material-table-th">
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
                <nav aria-label="Page navigation">
                    <ul class="pagination float-right mt-2 mb-0">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}

export default Client;

