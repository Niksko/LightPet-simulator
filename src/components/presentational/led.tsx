import * as React from 'react';
import { Circle, Rect, Group } from 'react-konva';

export interface Props {
  size: number;
  x: number;
  y: number;
  color: string;
}

function LED({size, x, y, color}: Props) {
  return (
    <Group
      x={x}
      y={y}
    >
      <Circle
        radius={size / 2}
        fill={color}
        x={0}
        y={0}
      />
      <Rect
        width={size}
        height={size}
        fill={color}
        x={-size / 2}
        y={0}
      />
    </Group>
  );
}
