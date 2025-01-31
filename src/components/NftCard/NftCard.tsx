import { Card, ImgWrapper } from './NftCard.styles';

const NftCard: React.FC = () => {
  return (
    <Card>
      <ImgWrapper>
        <img src="/images/image-equilibrium.jpg" alt="NFT" />
      </ImgWrapper>
      <h3>My NFT</h3>
      <p>Price: 0.1 ETH</p>
      <button>Buy</button>
    </Card>
  );
};

export default NftCard;
