import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProdDetail() {
  let params = useParams();
  const [detailData, setDetailData] = useState();
  useEffect(() => {
    axios
      .get(
        "http://localhost/web2m/laravel8/laravel8/public/api/product/detail/" +
          params.id
      )
      .then((res) => {
        setDetailData(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!detailData) {
    return <div>Loading...</div>;
  }

  // Parse the image array from the string
  const images = detailData.image ? JSON.parse(detailData.image) : [];
  return (
    <div className="col-sm-9 padding-right">
      <div className="product-details">
        <div className="col-sm-5">
          <div className="view-product">
            <img
              src={
                "http://localhost/web2m/laravel8/laravel8/public/upload/product/" +
                detailData.id_user +
                "/" +
                images[0] // Display the first image
              }
              alt="Product Image"
            />
            <a href={"img"} rel="prettyPhoto">
              <h3>ZOOM</h3>
            </a>
          </div>
          <div
            id="similar-product"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="item active">
                {/* Map over the images array to display similar images */}
                {images.map((image, index) => (
                  <a href="#" key={index}>
                    <img
                      style={{ width: "84px", height: "84px" }}
                      src={
                        "http://localhost/web2m/laravel8/laravel8/public/upload/product/" +
                        detailData.id_user +
                        "/" +
                        image
                      }
                      alt={`Similar Product ${index + 1}`}
                    />
                  </a>
                ))}
              </div>
              {/* You can add more 'item' divs here if you want to display the similar images across multiple slides */}
            </div>

            <a
              className="left item-control"
              href="#similar-product"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="right item-control"
              href="#similar-product"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="product-information">
            <img
              src="images/product-details/new.jpg"
              className="newarrival"
              alt=""
            />
            <h2>{detailData.name}</h2>
            <p>Web ID: {detailData.id}</p>
            <img src="images/product-details/rating.png" alt="" />
            <span>
              <span>US ${detailData.price}</span>
              <label>Quantity:</label>
              <input type="text" value="3" readOnly />{" "}
              {/* Static quantity input */}
              <button type="button" className="btn btn-fefault cart" disabled>
                {" "}
                {/* Static button, disabled */}
                <i className="fa fa-shopping-cart"></i>
                Add to cart {/* Static text */}
              </button>
            </span>
            <p>
              <b>Availability:</b> In Stock
            </p>
            <p>
              <b>Condition:</b> New
            </p>
            <p>
              <b>Brand:</b> {detailData.id_brand}
            </p>
            <a href="#">
              <img
                src="images/product-details/share.png"
                className="share img-responsive"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="category-tab shop-details-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li>
              <a href="#details" data-toggle="tab">
                Details
              </a>
            </li>
            <li>
              <a href="#companyprofile" data-toggle="tab">
                Company Profile
              </a>
            </li>
            <li>
              <a href="#tag" data-toggle="tab">
                Tag
              </a>
            </li>
            <li className="active">
              <a href="#reviews" data-toggle="tab">
                Reviews (5)
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade" id="details">
            {/* Details Tab */}
          </div>

          <div className="tab-pane fade" id="companyprofile">
            {/* Company Profile Tab */}
          </div>

          <div className="tab-pane fade" id="tag">
            {/* Tag Tab */}
          </div>
          <div className="tab-pane fade active in" id="reviews">
            <div className="col-sm-12">
              <ul>
                <li>
                  <a href="">
                    <i className="fa fa-user"></i>EUGEN
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-clock-o"></i>12:41 PM
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-calendar-o"></i>31 DEC 2014
                  </a>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                <b>Write Your Review</b>
              </p>

              <form action="#">
                <span>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Email Address" />
                </span>
                <textarea name=""></textarea>
                <b>Rating: </b>{" "}
                <img src="images/product-details/rating.png" alt="" />
                <button type="button" className="btn btn-default pull-right">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="recommended_items">
        <h2 className="title text-center">recommended items</h2>

        <div
          id="recommended-item-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item active">
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend2.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend3.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend2.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend3.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="left recommended-item-control"
            href="#recommended-item-carousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left"></i>
          </a>
          <a
            className="right recommended-item-control"
            href="#recommended-item-carousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProdDetail;
