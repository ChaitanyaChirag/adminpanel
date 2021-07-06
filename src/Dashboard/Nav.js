import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'


 const Nav=()=>{
     return(<div>
<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div  className="container-fluid">
    <div className="img">
  <div class="container1">
       <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
      </div> 
      </div>
  </div>
    <div className="nav-link " aria-current="page" href="#">Home</div>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
          <div className="active">User Test</div>
          <div>
          <button className="nav-wel" >Admin</button>
        </div>
      </ul>
      <form className="d-flex">
      </form>
    </div>
  </div>
</nav>
<div className="container " >
    <div className="sidenav">
    <button className="but">User</button>
    <button className="but">Logout</button>
    <div className="downa">English</div>
    <div className="down">Version 1.0.2</div>
    </div>
</div>
</div>
     )

 }
 export default Nav;
