import React from "react";

import { Container } from "./styles.module";
import PageLayout from "../../components/PageLayout";
import Preview from "../../components/Preview";
import AddProduct from "../../components/AddProduct";

const FlavorSelect: React.FC = () => {
  return (
    <PageLayout>
      <Container>
        <Preview />
        <AddProduct />
      </Container>
    </PageLayout>
  );
};

export default FlavorSelect;
