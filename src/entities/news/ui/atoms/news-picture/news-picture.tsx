import {styled} from '@shared/ui';

const Image = styled.Image`
  width: 100%;
  height: 70%;
`;

type TPictureProps = {
  imageUrl: string;
};

export const NewsPicture = ({imageUrl}: TPictureProps) => {
  return <Image source={{uri: imageUrl}} />;
};
