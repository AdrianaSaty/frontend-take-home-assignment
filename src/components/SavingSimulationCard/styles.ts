import styled from 'styled-components';
import { mediaQuery, themeColors } from '../../globalStyles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  background-color: ${themeColors.white};
  width: 100%;
  padding: 24px 24px 40px 24px;
  ${mediaQuery.sm} {
    padding: 35px 40px 40px 40px;
    width: 560px;
    heigh: 511px;
    margin: 0 auto;
  }
`;

export const Icon = styled.img`
  height: 64px;
  margin-right: 16px;
`;

export const Title = styled.div`
  color: ${themeColors.blueGray900};
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  ${mediaQuery.sm} {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div`
  color: ${themeColors.blueGray400};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Inputs = styled.div`
  ${mediaQuery.sm} {
    display: flex;
    justify-content: space-between;
  }
`;

export const InputTitle = styled.div`
  color: ${themeColors.blueGray900};
  font-size: 12px;
  ${mediaQuery.sm} {
    font-size: 14px;
  }
`;

export const InputIcon = styled.img`
  border: ${themeColors.blueGray100} 1px solid;
`;

export const InputBox = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Input = {
  Icon: styled.img`
    border: ${themeColors.blueGray100} 1px solid;
    border-right-style: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 56px;
    padding: 15px 8px 15px 15px;
  `,
  Amount: styled.input`
    font-family: 'Rubik', sans-serif;
    width: 100%;
    cursor: pointer;
    height: 56px;
    border: ${themeColors.blueGray100} 1px solid;
    border-left-style: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    color: ${themeColors.blueGray600};
    line-height: 120%;
    ${mediaQuery.sm} {
      width: 227px;
    }
  `
};

export const CalendarResume = styled.div`
  border: ${themeColors.blueGray100} 1px solid;
  width: calc(100vw - 130px);
  height: 56px;
  border-left-style: none;
  border-right-style: none;
  & p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
  }
  & p:nth-child(2) {
    font-weight: 400;
    color: ${themeColors.blueGray300};
  }
  ${mediaQuery.sm} {
    width: 110px;
  }
}`;

export const CalendarResumeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}`;

export const Calendar = styled(DatePicker)`
  border: none;
  height: 54px;
  top: -53px;
  background-color: transparent;
  color: transparent;
  position: inherit;
  position: absolut;
  width: calc(100vw - 130px);
  ${mediaQuery.sm} {
    width: 110px;
  }
}`;

export const ArrowLeftButton = styled.button`
  background-color:  ${themeColors.white}
  border: ${themeColors.blueGray100} 1px solid;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 56px;
  border-right-style: none;
  padding: 19px 10px 19px 20px;
}`;

export const ArrowRightButton = styled.button`
  border: ${themeColors.blueGray100} 1px solid;
  background-color:  ${themeColors.white}
  height: 56px;
  border-left-style: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 19px 20px 19px 10px;
  & img {
    transform: rotateY(180deg);
  }
}`;

export const CalculatedBox = styled.div`
  border: ${themeColors.blueGray100} 1px solid;
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 35px;
}`;

export const MonthlyAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 24px 29px 24px;
  & p {
    color: ${themeColors.blueGray900};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 120%;
  }
  & div {
    color: ${themeColors.brandColorSecondary}
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
  }
  ${mediaQuery.sm} {
    padding: 31px 32px 23px 32px;
    & p {
      font-size: 20px;
    }
    & div {
      font-size: 32px;
    }
  }
}`;

export const MonthlyAmountResume = styled.div`
  text-align: center;
  background-color:  ${themeColors.blueGray10}
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  & p {
    padding: 24px 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
  & span {
    font-style: bold;
    font-weight: bold;
  }
  ${mediaQuery.sm} {
    text-align: left;
  }
}`;
