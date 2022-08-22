import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Button from "../UI/Button";
import {
  Form,
  InputWrapper,
  ExpirationDate,
  IconWrapper,
  Subtitle,
  CreditCardWrapper,
  RadioInput,
  RadioWrapper,
  RadioLabel,
  PaypalWrapper,
  PaypalText,
  ExpirationWrapper,
  ExpirationAndCVC,
  CardIconWrapper,
  ImageStyle,
} from "./PaymentElement";
import {
  Container,
  Headline,
  LabelHeadline,
  Input,
  ErrorMessage,
} from "../ShippingForm/ShippingFormElement";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../UI/Footer";

const Payment = () => {
  const navigate = useNavigate();

  /**
   * TODO: 使用一個state 就可以改變了吧
   */
  const [useCardPay, setUseCardPay] = useState(false);
  const [usePaypalPay, setUsePaypalPay] = useState(false);

  const useCardHandler = () => {
    setUseCardPay(true);
    setUsePaypalPay(false);
  };
  const usePaypalHandler = () => {
    setUseCardPay(false);
    setUsePaypalPay(true);
  };

  const formik = useFormik({
    initialValues: {
      nameOnCard: "",
      number: Number,
      cvc: Number,
      month: Number,
      year: Number,
    },
    validationSchema: Yup.object({
      nameOnCard: Yup.string()
        .max(15, "Must be 15 characters or less.")
        .required("Name must not be empty."),
      number: Yup.string().max(19).required("Please enter card number"),
      cvc: Yup.string().min(3).max(4).required("Please enter CVC number"),
      month: Yup.string().max(2).required(""),
      year: Yup.string().max(4).required(""),
    }),
    onSubmit: (values, { resetForm }) => {
      navigate("/review/confirm");
      resetForm();
    },
  });

  const shownNameOnCardError =
    formik.touched.nameOnCard && formik.errors.nameOnCard;

  const shownNumberError = formik.touched.number && formik.errors.number;

  const validate =
    formik.errors.nameOnCard === undefined &&
    formik.errors.number === undefined;

  const name = formik.values.nameOnCard;

  let newCardNum = formik.values.number;
  let userInputNum = true;

  if (newCardNum.length > 1) {
    newCardNum = newCardNum.split(" ").join("");
    newCardNum = newCardNum.match(/.{1,4}/g).join(" ");
    userInputNum = !isNaN(newCardNum.replace(/\s/g, ""));
  }

  return (
    <>
      <Container>
        <Headline mb=".5rem">Choose a payment method</Headline>
        <Subtitle>
          You will not be charged until you review this order on the next page.
        </Subtitle>

        <CreditCardWrapper>
          <RadioWrapper>
            <div>
              <RadioInput
                name="payment"
                onClick={useCardHandler}
                id="creditCard"
              />
              <RadioLabel htmlFor="creditCard">Card</RadioLabel>
            </div>
            <CardIconWrapper>
              <a href="#">
                <ImageStyle
                  src={require("../../image/Payment/visa.png")}
                  alt="Visa card icon"
                />
              </a>{" "}
              <a href="#">
                <ImageStyle
                  src={require("../../image/Payment/american-express.png")}
                  alt="Visa card icon"
                />{" "}
              </a>{" "}
              <a href="#">
                <ImageStyle
                  src={require("../../image/Payment/master-card.png")}
                  alt="Visa card icon"
                />{" "}
              </a>{" "}
              <a href="#">
                <ImageStyle
                  src={require("../../image/Payment/discover.png")}
                  alt="Visa card icon"
                />{" "}
              </a>
            </CardIconWrapper>
          </RadioWrapper>

          {useCardPay && (
            <Form onSubmit={formik.handleSubmit}>
              <InputWrapper>
                <LabelHeadline htmlFor="nameOnCard">
                  Name on the card
                </LabelHeadline>{" "}
                <Input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nameOnCard}
                  name="nameOnCard"
                />{" "}
              </InputWrapper>
              {shownNameOnCardError ? (
                <ErrorMessage mb=".8">{formik.errors.nameOnCard}</ErrorMessage>
              ) : null}
              <InputWrapper>
                {" "}
                <IconWrapper>
                  <FontAwesomeIcon icon="fa-solid fa-credit-card" />
                </IconWrapper>
                <LabelHeadline htmlFor="number">Card number</LabelHeadline>
                <Input
                  paddingL="5rem"
                  maxLength="19"
                  value={newCardNum}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="number"
                />{" "}
                <IconWrapper translateX="-100%" left>
                  <FontAwesomeIcon icon="fa-solid fa-lock" />
                </IconWrapper>
              </InputWrapper>
              {shownNumberError ? (
                <ErrorMessage>{formik.errors.number}</ErrorMessage>
              ) : null}
              {!userInputNum ? (
                <ErrorMessage>Please input "number"</ErrorMessage>
              ) : null}
              <ExpirationAndCVC>
                <ExpirationWrapper>
                  <LabelHeadline htmlFor="expirationDate">
                    Expiration Date
                  </LabelHeadline>
                  <ExpirationDate name="expirationDate">
                    <label htmlFor="expirationMonth"></label>
                    <Input
                      width="25%"
                      placeholder="月份"
                      maxLength="2"
                      value={formik.values.month}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="month"
                    />
                    <label htmlFor="expirationYear"></label>
                    <Input
                      width="25%"
                      placeholder="西元"
                      maxLength="4"
                      value={formik.values.year}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="year"
                    />
                  </ExpirationDate>{" "}
                </ExpirationWrapper>{" "}
                <InputWrapper style={{ alignItems: "flex-end" }}>
                  <LabelHeadline htmlFor="cvc">Security Code</LabelHeadline>
                  <Input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cvc}
                    placeholder="CVC"
                    width="70%"
                    name="cvc"
                    maxLength="4"
                  />
                  <IconWrapper translateX="-100%" left>
                    <FontAwesomeIcon icon="fa-solid fa-lock" />
                  </IconWrapper>
                </InputWrapper>{" "}
              </ExpirationAndCVC>

              <Button padding="0" width="100%" borderRadius="0" primary>
                Review your order
              </Button>
            </Form>
          )}
        </CreditCardWrapper>
        <PaypalWrapper>
          <RadioWrapper>
            <div>
              <RadioInput
                name="payment"
                onClick={usePaypalHandler}
                id="Paypal"
              />
              <RadioLabel htmlFor="Paypal">Paypal</RadioLabel>
            </div>
            <ImageStyle
              large
              src={require("../../image/Payment/paypal (1).png")}
            />
          </RadioWrapper>

          {usePaypalPay && (
            <div>
              <PaypalText>
                Continuing will take you to your PayPal account. You'll be able
                to review and submit your order after you log in.
              </PaypalText>

              <Button primary padding="0" width="100%" borderRadius="0">
                Review your order
              </Button>
            </div>
          )}
        </PaypalWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Payment;
