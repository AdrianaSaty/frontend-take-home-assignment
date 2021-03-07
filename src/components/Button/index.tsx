import * as React from 'react';
import { ButtonLayout, Container } from './styles';

const Button: React.FunctionComponent = props => {
  return (
    <Container>
      <ButtonLayout>
        <p>{props.children}</p>
      </ButtonLayout>
    </Container>
  );
};

export default Button;
