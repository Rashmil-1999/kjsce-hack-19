import React, { useState, useEffect } from 'react';

import {
  Container,
  Col,
} from 'reactstrap';

import styled from 'styled-components';

import { User } from 'firebase';
import Token from '../../components/Token';
import { useFirebase } from '../../util/firebase';

const HorizonalScroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

type TokenType = {
  attended: boolean,
  date: Date,
  docId: string,
  symptoms: string,
  tokenNo: number,
  userId: string,
};

const TokenNumbers: React.FC = () => {
  const firebase = useFirebase();
  const [user, setUser] = useState<User>();
  const [tokens, setTokens] = useState<TokenType[]>([]);

  firebase.auth().onAuthStateChanged((n: any) => {
    setUser(n);
  });

  useEffect(() => {
    if(user) {
      firebase.firestore()
      .collection("Appointments")
      .where("docId", "==", user.uid)
      .where("attended", "==", false)
      .onSnapshot((res) => {
        const active = res.docs.map(t => t.data()) as TokenType[];
        setTokens(active.filter(t => !t.attended).sort((a, b) => a.tokenNo - b.tokenNo));
      });
    }
  }, [user]);

  return (
    <>
      <Col sm={3} className="border-right border-black">
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <h2>{tokens.length}</h2>
          <span>Tokens remaining</span>
        </div>
      </Col>
      <Col sm={9} className="px-0">
        <Container fluid style={{
          maxHeight: '70vh',
          overflow: 'auto',
        }}>
          <HorizonalScroll>
            {tokens.map(t => <Token number={t.tokenNo} />)}
          </HorizonalScroll>
        </Container>
      </Col>
    </>
  );
};

export default TokenNumbers;
