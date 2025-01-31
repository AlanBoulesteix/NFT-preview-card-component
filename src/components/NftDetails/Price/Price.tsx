import { IconsName } from '../../Icons/enum/IconsName';
import Icon from '../../Icons/Icon';
import { PriceValue, PriceWrapper } from './Price.styles';

type PriceParm = {
  price: string;
};

const Price = ({ price }: PriceParm): JSX.Element => {
  return (
    <PriceWrapper>
      <Icon name={IconsName.ethereum} />
      <PriceValue>{price}</PriceValue>
    </PriceWrapper>
  );
};

export default Price;
