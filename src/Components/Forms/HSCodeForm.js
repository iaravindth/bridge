/**
 * Created by chamathbogahawatta on 25/09/2019.
 */
import React from 'react';
import * as Yup from "yup";
import {Formik, Field, Form, ErrorMessage, getIn} from 'formik';

/* below is to validate the input types */
const validationSchema = Yup.object({
  hscode: Yup.string("HSCode")
    .required("HS code cannot be empty"),
  description: Yup.string("Description"),
  unit: Yup.string("Unit")
    .required("Unit cannot be empty"),
  preferentialduty: Yup.array()
    .of(
      Yup.object().shape({
        country: Yup.string("Country"),
        duty: Yup.string("Duty")
          .required("Duty is required"),
        genduty: Yup.string("Gen Duty")
          .required("Gen Duty cannot be empty"),
        vat: Yup.string("VAT"),
        pal: Yup.string("PAL"),
        nbt: Yup.string("NBT"),
        cess: Yup.string("CESS"),
        excise: Yup.string("Excise"),
        scl: Yup.string("SCL"),
        type: Yup.string("Type")
      })
    )

});

const initialValues = {
  hscode: "",
  description: "",
  unit: "",
  preferentialduty: [{
    country: "",
    duty: "",
    genduty: "",
    vat: "",
    pal: "",
    nbt: "",
    cess: "",
    excise: "",
    scl: "",
    type: "",
  }]
};


class HSCodeForm extends React.Component {
  render(){
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Create HScode</h5>
              </div>
              <div class="modal-body">
                <div className="row pr-3 pl-3">
                  <div className="col-6 form-box mt-2">
                    <label for=""> HS Code</label>
                    <Field name="hscode" type="text" className={"form-control readonly " +  (errors.hscode && touched.hscode ? "is-invalid" : "" )} placeholder="HS Code"  />
                    <ErrorMessage name="hscode" component="div" className="invalid-feedback" />
                  </div>
                  <div className="col-6 form-box mt-2">
                    <label for=""> Description</label>
                    <Field name="description" type="text" className={"form-control readonly " +  (errors.description && touched.description ? "is-invalid" : "" )} id="" placeholder="Description"  />
                    <ErrorMessage name="description" component="div" className="invalid-feedback" />
                  </div>
                  <div className="col-6 form-box mt-2">
                    <label for=""> Unit</label>
                    <Field name="unit" type="text" className={"form-control readonly "  +  (errors.unit && touched.unit ? "is-invalid" : "" )} id="" placeholder="Unit"  />
                    <ErrorMessage name="unit" component="div" className="invalid-feedback" />
                  </div>
                </div>
                <hr></hr>
                <h5 className="pb-3">Preferential Duty</h5>
                <div className="row pr-3 pl-3">
                  <div className=" col-6 form-box mt-2">
                    <div class="">
                      <label for="">Country</label>
                      <Field component="select" name="preferentialduty[0].country" className={"form-control "  +  getIn(errors, 'preferentialduty.country') && getIn(touched, 'preferentialduty.country') ? "is-invalid" : "" }  id="">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Field>
                    </div>
                  </div>
                  {/*
                  there is a open bug in formik for nested validation
                  https://github.com/jaredpalmer/formik/issues/1520
                  developer can use different approach, I can handle this, but not doing it.
                  because it might need to use more code, leads to more confusion,
                  since this is a UI project
                  */}
                  <div className="col-6 form-box mt-2">
                    <label for=""> Duty</label>
                    <Field name="preferentialduty[0]['duty']" type="text" className={"form-control readonly "} id="" placeholder="Duty"  />
                  </div>

                  <div className="col-6 form-box mt-2">
                    <label for=""> Gen Duty</label>
                    <Field name="preferentialduty[0].genduty" type="text" className={"form-control readonly  " +  (getIn(errors, 'preferentialduty.genduty') && getIn(touched, 'preferentialduty.genduty') ? "is-invalid" : "" )} id="" placeholder="Gen Duty"  />
                  </div>
                  <div className="col-6 form-box mt-2">
                    <label for=""> VAT</label>
                    <Field name="preferentialduty[0].vat" type="text" className={"form-control readonly  " +  (getIn(errors, 'preferentialduty.vat') && getIn(touched, 'preferentialduty.vat') ? "is-invalid" : "" )}  id="" placeholder="VAT"  />
                  </div>
                  <div className="col-6 form-box mt-2">
                    <label for=""> PAL</label>
                    <Field name="preferentialduty[0].pal" type="text"  className={"form-control readonly  " +  (getIn(errors, 'preferentialduty.pal') && getIn(touched, 'preferentialduty.pal') ? "is-invalid" : "" )}  id="" placeholder="PAL"  />
                  </div>
                  <div className="col-6 form-box mt-2">
                    <label for=""> NBT</label>
                    <Field name="preferentialduty[0].nbt" type="text"  className={"form-control readonly  " +  (getIn(errors, 'preferentialduty.nbt') && getIn(touched, 'preferentialduty.nbt') ? "is-invalid" : "" )}  id="" placeholder="NBT"  />
                  </div>
                  <div className="col-6 form-box mt-2">
                    <label for=""> Cess</label>
                    <Field name="preferentialduty[0].cess" type="text"  className={"form-control readonly  " +  (getIn(errors, 'preferentialduty.cess') && getIn(touched, 'preferentialduty.cess') ? "is-invalid" : "" )}  id="" placeholder="Cess"  />
                  </div>
                  <div className="col-6 form-box mt-2">
                    <label for=""> Excise</label>
                    <Field name="preferentialduty[0].excise" type="text"  className={"form-control readonly  " + (getIn(errors, 'preferentialduty.excise') && getIn(touched, 'preferentialduty.excise') ? "is-invalid" : "" )}  id="" placeholder="Excise"  />
                  </div>
                  <div className="col-6 form-box mt-2">
                    <label for=""> SCL</label>
                    <Field name="preferentialduty[0].scl" type="text"  className={"form-control readonly  " +  (getIn(errors, 'preferentialduty.scl') && getIn(touched, 'preferentialduty.scl') ? "is-invalid" : "" )}  id="" placeholder="SCL"  />
                  </div>
                  <div className=" col-6 form-box mt-2">
                    <div class="">
                      <label for="">Type</label>
                      <Field component="select" name="preferentialduty[0].type"  className={"form-control " +  (getIn(errors, 'preferentialduty.type') && getIn(touched, 'preferentialduty.type') ? "is-invalid" : "" )}  id="">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Field>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary-bridge-close" data-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary-bridge ">Save </button>
                </div>
              </div>
            </div>
          </Form>
        )} />
    );
  }
}

export default HSCodeForm;