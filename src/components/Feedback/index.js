import React, { useState, useEffect } from "react";
import { Section, IconStyle } from "../UI/Public";
import axios from "axios";

import {
  FeedbackWrapper,
  UserWrapper,
  TextStyle,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  CommentContainer,
} from "./Feedback";

const Feedback = () => {
  const [users, setUsers] = useState({});

  const fetchData = async () => {
    console.log("data fetching");
    const res = await axios.get(
      "https://lighthouse-user-api.herokuapp.com/api/v1/users/"
    );
    const data = await res.data.results.slice(0, 9);
    setUsers(data);
  };

  /**
   * useEffect 不支援 async 寫法
   */
  useEffect(() => {
    fetchData();
  }, []);

  const CardInfo = (props) => {
    // const { id, name, avatar } = props;
    return (
      <>
        <UserWrapper>
          <IconStyle>
            <img
              style={{ borderRadius: "50%" }}
              src={require("../../image/user.JPG")}
              alt=""
            />
          </IconStyle>
          <h1>Angus Huang</h1>
        </UserWrapper>
        <TextStyle>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          amet magnam expedita maxime quasi tempore .
        </TextStyle>
      </>
    );
  };

  // const userList = users?.map((user) => (
  //   <CardInfo key={user.id} name={user.name} avatar={user.avatar} />
  // ));

  return (
    <Section higher>
      <CommentContainer widther>
        <FeedbackWrapper>
          <Card1>
            <CardInfo />
          </Card1>
          <Card2>
            <CardInfo />
          </Card2>
          <Card3>
            <CardInfo />
          </Card3>
          <Card4>
            <CardInfo />
          </Card4>
          <Card5>
            <CardInfo />
          </Card5>
          <Card6>
            <CardInfo />
          </Card6>
          <Card7>
            <CardInfo />
          </Card7>
          <Card8>
            <CardInfo />
          </Card8>
          <Card9>
            <CardInfo />
          </Card9>
        </FeedbackWrapper>
      </CommentContainer>
    </Section>
  );
};

export default Feedback;
// <Card>

// </Card>;
