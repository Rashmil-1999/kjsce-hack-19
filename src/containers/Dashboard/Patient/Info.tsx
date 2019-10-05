import React, { useEffect, useState } from 'react';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Patient from '../../../components/Patient/Biodata';
import Prescription from '../../../components/Patient/Prescription';
import PrescriptionModal from '../../../components/Patient/PrescriptionModal';

import { useFirebase } from '../../../util/firebase';

type UserInfoProps = {
  currentPerson?: string,
};

const UserInfo: React.FC<UserInfoProps> = ({ currentPerson }) => {
  const firebase = useFirebase();
  const [data, setData] = useState<object>();

  useEffect(() => {
    if(currentPerson) {
      firebase.firestore()
      .collection('Users')
      .doc(currentPerson)
      .get()
      .then((doc) => {
        if(doc.exists) {
          setData(doc.data());
        }
      });
    }
  }, [currentPerson]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Patient {...data as any} />
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
