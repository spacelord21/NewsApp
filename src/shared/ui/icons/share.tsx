import { useTheme } from "styled-components";
import { TBaseIconProps } from "./types";
import Svg, { Path } from "react-native-svg";
import { styled } from "../theme";

const Wrapper = styled.View`
  /* position: absolute;
  left: 10px;
  top: 10px; */
`;

export const Share = ({ size, color }: TBaseIconProps) => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Svg width={size ?? 50} height={size ?? 50} viewBox="0 0 30 30">
        <Path
          d="M10 2.499a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-3.566 2.26L9.131 7.52l2.038 2.858A2.5 2.5 0 0 1 15 12.493a2.5 2.5 0 1 1-4.559-1.417L8.246 8H4.949A2.501 2.501 0 0 1 0 7.495A2.5 2.5 0 0 1 4.95 7h3.312l2.37-2.84A2.488 2.488 0 0 1 10 2.499Z"
          fill={color ?? theme.palette.text.secondary}
        />
      </Svg>
    </Wrapper>
  );
};
