import React from 'react';
import '../Components/Dashboard.css';
import Header from './Header';
import Material from './Material';
import Sidebar from './Sidebar';



function Dashboard() {
  return (
    <div className="container-fluid p-0 login">
      <div className="row  ">
          <div className="col-lg-12"> 
              <Header></Header>
          </div>
          <div className="col-lg-2">
              <Sidebar></Sidebar>
          </div>
        <div className="col-lg-10">
           
            <Material></Material>   
        </div>
        </div>
    </div>


  );
}

export default Dashboard;
