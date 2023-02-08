import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Grid, GridItem } from "../lib/Grid";

import HEROIMG from "../public/assets/hero-img.svg";
import Button from "../lib/Button";

const Hero = () => {
  return (
    <Container className="container">
      <Grid container>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          <Image src={HEROIMG} alt="" />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          <Container className="right">
            <div className="heading">
              <h2>
                Your <strong>Brand</strong>
              </h2>
              <h2>
                Your <strong>Apps</strong>
              </h2>
            </div>

            <div className="content">
              <p>Start your own online business today</p>
            </div>

            <Button>Get Started</Button>
          </Container>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  &.container {
    padding: ${(props) => props.theme.sectionPadding};
  }

  &.right {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    gap: 2rem;

    .heading {
    }

    .content {
      p {
        font-size: 20px;
        text-align: center;
      }
    }
  }

  h2 {
    font-size: calc(3vw + 1rem);

    strong {
      font-weight: bolder;
      color: #5259c5;
    }
  }
`;
