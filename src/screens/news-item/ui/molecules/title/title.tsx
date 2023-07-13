import { Typography, styled } from "@shared/ui";

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
  font-weight: bold;
`;

type TTitleProps = {
  title: string;
};

export const Title = ({ title }: TTitleProps) => {
  return <Text variant="newsTitle">{title}</Text>;
};
