import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const id_user = userData.Auth.id;
  // console.log("id", id_user);
  const [dataProduct, setProduct] = useState({});
  let accessToken = userData.token;

  let config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost/web2m/laravel8/laravel8/public/api/user/my-product",
        config
      )
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  function deleteID(e) {
    let idDelete = e.target.id;
    axios
      .get(
        "http://localhost/web2m/laravel8/laravel8/public/api/user/product/delete/" +
          idDelete,
        config
      )
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((error) => console.log(error));
    console.log("delete", idDelete);
  }

  function renderData() {
    if (Object.keys(dataProduct).length > 0) {
      return Object.keys(dataProduct).map((key, index) => {
        const product = dataProduct[key];
        const images = JSON.parse(product.image);
        return (
          <tr key={index}>
            <td>{product.id}</td>
            <td className="cart_product">
              <a href="">
                <img
                  style={{ width: "110px", height: "110px" }}
                  src={
                    "http://localhost/web2m/laravel8/laravel8/public/upload/product/" +
                    id_user +
                    "/" +
                    images[0]
                  }
                  alt={product.image}
                />
              </a>
            </td>
            <td className="cart_description">
              <h4>
                <a href="">{product.name}</a>
              </h4>
            </td>
            <td className="cart_price">
              <p>{product.price}$</p>
            </td>
            <td className="cart_total">
              <Link
                to={"/member/edit-product/" + product.id}
                className="btn btn-primary"
              >
                Edit
              </Link>

              <Link
                onClick={(e) => deleteID(e)}
                id={product.id}
                className="btn btn-primary"
              >
                Delete
              </Link>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan="5">Loading...</td>
        </tr>
      );
    }
  }

  return (
    <div className="col-sm-9">
      <div className="table-responsive cart_info">
        <table className="table table-condensed">
          <thead>
            <tr className="cart_menu">
              <td>ID</td>
              <td className="image">Image</td>
              <td className="description">Name</td>
              <td className="price">Price</td>
              <td className="total">Action</td>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
