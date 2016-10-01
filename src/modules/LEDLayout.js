// Lay out the LEDs in concentric circles based on a fixed number of LEDs per
// circle. Values returned are between -1 and 1 in x and y directions, and should
// be scaled appropriately to the width and height of the element that the LEDs
// are being placed inside of

const RADIANS_IN_CIRCLE = 2 * Math.PI;

var concentricLayout = function(id, totalLEDs) {
  // Set up the constant circle sizes
  const circleSizes = [3, 6, 12, 18];

  // Compute cumulative counts based on these sizes to know when to roll over
  // to a new circle
  var cumulativeCircleSizes = [];
  circleSizes.forEach(function(value, index) {
    if (index === 0) {
      cumulativeCircleSizes.push(value);
    }
    else {
      var cumulativeValue = value + cumulativeCircleSizes[index-1];
      cumulativeCircleSizes.push(cumulativeValue);
    }
  });

  // Use the id to compute a position for the LED
  // First figure out which circle it's in
  // Also figure out how many circles we need, based on the total number of LEDs
  var circle = null;
  var maxCircle = 0;
  cumulativeCircleSizes.forEach(function(value, index) {
    if (id < value && circle == null) {
      circle = index;
    }
    if (totalLEDs >= value) {
      maxCircle = index;
    }
  });

  // Based on the maxCircle and circle value, compute the circle radius for this led
  var circleRadius = (circle + 1) / (maxCircle + 1);

  // Based on the id, compute x and y coordinates in the local coordinate system
  var angleIncrement = RADIANS_IN_CIRCLE / circleSizes[circle];
  // Figure out the position of this led within the circle
  var circleIndex = id;
  if (circle !== 0) {
    circleIndex = id - cumulativeCircleSizes[circle];
  }
  // Use this value to compute the angle that the led should be at
  var ledAngle = angleIncrement * circleIndex;
  // Compute and return the coordinates
  var x = circleRadius * Math.cos(ledAngle);
  var y = circleRadius * Math.sin(ledAngle);
  return {
    x: x,
    y: y
  };
}

export default concentricLayout;
