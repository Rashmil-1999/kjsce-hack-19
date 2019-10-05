import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import TokenCount from '../../containers/Dashboard/TokenCount';
import TokenNumbers from '../../containers/Dashboard/TokenNumbers';

import UserInfo from '../../containers/Dashboard/Patient/UserInfo';

const Dashboard: React.FC = () => {
  return (
    <Container fluid>
      <Row className="border-bottom border-black">
        <Col xs={3} className="border-right border-black">
          <TokenCount />
        </Col>
        <Col xs={9} className="px-0">
          <TokenNumbers />
        </Col>
      </Row>

      <Row className="bg-aqua">
        <Col className="py-1">
          <UserInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
