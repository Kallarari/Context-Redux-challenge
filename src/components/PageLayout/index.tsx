import React from "react";

import { Container } from "./styles.module";

const PageLayout: React.FC<any> = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default PageLayout;
