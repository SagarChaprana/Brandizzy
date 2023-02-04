import React, { useState } from "react";
import styled from "styled-components";
import Button from "../lib/Button";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <Container className="brand">
          <h1>Brandizzy!</h1>
          {/* <Image src={LOGO} alt="" /> */}
        </Container>

        <Container className="nav-items">
          <p>
            <span>
              <a href="#products">Products</a>
            </span>
          </p>
          <p>
            <span>
              <a href="#about">About</a>
            </span>
          </p>
          <p>
            <span>
              <a href="#contact">Contact</a>
            </span>
          </p>
        </Container>
      </Container>
      <Container className={`nav-mobile-menu ${isOpen ? "open" : "close"} `}>
        <p>
          <span>
            <a onClick={() => setOpen(false)} href="#products">
              Products
            </a>
          </span>
        </p>
        <p>
          <span>
            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
          </span>
        </p>
        <p>
          <span>
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>
          </span>
        </p>
      </Container>

      <Container className="buttons">
        <span onClick={() => setOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <FaBars />}
        </span>

        <a href="#products">
          <Button className="nav-btn">Custom Applications</Button>
        </a>

        {/* <a href="#contact">
          <Button className="nav-btn bg-dark">Contact Us</Button>
        </a> */}
      </Container>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  padding: 1rem 2rem;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  /* position: fixed; */
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 100px;
  padding: 22px 3%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background-color: hsla(0, 0%, 100%, 0.11);
  box-shadow: none;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  &.brand,
  &.nav-items {
    display: flex;
    align-items: center;
    gap: 3rem;
    @media screen and (max-width: 992px) {
      gap: 2rem;
    }

    p {
      margin-top: 0.2rem;
    }

    p span {
      transition: 350ms;
      color: #534b57;
      font-size: 15px;
      font-weight: 400;
      cursor: pointer;

      a {
        all: unset;
      }
    }
  }

  &.nav-items {
    @media screen and (max-width: 992px) {
      margin-left: -2rem !important;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &.nav-mobile-menu {
    display: none;
    position: fixed;
    z-index: -999;
    left: 0;
    width: 100%;
    /* padding: 12px; */
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media screen and (max-width: 768px) {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 0px;

      /* padding-left: 2rem; */

      p {
        margin-top: 0.2rem;
        padding: 1rem;
        width: 100%;
        cursor: pointer;

        transition: all 0.3s;

        :hover {
          background-color: ${(props) => props.theme.bgColor};
        }
      }

      p span {
        transition: 350ms;
        color: #534b57;
        font-size: 15px;
        font-weight: 400;

        a {
          all: unset;
        }
      }
    }
  }

  &.open {
    top: 100px;
    transition: all 0.4s;
    z-index: -999;
  }

  &.close {
    top: -300px;
    transition: all 0.4s;
  }

  &.buttons {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      all: unset;
    }

    span {
      display: none;
      cursor: pointer;
      padding: 12px 16px;
      font-size: 24px;
      -webkit-tap-highlight-color: transparent;
      tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      border: 1px solid rgba(17, 17, 17, 0.1);
      border-radius: 10px;
      color: #000;

      :active {
        border-color: #111;
        background-color: #111;
        svg {
          background-color: #111;
          color: ${(props) =>
            props.theme.bgColor ? props.theme.bgColor : "#fff"};
        }
      }

      @media screen and (max-width: 768px) {
        display: inline-block;
        /* margin: 0.5rem 0 0 0; */
        svg {
          margin-top: 0.3rem;
        }
      }
    }
  }
`;

const Image = styled.img`
  width: calc(4vw + 1rem);
  height: auto;

  @media screen and (max-width: 768px) {
    width: calc(6vw + 1rem);
  }

  @media screen and (max-width: 400px) {
    width: calc(6vw + 2rem);
  }
`;