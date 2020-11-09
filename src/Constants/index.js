import { FaPaintBrush, FaHighlighter, FaEraser } from "react-icons/fa";
import { CgSize, CgColorBucket } from "react-icons/cg";

export const BRUSH_TYPE = {
  ERASER: "ERASER",
  BRUSH: "BRUSH",
  HIGHLIGHTER: "HIGHLIGHTER",
};

export const BRUSH_SIZE = {
  SMALL: 1,
  MID: 3,
  MAX: 5,
};

export const BRUSH_CONFIGS = {
  [BRUSH_TYPE.BRUSH]: {
    icon: FaPaintBrush,
    colorPickerAllowed: true,
    sizePickerAllowed: true,
  },
  [BRUSH_TYPE.HIGHLIGHTER]: {
    icon: FaHighlighter,
    colorPickerAllowed: true,
    sizePickerAllowed: false,
  },
  [BRUSH_TYPE.ERASER]: {
    icon: FaEraser,
    colorPickerAllowed: false,
    sizePickerAllowed: true,
  },
};

export const SUBTOOL_TYPES = {
  SIZE_PICKER: "SIZE_PICKER",
  COLOR_PICKER: "COLOR_PICKER",
};

export const SUBTOOLS = {
  [SUBTOOL_TYPES.SIZE_PICKER]: {
    allowedProp: "sizePickerAllowed",
    renderType: "SIZE_PICKER",
    icon: CgSize,
  },
  [SUBTOOL_TYPES.COLOR_PICKER]: {
    allowedProp: "colorPickerAllowed",
    renderType: "COLOR_PICKER",
    icon: CgColorBucket,
  },
};
export const DEFAULT_COLOR = "#000000";

export const DEFAULT_SIZE = BRUSH_SIZE.SMALL;

export const ERASER_COLOR = "#ffffff";
