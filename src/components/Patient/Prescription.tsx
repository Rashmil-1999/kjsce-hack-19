import React from 'react';

import styled from 'styled-components';

const PrescriptionContainer = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
  font-weight: bolder;
  font-size: 1.5rem;
  color: white;
  border-radius: 8px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

type PrescriptionProps = {
  onClick?: Function,
};

const Prescription: React.FC<PrescriptionProps> = ({ onClick }) => {
  return (
    <PrescriptionContainer onClick={onClick as any}>
      Hello World
    </PrescriptionContainer>
  );
};

export default Prescription;
