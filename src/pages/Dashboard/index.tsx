import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import TokenCount from '../../containers/Dashboard/TokenCount';
import TokenNumbers from '../../containers/Dashboard/TokenNumbers';

import PatientInfo from '../../containers/Dashboard/Patient';

const Dashboard: React.FC = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="border-bottom border-black">
        <Col sm={3} className="border-right border-black">
          <TokenCount />
        </Col>
        <Col sm={9} className="px-0">
          <TokenNumbers />
        </Col>
      </Row>

      <Row className="bg-aqua h-75">
        <Col className="py-1">
          <PatientInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
