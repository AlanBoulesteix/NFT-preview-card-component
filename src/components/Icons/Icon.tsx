import IconWrapper from './Icon.styles';
import iconMap from './IconsMap/IconMap';
import { IconProps } from './Types/IconProps';

const Icon = ({ name, width, height, color }: IconProps): JSX.Element => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    throw new Error(`Icon ${name} not found`);
  }

  return (
    <IconWrapper>
      <IconComponent width={width} height={height} color={color} />
    </IconWrapper>
  );
};

export default Icon;
