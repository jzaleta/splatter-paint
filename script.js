tool.fixedDistance = 30;
var layer = project.activeLayer;

function onMouseMove(event) {
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: Math.round(Math.random() * 30) + 5,
  });
  path.fillColor = {
    hue: event.count * 3,
    saturation: 1,
    brightness: 1,
  };
}

tool.minDistance = 10;
tool.maxDistance = 45;

var path;

function onMouseDown(event) {
  path = new Path();
  path.fillColor = {
    hue: Math.random() * 360,
    saturation: 1,
    brightness: 1,
  };

  path.add(event.point);
}

function onMouseDrag(event) {
  var step = event.delta / 2;
  step.angle += 90;

  var top = event.middlePoint + step;
  var bottom = event.middlePoint - step;

  path.add(top);
  path.insert(0, bottom);
  path.smooth();
}

function onMouseUp(event) {
  path.add(event.point);
  path.closed = true;
  path.smooth();
}
