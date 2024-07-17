import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "/assets/shared/logo.svg"


function Navbar(){



    return(
        <>
        <header>
           <div className="container">
<nav className="navbar navbar-expand-md">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Logo} /></a>
    <div className="line"></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
      <div className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <NavLink to="/home" className="nav-link"><span className="bold">00 </span>HOME</NavLink>
        <NavLink to="/destinations" className="nav-link"><span className="bold">01 </span>DESTINATION</NavLink>
        <NavLink to="/crew" className="nav-link"><span className="bold">02 </span>CREW</NavLink>
        <NavLink to="/technology" className="nav-link"><span className="bold">03 </span>TECHNOLOGY</NavLink>
        
      </div>
    </div>
  </div>
</nav>
   </div>    </header>  
   

        </>
    )
}

export default Navbar;