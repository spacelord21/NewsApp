import { useTheme } from "styled-components";
import { TBaseIconProps } from "./types";
import Svg, { Path } from "react-native-svg";
export const Back = ({ size, color }: TBaseIconProps) => {
  const theme = useTheme();
  return (
    <>
      <Svg
        width={size ?? 30}
        height={size ?? 30}
        viewBox="0 0 30 30"
        style={{ marginLeft: 14, marginTop: 5 }}
      >
        <Path
          d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"
          fill={color ?? theme.palette.text.secondary}
        />
      </Svg>
    </>
  );
};
