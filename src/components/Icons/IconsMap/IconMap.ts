import { IconView, IconEthereum, IconClock } from '../IconElements';

import { SubIconProps } from '../Types/SubIconProps';

type IconMap = { [key: string]: React.FC<SubIconProps> };

const iconMap: IconMap = {
  view: IconView,
  ethereum: IconEthereum,
  clock: IconClock,
};

export default iconMap;
