import * as React from 'react';
import { Image } from 'react-konva';

export interface Props {
  size: number;
  x: number;
  y: number;
  red: number;
  green: number;
  blue: number;
  image: typeof HTMLImageElement;
}

function LED({size, x, y, red, green, blue, image}: Props) {
  return (
    <Image
      image={image.prototype}
      x={x}
      y={y}
    />
  );
}

export default LED;