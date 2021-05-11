import React from "react";

export default function index() {
  return (
    <header>
      <div className="header-area">
        <div className="main-header">
          <div className="header-top black-bg d-none d-sm-block">
            <div className="container">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-left">
                    <ul>
                      <li className="title">
                        <span className="flaticon-energy"></span>
                      </li>
                      <li>EGLISE ARCHE D'ALLIANCE MAKALA</li>
                    </ul>
                  </div>
                  <div className="header-info-right"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-mid gray-bg">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3 d-none d-md-block">
                  <div className="logo">
                    <a href="index.html">
                      <img src="img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-12 header-flex">
                  <div className="sticky-logo"></div>

                  <div className="main-menu d-none d-md-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="index.html">Actualite</a>
                        </li>
                        <li>
                          <a href="about.html">about</a>
                        </li>
                        <li>
                          <a href="categori.html">Category</a>
                        </li>
                        <li>
                          <a href="latest_news.html">Latest News</a>
                        </li>
                        <li>
                          <a href="#">Pages</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog_details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="elements.html">Element</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="header-right f-right d-none d-lg-block">
                    <div className="nav-search search-switch">
                      <i className="fa fa-search"></i>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="mobile_menu d-block d-md-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
