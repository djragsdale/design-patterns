'use strict';

// Intent:
// Attach additional responsibilities to an object dynamically. Decorators provide a flexible
// alternative to subclassing for extending functionality.

function VisualComponent () {

  function constructor () {

  }

  this.Draw = function () {

  };

  this.Resize = function () {

  };

  return constructor.apply(this, arguments);
}

function Decorator() {

  VisualComponent.apply(this, arguments);

  let _component;

  function constructor (visualComponent) {
    _component = visualComponent;
  }

  this.Draw = function () {
    _component.Draw();
  };

  this.Resize = function () {
    _component.Resize();
  };

  return constructor.apply(this, arguments);
}

function BorderDecorator () {

  Decorator.apply(this, arguments);

  let _component;
  let _width;

  function constructor (visualComponent, borderWidth) {
    _component = visualComponent;
    _width = borderWidth;
  }

  function DrawBorder(width) {
    
  }

  this.Draw = function () {
    Decorator.prototype.Draw.call(this);
    DrawBorder(_width);
  };

  this.Resize = function () {
    _component.Resize();
  };

  return constructor.apply(this, arguments);
}

function Window () {

  function constructor() {

  }

  this.SetContents = function (contents) {

  };

  return constructor.apply(this, arguments);
}

function TextView () {

}

const win = new Window();
const textView = new TextView();

// window.SetContents(textView);
window.SetContents(
  new BorderDecorator(
    new ScrollDecorator(textView),
    1
  )
);
