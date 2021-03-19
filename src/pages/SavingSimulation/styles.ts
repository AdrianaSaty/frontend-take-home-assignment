import styled from 'styled-components';
import { mediaQuery, themeColors } from '../../globalStyles';

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${themeColors.brandColorPrimary};
  font-style: normal;
  font-weight: normal;
  line-height: 120%;
  padding-top: 32px;
  padding-bottom: 24px;

  ${mediaQuery.sm} {
    font-size: 20px;
    padding-top: 48px;
    padding-bottom: 24px;
  }
`;
