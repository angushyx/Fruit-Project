import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from "../../../services/authApi";
import queryString from "query-string";
import UserModal from "../../UI/UserModal";
import User from "../user";
import { Drawer } from "@mui/material";
import { CartListWrapper, Container } from "../../UI/CartList/CartList";
import CartList, { NoItem, CartHeadline } from "../../UI/CartList";
import ListBtn from "../../UI/CartList/ListBtn";

import {
  Header,
  Wrapper,
  Image,
  Search,
  SearchBtn,
  Input,
  IconStyle,
  LogoWrapper,
  UserNav,
  Logo,
  Hamburger,
  Ul,
  Li,
  CartIcon,
  Notification,
} from "../Navigation";

const TopNavbar = () => {
  const [keyword, setKeyword] = useState("");

  const cartReduce = useSelector((state) => state.cartReducer);
  const cartList = cartReduce.items;

  const parsed = queryString.parse(window.location.search);

  /********user modal **************/
  const [showModal, setShowModal] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowCart((prev) => !prev);
  };

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
  const changeHandler = (e) => {
    setKeyword(e.currentTarget.value);
  };
  console.log(keyword);
  const cartReducer = useSelector((state) => state.cartReducer);

  //todo 處理 Price 累加的問題

  const totalQuantity = cartReducer.totalQuantity;

  return (
    <>
      <Header height="8rem" display="block">
        <Wrapper maxWidth="auto">
          <Hamburger>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </Hamburger>
          <LogoWrapper>
            <Link to="/">
              <Logo>
                <Image src={require("../../../image/logo.png")} alt="logo" />
              </Logo>
            </Link>{" "}
          </LogoWrapper>
          <Search method="GET" action="/search">
            <Input
              onChange={changeHandler}
              value={keyword}
              type="text"
              placeholder="search..."
              name="keyword"
            />
            <SearchBtn>
              <IconStyle>
                <FontAwesomeIcon icon="fa-solid fa-search" />
              </IconStyle>
            </SearchBtn>
          </Search>
          <UserNav>
            <Ul>
              <Li onClick={toggleUserModalHandler}>
                {" "}
                <User />
              </Li>
              <Li onClick={toggleDrawer("left", true)}>
                <CartIcon>
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  <Notification right="-1rem">{totalQuantity}</Notification>
                </CartIcon>
              </Li>
            </Ul>
            <Drawer
              anchor="left"
              open={showCart}
              onClose={toggleDrawer("left", false)}
            >
              {cartList.length !== 0 ? (
                <CartListWrapper mt="0">
                  <>
                    <CartHeadline />
                    <Container>
                      <CartList />
                    </Container>
                  </>
                </CartListWrapper>
              ) : (
                <NoItem>購物車是空的...</NoItem>
              )}{" "}
              <ListBtn />
            </Drawer>
          </UserNav>{" "}
        </Wrapper>{" "}
      </Header>{" "}
    </>
  );
};

export default TopNavbar;
