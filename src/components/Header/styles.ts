import styled from 'styled-components';
import { mediaQuery } from '../../utils';

export const HeaderLogo = styled.img`
  margin: 16px;
  height: 24px;

  ${mediaQuery.sm} {
    margin: 24px 56px;
    height: 32px;
  }
`;
