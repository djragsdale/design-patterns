'use strict';

// Intent:
// Define a one-to-many dependency between objects so that when one object changes state, all its
// dependents are notified and updated automatically.

// Related Patterns:
// Mediator: By encapsulating complex update semantics, the ChangeManager acts as mediator between
// subjects and observers.
// Singleton: The CHangeManager may use the Singleton pattern to make it unique and globally
// accessible.

const List = require('../foundation/List');
const ListIterator = require('../foundation/ListIterator');

function Subject () {

  let _observers;

  function constructor () {
    _observers = new List();
  }

  this.Attach = function (observer) {
    _observers.Append(observer);
  };
  this.Detach = function (observer) {
    _observers.Remove(observer);
  };
  this.Notify = function () {
    const i = new ListIterator(_observers);
    for (i.First(); !i.IsDone(); i.Next()) {
      i.CurrentItem().Update(this);
    }
  };

  return constructor.apply(this, arguments);
}

function Observer() {

  function constructor() {

  }

  this.Update = function (theChangedSubject) {

  };

  return constructor.apply(this, arguments);
}

function ClockTimer () {

  Subject.apply(this, arguments);

  function constructor () {

  }

  this.GetHour = function () {};
  this.GetMinute = function () {};
  this.GetSecond = function () {};
  this.Tick = function () {
    this.Notify();
  };

  return constructor.apply(this, arguments);
}

function Widget() {}

function DigitalClock () {

  Widget.apply(this, arguments);
  Observer.apply(this, arguments);

  let _subject;

  function constructor (timer) {
    _subject = timer;
    _subject.Attach(this);
  }

  this.Update = function (theChangedSubject) {
    if (theChangedSubject === _subject) {
      this.Draw();
    }
  };

  this.Draw = function () {
    const hour = _subject.GetHour();
    const minute = _subject.GetMinute();

    // draw the digital clock
  };

  return constructor.apply(this, arguments);
}

function AnalogClock() {

  Widget.apply(this, arguments);
  Observer.apply(this, arguments);

  function constructor () {

  }

  this.Update = function () {};
  this.Draw = function () {};

  return constructor.apply(this, arguments);
}

const timer = new ClockTimer();
const analogClock = new AnalogClock(timer);
const digitalClock = new DigitalClock(timer);
