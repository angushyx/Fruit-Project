import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import TemporaryDrawer from "../UI/Drawer/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconStyle } from "../Navbar/Navigation";

import {
  HeroSection,
  Wrapper,
  Title,
  Headline,
  Search,
  Input,
  SearchBtn,
} from "./HeroElement";

const Hero = () => {
  return (
    <>
      <TemporaryDrawer />
      <HeroSection>
        <Search method="GET" action="/search">
          <Input type="text" placeholder="search..." name="keyword" />
          <SearchBtn>
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-search" />
            </IconStyle>
          </SearchBtn>
        </Search>

        <Wrapper>
          <Title>WELCOME TO SEAFOOD</Title>
          <Headline>
            A healthy and organic ingredients delivered directly from the
            village.
          </Headline>
          <Link to="meals">
            <Button width="18rem" radius="1rem">
              shop now
            </Button>
          </Link>
        </Wrapper>
      </HeroSection>{" "}
    </>
  );
};

export default Hero;

{
}
// {
//   showModal && <UserModal onLogout={logoutHandler} />;
// }

// <UserNav>
//   <Ul>
//     {!isLoggedIn && (
//       <Link to="register">
//         <Li>
//           <FontAwesomeIcon icon="fa-solid fa-user" />
//         </Li>{" "}
//       </Link>
//     )}
//     {isLoggedIn && (
//       <Li onClick={toggleUserModalHandler}>
//         <UserImage>
//           <Image
//             src={require("../../../image/user.JPG")}
//             alt="user"
//           />{" "}
//           <span>Angus</span>
//         </UserImage>{" "}
//       </Li>
//     )}
//     {/* {isLoggedIn && (

//     )}{" "} */}
//   </Ul>
// </UserNav>{" "}
