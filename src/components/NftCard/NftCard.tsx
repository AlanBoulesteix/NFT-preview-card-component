import Creator from '../Creator/Creator';
import NftDetails from '../NftDetails/NftDetails';
import {
  Card,
  ImgWrapper,
  Line,
  NftDescription,
  NftTitle,
} from './NftCard.styles';

const NftCard: React.FC = () => {
  return (
    <Card>
      <ImgWrapper>
        <img src="/images/image-equilibrium.jpg" alt="NFT" />
      </ImgWrapper>
      <NftTitle>Equilibrium #3429</NftTitle>
      <NftDescription>
        Our Equilibrium collection promotes balance and calm.
      </NftDescription>
      <NftDetails price="0.41 ETH" date="3 days left" />
      <Line />
      <Creator imgUrl="/images/image-avatar.png" name={'Jules Wyvern'} />
    </Card>
  );
};

export default NftCard;
