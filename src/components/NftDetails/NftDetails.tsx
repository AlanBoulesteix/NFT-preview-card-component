import NftDate from './Date/NftDate.tsx';
import Price from './Price/Price.tsx';
import { DetailsWrapper } from './NftDetails.styles.ts';

type NftDetailsProps = {
  price: string;
  date: string;
};

const NftDetails = ({ price, date }: NftDetailsProps): JSX.Element => {
  return (
    <DetailsWrapper>
      <Price price={price} />
      <NftDate date={date} />
    </DetailsWrapper>
  );
};

export default NftDetails;
