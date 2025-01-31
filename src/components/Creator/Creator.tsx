import {
  CreatorDetailsWrapper,
  CreatorImgWrapper,
  CreatorName,
  CreatorText,
} from './Creator.styles';

type CreatorProps = {
  imgUrl: string;
  name: string;
};

const Creator = ({ imgUrl, name }: CreatorProps) => (
  <CreatorDetailsWrapper>
    <CreatorImgWrapper>
      <img src={imgUrl} alt="Creator" />
    </CreatorImgWrapper>
    <CreatorText>
      Created by <CreatorName>{name}</CreatorName>
    </CreatorText>
  </CreatorDetailsWrapper>
);

export default Creator;
