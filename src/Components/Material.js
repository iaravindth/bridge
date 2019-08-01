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
                                    <label for="exampleFormControlInput1">Material ID</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Material ID"></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Material Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Material Name"></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <div class="form-group">
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
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Material Origin</label>
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
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Unit of Measure </label>
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
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Unit of Measure </label>
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
                                    <label for="exampleFormControlSelect1">Unit of Measure </label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                        <label class="form-check-label" for="exampleRadios1">
                                            yes</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                                        <label class="form-check-label" for="exampleRadios2">
                                            No</label>
                                    </div>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Cargo Type </label>
                                        <select class="form-control" id="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" col-12 form-box mt-2">
                                    <hr></hr>
                                    <h5 className="pb-3">HS Code</h5>
                                    <div className="row">

                                        <div className=" col-6">
                                            <label for="exampleFormControlInput1">Client Name</label>
                                            <input type="email" class="form-control" id="" placeholder="Material ID"></input>

                                        </div>

                                        <div className=" col-6">
                                            <label for="exampleFormControlInput1">HS Code</label>
                                            <input type="email" class="form-control" id="" placeholder="Material ID"></input>

                                        </div>

                                        <div className=" col-6">
                                            <div class="form-group">
                                                <label for="exampleFormControlSelect1">Priority</label>
                                                <select class="form-control" id="">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className=" col-12 form-box mt-2">
                                    <hr></hr>
                                    <h5 className="pb-3">Regulatory Approval</h5>
                                    <div className="row">
                                        <div className=" col-12">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Reference / Test <span className="float-right"> Master Data</span> </li>
                                                <li class="list-group-item">Aproval Obtaining Stage <span className="float-right"> Master Data</span> </li>
                                                <li class="list-group-item">Institute Name <span className="float-right"> Master Data</span></li>
                                                <li class="list-group-item">Sample Required <span className="float-right"> Master Data</span></li>
                                                <li class="list-group-item">Release Time Days <span className="float-right"> Master Data</span> </li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>

                                <div className=" col-12 form-box mt-2">
                                    <hr></hr>
                                    <h5 className="pb-3">Trade Agreements</h5>
                                    <div className="row">
                                        <div className=" col-12">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Agreement Type <span className="float-right"> Agreement Type Data</span> </li>
                                                <li class="list-group-item">Application Tarriff <span className="float-right"> Application Tarriff Data</span> </li>
                                                <li class="list-group-item">Document <span className="float-right"> Document Data</span></li>

                                            </ul>
                                        </div>
                                    </div>
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

