import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Button from "../lib/Button";
import Link from "next/link";

const ProductCard = ({ thumbnail, title, description, link }) => {
  return (
    <Container className="card">
      <Container className="card-contents">
        <Container className="card-head">
          <Image src={thumbnail} alt="" height="100" width="100" />
        </Container>
        <br />
        <CardTitle>
          {title.length > 57 ? title.slice(0, 57) + "...." : title}{" "}
        </CardTitle>
        <br />
        <CardDescription>
          {description.length > 81
            ? description.slice(0, 81) + "...."
            : description}
        </CardDescription>
        <br />
      </Container>

      <Container className="card-footer">
        <Link href={`/product/${link}`}>
          <Button className="bg-dark card-btn">Start Now</Button>
        </Link>
      </Container>
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

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
  }

  &.card-head {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100px;

    img {
        width: 120px !important;
        height: auto;
    }
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
