import React, { useState } from "react";

import {
  AddNewOptionContainer,
  AddProductSection,
  Container,
  Text,
  Option,
} from "./styles.module";
import SelectProduct from "./SelectProduct";

const AddProduct: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);
  return (
    <Container>
      {isSelecting ? (
        <SelectProduct />
      ) : (
        <AddNewOptionContainer>
          <Text>Adicionar nova opção</Text>
          <AddProductSection
            onClick={() => {
              setIsSelecting(!isSelecting);
            }}
          >
            +
          </AddProductSection>
        </AddNewOptionContainer>
      )}
      <Option> Granola </Option>
      {/* mapear opções */}
    </Container>
  );
};

export default AddProduct;
