import React from 'react';



function Stakeholder() {
    return (
        <div className="row pl-5 pt-4">



            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Stakeholder</h5>

                        </div>
                        <div class="modal-body">

                            <div className="row pr-3 pl-3">
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Vendor Name</label>
                                    <input type="text" class="form-control readonly " id="exampleFormControlInput1" placeholder="Vendor Name"  ></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="exampleFormControlSelect1">Type Vendor</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Address</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Address"  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Client Names</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Description"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Business Registration</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Business Registration"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> TIN</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="TIN"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Swift Adress</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Description"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Payment Due</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Description"  ></input>
                                </div>

                            </div>
                            <hr></hr>
                            <h5 className="pb-3">Contacts Detail</h5>
                            <div className="row pr-3 pl-3">
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Name</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Name"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Designation</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Designation"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Contact No</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Designation"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Email</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Email"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Other Contact</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Email"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Company</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Email"  ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="exampleFormControlSelect1">Sysytem Access</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> System User Name</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Email"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Access Type</label>
                                    <input type="email" class="form-control readonly " id="exampleFormControlInput1" placeholder="Email"  ></input>
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
                            <button type="button" class="btn btn-line-primary-bridge " data-toggle="modal" data-target=".bd-example-modal-lg" >Add  Stakeholder</button>
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

export default Stakeholder;

