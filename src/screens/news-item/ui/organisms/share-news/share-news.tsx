import { styled } from "@shared/ui";
import { Share as ShareIcon } from "@shared/ui/icons";
import Share from "react-native-share";

const IconWrapper = styled.TouchableOpacity`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

type TShareNewsProps = {
  link: string;
  message: string;
  title: string;
};

export const ShareNews = ({ link, message, title }: TShareNewsProps) => {
  const onPressHandler = async () => {
    await Share.open({
      message: message + "\n",
      url: link + "\n",
      title: title + "\n",
    });
  };

  return (
    <IconWrapper onPress={onPressHandler} activeOpacity={0.7}>
      <ShareIcon />
    </IconWrapper>
  );
};
