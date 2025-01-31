import {
  CreatorDetailsWrapper,
  CreatorImgWrapper,
  CreatorName,
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
    <p>
      Created by <CreatorName>{name}</CreatorName>
    </p>
  </CreatorDetailsWrapper>
);

export default Creator;
