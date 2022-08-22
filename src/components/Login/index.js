import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
// import { auth } from "../../slices/auth-slice";
// import { GoogleLogin } from "react-google-login";
import AuthService from "../../services/authApi";

import { ImageStyleFree, ButtonWrapper } from "../Detail/DetailElement";
import { Wrapper, Headline, SignupCard, From } from "../Signup/SignElement";
import withReactContent from "sweetalert2-react-content";
import LoadingSpinner from "../UI/LoadingSpinner";
import { BtnStyle } from "../UI/Button";
import Input from "../UI/Input";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const AuthSwal = withReactContent(Swal);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const updateData = {
    email: formData.email,
    password: formData.password,
  };
  /**
   * USE JWT login
   * @param {event}
   */
  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await AuthService.login(updateData.email, updateData.password).then(
        (res) => {
          if (res.data.token) {
            localStorage.setItem("user", JSON.stringify(res.data));
          }
        }
      );

      await setIsLoading(false);
      await AuthSwal.fire({
        title: "Success",
        text: "Login Success!",
        icon: "success",
      });
      await navigate("/");
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
      <SignupCard>
        {isLoading && <LoadingSpinner />}
        <Headline>LOGIN</Headline>
        <From method="POST" action="/" onSubmit={handlerSubmit}>
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
          <BtnStyle type="submit" mt="2rem">
            Login
          </BtnStyle>

          <BtnStyle fontSize="1.3rem" type="button" mt="2rem">
            {" "}
            <Link style={{ all: "unset" }} to="/signup">
              Creat new account{" "}
            </Link>
          </BtnStyle>
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
{/* 
            <ButtonWrapper>
              <GoogleLogin
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
              />
            </ButtonWrapper> */}
          </>
        </From>
      </SignupCard>
    </Wrapper>
  );
};

export default Login;
