import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "../../slices/cart-slice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import CartList from "../../components/UI/CartList";
import LoadingSpinner from "../UI/LoadingSpinner";
import FormDialog from "../UI/Modal2";
import Footer from "../UI/Footer";
import Button from "../UI/Button";
import Swal from "sweetalert2";

import { Container, Headline } from "../ShippingForm/ShippingFormElement";
import {
  Checkbox,
  CheckboxWrapper,
  SubscriptionLabel,
  CartWrapper,
  ShippingWrapper,
  PaymentWrapper,
  TextTitle,
  AddressWrapper,
  InfoText,
  EmailAddressWrapper,
  MainWrapper,
  CreditInfoWrapper,
  TableWrapper,
  ChangeBTN,
  CartTable,
  CartTableTr,
  CartTableTd,
  CartTableHeader,
  EmailAddress,
} from "./ConfirmElement";
import { ImageStyle } from "../Payment/PaymentElement";
const Confirm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const CartSwal = withReactContent(Swal);

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const userSlice = useSelector((state) => state.userInfoReducer);
  const userList = userSlice.userInfos;
  const cartReducer = useSelector((state) => state.cartReducer);
  const cartList = cartReducer.items;

  const totalAmount = cartReducer.totalAmount.toFixed(2);

  const cartItem = cartList.map((item) => {
    return {
      name: item.name,
      itemAmount: item.amount,
      itemPrice: item.price,
    };
  });

  const cartItems = cartList.map((item) => (
    <CartList
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
      category={item.category}
      amount={item.amount}
    />
  ));

  /**
   * Send cart items to firebase <Handler></Handler>
   */
  const submitCartItemHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post(
        "https://food-project-a2f13-default-rtdb.firebaseio.com/order.json",
        {
          totalAmount,
          cartItem: cartItem,
        }
      );
      if (cartItems) {
        await CartSwal.fire({
          title: "成功送出訂單",
          text: "謝謝您的惠顧",
          icon: "success",
        });
        setIsLoading(false);
      }
      navigate("/");
      dispatch(clearItem());
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <>
      <FormDialog
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />

      <Container width="90%" maxWidth="100rem">
        <Headline>Please confirm and submit your order</Headline>
        <MainWrapper>
          <ShippingWrapper>
            <TextTitle>Shipping address</TextTitle>
            <AddressWrapper>
              <div>
                <InfoText>{userList.fullName}</InfoText>
                <InfoText>{userList.city}</InfoText>
                <InfoText>{userList.address}</InfoText>
                <InfoText>{userList.postalCode}</InfoText>
              </div>
            </AddressWrapper>
            <EmailAddressWrapper>
              <div>
                <TextTitle>Email address</TextTitle>
                <EmailAddress>{userList.email}</EmailAddress>
              </div>
              <ChangeBTN onClick={handleClickOpen}>Change</ChangeBTN>
            </EmailAddressWrapper>
          </ShippingWrapper>

          <PaymentWrapper>
            <div>
              <TextTitle>Payment method</TextTitle>
              <CreditInfoWrapper>
                <ImageStyle
                  width="5rem"
                  height="5rem"
                  src={require("../../image/Payment/american-express.png")}
                  alt=""
                />
                <div>
                  <InfoText mb=".2rem">Visa...5155</InfoText>
                  <InfoText mb=".2rem">EXP:12/2025</InfoText>
                </div>
              </CreditInfoWrapper>{" "}
            </div>
            <ChangeBTN>Change</ChangeBTN>
          </PaymentWrapper>

          <CartWrapper>
            <form onSubmit={submitCartItemHandler}>
              <TextTitle>Order summary</TextTitle>
              <TableWrapper>
                <CartTable>
                  <tbody>
                    <CartTableTr>
                      <CartTableHeader>Item(s) total</CartTableHeader>
                      <CartTableTd>
                        <span>NT$</span>
                        <span>{totalAmount}</span>
                      </CartTableTd>
                    </CartTableTr>
                    <CartTableTr>
                      <CartTableHeader>Shipping</CartTableHeader>
                      <CartTableTd>
                        <span>NT$</span>
                        <span>50</span>
                      </CartTableTd>
                    </CartTableTr>
                    <CartTableTr>
                      <CartTableHeader>Tax *</CartTableHeader>
                      <CartTableTd>
                        <span>NT$</span>
                        <span>0.00</span>
                      </CartTableTd>
                    </CartTableTr>

                    <CartTableTr>
                      <CartTableHeader>Order total (1 item)</CartTableHeader>
                      <CartTableTd>
                        <span>NT$</span>
                        <span>{totalAmount}</span>
                      </CartTableTd>
                    </CartTableTr>
                  </tbody>
                </CartTable>
              </TableWrapper>
              <Button radius="1rem" fontSize="1.2rem">
                Submit your order to address
              </Button>
              <InfoText
                textAlign="center"
                fontSize="1rem"
                mt="1.3rem"
                mb="1.3rem"
              >
                By checking the box above and clicking “Submit your order to
                qweqwe”, you agree to Etsy’s Privacy Policy. You can opt out of
                rou receive.
              </InfoText>

              <CheckboxWrapper>
                {" "}
                <div style={{ position: "relative" }}>
                  <Checkbox />{" "}
                </div>
                <SubscriptionLabel>
                  Send me personalized offers, unique gift ideas, and expert
                  tips for shopping on Etsy
                </SubscriptionLabel>
              </CheckboxWrapper>

              <div>
                <InfoText
                  textAlign="center"
                  fontSize="1rem"
                  mt="2.5rem"
                  mb="1.3rem"
                >
                  By checking the box above and clicking “Submit your order to
                  qweqwe”, you agree to Etsy’s Privacy Policy. You can opt out
                  of receiving the email subscriptions anytime in your account
                  settings or by clicking the unsubscribe link in emails you
                  receive.
                </InfoText>
              </div>
            </form>
          </CartWrapper>
        </MainWrapper>
        {isLoading && <LoadingSpinner />}
        {cartItems}
      </Container>
      <Footer />
    </>
  );
};

export default Confirm;
