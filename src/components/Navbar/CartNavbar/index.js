import React from "react";
import { useState, useContext } from "react";
import UserModal from "../../UI/UserModal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from "../../../services/authApi";
import { changePageView } from "../../../slices/ShippingInfo-slice";
import { useDispatch } from "react-redux";
import User from "../user";

import {
  Header,
  Wrapper,
  Image,
  LogoWrapper,
  UserNav,
  Logo,
  Ul,
  Li,
  CartIcon,
  UserImage,
  Notification,
} from "../Navigation";

const CartNavbar = (props) => {
  /********user modal **************/
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  dispatch(changePageView(window.location.pathname));

  /**
   * !做 logout 的功能
   *
   */
  const logoutHandler = () => {
    AuthService.logout();

    setShowModal((prev) => !prev);
  };

  const toggleUserModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  /**************************************/
  const cartReducer = useSelector((state) => state.cartReducer);

  //todo 處理 Price 累加的問題

  const totalQuantity = cartReducer.totalQuantity;

  return (
    <>
      {" "}
      <Header height="8rem" display="block">
        <Wrapper maxWidth="auto">
          <LogoWrapper>
            <Link to="/">
              <Logo>
                <Image src={require("../../../image/logo.png")} alt="logo" />
              </Logo>
            </Link>{" "}
          </LogoWrapper>{" "}
          {props.children}
          <UserNav>
            <Ul>
              <Li onClick={toggleUserModalHandler}>
                <UserImage>
                  <User />
                </UserImage>{" "}
                {showModal && <UserModal onLogout={logoutHandler} />}
              </Li>
            </Ul>
          </UserNav>{" "}
        </Wrapper>{" "}
      </Header>{" "}
    </>
  );
};

export default CartNavbar;
