import React from 'react';
import '../Components/Header.css';


function Header() {
  return (
    <div className="container login">
      <div className="row login_inner justify-content-center align-self-center ">
        <div className="col-lg-12">
        <nav class="navbar navbar-expand-lg navbar-dark bg-white static-top nav-camms">
      <div class="container-fluid">
        <img src="vendor/images/menu.svg"  height="17" width="23"/>
        <a class="navbar-brand logo pl-4" href="#" >  <img class="w-75" src="vendor/images/CAMMSRISK.svg"   /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link pr-3" href="#">
                <img class="w-75" src="vendor/images/Notifications.svg"   />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link pr-3" href="#">
              <img class="w-75" src="vendor/images/Search.svg"   />
              </a>
            </li>
            <li class="nav-item">
              <img class="w-75 pt-1" src="vendor/images/profile.svg" class="rounded-circle"  />

            </li>
            <li class="nav-item">
              <a class="nav-link text-cam pt-2" href="#">Riko Sapto Dimo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
        </div>
    </div>


  );
}

export default Header;

