import React from 'react';

import {
  NavLink
} from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const MyNavbar: React.FC = () => {
  return (
    <Navbar color="primary" dark>
      <NavbarBrand tag={NavLink} to='/'>Doktor</NavbarBrand>
    </Navbar>
  );
};

export default MyNavbar;
