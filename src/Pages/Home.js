import React from "react";
import styled from "styled-components";
const Home = ({ history }) => {
  return (
    <Wrapper>
      home
      <ul>
        <li
          onClick={() => {
            history.push("/beerlist");
          }}
        >
          beerlist로 이동하기
        </li>
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  li {
    cursor: pointer;
  }
`;
export default Home;
