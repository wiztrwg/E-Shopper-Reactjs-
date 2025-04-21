import React from "react";

const MenuLeft = () => {
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          {/* Category Products */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordian"
                  href="#sportswear"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Sportswear
                </a>
              </h4>
            </div>
            <div id="sportswear" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href="/">Nike</a>
                  </li>
                  <li>
                    <a href="/">Under Armour</a>
                  </li>
                  <li>
                    <a href="/">Adidas</a>
                  </li>
                  <li>
                    <a href="/">Puma</a>
                  </li>
                  <li>
                    <a href="/">ASICS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mens Category */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Mens
                </a>
              </h4>
            </div>
            <div id="mens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href="/">Fendi</a>
                  </li>
                  <li>
                    <a href="/">Guess</a>
                  </li>
                  <li>
                    <a href="/">Valentino</a>
                  </li>
                  <li>
                    <a href="/">Dior</a>
                  </li>
                  <li>
                    <a href="/">Versace</a>
                  </li>
                  <li>
                    <a href="/">Armani</a>
                  </li>
                  <li>
                    <a href="/">Prada</a>
                  </li>
                  <li>
                    <a href="/">Dolce and Gabbana</a>
                  </li>
                  <li>
                    <a href="/">Chanel</a>
                  </li>
                  <li>
                    <a href="/">Gucci</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Womens Category */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordian"
                  href="#womens"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Womens
                </a>
              </h4>
            </div>
            <div id="womens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href="/">Fendi</a>
                  </li>
                  <li>
                    <a href="/">Guess</a>
                  </li>
                  <li>
                    <a href="/">Valentino</a>
                  </li>
                  <li>
                    <a href="/">Dior</a>
                  </li>
                  <li>
                    <a href="/">Versace</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other Categories */}
          {[
            "Kids",
            "Fashion",
            "Households",
            "Interiors",
            "Clothing",
            "Bags",
            "Shoes",
          ].map((category, index) => (
            <div className="panel panel-default" key={index}>
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="/">{category}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>
        {/* /category-products */}

        {/* Brands */}
        <div className="brands_products">
          <h2>Brands</h2>
          <div className="brands-name">
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="/">
                  {" "}
                  <span className="pull-right">(50)</span>Acne
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <span className="pull-right">(56)</span>Grüne Erde
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <span className="pull-right">(27)</span>Albiro
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <span className="pull-right">(32)</span>Ronhill
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <span className="pull-right">(5)</span>Oddmolly
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <span className="pull-right">(9)</span>Boudestijn
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="pull-right">(4)</span>Rösch creative culture
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Price Range */}
        <div className="price-range">
          <h2>Price Range</h2>
          <div className="well">
            <input
              type="text"
              className="span2"
              data-slider-min="0"
              data-slider-max="600"
              data-slider-step="5"
              data-slider-value="[250,450]"
              id="sl2"
            />
            <br />
            <b>$ 0</b> <b className="pull-right">$ 600</b>
          </div>
        </div>

        {/* Shipping */}
        <div className="shipping text-center">
          <img src="images/home/shipping.jpg" alt="shipping" />
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
