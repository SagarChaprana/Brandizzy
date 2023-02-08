import React, { useReducer, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Button from "../lib/Button";

const SERVICE_ID = "service_7nd5yti";
const TEMPLATE_ID = "template_a4xiuqg";
const PRIVATE_KEY = "X3wGqayEXLNM3ydo5jLll";
const PUBLICK_KEY = "Cm8_gq7KLmP5zGzyF";

const contactReducer = (state, action) => {
  if (action.type === "NAME") {
    return {
      ...state,
      name: action.value,
      isNameValid: action.value.length > 0,
    };
  }
  if (action.type === "EMAIL") {
    return {
      ...state,
      email: action.value,
      isEmailValid: action.value.includes("@"),
    };
  }

  if (action.type === "MESSAGE") {
    return {
      ...state,
      message: action.value,
      isMessageValid: action.value.length > 0,
    };
  }
  return {
    name: "",
    email: "",
    message: "",
    isEmailValid: false,
    isMessageValid: false,
    isNameValid: false,
  };
};

const Contact = () => {
  const [showErros, setShowErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [showRequestError, setRequestError] = useState(false);
  const [contactState, dispatchContact] = useReducer(contactReducer, {
    name: "",
    email: "",
    message: "",
    isEmailValid: false,
    isMessageValid: false,
    isNameValid: false,
  });

  const handleName = (e) => {
    dispatchContact({
      type: "NAME",
      value: e.target.value,
    });
  };
  const handleEmail = (e) => {
    dispatchContact({
      type: "EMAIL",
      value: e.target.value,
    });
  };
  const handleMessage = (e) => {
    dispatchContact({
      type: "MESSAGE",
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contactState);

    if (
      !contactState.isEmailValid ||
      !contactState.isNameValid ||
      !contactState.isMessageValid
    ) {
      setShowErrors(true);
    } else {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLICK_KEY, PRIVATE_KEY)
        .then((res) => {
          setMessageSent(true);
          setRequestError(false);
        })
        .catch((error) => {
          setMessageSent(false);
          setRequestError(true);
        });

      e.target.reset();
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Input
              className={showErros && !contactState.isNameValid && "error"}
              placeholder="Name"
              onChange={handleName}
              type="text"
              name="from_name"
            />
            {showErros && !contactState.isNameValid && (
              <p className="error">please enter your name</p>
            )}
          </InputGroup>
          <InputGroup>
            <Input
              className={showErros && !contactState.isEmailValid && "error"}
              placeholder="Email"
              onChange={handleEmail}
              type="email"
              name="user_email"
            />
            {showErros && !contactState.isEmailValid && (
              <p className="error">please enter a valid email</p>
            )}
          </InputGroup>
        </FormGroup>

        <Textarea
          className={showErros && !contactState.message && "error"}
          rows={10}
          placeholder="Message"
          onChange={handleMessage}
          type="text"
          name="message"
        />
        {showErros && !contactState.isMessageValid && (
          <p className="error">please write your message</p>
        )}
        <Button isDisabled={messageSent} className="card-btn full-width">
          {messageSent === false && loading ? "sending your message" : "Submit"}
        </Button>
        {showRequestError && messageSent === false && (
          <p className="error">something went wrong! Refersh and try again</p>
        )}

        { messageSent === true && (
          <p className="success">Your message has been received!</p>
        )}
      </Form>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  /* margin-top: 2rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  .error {
    color: red;
  }
  .success {
    color: green;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputGroup = styled.div`
  all: unset;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const Form = styled.form`
  display: block;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
const Input = styled.input`
  all: unset;
  outline: none;
  border: 1px solid grey;
  padding: 8px 6px;
  width: 94%;

  &.error {
    border: 1px solid red;
  }

  :focus {
    background-color: #fff;
  }
`;
const Textarea = styled.textarea`
  all: unset;
  border: 1px solid grey;
  padding: 8px 6px;
  display: block;
  width: 97%;
  overflow-y: auto;
  overflow-x: hidden;

  &.error {
    border: 1px solid red;
  }

  :focus {
    background-color: #fff;
  }
`;
