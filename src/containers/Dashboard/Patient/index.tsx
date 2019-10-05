import React, { useState } from 'react';

import Form from './Form';
import Info from './Info';

const PatientPage: React.FC = () => {
  const [current, setCurrentToken] = useState<number | string | undefined>();

  if(!!current) {
    return <Form onSubmit={setCurrentToken} />;
  }

  return <Info />;
};

export default PatientPage;
