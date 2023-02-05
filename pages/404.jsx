import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return <Container>
    <h1>
        Oops page not found!
    </h1>
  </Container>;
};

export default ErrorPage;

const Container = styled.div`
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: red;
  }
`;
