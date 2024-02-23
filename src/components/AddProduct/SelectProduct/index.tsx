import React from "react";

import {
  AddButton,
  Container,
  InputContainer,
  StyledInput,
} from "./syles.module";

const SelectProduct: React.FC = () => {
  return (
    <Container>
      <InputContainer>
        <StyledInput placeholder="Nome"></StyledInput>
        <StyledInput placeholder="Valor" type="number" />
      </InputContainer>
      <AddButton>Adicionar</AddButton>
    </Container>
  );
};

export default SelectProduct;
