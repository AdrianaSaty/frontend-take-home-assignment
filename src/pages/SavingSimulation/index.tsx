import * as React from 'react';
import Header from '../../components/Header';
import SavingSimulationCard from '../../components/SavingSimulationCard';
import { Title } from './styles';

const SavingSimulation: React.FunctionComponent = () => {
  return (
    <>
      <Header></Header>
      <Title>
        Let&apos;s plan your <strong>saving goal</strong>
      </Title>
      <SavingSimulationCard></SavingSimulationCard>
    </>
  );
};

export default SavingSimulation;
