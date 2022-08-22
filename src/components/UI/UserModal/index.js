import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageStyle } from "../../Payment/PaymentElement";
import {
  DetailBox,
  UserInfoWrapper,
  SettingWrapper,
  LanguageWrapper,
  SubscriptionWrapper,
  LogoutWrapper,
  UserName,
} from "./UserModalElement";

const UserModal = (props) => {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const googleLogin = JSON.parse(localStorage.getItem("profile"));

  const user = userLogin?.user;

  return (
    <>
      <DetailBox>
        <UserInfoWrapper>
          {user ? (
            <>
              <div>
                <ImageStyle
                  radius="50%"
                  width="6rem"
                  height="6rem"
                  src={user.imageUrl}
                  alt=""
                />
              </div>
              <UserName>
                <strong>{user.name}</strong>
                <div>{user.email}</div>
              </UserName>
            </>
          ) : googleLogin ? (
            <>
              <div>
                <ImageStyle
                  radius="50%"
                  width="6rem"
                  height="6rem"
                  src={googleLogin.imageUrl}
                  alt=""
                />
              </div>
              <UserName>
                <strong>{googleLogin.name}</strong>
                <div>{googleLogin.email}</div>
              </UserName>
            </>
          ) : (
            <>{null}</>
          )}
        </UserInfoWrapper>

        <SettingWrapper>
          <FontAwesomeIcon icon="fa-solid fa-gear" /> <span>編輯設定</span>
        </SettingWrapper>
        <LanguageWrapper>
          <FontAwesomeIcon icon="fa-solid fa-earth-africa" />
          <span>語言</span>
        </LanguageWrapper>
        <SubscriptionWrapper>
          <FontAwesomeIcon icon="fa-solid fa-earth-africa" />
          <span>訂閱方案</span>
        </SubscriptionWrapper>

        <LogoutWrapper onClick={props.onLogout}>
          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
          <span>登出</span>
        </LogoutWrapper>
      </DetailBox>
    </>
  );
};

export default UserModal;
