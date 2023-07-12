import { Typography, styled } from "@shared/ui";
import { Linking } from "react-native";

const Text = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
`;

const Link = styled(Typography)`
  border: 1px solid ${({ theme }) => theme.palette.text.secondary};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`;

type TBodyTextProps = {
  content: string;
  link?: string;
};

export const BodyText = ({ content, link }: TBodyTextProps) => {
  return (
    <>
      <Text variant="title">{content.replace("\n", " ")}</Text>
      {link && (
        <Link variant="title" onPress={() => Linking.openURL(link)}>
          {link}
        </Link>
      )}
    </>
  );
};
