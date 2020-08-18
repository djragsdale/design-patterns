'use strict';

// Intent:
// Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy
// lets the algorithm vary independently from clients that use it.

// Related patterns: Strategy objects often make good flyweights.

function Composition () {

  let _compositor;
  let _components; // the list of components
  let _componentCount; // the number of components
  let _lineWidth; // the composition's line width
  let _lineBreaks; // the position of line breaks in components
  let _lineCount; // the number of lines

  function constructor(compositor) {
    _compositor = compositor;
  }

  this.Repair = function () {
    let natural;
    let stretchability;
    let shrinkability;
    let componentCount;
    let breaks;

    // prepare the arrays with the desired component sizes

    // determine where the breaks are:
    let breakCount = _compositor.Compose(natural, stretchability, shrinkability, componentCount, _lineWidth, breaks);

    // lay out components according to breaks
  };

  return constructor.apply(this, arguments);
}

// The interface is carefully designed to support all layout algorithms that subclasses might
// implement.
function Compositor () {
  function constructor () {

  }

  this.Compose = function () {

  };

  return constructor.apply(this, arguments);
}

// Examines components a line at a time to determine where breaks should go.
// Ignores the stretchability of the components, taking only their natural widths into account.
function SimpleCompositor () {

  Compositor.apply(this, arguments);

  this.Compose = function (natural, stretch, shrink, componentCount, lineWidth, breaks) {

  };
}

SimpleCompositor.prototype = Object.create(Compositor.prototype);
SimpleCompositor.prototype.constructor = SimpleCompositor;

// Examines a paragraph at a time, taking into account the components' size and stretchability.
// It also tries to give an even "color" to the paragraph by minimizing the shitespace between
// components.
// Uses all the information passed to it.
function TeXCompositor () {

  Compositor.apply(this, arguments);

  this.Compose = function (natural, stretch, shrink, componentCount, lineWidth, breaks) {

  };
}

TeXCompositor.prototype = Object.create(Compositor.prototype);
TeXCompositor.prototype.constructor = TeXCompositor;

// Breaks the components into lines at regular intervals.
// Ignores everything passed into Compose.
function ArrayCompositor () {

  Compositor.apply(this, arguments);

  let _interval;

  function constructor (interval) {
    _interval = interval;
  }

  this.Compose = function (natural, stretch, shrink, componentCount, lineWidth, breaks) {

  };

  return constructor.apply(this, arguments);
}

ArrayCompositor.prototype = Object.create(Compositor.prototype);
ArrayCompositor.prototype.constructor = ArrayCompositor;

const quick = new Composition(new SimpleCompositor());
const slick = new Composition(new TeXCompositor());
const iconic = new Composition(new ArrayCompositor(100));

module.exports = {
  Composition,
  Compositor,
  SimpleCompositor,
  TeXCompositor,
  ArrayCompositor,
};
