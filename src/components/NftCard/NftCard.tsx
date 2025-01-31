import Creator from '../Creator/Creator';
import NftDetails from '../NftDetails/NftDetails';
import NftImage from '../NftImage/NftImage';
import { Card, Line, NftDescription, NftTitle } from './NftCard.styles';

type NftCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  price: string;
  date: string;
  creatorImgUrl: string;
  creatorName: string;
};

const NftCard = ({
  imgUrl,
  title,
  description,
  price,
  date,
  creatorName,
  creatorImgUrl,
}: NftCardProps): JSX.Element => {
  return (
    <Card>
      <NftImage url={imgUrl} />
      <NftTitle>{title}</NftTitle>
      <NftDescription>{description}</NftDescription>
      <NftDetails price={price} date={date} />
      <Line />
      <Creator imgUrl={creatorImgUrl} name={creatorName} />
    </Card>
  );
};

export default NftCard;
