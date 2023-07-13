import { styled } from "@shared/ui";

const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  min-width: 100%;
  min-height: 250px;
  max-height: 350px;
  border-radius: 12px;
`;

type TPictureProps = {
  imageUrl: string;
};

export const NewsPicture = ({ imageUrl }: TPictureProps) => {
  return <Image source={{ uri: imageUrl }} />;
};
