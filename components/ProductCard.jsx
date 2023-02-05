import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Button from "../lib/Button";

const ProductCard = () => {
  let description = `Launch your own E-commerce app with Appbasket E-commerce solution Launch
your own asdf sfd aksjflkj aklsjflk sjdlf`;
  return (
    <Container className="card">
      <Container className="card-head">
        <Image
          src="https://static.wixstatic.com/media/70e839_437c2bc179004f6a957ae6043546446c~mv2.png/v1/fill/w_163,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/000749-online-store-logos-design-free-on.png"
          alt=""
          height="100"
          width="100"
        />
      </Container>
      <br />
      <CardTitle>
        Online shopping /E commerce Business like amazon/flipkart
      </CardTitle>
      <br />
      <CardDescription>{description.slice(0, 81)}.....</CardDescription>
      <br />
      <Button className="bg-dark card-btn">Start Now</Button>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  &.card {
    width: 18rem;
    height: 23rem;
    padding: 1.5rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 15px;
  }

  &.card-head {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CardTitle = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.color};
  font-weight: 400;
  text-align: left;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: grey;
`;
