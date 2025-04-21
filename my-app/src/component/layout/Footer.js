import React from "react";

function Footer() {
  return (
    <footer id="footer">
      {/* Footer */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="companyinfo">
                <h2>
                  <span>e</span>-shopper
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-sm-7">
              {[1, 2, 3, 4].map((_, index) => (
                <div className="col-sm-3" key={index}>
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img
                          src={`images/home/iframe${index + 1}.png`}
                          alt=""
                        />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-sm-3">
              <div className="address">
                <img src="images/home/map.png" alt="" />
                <p>505 S Atlantic Ave Virginia Beach, VA (Virginia)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-widget">
        <div className="container">
          <div className="row">
            {[
              {
                title: "Service",
                items: [
                  "Online Help",
                  "Contact Us",
                  "Order Status",
                  "Change Location",
                  "FAQ’s",
                ],
              },
              {
                title: "Quock Shop",
                items: ["T-Shirt", "Mens", "Womens", "Gift Cards", "Shoes"],
              },
              {
                title: "Policies",
                items: [
                  "Terms of Use",
                  "Privacy Policy",
                  "Refund Policy",
                  "Billing System",
                  "Ticket System",
                ],
              },
              {
                title: "About Shopper",
                items: [
                  "Company Information",
                  "Careers",
                  "Store Location",
                  "Affiliate Program",
                  "Copyright",
                ],
              },
            ].map((section, index) => (
              <div className="col-sm-2" key={index}>
                <div className="single-widget">
                  <h2>{section.title}</h2>
                  <ul className="nav nav-pills nav-stacked">
                    {section.items.map((item, idx) => (
                      <li key={idx}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-sm-3 col-sm-offset-1">
              <div className="single-widget">
                <h2>About Shopper</h2>
                <form action="#" className="searchform">
                  <input type="text" placeholder="Your email address" />
                  <button type="submit" className="btn btn-default">
                    <i className="fa fa-arrow-circle-o-right"></i>
                  </button>
                  <p>
                    Get the most recent updates from <br />
                    our site and be updated yourself...
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="pull-left">
              Copyright © 2013 E-SHOPPER Inc. All rights reserved.
            </p>
            <p className="pull-right">
              Designed by{" "}
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.themeum.com"
                >
                  Themeum
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
