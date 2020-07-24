'use strict';

// Note from djragsdale:
// Don't do this. This is shown only for completeness. JavaScript's beauty shines when you use its
// array methods liberally. Combinations of Array map, filter, and reduce can do so much. The
// classes shown below are often single-use classes and would benefit from what JS offers.

// Intent:
// Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

// Related Patterns:
// Composite: Iterators are often applied to recursive structures such as Composites.
// Factory Method: Polymorphic iterators rely on factory methods to instantiate the appropriate Iterator subclass.
// Memento is often used in conjunction with the Iterator pattern. An iterator can use a memento to
// capture the state of an iteration. The iterator stores the memento internally.

// const Iterator = require('../foundation/Iterator');
const List = require('../foundation/List');
const ListIterator = require('../foundation/ListIterator');

function PrintEmployees (employeesIterator) {
  for (employeesIterator.First(); !employeesIterator.IsDone(); employeesIterator.Next()) {
    console.log(employeesIterator.CurrentItem().Print());
  }
}

const employees = new List();
employees.Append({ Print: () => 'my employee' });
// You could use something like ReverseListIterator or SkipListIterator instead of ListIterator
const forward = new ListIterator(employees);
PrintEmployees(forward);

// The GOF have many examples that don't apply to JS because of how JS GCs.

function ListTraverser () {

  let _iterator;

  function constructor (list) {

  }

  this.Traverse = function () {
    let result;
    for (_iterator.First(); _iterator.IsDone(); _iterator.Next()) {
      result = this.ProcessItem(_iterator.CurrentItem());

      if (!result) {
        break;
      }
    }

    return result;
  };

  this.ProcessItem = function (item) {

  };

  return constructor.apply(this, arguments);
}

function PrintNEmployees () {

  ListTraverser.apply(this, arguments);

  let _total;
  let _count;

  function constructor (list, n) {
    _total = n;
  }

  this.ProcessItem = function (employee) {
    _count++;
    employee.Print();
    return _count < _total;
  };

  return constructor.apply(this, arguments);
}

// Here's how PrintNEmployees prints the first 10 employees on the list:

const employees = new List();
employees.Append({ Print: () => 'Employee 1' });
employees.Append({ Print: () => 'Employee 2' });
employees.Append({ Print: () => 'Employee 3' });
employees.Append({ Print: () => 'Employee 4' });
employees.Append({ Print: () => 'Employee 5' });
employees.Append({ Print: () => 'Employee 6' });
employees.Append({ Print: () => 'Employee 7' });
employees.Append({ Print: () => 'Employee 8' });
employees.Append({ Print: () => 'Employee 9' });
employees.Append({ Print: () => 'Employee 10' });
employees.Append({ Print: () => 'Employee 11' });
employees.Append({ Print: () => 'Employee 12' });

const printer = new PrintNEmployees(employees, 10);
printer.Traverse();
