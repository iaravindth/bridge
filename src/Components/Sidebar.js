import React from 'react';
import '../Components/Sidebar.css';




function Dashboard() {
  return (
    <div className="container-fluid p-0 login">
      <div className="row  ">
        <div className="col-lg-12">
        <nav id="sidebar">
       

        <ul class="list-unstyled components">
        <li className="pb-2">
                <a href="#"> <span className="dashboard"></span> Dashboard</a>
            </li>
            {/* <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                  
                </ul>
            </li> */}
            <li className="pb-2">
                <a href="#"> <span className="material"></span> Material</a>
            </li>
            <li className="pb-2">
                <a href="#"> <span className="material"></span> Supplier</a>
            </li>
            <li className="pb-2">
                <a href="#"> <span className="material"></span> Client</a>
            </li>
            <li className="pb-2">
                <a href="#"> <span className="material"></span> Regulatory</a>
            </li>
            <li className="pb-2">
                <a href="#"> <span className="material"></span> Payment</a>
            </li>
            <li className="pb-2">
                <a href="#"> <span className="material"></span> Incoterm</a>
            </li>
            <li className="pb-2">
                <a href="#"> <span className="material"></span> B/L Type</a>
            </li>
            
        </ul>
    </nav>
        </div>
        </div>
    </div>


  );
}

export default Dashboard;
