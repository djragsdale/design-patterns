'use strict';

// Intent:
// Use sharing to support large numbers of fine-grained objects efficiently.
// Instead of each character in a document being a separate object, each is simply a reference
// to a reusable instance.

// Related Patterns:
// The Flyweight pattern is often combined with the Composite pattern to implement a logically
// hierarchical structure in terms of a directed-acyclic graph with shared leaf nodes. It's often
// best to implement State and Strategy objects as flyweights.

function Glyph () {

  function constructor () {

  }

  this.Draw = function (font, glyphContext) {

  };

  this.SetFont = function (font, glyphContext) {

  };

  this.GetFont = function (glyphContext) {

  };

  this.First = function (glyphContext) {

  };

  this.Next = function (glyphContext) {

  };

  this.IsDone = function (glyphContext) {

  };

  this.Current = function (glyphContext) {

  };

  this.Insert = function (glyph, glyphContext) {

  };

  this.Remove = function (glyphContext) {

  };

  return constructor.apply(this, arguments);
}

function Character () {

  let _charCode;

  Glyph.apply(this, arguments);

  this.Draw = function (displayWindow, glyphContext) {

  };
}

function Row () {
  
}

function Column () {

}

function GlyphContext () {
  let _fonts;
  let _index;

  function constructor () {

  }

  this.Next = function (step = 1) {
    
  };

  this.Insert = function (quantity = 1) {
    
  };

  this.GetFont = function () {
    
  };

  this.SetFont = function (font, span = 1) {
    
  };

  return constructor.apply(this, arguments);
}

function Font () {

  let _fontString;
  
  function constructor (fontString) {
    _fontString = fontString;
  }

  return constructor.apply(this, arguments);
}

// const gc;
// const times12 = new Font('Times-Roman-12');
// const timesItalic12 = new Font('Times-Italic-12');

// gc.SetFont(times12, 6);

// gc.Insert(6);
// gc.SetFont(timesItalic12, 6);

const NCHARCODES = 120;

function GlyphFactory () {

  let _character = [];

  function constructor() {
    for (let i = 0; i < NCHARCODES; i++) {
      _character[i] = 0;
    }
  }

  this.CreateCharacter = function (charCode) {
    if (!_character[charCode]) {
      _character[charCode] = new Character(charCode);
    }

    return _character[charCode];
  };

  this.CreateRow = function () {
    return new Row();
  };

  this.CreateColumn = function () {
    return new Column();
  };

  return constructor.apply(this, arguments);
}
