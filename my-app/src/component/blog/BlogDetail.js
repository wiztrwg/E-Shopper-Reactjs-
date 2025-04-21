import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment";
import ListComment from "./ListComment";
import Rate from "./Rate";

function BlogDetail() {
  let params = useParams();
  const [detailData, setDetailData] = useState({});
  const [comments, setComments] = useState([]);
  const [getIDuser, setID] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://localhost/web2m/laravel8/laravel8/public/api/blog/detail/" +
          params.id
      )
      .then((res) => {
        setDetailData(res.data.data);
        setComments(res.data.data.comment);
      })
      .catch((error) => console.log(error));
  }, []);
  function getCmt(data) {
    console.log("binh luan moi", data.data);
    let Cmt = comments.concat(data.data);
    console.log("concat", Cmt);
    setComments(Cmt);
  }
  function getID(data) {
    setID(data);
  }

  return (
    <div className="col-sm-9">
      <div className="blog-post-area">
        <h2 className="title text-center">Latest From our Blog</h2>
        <div className="single-blog-post">
          <h3>{detailData.title}</h3>
          <div className="post-meta">
            <ul>
              <li>
                <i className="fa fa-user"></i> Mac Doe
              </li>
              <li>
                <i className="fa fa-clock-o"></i> 1:33 pm
              </li>
              <li>
                <i className="fa fa-calendar"></i> DEC 5, 2013
              </li>
            </ul>
          </div>
          <a href="#">
            <img
              src={
                "http://localhost/web2m/laravel8/laravel8/public/upload/Blog/image/" +
                detailData.image
              }
              alt=""
            />
          </a>
          <p>{detailData.content}</p>
          <br />
          <div className="pager-area">
            <ul className="pager pull-right">
              <li>
                <a href="#">Pre</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /blog-post-area */}

      <div className="rating-area">
        <ul className="ratings">
          <li className="rate-this">Rate this item:</li>
          <Rate />
        </ul>
        <ul className="tag">
          <li>TAG:</li>
          <li>
            <a className="color" href="#">
              Pink <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="#">
              T-Shirt <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="#">
              Girls
            </a>
          </li>
        </ul>
      </div>
      {/* /rating-area */}

      <div className="socials-share">
        <a href="#">
          <img src="images/blog/socials.png" alt="" />
        </a>
      </div>
      {/* /socials-share */}
      {/* Comments */}
      <ListComment comments={comments} getID={getID} />
      {/*/Response-area*/}
      <div>
        <Comment getCmt={getCmt} IDuser={getIDuser} />
      </div>
      {/*/Repaly Box*/}
    </div>
  );
}

export default BlogDetail;