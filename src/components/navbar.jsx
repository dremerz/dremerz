import React, { useEffect, useState } from 'react';
import Logo from "../images/logo.png";
import { Outlet } from "react-router-dom";
import { BrowserRouter, Link } from 'react-router-dom';
import "../style.css";
import { RxCross2 } from "react-icons/rx";
import { RiBarChartHorizontalFill } from "react-icons/ri";




export default function Navbar() {
  const [nav,setnav]=useState(false);
  useEffect(()=>{
// console.log(nav);
  },[])
  return (
    <>
  <header id="qodef-page-header" role="banner">
    <div id="qodef-page-header-inner" className="">
    <Link to="/home">   <a
        itemProp="url"
        className="qodef-header-logo-link qodef-height--set qodef-source--image"
        href="#"
        rel="homme"
      >
        <img
          src={Logo}
          className="qodef-header-logo-image qodef--main"
        alt="logo main"
          itemProp="image"
        />
  
        <img
          src={Logo}
          className="qodef-header-logo-image qodef--light"
          alt="logo light"
          itemProp="image"
        />
      </a></Link>
      <nav
        className="qodef-header-navigation"
        role="navigation"
        aria-label="Top Menu"
      >
        <ul id="menu-main-menu-1" className="menu">
          <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-377 qodef--hide-link qodef-menu-item--narrow">
            <a
              href="#"
              onclick="JavaScript: return false;"
            >
              <Link to="/home"><span className="qodef-menu-item-text">
                Home
                <svg
                  className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="15px"
                  height="26px"
                  viewBox="0 0 15 26"
                >
                  <g>
                    <path d="M14.106,13.605L2.6,25.027L1.508,24.02L12.51,13.102L1.592,2.184L2.6,1.176l11.506,11.422V13.605z" />
                  </g>
                </svg>
              </span></Link>
            </a>
            
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-378 qodef--hide-link qodef-menu-item--narrow">
            <a
              href="#"
              onclick="JavaScript: return false;"
            >
              <Link to="/software-support"><span className="qodef-menu-item-text">
              Software Support
                <svg
                  className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="15px"
                  height="26px"
                  viewBox="0 0 15 26"
                >
                  <g>
                    <path d="M14.106,13.605L2.6,25.027L1.508,24.02L12.51,13.102L1.592,2.184L2.6,1.176l11.506,11.422V13.605z" />
                  </g>
                </svg>
              </span></Link>
            </a>
         
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-379 qodef--hide-link qodef-menu-item--wide">
            <a
              href="#"
              onclick="JavaScript: return false;"
            >
            <Link to="/about-us">  <span className="qodef-menu-item-text">
              About us 

                <svg
                  className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="15px"
                  height="26px"
                  viewBox="0 0 15 26"
                >
                  <g>
                    <path d="M14.106,13.605L2.6,25.027L1.508,24.02L12.51,13.102L1.592,2.184L2.6,1.176l11.506,11.422V13.605z" />
                  </g>
                </svg>
              </span></Link>
            </a>
          
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-380 qodef--hide-link qodef-menu-item--narrow">
            <a
              href="#"
              onclick="JavaScript: return false;"
            >
             <Link to="/contact-us"> <span className="qodef-menu-item-text">
               Contact Us
                <svg
                  className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="15px"
                  height="26px"
                  viewBox="0 0 15 26"
                >
                  <g>
                    <path d="M14.106,13.605L2.6,25.027L1.508,24.02L12.51,13.102L1.592,2.184L2.6,1.176l11.506,11.422V13.605z" />
                  </g>
                </svg>
              </span></Link>
            </a>
          
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-381 qodef--hide-link qodef-menu-item--narrow">
            <a
              href="#"
              onclick="JavaScript: return false;"
            >
             <Link to="/pricing"> <span className="qodef-menu-item-text">
                Pricing
                <svg
                  className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="15px"
                  height="26px"
                  viewBox="0 0 15 26"
                >
                  <g>
                    <path d="M14.106,13.605L2.6,25.027L1.508,24.02L12.51,13.102L1.592,2.184L2.6,1.176l11.506,11.422V13.605z" />
                  </g>
                </svg>
              </span></Link>
            </a>
           
          </li>
        </ul>{" "}
      </nav>
      <div>
       <RiBarChartHorizontalFill id='bar'></RiBarChartHorizontalFill>
      </div>
      {/* <div className="qodef-widget-holder qodef--one">
        <div
          id="deon_core_side_area_opener-2"
          className="widget widget_deon_core_side_area_opener qodef-header-widget-area-one"
          data-area="header-widget-one"
        >
          <a
            href="javascript:void(0)"
            className="qodef-opener-icon qodef-m qodef-source--svg-path qodef-side-area-opener"
            style={{ margin: "0 0px 0 34px" }}
          >
            <span className="qodef-m-icon qodef--open">
              <svg
                className="qodef-open-lines"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 41 11"
                style={{ enableBackground: "new 0 0 41 11" }}
                xmlSpace="preserve"
              >
                <line x1={1} y1={1} x2={40} y2={1} />
                <line x1={16} y1={6} x2={40} y2={6} />
              </svg>{" "}
            </span>
          </a>
        </div>{" "}
      </div> */}
    </div>
  </header>


  <header id="qodef-page-mobile-header" role="banner">
    <div id="qodef-page-mobile-header-inner" className="">
  <Link to="/home">    <a
        itemProp="url"
        className="qodef-mobile-header-logo-link qodef-height--set qodef-source--image"
        href="#"
        rel="home"
      >
        <img
          src={Logo}
          className="qodef-header-logo-image qodef--main"
          alt="logo main"
          itemProp="image" 
        />
      </a></Link>
      <div style={{cursor:"pointer"}} 
      onMouseDown={()=>{
        setnav(true);
        }} ><RiBarChartHorizontalFill id='bar' ></RiBarChartHorizontalFill></div>
    </div>
    <nav
      className="qodef-mobile-header-navigation"
      role="navigation"
      aria-label="Mobile Menu"
    >
      <ul id="menu-main-menu-3" className="">
        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-377 qodef--hide-link qodef-menu-item--narrow">
          <a
            href="#"
            onclick="JavaScript: return false;"
          >
           <Link to="/home"> <span className="qodef-menu-item-text">Home</span></Link>
          </a>
          
         
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-378 qodef--hide-link qodef-menu-item--narrow">
          <a
            href="#"
            onclick="JavaScript: return false;"
          >
           <Link to="/software-support"> <span className="qodef-menu-item-text">Software Support</span></Link>
          </a>
        
       
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-379 qodef--hide-link qodef-menu-item--wide">
          <a
            href="#"
            onclick="JavaScript: return false;"
          >
           <Link to="/about-us"> <span className="qodef-menu-item-text">ABOUT US</span></Link>
          </a>
         
         
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-380 qodef--hide-link qodef-menu-item--narrow">
          <a
            href="#"
            onclick="JavaScript: return false;"
          >
            <Link to="/contact-us"><span className="qodef-menu-item-text">CONTACT US</span></Link>
          </a>
          
          
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-381 qodef--hide-link qodef-menu-item--narrow">
          <a
            href="#"
            onclick="JavaScript: return false;"
          >
            <Link to="/pricing"><span className="qodef-menu-item-text">PRICING</span></Link>
          </a>
         
           
          
        </li>
      </ul>{" "}
    </nav>
  </header>
  {
    nav?<>
      <div id='navbar'>
<a id='crossison' onMouseDown={()=>{
        setnav(false);
        }}><RxCross2></RxCross2></a>
<Link to="/home"> <div><span className="qodef-menu-item-text">HOME</span></div></Link>
<Link to="/software-support"> <div><span className="qodef-menu-item-text">SOFTWARE SUPPORT</span></div></Link>
<Link to="/about-us"><div> <span className="qodef-menu-item-text">ABOUT US</span></div></Link>
<Link to="/contact-us"><div><span className="qodef-menu-item-text">CONTACT US</span></div></Link>
<Link to="/pricing"><div><span className="qodef-menu-item-text">PRICING</span></div></Link>

</div>
    </>:
    <>

    </>
  }

sdfshgasndasdhabsdasjkdkshf<br></br>
sdfshgasndasdhabsdasjkdkshf<br></br>
sdfshgasndasdhabsdasjkdkshf<br></br>
sdfshgasndasdhabsdasjkdkshf<br></br>
sdfshgasndasdhabsdasjkdkshf<br></br>
</>

  )
}
