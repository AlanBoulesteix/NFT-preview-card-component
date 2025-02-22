import { SubIconProps } from '../../Types/SubIconProps';

const IconEthereum = ({ width, height, color }: SubIconProps): JSX.Element => {
  return (
    <svg
      width={width ?? '11'}
      height={height ?? '18'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
        fill={color ?? '#00FFF8'}
      />
    </svg>
  );
};

export default IconEthereum;
