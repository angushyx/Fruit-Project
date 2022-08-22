import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Button from "../UI/Button";
import {
  Form,
  Input,
  PasswordInput,
  EmailInput,
  LabelHeadline,
  ErrorMessage,
  InputWrapper,
} from "./ShippingFormElement";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewUserInfo,
  changePageView,
} from "../../slices/ShippingInfo-slice";

const ShippingForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(changePageView(window.location.pathname));

  const shippingSlice = useSelector((state) => state.userInfoReducer);
  const userList = shippingSlice.userInfos;
  const isShippingPage = shippingSlice.isShippingPage;

  const formik = useFormik({
    initialValues: {
      email: userList.email,
      password: userList.password,
      fullName: userList.fullName,
      address: userList.address,
      city: userList.city,
      postalCode: userList.postalCode,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less.")
        .required("Name must not be empty."),
      email: Yup.string()
        .email("Please enter a valid email.")
        .required("Email must not be empty."),
      password: Yup.string().required("Password must not be empty.").min(6),
      address: Yup.string().required("Address must not be empty."),
      city: Yup.string().required("City must not be empty."),
      postalCode: Yup.number().required("Postal Code must be a number"),
    }),
    onSubmit: (values) => {
      dispatch(addNewUserInfo({ values }));
      if (isShippingPage) {
        navigate("/review/payment");
      }
    },
  });

  const showNameError = formik.touched.fullName && formik.errors.fullName;
  const showEmailError = formik.touched.email && formik.errors.email;
  const showPasswordError = formik.touched.password && formik.errors.password;
  const showAddressError = formik.touched.address && formik.errors.address;
  const showCityError = formik.touched.city && formik.errors.city;
  const showPostalCodeError =
    formik.touched.postalCode && formik.errors.postalCode;

  const countryOptions = [
    { value: "China", label: "China" },
    { value: "India", label: "India" },
    { value: "Taiwan", label: "Taiwan" },
    { value: "Brazil", label: "Brazil" },
    { value: "Mexico", label: "Mexico" },
    { value: "United States", label: "United States" },
  ];
  const countyOptions = [
    { value: "Taipei", label: "Taipei" },
    { value: "Keelung", label: "Keelung" },
  ];

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <LabelHeadline htmlFor="email">Email</LabelHeadline>
          <EmailInput
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {showEmailError ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
        </InputWrapper>{" "}
        {isShippingPage && (
          <InputWrapper>
            <LabelHeadline htmlFor="password">Password</LabelHeadline>
            <PasswordInput
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {showPasswordError ? (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            ) : null}
          </InputWrapper>
        )}
        <InputWrapper>
          <LabelHeadline htmlFor="country">Country</LabelHeadline>
          <Select
            styles={{ width: "50%" }}
            name="country"
            options={countryOptions}
          />
        </InputWrapper>
        <InputWrapper>
          <LabelHeadline htmlFor="fullName">Full name</LabelHeadline>
          <Input
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {showNameError ? (
            <ErrorMessage>{formik.errors.fullName}</ErrorMessage>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <LabelHeadline htmlFor="address">
            Apt / Suite / Unit <span>(option)</span>
          </LabelHeadline>
          <Input
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {showAddressError ? (
            <ErrorMessage>{formik.errors.address}</ErrorMessage>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <LabelHeadline htmlFor="city">City</LabelHeadline>
          <Input
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {showCityError ? (
            <ErrorMessage>{formik.errors.city}</ErrorMessage>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <LabelHeadline htmlFor="county">Province</LabelHeadline>
          <Select name="county" options={countyOptions} />
        </InputWrapper>
        <InputWrapper>
          <LabelHeadline htmlFor="postalCode">Postal Code</LabelHeadline>
          <Input
            name="postalCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postalCode}
          />
          {showPostalCodeError ? (
            <ErrorMessage>{formik.errors.postalCode}</ErrorMessage>
          ) : null}
        </InputWrapper>
        <Button primary padding="0" width="100%" borderRadius="0">
          {isShippingPage ? "Checkout" : "edit"}
        </Button>
      </Form>
    </>
  );
};

export default ShippingForm;
