import React from 'react';
import '../Components/Material.css';


function Material() {
    return (
        <div className="row pl-5 pt-4">



            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Supplier</h5>

                        </div>
                        <div class="modal-body">
                            <div className="row pr-3 pl-3">

                                <div className="col-6 form-box mt-2">
                                    <label for="">Supplier ID</label>
                                    <input type="text" class="form-control readonly " id="" placeholder="Supplier ID" readOnly ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Supplier Name</label>
                                    <input type="text" class="form-control" id="" placeholder="Supplier Name"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Supplier Address</label>
                                    <input type="text" class="form-control" id="" placeholder="Supplier Address"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="exampleFormControlSelect1">Nearest Seaport</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="exampleFormControlSelect1">Nearest Airport</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="exampleFormControlSelect1">Material Type</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Sea freight transit time</label>
                                    <input type="text" class="form-control" id="" placeholder="Sea freight transit time"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Air freight transit time</label>
                                    <input type="text" class="form-control" id="" placeholder="Air freight transit time"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Supplier's web site name</label>
                                    <input type="text" class="form-control" id="" placeholder="Supplier's web site name"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Link to supplier's catalouges</label>
                                    <input type="text" class="form-control" id="" placeholder="Link to supplier's catalouges"></input>
                                </div>
                                <div className=" col-12 form-box mt-2">
                                    <label for="">General Shipping Instructions</label>
                                    <textarea type="text" class="form-control" id="" placeholder="General Shipping Instructions"></textarea>
                                </div>
                                
                            </div>
                            <hr></hr>
                            <h5 className="pb-3">Clients</h5>
                            <div className="row pr-3 pl-3">
                            <div className=" col-6 form-box mt-2">
                                <div class="">
                                        <label for="exampleFormControlSelect1">Client Name</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className=" col-6 form-box mt-2">
                                    <label for="">Incoterm</label>
                                    <input type="text" class="form-control" id="" placeholder="Incoterm" readOnly ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Payment Terms</label>
                                    <input type="text" class="form-control" id="" placeholder="Payment Terms" readOnly></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Bank</label>
                                    <input type="text" class="form-control" id="" placeholder="Bank" readOnly></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Defualt transport mode</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        </div>
                                        <div class=" col-12 form-box"><button type="button" class="btn btn-primary-bridge-close float-right">Add another client</button></div>
                            </div>

                            <hr></hr>
                            <h5 className="pb-3">Contacts</h5>
                            <div className="row pr-3 pl-3">
                           
                                    <div className=" col-6 form-box mt-2">
                                    <label for="">Contact Person</label>
                                    <input type="text" class="form-control" id="" placeholder="Contact Person"  ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Our Client</label>
                                    <input type="text" class="form-control" id="" placeholder="Payment Terms" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Telephone</label>
                                    <input type="text" class="form-control" id="" placeholder="Telephone" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Mobile</label>
                                    <input type="text" class="form-control" id="" placeholder="Mobile" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Email</label>
                                    <input type="text" class="form-control" id="" placeholder="Email" ></input>
                                </div>
                                <div className=" col-12 form-box">
                                <button type="button" class="btn btn-primary-bridge-close float-right">Add another contact</button>
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
                            <button type="button" class="btn btn-line-primary-bridge " data-toggle="modal" data-target=".bd-example-modal-lg" >Add Supplier</button>
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

export default Material;

