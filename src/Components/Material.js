import React from 'react';
import '../Components/Material.css';


function Material() {
    return (
        <div className="row pl-5 pt-4">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Material</h5>
                        </div>
                        <div class="modal-body">
                            <div className="row pr-3 pl-3">
                                <div className="col-6 form-box mt-2">
                                    <label for="">Material ID</label>
                                    <input type="email" class="form-control readonly " id="" placeholder="Material ID" readOnly ></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <label for="">Material Name</label>
                                    <input type="email" class="form-control" id="" placeholder="Material Name"></input>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="">Material Type</label>
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
                                    <div class="">
                                        <label for="">Material Origin</label>
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
                                    <div class="">
                                        <label for="">Unit of Mesurement </label>
                                        <select class="form-control" id="">
                                            <option>Aproval Type</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="">Aproval Type</label>
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
                                    <label for="">Is BOI </label>
                                    
                                    <select class="form-control" id="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="">
                                        <label for="">Cargo Type </label>
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
                                    <div className=" col-6 mt-2">
                                    <label for="">Supplier Name</label>
                                    <input type="email" class="form-control" id="" placeholder="Supplier Name"></input>
                                </div>

                                <div className=" col-6 pr-3 pl-3 mt-2">
                                    <div class="">
                                        <label for="">Client Name </label>
                                        <select class="form-control" id="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                        <div className="  col-6 form-box mt-2 pr-3 pl-3">
                                            <label for="">HS Code</label>
                                            <input type="email" class="form-control" id="" placeholder="HS Code" readOnly></input>

                                        </div>

                                        <div className="  col-6 form-box mt-2 pr-3 pl-3">
                                            <div class="">
                                                <label for="">Priority</label>
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
                                     

                                        

                           
                                <div className=" col-6 form-box mt-2 pr-3 pl-3">
                                    <div class="">
                                        <label for="">Reference /Test</label>
                                        <select class="form-control" id="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className=" col-6 form-box mt-2 pr-3 pl-3">
                                    <label for="">Aproval Obtaining Stage</label>
                                    <input type="email" class="form-control" id="" placeholder="Aproval Obtaining Stage" readOnly></input>
                                </div>

                                <div className=" col-6 form-box mt-2 pr-3 pl-3">
                                    <label for="">Institute Name </label>
                                    <input type="email" class="form-control" id="" placeholder="Institute Name " readOnly></input>
                                </div>

                                <div className=" col-6 form-box mt-2 pr-3 pl-3">
                                    <label for="">Sample Required</label>
                                    <input type="email" class="form-control" id="" placeholder="Aproval Obtaining Stage" readOnly></input>
                                </div>

                                <div className=" col-6 form-box mt-2 pr-3 pl-3">
                                    <label for="">Release Time Days</label>
                                    <input type="email" class="form-control" id="" placeholder="Aproval Obtaining Stage" readOnly></input>
                                </div>

                                    </div>
                                </div>

                                <div className=" col-12 form-box mt-2">
                                    <hr></hr>
                                    <h5 className="pb-3">Trade Agreements</h5>
                                    <div className="row">
                                    <div className=" col-6">
                                            <div class="">
                                                <label for="">Agreement Type</label>
                                                <select class="form-control" id="">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" col-6">
                                            <div class="">
                                                <label for="">Applicable tarrif</label>
                                                <select class="form-control" id="">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
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
                <div className="col-12 form-box mt-2 mb-4">
                <div className="float-right">
                    <button type="button" class="btn btn-line-primary-bridge " data-toggle="modal" data-target=".bd-example-modal-lg" >Add  Material</button>
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

