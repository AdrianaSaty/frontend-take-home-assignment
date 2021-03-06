import * as React from 'react';
import { logo } from '../../icons/index';
import { Container, HeaderLogo } from './styles';

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <HeaderLogo src={logo} alt="origin logo" />
    </Container>
  );
};

export default Header;
