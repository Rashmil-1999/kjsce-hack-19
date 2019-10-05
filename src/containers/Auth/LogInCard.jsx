import React from "react";

import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Input, Button } from "reactstrap";
import { useInput } from "../../util";
import { useFirebase } from "../../util/firebase";

const LogInCard = () => {
  const phoneNumberInput = useInput(null);
  const otpInput = useInput(null);
  const firebase = useFirebase();

  if (!firebase) {
    return <h1>Error</h1>;
  }

  const onFormSubmit = e => {
    e.preventDefault();
    var phoneNumber = phoneNumberInput.value;
    var appVerifier = window.recaptchaVerifier;
    if (!phoneNumber) {
      alert("Please enter the Phone Number");
    } else {
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          alert("enter the otp sent");
          window.confirmationResult = confirmationResult;
        })
        .catch(function(error) {
          // Error; SMS not sent
          // ...
        });
    }
    alert(phoneNumberInput.value);
  };

  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
      callback: function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onFormSubmit();
      }
    }
  );

  return (
    <Card>
      <CardHeader className="text-center border-0">
        <h4 className="m-0">Log In</h4>
      </CardHeader>
      <CardBody
        tag="form"
        onSubmit={e => onFormSubmit(e)}
        className="d-flex flex-column"
      >
        <Input
          className="border-radius-50 my-1"
          placeholder="Enter Phone Number"
          type="tel"
          {...phoneNumberInput}
        />

        <Input
          className="border-radius-50 my-1"
          placeholder="Enter OTP"
          type="number"
          {...otpInput}
        />

        <Button color="primary" type="submit" className="rounded-pill my-1">
          Log In
        </Button>
        <Button
          tag={Link}
          to="/signup"
          outline
          color="info"
          className="rounded-pill my-1"
        >
          Sign Up
        </Button>
      </CardBody>
    </Card>
  );
};

export default LogInCard;
