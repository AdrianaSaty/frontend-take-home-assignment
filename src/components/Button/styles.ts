import styled from 'styled-components';
import { themeColors } from '../../globalStyles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonLayout = styled.button`
  width: 320px;
  height: 56px;
  left: 120px;
  top: 415px;
  background: ${themeColors.brandColorPrimary};
  border: none;
  border-radius: 32px;
  & p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${themeColors.white};
  }
`;
