import { useEffect, useState, useCallback } from 'react';
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
import { arrow, house, moneySign } from '../../icons/';
import Button from '../Button';
import formatedMoney from '../../helpers';

const SavingSimulationCard: React.FunctionComponent = () => {
  const startDate = new Date();
  const startDateInDays = (startDate.getTime() / (1000 * 60 * 60 * 24)).toFixed(
    0
  );
  const [selectedDate, setSelectedDate] = useState(startDate);
  const [selectedMonth, setSelectedMonth] = useState(
    selectedDate.toLocaleString('en-us', { month: 'long' })
  );
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
  const [totalAmount, setTotalAmount] = useState('');
  const [monthlyAmount, setMonthlyAmount] = useState('0');
  const [totalMonth, setTotalMonth] = useState(1);

  const handleTotalAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTotalAmount(event.target.value);
  };

  const calculateDifferenceOfMonths = (minDate: Date, maxDate: Date) => {
    return (
      maxDate.getMonth() -
      minDate.getMonth() +
      12 * (maxDate.getFullYear() - minDate.getFullYear()) +
      1
    );
  };

  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedMonth(date.toLocaleString('en-us', { month: 'long' }));
    setSelectedYear(date.getFullYear());
    setTotalMonth(calculateDifferenceOfMonths(new Date(), date));
  };

  const handleMonthChange = (addMonth: number) => {
    const selectedDateInDays = (
      selectedDate.getTime() /
      (1000 * 60 * 60 * 24)
    ).toFixed(0);

    if (selectedDateInDays >= startDateInDays && addMonth > 0) {
      selectedDate.setMonth(selectedDate.getMonth() + 1);
    } else if (selectedDateInDays > startDateInDays && addMonth < 0) {
      selectedDate.setMonth(selectedDate.getMonth() - 1);
    }
    handleSelectedDate(selectedDate);
  };

  const onKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      handleMonthChange(1);
    } else if (event.key === 'ArrowLeft') {
      handleMonthChange(-1);
    }
  }, []);

  const toggleOnKeyUpEventListener = (listener: boolean) => {
    listener
      ? window.addEventListener('keyup', onKeyUp)
      : window.removeEventListener('keyup', onKeyUp);
  };

  useEffect(() => {
    toggleOnKeyUpEventListener(true);
  }, []);

  useEffect(() => {
    setMonthlyAmount(formatedMoney(parseInt(totalAmount) / totalMonth));
  });

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
            <Input.Amount
              type="number"
              value={totalAmount}
              onChange={event => handleTotalAmountChange(event)}
              onFocus={() => toggleOnKeyUpEventListener(false)}
              onBlur={() => toggleOnKeyUpEventListener(true)}
            ></Input.Amount>
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
              <img src={arrow} alt="arrow right"></img>
            </ArrowRightButton>
          </InputBox>
        </div>
      </Inputs>
      <CalculatedBox>
        <MonthlyAmount>
          <p>Monthly amount</p>
          <div>${monthlyAmount}</div>
        </MonthlyAmount>
        <MonthlyAmountResume>
          <p>
            You’re planning <span>{totalMonth} monthly deposits</span> to reach
            your
            <span> ${formatedMoney(parseInt(totalAmount))} </span>
            goal by{' '}
            <span>
              {selectedMonth} {selectedYear}.
            </span>
          </p>
        </MonthlyAmountResume>
      </CalculatedBox>
      <Button>Confirm</Button>
    </Container>
  );
};

export default SavingSimulationCard;
