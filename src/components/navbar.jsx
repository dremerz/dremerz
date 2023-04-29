import React from 'react';
import Logo from "../images/logo.png";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
  <header id="qodef-page-header" role="banner">
    <div id="qodef-page-header-inner" className="">
      <a
        itemProp="url"
        className="qodef-header-logo-link qodef-height--set qodef-source--image"
        href="#"
        rel="home"
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
      </a>
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
      <div className="qodef-widget-holder qodef--one">
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
      </div>
    </div>
  </header>

  <header id="qodef-page-mobile-header" role="banner">
    <div id="qodef-page-mobile-header-inner" className="">
      <a
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
      </a>
      <a
        href="javascript:void(0)"
        className="qodef-opener-icon qodef-m qodef-source--svg-path qodef-mobile-header-opener"
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
        <span className="qodef-m-icon qodef--close">
          <svg
            className="qodef-close-lines"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 31 31"
            style={{ enableBackground: "new 0 0 31 31" }}
            xmlSpace="preserve"
          >
            <line x1="1.5" y1="29.5" x2="29.5" y2="1.5" />
            <line x1="1.5" y1="1.5" x2="29.5" y2="29.5" />
          </svg>{" "}
        </span>
      </a>
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



  <div id="qodef-side-area" className="ps ps--active-y">
  <a
    href="javascript:void(0)"
    id="qodef-side-area-close"
    className="qodef-opener-icon qodef-m qodef-source--svg-path qodef--opened"
  >
    <span className="qodef-m-icon ">
      <svg
        className="qodef-close-lines"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 31 31"
        style={{ enableBackground: "new 0 0 31 31" }}
        xmlSpace="preserve"
      >
        <line x1="1.5" y1="29.5" x2="29.5" y2="1.5" />
        <line x1="1.5" y1="1.5" x2="29.5" y2="29.5" />
      </svg>{" "}
    </span>
  </a>
  <div id="qodef-side-area-inner">
    <div id="block-26" className="widget widget_block" data-area="side-area">
      <div className="wp-block-group is-layout-flow">
        <div className="wp-block-group__inner-container">
          <div className="qodef-shortcode qodef-m  qodef-section-title qodef-alignment--left  ">
            <h4 className="qodef-m-title">
              Incredible
              <br /> and modern
              <br /> design{" "}
            </h4>
            <div className="qodef-m-section-text" style={{ marginTop: 15 }}>
              Contemporary theme especially made for technology &amp; software
              developing company websites. Deon, a new age of WP design.
            </div>
          </div>
          <div className="widget widget_deon_core_separator">
            <div className="qodef-shortcode qodef-m  qodef-separator clear ">
              {" "}
              <div
                className="qodef-m-line"
                style={{ borderColor: "#ffffff", marginTop: "-3px" }}
              />
            </div>
          </div>
          <div className="widget widget_deon_core_contact_info">
            <p className="qodef-contact-info-widget qodef--email">
              {" "}
              <a itemProp="email" href="mailto:deon@qodeinteractive.com">
                deon@qodeinteractive.com
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="deon_core_separator-17"
      className="widget widget_deon_core_separator"
      data-area="side-area"
    >
      <div className="qodef-shortcode qodef-m  qodef-separator clear ">
        {" "}
        <div
          className="qodef-m-line"
          style={{ borderColor: "#ffffff", marginTop: 38 }}
        />
      </div>
    </div>
    <div
      id="deon_core_social_icons_group-4"
      className="widget widget_deon_core_social_icons_group"
      data-area="side-area"
    >
      {" "}
      <div className="qodef-social-icons-group">
        <span className="qodef-social-icons-item qodef-layout--vertical">
          <a
            itemProp="url"
            href="https://www.facebook.com/QodeInteractive/"
            target="_blank"
            style={{ color: "#000000" }}
          >
            Facebook{" "}
          </a>
        </span>
        <span className="qodef-social-icons-item qodef-layout--vertical">
          <a
            itemProp="url"
            href="https://twitter.com/qodeinteractive"
            target="_blank"
            style={{ color: "#000000" }}
          >
            Twitter{" "}
          </a>
        </span>
        <span className="qodef-social-icons-item qodef-layout--vertical">
          <a
            itemProp="url"
            href="https://www.linkedin.com/company/qode-themes/"
            target="_blank"
            style={{ color: "#000000" }}
          >
            Linkedin{" "}
          </a>
        </span>
      </div>
    </div>{" "}
  </div>
  <Outlet/>
</div>

</>

  )
}
