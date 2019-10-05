import React from 'react';

import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, Input, Button } from 'reactstrap';
import { useInput } from '../../util';

const LogInCard: React.FC = () => {
  const phoneNumberInput = useInput(null);
  const otpInput = useInput(null);

  return (
    <Card>
      <CardHeader className="text-center border-0">
        <h4 className="m-0">Log In</h4>
      </CardHeader>
      <CardBody tag="form" onSubmit={() => alert("Hi")} className="d-flex flex-column">
        <Input
          className="border-radius-50 my-1"
          placeholder="Enter Phone Number"
          type="tel"
          {...phoneNumberInput as any}
        />

        <Input
          className="border-radius-50 my-1"
          placeholder="Enter OTP"
          type="number"
          {...otpInput as any}
        />

        <Button color="primary" type="submit" className="rounded-pill my-1">Log In</Button>
        <Button tag={Link} to="/signup" outline color="info" className="rounded-pill my-1">Sign Up</Button>
      </CardBody>
    </Card>
  );
}

export default LogInCard;
