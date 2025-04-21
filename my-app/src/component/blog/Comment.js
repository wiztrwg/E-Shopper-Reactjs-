import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Comment(props) {
  let idReply = props.IDuser;
  const [comment, setComment] = useState("");
  const [errCmt, setErrCmt] = useState("");
  const [errLogin, setErrLogin] = useState("");
  let idBlog = useParams();
  const userLogin = localStorage.getItem("user");
  const userData = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem("accessToken");

  function handleSubmit(e) {
    e.preventDefault();
    setErrLogin("");
    setErrCmt("");

    if (!userLogin) {
      setErrLogin("Vui lòng đăng nhập để bình luận.");
    } else {
      if (comment === "") {
        setErrCmt("Vui lòng nhập bình luận.");
      } else {
        let config = {
          headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        };

        const formData = new FormData();
        formData.append("id_blog", idBlog.id);
        formData.append("id_user", userData.Auth.id);
        formData.append("id_comment", idReply ? idReply : 0);
        formData.append("comment", comment);
        formData.append("image_user", userData.Auth.avatar);
        formData.append("name_user", userData.Auth.name);

        axios
          .post(
            "http://localhost/web2m/laravel8/laravel8/public/api/blog/comment/" +
              idBlog.id,
            formData,
            config
          )
          .then((response) => {
            console.log(response.data);
            setComment("");
            props.getCmt(response.data);
          })
          .catch((error) => console.log(error));
      }
      console.log("test1", idReply ? idReply : 0);
    }
  }
  const handleInput = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="replay-box">
      <div className="row">
        <div className="col-sm-12">
          <h2>Leave a Replay</h2>
          <form onSubmit={handleSubmit}>
            <div className="text-area">
              <div className="blank-arrow">
                <label>Your Comment</label>
              </div>
              <span>*</span>
              <textarea
                name="comment"
                rows="11"
                value={comment}
                onChange={handleInput}
              ></textarea>
              <p className="error-message">{errLogin}</p>
              <p className="error-message">{errCmt}</p>
              <button type="submit" className="btn btn-primary">
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comment;