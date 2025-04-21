import React from "react";
import { Provider } from "react-redux";
import store from "./reducers/store";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import MenuLeft from "./component/layout/MenuLeft";
import MenuAcc from "./component/layout/MenuAcc";
import { useLocation } from "react-router-dom";
import { UserContext } from "./component/member/UserContext";
import { useState, useEffect } from "react";

function App(props) {
  const [cart, setCart] = useState({});
  const location = useLocation();
  const isAccountPage = location.pathname.includes("account");
  const isCartPage = location.pathname.includes("cart");

  useEffect(() => {
    const Cart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(Cart);
  }, []);
  return (
    <Provider store={store}>
      {" "}
      <UserContext.Provider value={{ cart: cart, setCart: setCart }}>
        <div>
          <Header />
          <section>
            <div className="container">
              <div className="row">
                {!isCartPage && (isAccountPage ? <MenuAcc /> : <MenuLeft />)}
                {props.children}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
