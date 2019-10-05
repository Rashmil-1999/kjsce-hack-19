import React from 'react';

import {
  Container,
} from 'reactstrap';

import styled from 'styled-components';

import Token from '../../components/Token';
import _ from 'lodash';

const HorizonalScroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const TokenNumbers: React.FC = () => {
  let x = _.range(1,100).map(e => <Token number={e} />);
  return (
    <Container fluid style={{
      maxHeight: '70vh',
      overflow: 'auto',
    }}>
      <HorizonalScroll>
        {x}
      </HorizonalScroll>
    </Container>
  );
};

export default TokenNumbers;
