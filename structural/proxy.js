'use strict';

// Intent:
// Provider a surrogate or placeholder for another object to control access to it.

// Related Patterns:
// Adapter: An adapter provides a different interface to the object it adapts. In contrast, a proxy
// provides the same interface as its subject. However, a proxy used for access protection might
// refuse to perform an operation that the subject will perform, so its interface may be
// effectively a subset of the subject's.
//
// Decorator: Although decorators can have similar implementations as proxies, decorators have a
// different purpose. A decorator adds one or more responsibilities to an object, whereas a proxy
// controls access to an object.
// Proxies vary in the degree to which they are implemented like a decorator. A protection proxy
// might be implemented exactly like a decorator. On the other hand, a remote proxy will not
// contain a direct reference to its real subject but only an indirect reference, such as "host ID
// and local address on host." A virtual proxy wills tart off with an indirect reference such as a
// file name but will eventually obtain and use a direct reference.

function Graphic () {

  function constructor () {

  }

  this.Draw = function (at) {

  };
  this.HandleMouse = function (event) {

  };

  this.GetExtent = function () {

  };

  this.Load = function (from) {

  };
  this.Save = function (to) {

  };

  return constructor.apply(this, arguments);
}

function Image () {

  Graphic.apply(this, arguments);

  function constructor (file) {

  }

  this.Draw = function (at) {

  };
  this.HandleMouse = function (event) {

  };

  this.GetExtent = function () {

  };

  this.Load = function (from) {

  };
  this.Save = function (to) {

  };

  return constructor.apply(this, arguments);
}

// Has the same interface as Image
function ImageProxy () {

  Graphic.apply(this, arguments);

  let _image;
  let _extent;
  let _fileName;

  // The constructor saves a local copy of the name of the file that stores the image, and it
  // initializes _extent and _image
  function constructor (imageFile) {
    _fileName = imageFile;
  }

  function GetImage () {
    if (typeof _image === 'undefined') {
      _image = new Image(_fileName);
    }

    return _image;
  }

  this.Draw = function (at) {
    GetImage().Draw(at);
  };
  this.HandleMouse = function (event) {
    GetImage().HandleMouse(event);
  };

  this.GetExtent = function () {
    if (typeof _extent === 'undefined') {
      _extent = GetImage().GetExtent();
    }

    return _extent;
  };

  this.Load = function (from) {
    from.write(_fileName);
  };
  this.Save = function (to) {

  };

  return constructor.apply(this, arguments);
}

function TextDocument () {
  
  function constructor () {

  }

  this.Insert = function (graphic) {

  };

  return constructor.apply(this, arguments);
}

const text = new TextDocument();
text.Insert(new ImageProxy('anImageFileName'));
