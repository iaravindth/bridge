import React from 'react';
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
          
        <HScode></HScode>
        
       
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
