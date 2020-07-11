'use strict';

// Intent:
// Decouple an abstraction from its implementation so that the two can vary independently.

// Related Patterns:
// An Abstract Factory can create and configure a particular Bridge.
//
// The Adapter pattern is geared toward making unrelated classes work together. It is usually
// applied to systems after they're designed. Bridge, on the other hand, is used up-front in a
// design to let abstractions and implementations vary independently.'/

const numberToCoord = require('../foundation/Coord');
const Point = require('../foundation/Point');

// Stubbing for valid code.
function WindowSystemFactory () {
  this.Instance = function () {
    return {
      MakeWindowImp: function () {
        return new WindowImp();
      },
    };
  };
}

function Window () {

  let _imp; // WindowImp
  let _contents; // View

  function constructor(contents) {

  }

  this.DrawContents = function () {

  };

  this.Open = function () {

  };

  this.Close = function () {

  };

  this.Iconify = function () {

  };

  this.Deiconify = function () {

  };

  // Requests forwarded to implementation
  this.SetOrigin = function () {

  };

  this.SetExtent = function () {

  };

  this.Raise = function () {

  };

  this.Lower = function () {

  };

  this.DrawLine = function () {

  };

  this.DrawRect = function (point0, point1) {
    const imp = this.GetWindowImp();

    imp.DeviceRect(point0.X, point0.Y, point1.X, point1.Y);
  };

  this.DrawPolygon = function (points, n) {

  };

  this.DrawText = function (chars, origin) {

  };

  this.GetWindowImp = function () {
    if (!_imp) {
      _imp = WindowSystemFactory.Instance().MakeWindowImp();
    }

    return _imp;
  };

  this.GetView = function () {
    return _contents;
  };

  return constructor.apply(this, arguments);
}

function WindowImp() {

  function constructor() {

  }

  this.ImpTop = function () {

  };

  this.ImpBottom = function () {

  };

  this.ImpSetExtent = function (point) {

  };

  this.ImpSetOrigin = function (point) {

  };

  this.DeviceRect = function (x0, y0, x1, y1) {

  };

  this.DeviceText = function (chars, x, y) {

  };

  this.DeviceBitmap = function (chars, x, y) {

  };

  // lots more functions for drawing on windows...

  return constructor.apply(this, arguments);
}

function ApplicationWindow () {

  Window.apply(this, arguments);
  
  this.DrawContents = function () {
    this.GetView().DrawOn(this);
  };
}

function IconWindow () {

  Window.apply(this, arguments);

  let _bitmapName;

  function constructor (bitmapName) {
    _bitmapName = bitmapName;
  }
  
  this.DrawContents = function () {
    const imp = this.GetWindowImp();
    if (imp) {
      imp.DeviceBitmap(_bitmapName, numberToCoord(0), numberToCoord(0));
    }

    this.GetView().DrawOn(this);
  };

  return constructor.apply(this, arguments);
}

function XWindowImp() {

  WindowImp.apply(this, arguments);

  // lots of X window system-specific state, including:
  let _dpy;
  let _winid; // window id
  let _gc; // window graphic context

  // In reality, this is probably a separate library
  function XDrawRectangle (dpy, winid, gc, x, y, w, h) {

  }

  this.DeviceRect = function (x0, y0, x1, y1) {
    const x = Math.round(Math.min(x0, x1));
    const y = Math.round(Math.min(y0, y1));
    const w = Math.round(Math.abs(x0 - x1));
    const h = Math.round(Math.abs(y0 - y1));
    XDrawRectangle(_dpy, _winid, _gc, x, y, w, h);
  };
  // remainder of public interface...
}

// For Presentation Manager, we define a PMWindowImp class
function PMWindowImp() {

  WindowImp.apply(this, arguments);

  // lots of PM window system-specific state, including:
  let _hps;

  function GpiBeginPath () {

  }

  function GpiSetCurrentPosition () {

  }

  function GpiPolyLine () {

  }

  function GpiEndPath () {

  }

  function GpiStrokePath () {

  }

  const GPI_ERROR = 'GPI_ERROR';

  this.DeviceRect = function (x0, y0, x1, y1) {
    const left = numberToCoord(Math.min(x0, x1));
    const right = numberToCoord(Math.max(x0, x1));
    const bottom = numberToCoord(Math.min(y0, y1));
    const top = numberToCoord(Math.max(y0, y1));

    const pointList = [
      new Point(left, top),
      new Point(right, top),
      new Point(right, bottom),
      new Point(left, bottom),
    ];

    if (
      (!GpiBeginPath(_hps, 1)) ||
      (!GpiSetCurrentPosition(_hps, pointList[3])) ||
      (GpiPolyLine(_hps, 4, pointList) === GPI_ERROR) ||
      (!GpiEndPath(_hps))
    ) {
      throw new Error('PMWindowImp.DeviceRect error');
    }

    GpiStrokePath(_hps, 1, 0);
  };
  // remainder of public interface...
}
