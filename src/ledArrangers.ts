import { LedArranger, Point } from './components/led/LayoutSelector.Container';

export const gridLayout: LedArranger = (numberOfLedsToLayOut) => {
  const gridSize = Math.ceil(Math.sqrt(numberOfLedsToLayOut));
  const ledPositions: Array<Point> = [];
  let ledsLaidOut = 0;
  for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize && ledsLaidOut < numberOfLedsToLayOut; column++) {
      ledPositions.push({
        x: ((column * 2) + 1) / ((gridSize * 2) + 1),
        y: ((row * 2) + 1) / ((gridSize * 2) + 1),
      });
    }
  }
  return ledPositions;
};

export const circleLayout: LedArranger = (numberOfLedsToLayOut) => {
  const circleRadius = 0.4;
  const ledPositions: Array<Point> = [];
  for (let angle = 0; angle < 2 * Math.PI; angle += (2 * Math.PI / numberOfLedsToLayOut)) {
    ledPositions.push({
      x: (Math.cos(angle) / (1 / circleRadius)) + 0.5,
      y: (Math.sin(angle) / (1 / circleRadius)) + 0.5
    });
  }
  return ledPositions;
};

export const randomLayout: LedArranger = (numberOfLedsToLayout) => {
  const ledPositions: Array<Point> = [];
  for (let i = 0; i < numberOfLedsToLayout; i++) {
    ledPositions.push({
      x: Math.random(),
      y: Math.random()
    });
  }
  return ledPositions;
};
