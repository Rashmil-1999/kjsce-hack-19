import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

// import styled from 'styled-components';

const UserInfo: React.FC = () => {
  return (
    <Card>
      <CardHeader className="border-0 text-center" tag="h1">Vikrant Gajria</CardHeader>
      
      <CardBody tag={Container} fluid>
        <Row>
          <Col>
            <b>19 years old</b>
          </Col>
          <Col>
            Male
          </Col>
        </Row>
        <Row>
          <Col>
            Height: 6 feet
          </Col>
          <Col>
            Weight: 190 lbs
          </Col>
          <Col>
            Blood Group: B+ve
          </Col>
        </Row>
      </CardBody>

      <CardFooter tag="form" className="d-flex flex-column px-5">
        <Button type="submit" color="info" size="lg">Fill Prescription</Button>
      </CardFooter>
    </Card>
  );
};

export default UserInfo;
