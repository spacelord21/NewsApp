import { styled } from "@shared/ui";

type TAdditionalImageProps = {
  imageAdditionalUrl: string;
};

const Wrapper = styled.View`
  border: 1px solid red;
`;

const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  justify-content: center;
  align-items: center;
`;

export const AdditionalImage = ({
  imageAdditionalUrl,
}: TAdditionalImageProps) => {
  return <Image source={{ uri: imageAdditionalUrl }} />;
};
