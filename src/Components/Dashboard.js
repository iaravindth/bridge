import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import '../Components/Dashboard.css';
import Header from './Header';
import Material from './Material';
import Sidebar from './Sidebar';
import Supplier from './Supplier';
import Client from './Client';
import Regulatory from './Regulatory';
import Payments from './Payments';
import Incoterm from './Incoterm';
import BLtype from './BLtype';
import Stakeholder from './Stakeholder';
import Advancepayment from './Advancepayment';
import LetterOfCredit from '../LetterOfCredit ';
import HScode from './HSCode';
import Login from './Login';


function Dashboard() {
  return (
    <div className="container-fluid p-0 login">
      <div className="row  ">
          <div className="col-lg-12"> 
          {/* <Login></Login> */}
              <Header></Header>
          </div>
          <div className="col-lg-2 pr-0">
              <Sidebar></Sidebar>
          </div>
        <div className="col-lg-10 content-area">
          <Router basename="/bridge">
            <Switch>
              <Route
                path="/admin/manage/add-client"
                component={Client}
              />
              <Route
                path="/admin/manage/add-supplier"
                component={Supplier}
              />
              <Route
                path="/admin/manage/add-hscode"
                component={HScode} />
              <Route
                path="/admin/manage/add-incoterm"
                component={Incoterm} />
              <Route
                path="/admin/manage/add-regulatory"
                component={Regulatory} />
              <Route
                path="/admin/manage/add-stakeholder"
                component={Stakeholder} />
              <Route
                path="/admin/manage/add-bltypes"
                component={BLtype} />
              <Route
                path="/admin/manage/add-payment"
                component={Payments} />
              <Route
                path="/admin/manage/add-advancepayment"
                component= {Advancepayment} />
              <Route
                path="/admin/manage/add-loc"
                component={LetterOfCredit} />
              <Route
                path="/admin/manage/add-material"
                component={Material} />
            </Switch>
          </Router>
        
       
          {/* 
          <HScode></HScode>
          <LetterOfCredit></LetterOfCredit>
          <Advancepayment></Advancepayment>
           <Stakeholder></Stakeholder>
           <BLtype></BLtype>
          <Incoterm></Incoterm>
           <Payments></Payments>
          <Regulatory></Regulatory>
          <Client></Client>
          <Supplier></Supplier>
             <Material></Material>    */}
        </div>
        </div>
    </div>


  );
}

export default Dashboard;
