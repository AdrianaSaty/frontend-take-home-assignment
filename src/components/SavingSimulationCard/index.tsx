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
  const startDate = new Date();
  const [selectedDate, setSelectedDate] = React.useState(startDate);
  const [selectedMonth, setSelectedMonth] = React.useState(
    selectedDate.toLocaleString('en-us', { month: 'long' })
  );
  const [selectedYear, setSelectedYear] = React.useState(
    selectedDate.getFullYear()
  );

  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedMonth(date.toLocaleString('en-us', { month: 'long' }));
    setSelectedYear(date.getFullYear());
  };

  const handleMonthChange = (addMonth: number) => {
    const selectedDateInDays = Math.floor(
      selectedDate.getTime() / (1000 * 60 * 60 * 24)
    );
    const startDateInDays = Math.floor(
      startDate.getTime() / (1000 * 60 * 60 * 24)
    );
    if (selectedDateInDays >= startDateInDays && addMonth > 0) {
      selectedDate.setMonth(selectedDate.getMonth() + 1);
    } else if (selectedDateInDays > startDateInDays && addMonth < 0) {
      selectedDate.setMonth(selectedDate.getMonth() - 1);
    }
    handleSelectedDate(selectedDate);
  };

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
            <ArrowLeftButton onClick={() => handleMonthChange(-1)}>
              <img src={arrow} alt="arrow left"></img>
            </ArrowLeftButton>
            <CalendarResume>
              <CalendarResumeBox>
                <p>{selectedMonth}</p>
                <p>{selectedYear}</p>
              </CalendarResumeBox>
              <Calendar
                selected={selectedDate}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                onChange={date => handleSelectedDate(date)}
                minDate={startDate}
              />
            </CalendarResume>
            <ArrowRightButton onClick={() => handleMonthChange(1)}>
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
