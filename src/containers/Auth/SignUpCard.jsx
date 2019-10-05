import React from "react";

import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Input, Button } from "reactstrap";
import { useInput } from "../../util";

const SignUpCard = () => {
  const nameInput = useInput(null);
  const phoneNumberInput = useInput(null);
  const specialityInput = useInput(null);
  const experienceInput = useInput(null);
  const addressInput = useInput(null);

  return (
    <Card className="w-50">
      <CardHeader className="text-center border-0">
        <h4 className="m-0">Sign Up</h4>
      </CardHeader>
      <CardBody
        tag="form"
        onSubmit={() => alert("Hi")}
        className="d-flex flex-column"
      >
        <Input
          className="border-radius-50 my-1"
          placeholder="Enter your name"
          {...nameInput}
        />

        <Input
          className="border-radius-50 my-1"
          placeholder="Enter Phone Number"
          type="tel"
          {...phoneNumberInput}
        />

        <Input
          className="border-radius-50 my-1"
          placeholder="Enter your speciality"
          {...specialityInput}
        />

        <Input
          className="border-radius-50 my-1"
          placeholder="Enter the year you started your practice"
          type="number"
          {...experienceInput}
        />

        <Input
          className="border-radius-50 my-1"
          placeholder="Enter your clinic address"
          {...addressInput}
        />

        <Button color="danger" type="submit" className="rounded-pill my-1">
          Sign Up
        </Button>
        <Button
          tag={Link}
          to="/login"
          outline
          color="warning"
          className="rounded-pill my-1"
        >
          Log In
        </Button>
      </CardBody>
    </Card>
  );
};

export default SignUpCard;
