import * as React from 'react';
import {
  Container,
  Icon,
  Title,
  Subtitle,
  Wrapper,
  Inputs,
  InputTitle,
  InputBox,
  Input,
  Calendar,
  CalendarResume,
  CalendarResumeBox,
  ArrowLeftButton,
  ArrowRightButton,
  CalculatedBox,
  MonthlyAmount,
  MonthlyAmountResume
} from './styles';
import house from '../../icons/house.svg';
import moneySign from '../../icons/moneySign.svg';
import arrow from '../../icons/arrow.svg';
import Button from '../Button';

const SavingSimulationCard: React.FunctionComponent = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(startDate);

  return (
    <Container>
      <Wrapper>
        <Icon src={house} alt="house logo" />
        <div>
          <Title>Buy a house</Title>
          <Subtitle>Saving goal</Subtitle>
        </div>
      </Wrapper>
      <Inputs>
        <div>
          <InputTitle>Total amount</InputTitle>
          <InputBox>
            <Input.Icon src={moneySign} alt="money sign"></Input.Icon>
            <Input.Amount type="number"></Input.Amount>
          </InputBox>
        </div>
        <div>
          <InputTitle>Reach goal by</InputTitle>
          <InputBox>
            <ArrowLeftButton>
              <img src={arrow} alt="arrow left"></img>
            </ArrowLeftButton>
            <CalendarResume>
              <CalendarResumeBox>
                <p>October</p>
                <p>2021</p>
              </CalendarResumeBox>
              <Calendar
                selected={selectedDate}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                onChange={date => setStartDate(date)}
                minDate={startDate}
                locale="en-GB"
              />
            </CalendarResume>
            <ArrowRightButton>
              <img src={arrow} alt="arrow left"></img>
            </ArrowRightButton>
          </InputBox>
        </div>
      </Inputs>

      <CalculatedBox>
        <MonthlyAmount>
          <p>Monthly amount</p>
          <div>$521</div>
        </MonthlyAmount>
        <MonthlyAmountResume>
          <p>
            You’re planning <span>48 monthly deposits</span> to reach your
            <span> $25,000 </span>
            goal by <span>October 2020.</span>
          </p>
        </MonthlyAmountResume>
      </CalculatedBox>
      <Button>Confirm</Button>
    </Container>
  );
};

export default SavingSimulationCard;
