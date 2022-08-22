import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "@mui/material/Drawer";
import CartList, { NoItem, CartHeadline } from "../../UI/CartList";
import User from "../user";
import { CartListWrapper, Container } from "../../UI/CartList/CartList";
import { BtnStyle } from "../../UI/Button";
import ListBtn from "../../UI/CartList/ListBtn";

import {
  Header,
  Wrapper,
  IconStyle,
  Notification,
  LinkStyle,
  UserIcon,
} from "../Navigation";

const BottomNavbar = () => {
  const cartReduce = useSelector((state) => state.cartReducer);
  const cartList = cartReduce.items;
  



  useEffect(()=>{


  },[])


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

  const cartReducer = useSelector((state) => state.cartReducer);

  const totalQuantity = cartReducer.totalQuantity;

  return (
    <>
      <UserIcon>
        {" "}
        <IconStyle
          position="absolute"
          top="1.8rem"
          color="var(--color-grey-dark-1)"
          fontSize="2rem"
          right="4rem"
          radius="50%"
          bgc="var(--color-grey-light-1)"
        >
          <User />
        </IconStyle>
      </UserIcon>
      <Header>
        <Wrapper>
          {" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-house" />
            </IconStyle>{" "}
          </LinkStyle>{" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </IconStyle>{" "}
          </LinkStyle>{" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/search"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-search" />
            </IconStyle>{" "}
          </LinkStyle>
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-tag" />
            </IconStyle>{" "}
          </LinkStyle>{" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <Drawer
              anchor="bottom"
              open={showCart}
              onClose={toggleDrawer("bottom", false)}
            >
              {cartList.length !== 0 ? (
                <CartListWrapper minH="60rem" mt="4.5rem">
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
            <IconStyle onClick={toggleDrawer("bottom", true)}>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              <Notification>{totalQuantity}</Notification>
            </IconStyle>{" "}
          </LinkStyle>{" "}
        </Wrapper>{" "}
      </Header>{" "}
    </>
  );
};

export default BottomNavbar;
