import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Report = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 64 64"
    data-name="Layer 1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M48.5,58.5h-33a2,2,0,0,1-2-2V28a2,2,0,0,1,4,0V54.5h29V21.55l-9.4-12H17.5v4.3a2,2,0,0,1-4,0V7.5a2,2,0,0,1,2-2H38.07a2,2,0,0,1,1.58.77L50.08,19.63a2,2,0,0,1,.42,1.23V56.5A2,2,0,0,1,48.5,58.5Z" />
    <Path d="M25.46,51.43a2,2,0,0,1-2-2V42.86a2,2,0,0,1,4,0v6.57A2,2,0,0,1,25.46,51.43Z" />
    <Path d="M32,51.43a2,2,0,0,1-2-2V37.86a2,2,0,0,1,4,0V49.43A2,2,0,0,1,32,51.43Z" />
    <Path d="M38.54,51.43a2,2,0,0,1-2-2V32.86a2,2,0,0,1,4,0V49.43A2,2,0,0,1,38.54,51.43Z" />
  </Svg>
);
export default Report;