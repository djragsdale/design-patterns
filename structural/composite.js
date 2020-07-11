'use strict';

// Intent:
// Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients
// treat individual objects and compositions of objects uniformly.

// Related Patterns:
// Often the component-parent link is used for a Chain of Responsibility.
//
// Decorator is often used with Composite. When decorators and composites are used together, they
// will usually have a common parent class. So decorators will have to support the Component
// interface with operations like Add, Remove, and GetChild.
//
// Flyweight lets you share components, but they can no longer refer to their parents.
//
// Iterator can be used to traverse composites.
//
// Visitor localizes operations and behavior that would otherwise be distributed across Composite
// and Leaf classes.

function Equipment() {

  function constructor() {

  }

  let _name;

  this.Power = function () {

  };
  this.NetPrice = function () {

  };
  this.DiscountPrice = function () {

  };

  this.Add = function () {

  };
  this.Remove = function () {

  };
  this.CreateIterator = function () {

  };

  return constructor.apply(this, arguments);
}

function FloppyDisk() {

  Equipment.apply(this, arguments);

  function constructor() {

  }

  this.Power = function () {
    
  };
  this.NetPrice = function () {
    
  };
  this.DiscountPrice = function () {
    
  };

  return constructor.apply(this, arguments);
}

function CompositeEquipment() {

  Equipment.apply(this, arguments);

  let _equipment;

  function constructor() {

  }

  this.Power = function () {
    
  };
  this.NetPrice = function () {
    // While ListIterator does a fine job of this, a simple reducer function would work here
    const i = this.CreateIterator(); // ListIterator
    let total = 0;

    for (i.First(); !i.IsDone(); i.Next()) {
      total += i.CurrentItem().NetPrice();
    }

    return total;
  };
  this.DiscountPrice = function () {
    
  };

  this.Add = function () {
    
  };
  this.Remove = function () {
    
  };
  this.CreateIterator = function () {
    
  };

  return constructor.apply(this, arguments);
}

function Chassis() {

  CompositeEquipment.apply(this, arguments);

  function constructor() {

  }

  this.Power = function () {

  };
  this.NetPrice = function () {

  };
  this.DiscountPrice = function () {

  };

  return constructor.apply(this, arguments);
}

function Cabinet() {

  CompositeEquipment.apply(this, arguments);

  function constructor() {

  }

  this.Power = function () {

  };
  this.NetPrice = function () {

  };
  this.DiscountPrice = function () {

  };

  return constructor.apply(this, arguments);
}

function Bus() {

  CompositeEquipment.apply(this, arguments);

  function constructor() {

  }

  this.Power = function () {

  };
  this.NetPrice = function () {

  };
  this.DiscountPrice = function () {

  };

  return constructor.apply(this, arguments);
}

function Card() {

  CompositeEquipment.apply(this, arguments);

  function constructor() {

  }

  this.Power = function () {

  };
  this.NetPrice = function () {

  };
  this.DiscountPrice = function () {

  };

  return constructor.apply(this, arguments);
}

const cabinet = new Cabinet('PC Cabinet');
const chassis = new Chassis('PC Chassis');

cabinet.Add(chassis);

const bus = new bus('MCA Bus');

bus.Add(new Card('16Mbs Token Ring'));

chassis.Add(bus);
chassis.Add(new FloppyDisk('3.5in Floppy'));

console.log(`The net price is ${chassis.NetPrice()}`);
