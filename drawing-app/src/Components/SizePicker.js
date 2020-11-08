import styled from "@emotion/styled";
import { useContext } from "react";
import { BRUSH_SIZE } from "../Constants";
import { DataContext } from "../Context/DataContext";

const Container = styled("div")`
  width: 50px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
`;
const Item = styled("div")`
  width: 50px;
  height: 50px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? "#ddd" : "#eee")};
`;
const Icon = styled("div")`
  width: 20px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  background-color: #000;
`;
export const SizePicker = () => {
  const { brushSize, setBrushSize } = useContext(DataContext);
  return (
    <Container>
      {Object.values(BRUSH_SIZE).map((size, index) => (
        <Item
          key={index}
          isSelected={brushSize === size}
          onClick={() => setBrushSize(size)}
        >
          <Icon size={size}></Icon>
        </Item>
      ))}
    </Container>
  );
};
