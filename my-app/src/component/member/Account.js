import { useEffect, useState } from "react";
import axios from "axios";
import Errors from "./Errors";

function Account() {
  const [errors, setErrors] = useState({});
  const [inputFile, setInputFile] = useState("");
  const [getAvatar, setAvatar] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const Types = ["png", "jpg", "jpeg", "PNG", "JPG"];

  useEffect(() => {
    let userData = localStorage.getItem("user");
    if (userData) {
      userData = JSON.parse(userData);
      userData = userData.Auth;
      setUser({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        address: userData.address,
        phone: userData.phone,
      });
    } else {
      alert("Vui lòng đăng nhập");
    }
  }, []);

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setUser((state) => ({ ...state, [nameInput]: valueInput }));
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

    if (!user.name) {
      errorsSubmit.name = "Vui lòng nhập tên";
      flag = false;
    }
    if (!user.email) {
      errorsSubmit.email = "Vui lòng nhập email";
      flag = false;
    }
    if (!user.phone) {
      errorsSubmit.phone = "Vui lòng nhập số điện thoại";
      flag = false;
    }
    if (!user.address) {
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
    if (flag) {
      const userData = JSON.parse(localStorage.getItem("user"));
      const accessToken = userData.token;
      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("password", user.password ? user.password : "");
      formData.append("phone", user.phone);
      formData.append("address", user.address);
      formData.append("avatar", getAvatar);
      formData.append("level", 0);

      axios
        .post(
          "http://localhost/web2m/laravel8/laravel8/public/api/user/update/" +
            userData.Auth.id,
          formData,
          config
        )
        .then((res) => {
          console.log(res);
          setErrors({});
          alert("Update thành công");
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch((error) => console.log(error));
    } else {
      setErrors(errorsSubmit);
    }
  };

  return (
    <div className="col-sm-4">
      <div className="signup-form">
        {/*sign up form*/}
        <h2>Account Update</h2>
        <ul className="error-form">
          <Errors errors={errors} />
        </ul>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleInput}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            readOnly
            value={user.email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={user.address}
            onChange={handleInput}
          />
          <input type="file" name="file" onChange={handleUserInputFile} />
          <button type="submit" className="btn btn-default">
            Update
          </button>
        </form>
      </div>
      {/*/sign up form*/}
    </div>
  );
}

export default Account;
