import React, { useState } from "react";
import Errors from "./Errors";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorsSubmit = {};
    let flag = true;

    if (!input.email) {
      errorsSubmit.email = "Vui lòng nhập email";
      flag = false;
    }
    if (!input.password) {
      errorsSubmit.password = "Vui lòng nhập mật khẩu";
      flag = false;
    }

    if (!flag) {
      setErrors(errorsSubmit);
    } else {
      const user = {
        email: input.email,
        password: input.password,
      };
      axios
        .post("http://localhost/web2m/laravel8/laravel8/public/api/login", user)
        .then((res) => {
          if (res.data && res.data.errors) {
            setErrors(res.data.errors);
          } else {
            setErrors({});
            alert("Đăng nhập thành công!");
            if (res.data.token) {
              localStorage.setItem("accessToken", res.data.token);
            }
            if (res.data.auth) {
              localStorage.setItem("userLogin", JSON.stringify(res.data.auth));
            }

            localStorage.setItem("user", JSON.stringify(res.data));

            setInput({ email: "", password: "" });
            navigate("/");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="col-sm-4 col-sm-offset-1">
      <div className="login-form">
        <h2>Login to your account</h2>
        <Errors errors={errors} />
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={input.email}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleInput}
          />
          <span>
            <input type="checkbox" className="checkbox" />
            Keep me signed in
          </span>
          <button type="submit" className="btn btn-default">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
