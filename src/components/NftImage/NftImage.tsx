import { ImgWrapper } from "./NftImage.styles";

type NftImageProps = {
  url: string;
};

const NftImage = ({ url }: NftImageProps): JSX.Element => {
  return (
    <ImgWrapper>
      <img src={url} alt="NFT" />
    </ImgWrapper>
  );
};

export default NftImage;
