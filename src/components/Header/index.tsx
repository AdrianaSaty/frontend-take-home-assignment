import * as React from 'react';
import logo from '../../icons/logo.svg';
import { HeaderLogo } from './styles';

const Header: React.FunctionComponent = () => {
  return <HeaderLogo src={logo} alt="origin logo" />;
};

export default Header;
