import React from 'react';

type ClickHandler = (e: React.MouseEvent<SVGSVGElement>) => void;

interface Props {
  fill?: string;
  onClick?: ClickHandler;
  size?: number;
  stroke?: string;
}

const HEIGHT = 500;
const WIDTH = 600;

const ActionChaos = ({
  fill = '#F0F0F0',
  onClick,
  size = WIDTH,
  stroke = '#202020'
}: Props) =>
  <svg
    height={size / WIDTH * HEIGHT}
    onClick={onClick}
    preserveAspectRatio="none"
    version="1.1"
    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    width={size}
    xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-41.263568,-24.637031)">
      <path
        d="m 421.97231,24.637031 c -183.83967,8.4 21.26494,164.969709 -82.41985,247.499589 0,0 -0.014,0.028 -0.0279,0.028 -0.006,-0.028 -0.0196,-0.0391 -0.035,-0.0503 -0.51002,0.20408 -0.96004,0.44004 -1.46503,0.64496 -72.61987,29.39505 -153.4747,-88.57484 -155.82971,35.3798 38.34993,-57.5298 55.83488,-1.36486 118.87477,-4.88492 C 270.45464,343.70423 285.46464,411.5739 234.41973,422.61885 141.16991,442.78386 72.935055,329.42404 78.620016,258.27417 91.245009,100.26459 215.06975,28.429727 338.02453,35.834683 175.27484,3.2447686 37.310135,137.37951 41.35011,276.51915 c 4.640014,159.54973 89.28481,237.6346 219.20453,248.1246 183.83964,-8.38988 -21.26495,-164.9798 82.41992,-247.49948 0.008,0 0.014,-0.028 0.028,-0.028 0.014,0.028 0.0196,0.0391 0.0349,0.0503 0.51,-0.20409 0.95999,-0.44005 1.46998,-0.64497 72.61487,-29.39505 153.47966,88.57459 155.82469,-35.38007 -38.34491,57.5298 -55.83491,1.36513 -118.87475,4.88491 30.61492,-40.44978 15.61493,-108.31966 66.65484,-119.35465 93.25483,-20.16496 161.47967,93.18472 155.79471,164.33458 C 591.29195,449.02636 467.46217,520.85111 344.50744,513.44615 507.25712,546.03612 645.22182,411.90122 641.17681,272.75168 636.54183,113.2119 551.88703,35.137045 421.97231,24.637059 z"
        style={{
          fill,
          stroke,
          strokeLinejoin: 'miter',
          strokeWidth: '16px'
        }}
      />
    </g>
  </svg>;

export default ActionChaos;
