import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/web2m/laravel8/laravel8/public/api/blog")

      .then((res) => {
        setData(res.data.blog.data);
        console.log(res.data.blog.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function renderData() {
    if (data.length > 0) {
      return data.map((value, key) => {
        return (
          <div className="single-blog-post" key={key}>
            <h3>{value.title}</h3>
            <div className="post-meta">
              <ul>
                <li>
                  <i className="fa fa-user"> Mac Doe</i>
                </li>
                <li>
                  <i className="fa fa-clock-o"> 1:33 pm</i>
                </li>
                <li>
                  <i className="fa fa-calendar"> DEC 5, 2013</i>
                </li>
              </ul>
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </span>
            </div>
            <div>
              <img
                src={
                  "http://localhost/web2m/laravel8/laravel8/public/upload/Blog/image/" +
                  value["image"]
                }
                alt=""
              />
            </div>
            <p>{value.description}</p>
            <Link to={"/blog/detail/" + value["id"]} class="btn btn-primary">
              Read More
            </Link>
          </div>
        );
      });
    } else {
      return <p>loading..</p>;
    }
  }

  return (
    <div className="col-sm-9">
      <div className="blog-post-area">
        <h2 className="title text-center">Latest From our Blog</h2>
        <div>{renderData()}</div>
        <div classNameName="pagination-area">
          <ul className="pagination">
            <li>
              <a href="" className="active">
                1
              </a>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">3</a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;
