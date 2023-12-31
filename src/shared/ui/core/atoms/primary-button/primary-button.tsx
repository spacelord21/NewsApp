import { ReactNode } from "react";
import { styled } from "../../../theme";
import { Typography } from "../typography";

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: ${({ theme }) => theme.spacing(2)}px
    ${({ theme }) => theme.spacing(4)}px;
  background-color: ${({ theme }) => theme.palette.text.primary};
  /* margin-top: ${({ theme }) => theme.spacing(2)}px; */
  border-radius: 26px;
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.7;
  `}
`;

const ButtonContent = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
`;

type TButtonProps = {
  children: ReactNode | string;
  onPress: () => void;
  disabled?: boolean;
  testID?: string;
};

export const PrimaryButton = ({ children, ...rest }: TButtonProps) => {
  return (
    <Button activeOpacity={0.7} {...rest}>
      {typeof children === "string" ? (
        <ButtonContent variant="subtitle">{children}</ButtonContent>
      ) : (
        children
      )}
    </Button>
  );
};
