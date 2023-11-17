import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './styles.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light px-sm-3 shadow">
      <div class="container-fluid col-12">
        {/* <a class="navbar-brand col-1" href="">
          <span className=" fw-bold ">Job</span><span className="text-primary fw-bold">ify.</span>
        </a> */}
        <Link to='/' className="navbar-brand col-1"><span className=" fw-bold ">Job</span><span className="text-primary fw-bold">ify.</span></Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-11" id="navbarSupportedContent">
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
          <ul class="navbar-nav mb-2 mb-lg-0 col-lg-6 col-sm-7 col-md-7 gap-sm-3">
            <li class="nav-item">
              {/* <a class="nav-link active fw-bold" aria-current="page" href="#">
                HOME
              </a> */}
              <Link to='/' class='nav-link active fw-bold'>HOME</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link fw-bold" href="#h3">
                JOBS
              </a> */}
              <Link to='h3' class='nav-link fw-bold'>JOBS</Link>
            </li>
            <li class="nav-item">
              {/* <a className="nav-link fw-bold" href="/about" >ABOUT US</a> */}
              <Link to='/about' className="nav-link fw-bold">ABOUT</Link>
            </li>
          </ul>
          <div className="col-lg-3 col- d-flex flex-row align-items-center gap-5">
            <Link className="btn border-primary" to='/signup'>Sign up</Link>
            <Link className="btn btn-primary " to='/login'>Sign in</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
