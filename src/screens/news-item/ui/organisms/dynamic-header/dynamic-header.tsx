import { styled } from "@shared/ui";
import { Animated, StyleSheet } from "react-native";

type TDynamicHeaderProps = {
  animHeaderValue: Animated.Value;
  imageUrl: string;
};

const Image = styled.Image.attrs({
  resizeMode: "cover",
})`
  height: 100%;
  width: 100%;
`;

const MAX_HEIGHT = 250;
const MIN_HEIGHT = 100;

export const DynamicHeader = ({
  animHeaderValue,
  imageUrl,
}: TDynamicHeaderProps) => {
  const scaleAnim = animHeaderValue.interpolate({
    inputRange: [0, MAX_HEIGHT],
    outputRange: [MAX_HEIGHT, MIN_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: scaleAnim,
        },
      ]}
    >
      <Image source={{ uri: imageUrl }} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
});
