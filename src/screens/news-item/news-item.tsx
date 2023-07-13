import { TMainStackParamList } from "@app/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BackArrow, Typography, styled } from "@shared/ui";
import { Animated } from "react-native";
import { useRef } from "react";
import {
  AdditionalImage,
  BodyText,
  DynamicHeader,
  ShareNews,
  Title,
} from "./ui";
import { getLink, parseDate, removeHTMLTagsFromString } from "@shared/utils";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  position: relative;
`;

const Content = styled.ScrollView`
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  margin-top: -18px;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
`;

const TitleWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DateView = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

type Props = NativeStackScreenProps<TMainStackParamList, "newsItem">;

export const NewsItem = ({ route, navigation }: Props) => {
  const { imageUrl, imageAdditionalUrl, body, createdAt, shortText, title } =
    route.params;
  let animHeaderValue = useRef(new Animated.Value(0)).current;
  const link = getLink(body);

  return (
    <Container>
      <BackArrow onPress={() => navigation.goBack()} />
      <DynamicHeader animHeaderValue={animHeaderValue} imageUrl={imageUrl} />
      <Content
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: animHeaderValue } } }],
          { useNativeDriver: false }
        )}
      >
        <TitleWrapper>
          <Title title={title} />
          <ShareNews
            link={imageUrl}
            title={title}
            message={removeHTMLTagsFromString(shortText)}
          />
        </TitleWrapper>
        <DateView variant="subtitle">{parseDate(createdAt)}</DateView>
        {body && (
          <BodyText content={removeHTMLTagsFromString(body)} link={link} />
        )}
        {shortText && (
          <BodyText content={removeHTMLTagsFromString(shortText)} />
        )}
        {imageAdditionalUrl && (
          <AdditionalImage imageAdditionalUrl={imageAdditionalUrl} />
        )}
      </Content>
    </Container>
  );
};
