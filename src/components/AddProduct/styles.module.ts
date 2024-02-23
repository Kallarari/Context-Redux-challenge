import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
justify-content: center;
gap: 20px;
align-items: center;
flex-direction: column;
`;
export const Text = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #222;
`;
export const AddNewOptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;
export const AddProductSection = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #acacac;
`;
export const Option = styled.a`
  padding: 10px 150px;
  border: 1px solid black;
  border-radius: 10px;
`;
