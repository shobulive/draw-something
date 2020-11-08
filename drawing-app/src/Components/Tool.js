import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { SubToolMenu } from "./SubToolMenu";

const Icon = styled("div")`
  height: 50px;
  min-width: 50px;
  display: flex;
  background-color: ${(props) => (props.isSelected ? "#ddd" : "transparent")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Container = styled("div")`
  display: flex;
  flex-direction: row;
`;
export const Tool = ({
  configs: { icon: IconType, ...allowedProps },
  type,
}) => {
  const { brushType, setBrushType } = useContext(DataContext);
  const isSelected = type === brushType;
  return (
    <Container>
      <Icon
        isSelected={isSelected}
        onClick={(e) => {
          e.stopPropagation();
          setBrushType(type);
        }}
      >
        <IconType></IconType>
      </Icon>
      {isSelected && <SubToolMenu {...allowedProps}></SubToolMenu>}
    </Container>
  );
};
