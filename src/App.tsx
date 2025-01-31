import { CardsWrapper } from './App.styles';
import NftCard from './components/NftCard/NftCard';
import nftData from './data/nftData.json';

function App() {

  const NftList = nftData;

  return (
    <>
      <CardsWrapper>
        {NftList.map((nft) => (
          <NftCard
            key={nft.id}
            imgUrl={nft.imageUrl}
            title={nft.title}
            description={nft.description}
            price={nft.price}
            date={nft.date}
            creatorImgUrl={nft.creator.imageUrl}
            creatorName={nft.creator.name}
          />
        ))}
      </CardsWrapper>
    </>
  );
}

export default App;
