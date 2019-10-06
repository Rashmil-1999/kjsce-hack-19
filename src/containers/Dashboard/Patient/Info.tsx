import React, { useEffect, useState } from 'react';

import { useToggle } from 'react-use';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Patient from '../../../components/Patient/Biodata';
import Prescription from '../../../components/Patient/Prescription';
import PrescriptionModal from '../../../components/Patient/PrescriptionModal';

import { useFirebase } from '../../../util/firebase';
import { useFirebaseUser } from '../../../util/firebase/extras';

type UserInfoProps = {
  currentPerson?: string,
  reset: () => void,
};

const UserInfo: React.FC<UserInfoProps> = ({ currentPerson, reset }) => {
  const firebase = useFirebase();
  const user = useFirebaseUser();
  const [data, setData] = useState<object>();
  const [prescriptions, setPrescriptions] = useState();
  const [fillPrescription, toggle] = useToggle(false);

  useEffect(() => {
    if(currentPerson) {
      (async () => {
        const q = await firebase.firestore()
          .collection('Users')
          .where("phoneNo", "==", "+91" + currentPerson)
          .limit(1)
          .get();
        
        if(q.docs[0] && q.docs[0].exists) {
          setData(q.docs[0]);

          const appointment = await firebase.firestore()
            .collection('Appointments')
            .where('userId', '==', q.docs[0].id)
            .get();

          firebase.firestore()
            .collection("Prescription")
            .where('userId', '==', q.docs[0].id)
            .get()
            .then(res => {
              setPrescriptions(res.docs.map(d => d.data()));
            });

          const aData = appointment.docs.map(d => d.data()).sort((a: any, b: any) => a.date - b.date)[0];
          
          if(user) {
            firebase.firestore()
              .collection("Doctors")
              .doc(user.uid)
              .update({
                currentToken: aData.tokenNo,
              });
          }
        }
      })();
    }
  }, [currentPerson, user]);

  return (
    <Container fluid>
      <Row>
        <Col>
          {data && <Patient {...(data as any).data()} onFillClick={toggle} />}
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <h3>Prescriptions</h3>
          <section>
            {
              prescriptions && prescriptions.length > 0
              ? prescriptions.map((p: any) => <Prescription prescription={p} />)
              : "No records found"
            }
          </section>
        </Col>
      </Row>
      <PrescriptionModal patient={data as any} isOpen={fillPrescription} toggle={toggle} onDone={reset} />
    </Container>
  );
};

export default UserInfo;
