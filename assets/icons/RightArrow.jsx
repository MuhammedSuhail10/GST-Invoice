import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BackArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    {...props}
  >
    <Path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
  </Svg>
);

export default BackArrow;