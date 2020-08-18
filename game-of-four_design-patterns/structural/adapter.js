'use strict';

// Intent:
// Convert the interface of a class into another interface clients expect. Adapter lets classes
// work together that couldn't otherwise because of incompatible interfaces.

// Related Patterns:
// Bridge has a similar structure, but it is meant to separate an interface from its implementation
// so that they can be varied easily and independently. An adapter is meant to change the interface
// of an existing object.
//
// Decorate enhances another object without changing its interface.
//
// Proxy defines a representative or surrogate for another object and does not change its
// interface.
//
// CreateManipulator is an example of a Factory Method.

const Point = require('../foundation/Point');

function Shape () {

  function constructor () {

  }

  this.BoundingBox = function (bottomLeft, topRight) {

  };

  this.CreateManipulator = function () {

  };

  return constructor.apply(this, arguments);
}

function TextView () {

  function constructor() {

  }

  this.GetOrigin = function (x, y) {
    return {
      x: this.x, // calculate
      y: this.y, // calculate
    }
  };

  this.GetExtent = function () {
    return {
      width: this.width, // calculate
      height: this.height, // calculate
    }
  };

  this.IsEmpty = function (width, height) {

  };

  return constructor.apply(this, arguments);
}

function TextManipulator () {

}

// Class Adapter approach
function TextShape () {

  Shape.apply(this, arguments);
  TextView.apply(this, arguments);

  function constructor () {

  }

  this.BoundingBox = function () {
    const {
      bottom,
      left,
    } = this.GetOrigin();
    const {
      width,
      height,
    } = this.GetExtent();

    const bottomLeft = new Point(bottom, left);
    const topRight = new Point(bottom + height, left + width);

    return {
      bottomLeft,
      topRight,
    }
  };

  this.IsEmpty = function () {
    return TextView.prototype.IsEmpty.call(this);
  };

  // Not supported by TextView, only Shape
  this.CreateManipulator = function () {
    return new TextManipulator(this);
  };

  return constructor.apply(this, arguments);
}

// Object adapter approach
function TextShapeAdapter () {

  Shape.apply(this, arguments);

  let _text;

  function constructor (textView) {
    _text = textView;
  }

  this.BoundingBox = function () {
    const {
      bottom,
      left,
    } = _text.GetOrigin();
    const {
      width,
      height,
    } = _text.GetExtent();

    const bottomLeft = new Point(bottom, left);
    const topRight = new Point(bottom + height, left + width);

    return {
      bottomLeft,
      topRight,
    }
  };

  this.IsEmpty = function () {
    return _text.IsEmpty();
  };

  // Not supported by TextView, only Shape
  this.CreateManipulator = function () {
    return new TextManipulator(this);
  };

  return constructor.apply(this, arguments);
}
