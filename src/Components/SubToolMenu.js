import { SUBTOOLS, SUBTOOL_TYPES } from "../Constants";
import { IoMdArrowDropleftCircle } from "react-icons/io";

import { TwitterPicker } from "react-color";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { SizePicker } from "./SizePicker";
const { default: styled } = require("@emotion/styled");

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SubMenu = styled("div")`
  width: 50px;
  min-height: 50px;
  display: flex;
  background-color: #eee;
  margin-left: 4px;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const PickerContainer = styled("div")`
  position: absolute;
  top: 60px;
  left: 0px;
`;
const renerChild = (type, setBrushColor) => {
  switch (type) {
    case SUBTOOL_TYPES.COLOR_PICKER:
      return (
        <PickerContainer>
          <TwitterPicker
            width="150px"
            triangle="top-left"
            onChangeComplete={({ hex }) => setBrushColor(hex)}
          />
        </PickerContainer>
      );
    case SUBTOOL_TYPES.SIZE_PICKER:
      return <SizePicker></SizePicker>;
    default:
      return null;
  }
};
export const SubToolMenu = (props) => {
  const { setBrushColor } = useContext(DataContext);
  return (
    <Container>
      <IoMdArrowDropleftCircle></IoMdArrowDropleftCircle>
      {Object.keys(SUBTOOLS).map((key, index) => {
        const SubIcon = SUBTOOLS[key].icon;
        return (
          props[SUBTOOLS[key].allowedProp] && (
            <SubMenu key={index}>
              <SubIcon></SubIcon>
              {renerChild(key, setBrushColor)}
            </SubMenu>
          )
        );
      })}
    </Container>
  );
};
