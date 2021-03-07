import styled from 'styled-components';
import { themeColors } from '../../globalStyles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  background-color: ${themeColors.white};
  width: 100%;
  padding: 31px 24px 40px 24px;
`;

export const Icon = styled.img`
  height: 64px;
  margin-right: 16px;
`;

export const Title = styled.div`
  color: ${themeColors.blueGray900};
  font-weight: 500;
  font-size: 20px;
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

export const InputTitle = styled.div`
  color: ${themeColors.blueGray900};
  font-size: 12px;
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
    color: ${themeColors.blueGray600};
    line-height: 120%;
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
  width: calc(100vw - 130px);
  height: 54px;
  top: -53px;
  background-color: transparent;
  color: transparent;
  position: inherit;
  position: absolut;
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
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
  }
}`;

export const MonthlyAmountResume = styled.div`
  text-align: center;
  background-color:  ${themeColors.blueGray10}
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
}`;
