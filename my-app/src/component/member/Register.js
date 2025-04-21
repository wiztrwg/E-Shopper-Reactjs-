import React, { useState } from "react";
import axios from "axios";
import Errors from "./Errors";

function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    level: 0,
  });
  const [errors, setErrors] = useState({});
  const [inputFile, setInputFile] = useState(""); 
  const [getAvatar, setAvatar] = useState(""); 
  const Types = ["png", "jpg", "jpeg", "PNG", "JPG"];

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setInput((state) => ({ ...state, [nameInput]: valueInput }));
  };

  const handleUserInputFile = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result); 
        setInputFile(file); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorsSubmit = {};
    let flag = true;

    
    if (!input.name) {
      errorsSubmit.name = "Vui lòng nhập tên";
      flag = false;
    }
    if (!input.email) {
      errorsSubmit.email = "Vui lòng nhập email";
      flag = false;
    }
    if (!input.password) {
      errorsSubmit.password = "Vui lòng nhập mật khẩu";
      flag = false;
    }
    if (!input.phone) {
      errorsSubmit.phone = "Vui lòng nhập số điện thoại";
      flag = false;
    }
    if (!input.address) {
      errorsSubmit.address = "Vui lòng nhập địa chỉ";
      flag = false;
    }
    if (!inputFile) {
      errorsSubmit.avatar = "Vui lòng chọn avatar";
      flag = false;
    } else {
      const fileSize = inputFile.size;
      const fileExtension = inputFile.name.split(".").pop();

      if (fileSize > 1024 * 1024) {
        errorsSubmit.avatar = "Kích thước quá lớn";
        flag = false;
      }
      if (!Types.includes(fileExtension)) {
        errorsSubmit.avatar = "Định dạng không hợp lệ";
        flag = false;
      }
    }

    if (!flag) {
      setErrors(errorsSubmit);
    }

    
    const data = {
      name: input.name,
      email: input.email,
      password: input.password,
      phone: input.phone,
      address: input.address,
      avatar: getAvatar,
      level: 0,
    };
    console.log(data)
    axios
      .post("http://localhost/web2m/laravel8/laravel8/public/api/register", data)
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          setErrors({});
          alert("Đăng ký thành công");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="col-sm-4">
      <div className="signup-form">
        <h2>New User Signup!</h2>
        <ul className="error-form">
          <Errors errors={errors} />
        </ul>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={handleInput}
          />
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
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={input.phone}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={input.address}
            onChange={handleInput}
          />
          <input type="file" name="avatar" onChange={handleUserInputFile} />
          <button type="submit" className="btn btn-default">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
