import iconMap from './IconsMap/IconMap';
import { IconProps } from './Types/IconProps';

const Icon = ({ name, width, height, color }: IconProps): JSX.Element => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    throw new Error(`Icon ${name} not found`);
  }

  return <IconComponent width={width} height={height} color={color} />;
};

export default Icon;
