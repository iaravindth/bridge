import React from 'react';
import '../Components/Sidebar.css';




function Dashboard() {
  return (
    <div className="container-fluid p-0 login">
      <div className="row  ">
        <div className="col-lg-12">
        <nav id="sidebar">
       

        <ul class="list-unstyled components">
        <li>
                <a href="#">Dashboard</a>
            </li>
            {/* <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                  
                </ul>
            </li> */}
            <li>
                <a href="#">Material</a>
            </li>
            <li>
                <a href="#">Client</a>
            </li>
            <li>
                <a href="#">Vendor</a>
            </li>

        </ul>
    </nav>
        </div>
        </div>
    </div>


  );
}

export default Dashboard;
