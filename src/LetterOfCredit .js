import React from 'react';



function LetterOfCredit() {
    return (
        <div className="row pl-5 pt-4">



            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Letter Of Credit</h5>

                        </div>
                        <div class="modal-body">

                            <div className="row pr-3 pl-3">

                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Client PO Number</label>
                                    <input type="text" class="form-control readonly " id="" placeholder="Client PO Number" disabled ></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">PO Number</label>
                                    <input type="text" class="form-control" id="" placeholder="PO Number" disabled></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Supplier</label>
                                    <input type="text" class="form-control" id="" placeholder="Supplier" disabled></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Supplier PI / Agreementnumber</label>
                                    <input type="text" class="form-control" id="" placeholder="Supplier PI / Agreementnumber" ></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Amount</label>
                                    <input type="text" class="form-control" id="" placeholder="Amount" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Incoterm</label>
                                    <input type="text" class="form-control" id="" placeholder="Incoterm" disabled></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Remitting Bank (Local)</label>
                                    <input type="text" class="form-control" id="" placeholder="Remitting Bank (Local)" disabled></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Benificiary Bank</label>
                                    <input type="text" class="form-control" id="" placeholder="Benificiary Bank" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">LC Date</label>
                                    <input type="text" class="form-control" id="" placeholder="LC Date" ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Expiry Date</label>
                                    <input type="text" class="form-control" id="" placeholder="Expiry Date" ></input>
                                </div>
                           
                            </div>

                            <hr>
                            </hr>
                            <h5 className="pb-3">Attachment</h5>
                            <div className="row pr-3 pl-3">
                            <div className=" col-6 form-box mt-2">

<label for="exampleFormControlInput1">Attachment</label>
<div class="custom-file">
<input type="file" class="custom-file-input" id="customFile"></input>
<label class="custom-file-label" for="customFile">Choose file</label>
</div>
</div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Reference</label>
                                    <input type="email" class="form-control" id="exampleormControlInput1" placeholder="Document Name" disabled ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="exampleFormControlSelect1">Type</label>
                                        <select class="form-control" id="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Posting Data Time</label>
                                    <input type="email" class="form-control" id="" placeholder="Posting Data Time"  ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Payment Transfer Date</label>
                                    <input type="email" class="form-control" id="" placeholder="Payment Transfer Date"  ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1"> Completing Date</label>
                                    <input type="email" class="form-control" id="" placeholder=" Completing Date"  ></input>
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
                            <button type="button" class="btn btn-line-primary-bridge " data-toggle="modal" data-target=".bd-example-modal-lg" >Add</button>
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

export default LetterOfCredit;

