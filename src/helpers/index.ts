const formatedMoney = (value: number) => {
  if (value == 0 || isNaN(value)) {
    return '0.00';
  }
  return value.toLocaleString('en-us', { minimumFractionDigits: 2 });
};

export default formatedMoney;
