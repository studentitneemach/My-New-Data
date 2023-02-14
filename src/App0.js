import React, { useState } from 'react';
import IndexPage from './FirstFileData/Index';
import CartData from './FirstFileData/Cart_Data';
import CheckCartData from "./FirstFileData/CheckCartData";
import ErrorPage from "./FirstFileData/Error404Page";
import LoginData from "./FirstFileData/Login_Data";
import { BrowserRouter, Router, Route,Link } from "react-router-dom";
const PAGE_INDEXPAGE = <IndexPage />;
const PAGE_CARTDATA = <CartData />;
const PAGE_CHECKOUTDATA = <CheckCartData />;
const PAGE_ERRORPAGE = <ErrorPage />;
const PAGE_LOGINDATA = <LoginData />;

function App() {
  const [Page, setPage] = useState(PAGE_INDEXPAGE)
  const navigetTo = (nextPage) => setPage(nextPage);
  return (
    <div>
      <header id="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li><a href="#"><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
                    <li><a href="#"><i className="fa fa-envelope"></i> <span className="__cf_email__" data-cfemail="ddb4b3bbb29db9b2b0bcb4b3f3beb2b0">email #160;protected</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="social-icons pull-right">
                  <ul className="nav navbar-nav">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4 clearfix">
                <div className="logo pull-left">
                  <a ><img src="https://demo.themeum.com/html/eshopper/images/home/logo.png" alt="" /></a>
                </div>
                <div className="btn-group pull-right clearfix">
                  <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                      USA
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href="">Canada</a></li>
                      <li><a href="">UK</a></li>
                    </ul>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                      DOLLAR
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href="">Canadian Dollar</a></li>
                      <li><a href="">Pound</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8 clearfix">
                <div className="shop-menu clearfix pull-right">
                  <ul className="nav navbar-nav">
                    {/* <li><a href='#' onClick={() => { navigetTo(PAGE_INDEXPAGE) }}><i className="fa fa-user"></i> Account</a></li>
                    <li><a href='#' onClick={() => { navigetTo(PAGE_INDEXPAGE) }}><i className="fa fa-star"></i> Wishlist</a></li>
                    <li><a href='#checkout' onClick={() => { navigetTo(PAGE_CHECKOUTDATA) }}><i className="fa fa-crosshairs"></i> Checkout</a></li>
                    <li><a href='#cart' onClick={() => { navigetTo(PAGE_CARTDATA) }}><i className="fa fa-shopping-cart"></i> Cart</a></li>
                          {/*        
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_INDEXPAGE) }}>PAGE_INDEXPAGE</button>
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_CARTDATA) }}>PAGE_CARTDATA </button>
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_CHECKOUTDATA) }}>PAGE_CHECKOUTDATA  </button>
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_ERRORPAGE) }}>PAGE_ERRORPAGE </button>
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_LOGINDATA) }}>PAGE_LOGINDATA </button> 
                    <li><a href='#login' onClick={()=>navigetTo(PAGE_LOGINDATA)} ><i className="fa fa-lock"></i> Login</a></li> */}

                    <li><a href='#'><i className="fa fa-user"></i> Account</a></li>
                    <li><a href='#' ><i className="fa fa-star"></i> Wishlist</a></li>
                    <li><a href='#checkout'><i className="fa fa-crosshairs"></i> Checkout</a></li>
                    <li><a href='#cart' ><i className="fa fa-shopping-cart"></i>  Cart</a></li>
                    <li><a href='#login'><i className="fa fa-lock"></i>Login</a></li>
                          

                          {/*        
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_INDEXPAGE) }}>PAGE_INDEXPAGE</button>
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_CARTDATA) }}>PAGE_CARTDATA </button>
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_CHECKOUTDATA) }}>PAGE_CHECKOUTDATA  </button>
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_ERRORPAGE) }}>PAGE_ERRORPAGE </button>
        <button className="head_button" style={{ marginRight: '16px' }} href='#' onClick={() => { navigetTo(PAGE_LOGINDATA) }}>PAGE_LOGINDATA </button> */}
             
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    {/* <li><a href='#' onClick={() => { navigetTo(PAGE_INDEXPAGE) }}className="active">Home</a></li>
                    <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                      <ul role="menu" className="sub-menu">
                        <li><a href='#' onClick={() => { navigetTo(PAGE_INDEXPAGE) }} >Products</a></li>
                        <li><a href='#' onClick={() => { navigetTo(PAGE_ERRORPAGE) }}>Product Details</a></li>
                        <li><a href='#checkout' onClick={() => { navigetTo(PAGE_CHECKOUTDATA) }}>Checkout</a></li>
                        <li><a href='#cart' onClick={() => { navigetTo(PAGE_CARTDATA) }}>Cart</a></li>
                        <li><a href='#login' onClick={() => { navigetTo(PAGE_LOGINDATA) }}>Login</a></li>
                      </ul>
                    </li> */}
                
                     {/* <li><a href='#' className="active">Home</a></li>
                    <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                      <ul role="menu" className="sub-menu">
                        <li><a href='#'  >Products</a></li>
                        <li><a href='#'>Product Details</a></li>
                        <li><a href='#checkout' >Checkout</a></li>
                        <li><a href='#cart'>Cart</a></li>
                        <li><a href='#login' >Login</a></li>
                      </ul>
                    </li> */}
             
                    <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down"></i></a>
                      <ul role="menu" className="sub-menu">
                        <li><a >Blog List</a></li>
                        <li><a >Blog Single</a></li>
                      </ul>
                    </li>
                    {/* <!-- <li><a href="404.html">404</a></li>
<li><a href="contact-us.html">Contact</a></li> --> */}
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input type="text" placeholder="Search"  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <IndexPage /> */}
      {/* <CartData /> */}
      {/* <CheckCartData /> */}
      {/* <LoginData /> */}
       {/* {Page === PAGE_INDEXPAGE && <IndexPage />}
            {Page === PAGE_CARTDATA && <CartData />}
         {Page === PAGE_CHECKOUTDATA &&  <CheckCartData />}
              {Page === PAGE_ERRORPAGE &&  <ErrorPage />}
            {Page === PAGE_LOGINDATA &&  <LoginData />} */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="companyinfo">
                  <h2><span>e</span>-shopper</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="https://demo.themeum.com/html/eshopper/images/home/iframe1.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="https://demo.themeum.com/html/eshopper/images/home/iframe2.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="https://demo.themeum.com/html/eshopper/images/home/iframe3.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="https://demo.themeum.com/html/eshopper/images/home/iframe4.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="address">
                  <img src="https://demo.themeum.com/html/eshopper/images/home/map.png" alt="" />
                  <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Service</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">Online Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Change Location</a></li>
                    <li><a href="#">FAQ’s</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Quock Shop</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">T-Shirt</a></li>
                    <li><a href="#">Mens</a></li>
                    <li><a href="#">Womens</a></li>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Shoes</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Policies</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privecy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Billing System</a></li>
                    <li><a href="#">Ticket System</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">Company Information</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Store Location</a></li>
                    <li><a href="#">Affillate Program</a></li>
                    <li><a href="#">Copyright</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-sm-offset-1">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <form action="#" className="searchform">
                    <input type="text" placeholder="Your email address" />
                    <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right"></i></button>
                    <p>Get the most recent updates from <br />our site and be updated your self...</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p className="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
              <p className="pull-right">Designed by <span><a>Themeum</a></span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
