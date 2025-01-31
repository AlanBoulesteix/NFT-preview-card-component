import { IconsName } from '../enum/IconsName';
import Icon from '../Icon';
import { DateText, DateWrapper } from './NftDate.styles';

type NftDateProps = {
  date: string;
};

const NftDate = ({ date }: NftDateProps): JSX.Element => {
  return (
    <DateWrapper>
      <Icon name={IconsName.clock} />
      <DateText>{date}</DateText>
    </DateWrapper>
  );
};

export default NftDate;
