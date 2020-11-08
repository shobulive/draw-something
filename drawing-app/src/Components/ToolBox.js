import styled from "@emotion/styled";
import { BRUSH_CONFIGS } from "../Constants";
import { Tool } from "./Tool";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  width: 50px;
  position: absolute;
`;

export const ToolBox = () => {
  return (
    <Container>
      {Object.keys(BRUSH_CONFIGS).map((type, i) => (
        <Tool type={type} configs={BRUSH_CONFIGS[type]} key={i}></Tool>
      ))}
    </Container>
  );
};
