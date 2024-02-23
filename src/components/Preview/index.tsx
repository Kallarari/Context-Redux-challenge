import React from "react";

import { Container, DataConainer, DataTitle, DataValue, Title } from "./styles.module";

const Preview: React.FC = () => {
  return (
    <Container>
      <Title>Informações do seu açai</Title>
      <DataConainer>
        <DataTitle>Tamanho</DataTitle>
        <DataValue> G</DataValue>
      </DataConainer>
    </Container>
  );
};

export default Preview;
