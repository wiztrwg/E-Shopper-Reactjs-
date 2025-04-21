import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../member/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addHobby } from "../../actions/hobby";
function Home() {
  const [prodData, setProd] = useState([]);
  let id;
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData) {
    const idUser = userData.Auth.id;
    id = idUser;
  }

  const { cart, setCart } = useContext(UserContext);
  const dispatch = useDispatch();
  const qty = useSelector((state) => state.hobby.qty);

  useEffect(() => {
    axios
      .get("http://localhost/web2m/laravel8/laravel8/public/api/product")
      .then((res) => {
        setProd(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (productId) => {
    let newCart = { ...cart };

    if (newCart[productId]) {
      newCart[productId] += 1;
    } else {
      newCart[productId] = 1;
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log("newcar", newCart);
  };

  const handleAddToWishlist = () => {
    const newQty = qty + 1;
    dispatch(addHobby(newQty));
  };

  function renderData() {
    if (prodData.length > 0) {
      return prodData.map((value, key) => {
        var myObject = JSON.parse(value["image"]);
        return (
          <div key={key} className="col-sm-4">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img
                    src={
                      "http://localhost/web2m/laravel8/laravel8/public/upload/product/" +
                      id +
                      "/" +
                      myObject[0]
                    }
                    alt="Product"
                  />
                  <h2>${value.price}</h2>
                  <p>{value.name}</p>
                  <button
                    className="btn btn-default add-to-cart"
                    onClick={() => handleAddToCart(value.id)}
                  >
                    <i className="fa fa-shopping-cart" />
                    Add to cart
                  </button>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <Link
                      to={"/product/detail/" + value.id}
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart" />
                      More
                    </Link>
                    <h2>${value.price}</h2>
                    <p>{value.name}</p>
                    <button
                      id={value.id}
                      className="btn btn-default add-to-cart"
                      onClick={() => handleAddToCart(value.id)}
                    >
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li>
                    <Link to="" id={value.id} onClick={handleAddToWishlist}>
                      <i className="fa fa-plus-square" />
                      Add to wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa fa-plus-square" />
                      Add to compare
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  return (
    <div className="col-sm-9 padding-right">
      <div className="features_items">
        {/*features_items*/}
        <h2 className="title text-center">Features Items</h2>
        {renderData()}
      </div>
      {/*features_items*/}
      <div className="category-tab">
        {/*category-tab*/}
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#tshirt" data-toggle="tab">
                T-Shirt
              </a>
            </li>
            <li>
              <a href="#blazers" data-toggle="tab">
                Blazers
              </a>
            </li>
            <li>
              <a href="#sunglass" data-toggle="tab">
                Sunglass
              </a>
            </li>
            <li>
              <a href="#kids" data-toggle="tab">
                Kids
              </a>
            </li>
            <li>
              <a href="#poloshirt" data-toggle="tab">
                Polo shirt
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="tshirt">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="blazers">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="sunglass">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="kids">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="poloshirt">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/category-tab*/}
      <div className="recommended_items">
        {/*recommended_items*/}
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
                      <Link to="" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </Link>
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
                      <Link to="" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </Link>
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
                      <Link to="" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </Link>
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
                      <Link to="" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </Link>
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
                      <Link to="" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </Link>
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
                      <Link to="" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="#recommended-item-carousel"
            className="left recommended-item-control"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
          </Link>
          <Link
            to="#recommended-item-carousel"
            className="right recommended-item-control"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </Link>
        </div>
      </div>
      {/*/recommended_items*/}
    </div>
  );
}

export default Home;
