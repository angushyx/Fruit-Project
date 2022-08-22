import React, { useState } from "react";

import { auth } from "../../slices/auth-slice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


import { ImageStyleFree, ButtonWrapper } from "../Detail/DetailElement";
import withReactContent from "sweetalert2-react-content";
import LoadingSpinner from "../UI/LoadingSpinner";
import { BtnStyle } from "../UI/Button";
import Input from "../UI/Input";
import Swal from "sweetalert2";

import {
  Wrapper,
  Headline,
  SignupCard,
  From,
  InputWrapper,
} from "./SignElement";

import {
  RadioInput,
  RadioWrapper,
  RadioLabel,
} from "../Payment/PaymentElement";
import AuthService from "../../services/authApi";

const Signup = () => {
  const navigate = useNavigate();
  // 引入SweetAlert
  const AuthSwal = withReactContent(Swal);
  //判斷狀態，1. 是否登入?  2. 是否 load 中
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  /**************JWT VERSION 2*************/

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    imageUrl: "",
  };

  const [formData, setFormData] = useState(initialState);
  const updateData = {
    email: formData.email,
    password: formData.password,
    role: formData.role,
    name: formData.firstName + formData.lastName,
    confirmPassword: formData.confirmPassword,
    imageUrl: formData.imageUrl,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let errorMessage;
  /**
   * USE JWT login or signup
   * @param {event} e
   */
  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await AuthService.signup(
        updateData.name,
        updateData.email,
        updateData.password,
        updateData.role,
        updateData.confirmPassword,
        updateData.imageUrl
      );

      await setIsLoading(false);
      await AuthSwal.fire({
        title: "Success",
        text: "Authentication Success",
        icon: "success",
      });

      await navigate("/login");
    } catch (error) {
      await AuthSwal.fire({
        title: "Failed",
        text: error.response.data,
        icon: "error",
      });
    }

    setIsLoading(false);
  };

  /**
   * Google auth system
   * @param {Promise} res
   */
  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;
  //   try {
  //     dispatch(auth(result));
  //     navigate("/");
  //   } catch (error) {}
  // };
  // const googleFailure = async (res) => {};

  return (
    <Wrapper>
      {" "}
      <SignupCard translateY="5%">
        <Headline> SIGNUP</Headline>
        <From method="POST" action="/" onSubmit={handlerSubmit}>
          <InputWrapper>
            <Input
              label="First Name"
              required
              onChange={handleChange}
              input={{
                type: "text",
                id: "firstName",
                placeholder: "First Name",
                name: "firstName",
                width: "80%",
              }}
            />
            <Input
              label="Last Name"
              required
              onChange={handleChange}
              input={{
                type: "text",
                id: "lastName",
                placeholder: "Last Name",
                name: "lastName",
                width: "80%",
              }}
            />
          </InputWrapper>
          <Input
            icon="fa-solid fa-envelope"
            label="userEmail"
            required
            onChange={handleChange}
            input={{
              type: "email",
              id: "userEmail",
              placeholder: "User name / Email",
              name: "email",
            }}
          />
          <Input
            icon="fa-solid fa-lock"
            label="userPassword"
            required
            onChange={handleChange}
            input={{
              type: "password",
              id: "userPassword",
              placeholder: "password",
              name: "password",
            }}
          />
          <Input
            icon="fa-solid fa-lock"
            label="userPassword"
            required
            onChange={handleChange}
            input={{
              type: "password",
              id: "confirmPassword",
              placeholder: "Password again",
              name: "confirmPassword",
            }}
          />{" "}
          <br />
          <br />
          <InputWrapper>
            <RadioWrapper>
              <RadioInput
                checkedbgc="var(--color-primary)"
                name="role"
                onChange={handleChange}
                value="consumer"
                id="consumer"
              />
              <RadioLabel htmlFor="role">consumer</RadioLabel>{" "}
            </RadioWrapper>
            <RadioWrapper>
              <RadioInput
                checkedbgc="var(--color-primary)"
                name="role"
                onChange={handleChange}
                value="seller"
                id="seller"
              />
              <RadioLabel htmlFor="role">seller</RadioLabel>
            </RadioWrapper>
          </InputWrapper>
          <input onChange={handleChange} name="imageUrl" type="text" />
          <ButtonWrapper>
            <BtnStyle type="submit" mt="2rem">
              Signup
            </BtnStyle>
            {isLoading && <LoadingSpinner />}{" "}
            <BtnStyle fontSize="1.3rem" type="button" mt="2rem">
              {" "}
              <Link style={{ all: "unset" }} to="/login">
                {" "}
                Login with existing account{" "}
              </Link>
            </BtnStyle>{" "}
          </ButtonWrapper>
          <br />
          <br />
          <>
            <h2>----------------OR----------------</h2>
            <ButtonWrapper>
              <BtnStyle hoverBgc="#1877f2" radius="3rem" pe="button">
                <ImageStyleFree
                  src={require("../../image/Social Media/facebook-logo-2019.png")}
                  alt="login with facebook"
                />
                FACEBOOK{" "}
              </BtnStyle>
            </ButtonWrapper>

            <ButtonWrapper>
              {/* <GoogleLogin
                clientId="472610148148-acvlomegqtfkp1a32drp8oqaft1rnoae.apps.googleusercontent.com"
                render={(renderProps) => (
                  <BtnStyle
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    radius="3rem"
                  >
                    <ImageStyleFree
                      src={require("../../image/Social Media/google.png")}
                      alt="login with google"
                    />
                    GOOGLE
                  </BtnStyle>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              /> */}
            </ButtonWrapper>
          </>
        </From>
      </SignupCard>
    </Wrapper>
  );
};

export default Signup;
