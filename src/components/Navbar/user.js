import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation, Link } from "react-router-dom";
import UserModal from "../UI/UserModal";
import { ImageStyle } from "../Payment/PaymentElement";

const User = () => {
  /********user modal **************/
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const googleLogin = JSON.parse(localStorage.getItem("profile"));

  const navigator = useNavigate();

  //for google login
  const location = useLocation();
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    navigator("/login");
  };
  const toggleUserModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  const googleImage = googleLogin?.imageUrl;

  return (
    <>
      {" "}
      {user ? (
        <>
          <div onClick={toggleUserModalHandler}>
            {showModal && <UserModal home onLogout={logoutHandler} />}
            <div>
              <ImageStyle
                width="4rem"
                height="4rem"
                radius="50%"
                src={user.user.imageUrl}
                alt="user avatar"
              />
            </div>
          </div>
        </>
      ) : googleLogin ? (
        <>
          <div onClick={toggleUserModalHandler}>
            {showModal && <UserModal onLogout={logoutHandler} />}
            <div>
              <ImageStyle
                width="4rem"
                height="4rem"
                style={{ borderRadius: "50%" }}
                src={googleImage}
                alt="user avatar"
              />
            </div>
          </div>
        </>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon icon="fa-solid fa-user" />{" "}
        </Link>
      )}
    </>
  );
};

export default User;
