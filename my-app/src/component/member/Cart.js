import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {
  const [getCart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const ecoTax = 0;
  const shippingCost = 0;

  let dataProd = JSON.parse(localStorage.getItem("cart")) || {};

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    Totals();
  }, [getCart]);

  async function fetchData() {
    try {
      const res = await axios.post(
        "http://localhost/web2m/laravel8/laravel8/public/api/product/cart",
        dataProd
      );
      setCart(res.data.data);
    } catch (error) {
      console.error("xảy ra lỗi ", error);
    }
  }

  function UpQty(e) {
    let id = e.target.id;
    let newData = [...getCart];
    let sl = 0;

    if (newData.length > 0) {
      newData.map((value, key) => {
        if (id == value.id) {
          newData[key].qty++;
          dataProd[value.id] = newData[key].qty;
        }
      });
    }

    localStorage.setItem("cart", JSON.stringify(dataProd));
    setCart(newData);

    if (dataProd) {
      if (Object.keys(dataProd).length > 0) {
        Object.keys(dataProd).map((key) => {
          sl += dataProd[key];
        });
      }
    }

    localStorage.setItem("dataQty", JSON.stringify(sl));
  }

  function DownQty(e) {
    let id = e.target.id;
    let newData = [...getCart];
    let sl = 0;
    if (newData.length > 0) {
      newData.map((value, key) => {
        if (id == value.id) {
          if (newData[key].qty > 1) {
            newData[key].qty--;
            dataProd[value.id] = newData[key].qty;
          } else {
            alert("SL không thể nhỏ hơn 1");
            return;
          }
        }
      });
    }
    localStorage.setItem("cart", JSON.stringify(dataProd));
    setCart(newData);

    if (dataProd) {
      if (Object.keys(dataProd).length > 0) {
        Object.keys(dataProd).map((key) => {
          sl += dataProd[key];
        });
      }
    }

    localStorage.setItem("dataQty", JSON.stringify(sl));
  }

  function DeleteProd(e) {
    let id = e.target.id;
    let newData = [...getCart];
    let sl = 0;
    newData = newData.filter((value) => value.id != id);
    setCart(newData);
    delete dataProd[id];
    localStorage.setItem("cart", JSON.stringify(dataProd));
    if (dataProd) {
      if (Object.keys(dataProd).length > 0) {
        Object.keys(dataProd).map((key) => {
          sl += dataProd[key];
        });
      }
    }
    localStorage.setItem("dataQty", JSON.stringify(sl));
  }
  function renderProd() {
    if (getCart.length == 0) return null;

    return getCart.map((value, key) => {
      var myObject = JSON.parse(value.image);
      return (
        <tr key={key}>
          <td className="cart_product">
            <Link to="">
              <img
                style={{ width: "120px", height: "70px" }}
                src={
                  "http://localhost/web2m/laravel8/laravel8/public/upload/product/" +
                  value.id_user +
                  "/" +
                  myObject[0]
                }
                alt=""
              />
            </Link>
          </td>
          <td className="cart_description">
            <h4>
              <Link to="">{value.name}</Link>
            </h4>
            <p>Web ID: {value.id}</p>
          </td>
          <td className="cart_price">
            <p>${value.price}</p>
          </td>
          <td className="cart_quantity">
            <div className="cart_quantity_button">
              <a
                className="cart_quantity_up"
                href="#"
                id={value.id}
                onClick={UpQty}
              >
                {" "}
                +{" "}
              </a>
              <input
                className="cart_quantity_input"
                type="text"
                name="quantity"
                value={value.qty}
                autoComplete="off"
                size="2"
                readOnly
              />
              <a
                className="cart_quantity_down"
                href="#"
                id={value.id}
                onClick={DownQty}
              >
                {" "}
                -{" "}
              </a>
            </div>
          </td>
          <td className="cart_total">
            <p className="cart_total_price">${value.price * value.qty}</p>
          </td>
          <td className="cart_delete">
            <a
              className="cart_quantity_delete"
              href="#"
              id={value.id}
              onClick={DeleteProd}
            >
              <i className="fa fa-times"></i>
            </a>
          </td>
        </tr>
      );
    });
  }
  const Totals = () => {
    const newSubTotal = getCart
      .map((item) => item.price * item.qty)
      .reduce((prev, curr) => prev + curr, 0);
    setSubTotal(newSubTotal);
  };

  const total = subTotal + ecoTax + shippingCost;

  return (
    <>
      <section id="cart_items">
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Shopping Cart</li>
            </ol>
          </div>
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Item</td>
                  <td className="description">Description</td>
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">Total</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>{renderProd()}</tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="do_action">
        <div className="container">
          <div className="heading">
            <h3>What would you like to do next?</h3>
            <p>
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="chose_area">
                <ul className="user_option">
                  <li>
                    <input type="checkbox" id="coupon" />
                    <label htmlFor="coupon">Use Coupon Code</label>
                  </li>
                  <li>
                    <input type="checkbox" id="voucher" />
                    <label htmlFor="voucher">Use Gift Voucher</label>
                  </li>
                  <li>
                    <input type="checkbox" id="shipping" />
                    <label htmlFor="shipping">Estimate Shipping & Taxes</label>
                  </li>
                </ul>
                <ul className="user_info">
                  <li className="single_field">
                    <label>Country:</label>
                    <select>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ukraine</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field">
                    <label>Region / State:</label>
                    <select>
                      <option>Select</option>
                      <option>Dhaka</option>
                      <option>London</option>
                      <option>Delhi</option>
                      <option>Lahore</option>
                      <option>Alaska</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field zip-field">
                    <label>Zip Code:</label>
                    <input type="text" />
                  </li>
                </ul>
                <a className="btn btn-default update" href="#">
                  Get Quotes
                </a>
                <a className="btn btn-default check_out" href="#">
                  Continue
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="total_area">
                <ul>
                  <li>
                    Cart Sub Total <span>${subTotal}</span>
                  </li>
                  <li>
                    Eco Tax <span>${ecoTax}</span>
                  </li>
                  <li>
                    Shipping Cost <span>${shippingCost}</span>
                  </li>
                  <li>
                    Total <span>${total}</span>
                  </li>
                </ul>
                <a className="btn btn-default update" href="#">
                  Update
                </a>
                <a className="btn btn-default check_out" href="#">
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
