import React from 'react';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Patient from '../../../components/Patient/Biodata';
import Prescription from '../../../components/Patient/Prescription';
import PrescriptionModal from '../../../components/Patient/PrescriptionModal';

const UserInfo: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Patient />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <h3>Prescriptions</h3>
          <section>
            <Prescription />
            <Prescription />
            <Prescription />
            <Prescription />
          </section>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <h3>Reports</h3>
          <section>
            <Prescription />
            <Prescription />
            <Prescription />
            <Prescription />
          </section>
        </Col>
      </Row>
      <PrescriptionModal />
    </Container>
  );
};

export default UserInfo;
