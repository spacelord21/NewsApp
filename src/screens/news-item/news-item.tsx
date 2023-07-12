import { TMainStackParamList } from "@app/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styled } from "@shared/ui";
import { Animated, Image, ScrollView, View } from "react-native";
import { useRef } from "react";
import { DynamicHeader } from "./ui";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

type Props = NativeStackScreenProps<TMainStackParamList, "newsItem">;

export const NewsItem = ({ route }: Props) => {
  const { imageUrl } = route.params;
  let animHeaderValue = useRef(new Animated.Value(0)).current;

  console.log(animHeaderValue);

  return (
    <Container>
      <DynamicHeader animHeaderValue={animHeaderValue} imageUrl={imageUrl} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: animHeaderValue } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={{ height: 300, width: 300, backgroundColor: "red" }} />
        <View style={{ height: 300, width: 300, backgroundColor: "blue" }} />
        <View style={{ height: 300, width: 300, backgroundColor: "red" }} />
        <View style={{ height: 300, width: 300, backgroundColor: "blue" }} />
      </ScrollView>
    </Container>
  );
};
