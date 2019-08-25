import React from 'react';



function Advancepayment () {
    return (
        <div className="row pl-5 pt-4">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Advance Payment</h5>
                        </div>
                        <div class="modal-body">

                            <div className="row pr-3 pl-3">
                            <div className="col-6 form-box mt-2">
                                    <label for=""> Supplier</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Supplier ID"  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Supplier PI Number</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Supplier PI Number"  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Amount</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Amount"  ></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="exampleFormControlSelect1">Remitting Bank</label>
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
                                        <label for="">Bank Name</label>
                                        <select class="form-control" id="">
                                            <option>Active</option>
                                            <option>2</option>
                                            
                                        </select>
                                    </div>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Bank Address</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Bank Address"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for=""> Payment Date</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Payment Date"  ></input>
                                </div>
                                <div className="col-6 form-box mt-2">
                                    <label for=""> Remittence Reference</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Remittence Reference"  ></input>
                                </div>

                            </div>
                            <hr></hr>
                            <h5 className="pb-3">PO</h5>
                            <div className="row pr-3 pl-3">

                            <div className="col-6 form-box mt-2">
                                    <label for=""> Client Purchase Order Number</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Client Purchase Order Number"  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for="">Purchase Order </label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Purchase Order "  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Line No</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Line No"  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Item</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Item"  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Line Quantity</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Line Quantity"  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Amount</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Amount"  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Received Amount</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Received Amount"  ></input>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Remaining Amount</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Remaining Amount"  ></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="">Incoterms</label>
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
                            <hr></hr>
                            <h5 className="pb-3">Attachment</h5>
                           
                            <div className="row pr-3 pl-3">
                            <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="">Reference</label>
                                        <select class="form-control" id="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-6 form-box mt-2">
                                    <label for=""> Uploaded Date</label>
                                    <input type="text" class="form-control readonly " id="" placeholder="Uploaded Date"  ></input>
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
                    <button type="button" class="btn btn-line-primary-bridge " data-toggle="modal" data-target=".bd-example-modal-lg" >Add Advance Payment</button>
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

export default Advancepayment;

