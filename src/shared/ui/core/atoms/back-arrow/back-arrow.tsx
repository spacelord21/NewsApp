import { styled } from "@shared/ui";
import { Back } from "@shared/ui/icons";

type TBackArrowProps = {
  onPress: () => void;
};

const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.spacing(3)}px;
  left: ${({ theme }) => theme.spacing(3)}px;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

export const BackArrow = ({ onPress }: TBackArrowProps) => {
  return (
    <IconWrapper onPress={onPress} activeOpacity={0.7}>
      <Back />
    </IconWrapper>
  );
};
