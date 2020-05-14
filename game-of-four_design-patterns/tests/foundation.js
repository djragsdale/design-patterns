'use strict';

const JR = require('../../jr'); // Custom utilities package


const List = require('../foundation/List');
const Iterator = require('../foundation/Iterator');
const ListIterator = require('../foundation/ListIterator');
// const numberToCoord = require('../_working/foundation/Coord');
const Point = require('../foundation/Point');
const Rect = require('../foundation/Rect');



JR.sectionLog('LIST TIME');

let list0 = new List();

JR.log('is List', List.prototype.isPrototypeOf(list0));

list0.Push('something');
list0.Push('everything');
list0.Push('nothing');

let list1 = new List(list0);

list1.Prepend('first!');
list1.Append('last!');

let list2 = new List(3);

JR.log(['something', 'everything', 'nothing']);
// JR.log(JSON.stringify(['something', 'everything', 'nothing']));
// JR.log(prettyjson.render(['something', 'everything', 'nothing'], jsonOptions));
JR.log('lists', list0.Count(), list1.Count(), list2.Count());
JR.log(list0.First(), list0.Last(), list0.Includes('last!') ? 'yep' : 'nope');
JR.log(list1.First(), list1.Last(), list1.Includes('last!') ? 'yep' : 'nope');

JR.log(list1.Get(1), list1.Top(), {'key': 'prop', 'key2': 'prop2'});

list1.RemoveLast();
list1.RemoveFirst();

JR.log(list1.Get(1));

list1.Remove('nothing');

JR.log(list1.First(), list1.Last());



JR.sectionLog('ITERATOR TIME');

let listIterator0 = new ListIterator(list1);

JR.log('is ListIterator', ListIterator.prototype.isPrototypeOf(listIterator0));
JR.log('is Iterator', Iterator.prototype.isPrototypeOf(listIterator0));

JR.log('currentItem', listIterator0.CurrentItem());
JR.log('isDone', listIterator0.IsDone());
listIterator0.Next();
JR.log('currentItem + next', listIterator0.CurrentItem());
listIterator0.First();
JR.log('currentItem + first', listIterator0.CurrentItem());
JR.log('isDone', listIterator0.IsDone());
listIterator0.Next();
JR.log('currentItem + next', listIterator0.CurrentItem());
JR.log('isDone', listIterator0.IsDone());
listIterator0.Next();
JR.log('currentItem + next', listIterator0.CurrentItem());
JR.log('isDone', listIterator0.IsDone());
listIterator0.Next();
JR.log('currentItem + next', listIterator0.CurrentItem());
JR.log('isDone', listIterator0.IsDone());



JR.sectionLog('POINT TIME');

let point0 = new Point();
let point1 = new Point(1.1, 2.2);
let point2 = new Point(3, 5);
let point3 = new Point(-3, -5);

JR.log('point0', point0);
JR.log('point1', point1);
JR.log('point2', point2);
JR.log('point3', point3);

// JR.log('constructs with checks', new Point('3.3', '2.2'));

JR.log('point2 + point1', point1.AddTo(point2));
JR.log('point3 + point2', point2.AddTo(point3));
JR.log('point3 + point2', point2.AddTo(point3));
JR.log('point0 + point3', point3.AddTo(point0));

JR.log('point2 - point1', point1.SubtractFrom(point2));
JR.log('point3 - point2', point2.SubtractFrom(point3));
JR.log('point3 - point2', point2.SubtractFrom(point3));
JR.log('point0 - point3', point3.SubtractFrom(point0));

JR.log('point3 * point1', point1.DivideFrom(point3));
JR.log('point2 * point0', point0.DivideFrom(point2));

JR.log('point3 / point2', point2.DivideFrom(point3));
JR.log('point2 / point0', point0.DivideFrom(point2));

JR.log('point0 === point2', point0.IsEqualTo(point2));
JR.log('point0 === new Point()', point0.IsEqualTo(new Point()));
JR.log('point0 !== point2', point0.IsNotEqualTo(point2));
JR.log('point0 !== new Point()', point0.IsNotEqualTo(new Point()));
JR.log('point2 !== new Point()', point2.IsNotEqualTo(new Point()));
JR.log('point0 === point2 + point3', point0.IsEqualTo(point3.AddTo(point2)));
JR.log('point0 !== point2 + point3', point0.IsNotEqualTo(point3.AddTo(point2)));


JR.sectionLog('RECT TIME');

let rect0 = new Rect();
let rect1 = new Rect(point3, point2);
let rect2 = new Rect(1, 2, 3, 4);

let point_3_3 = new Point(3, 3);

JR.log('rect0', rect0);
JR.log('rect1', rect1);
JR.log('rect2', rect2);

JR.log('rect0 IsEmpty', rect0.IsEmpty());
JR.log('rect1 IsEmpty', rect1.IsEmpty());

JR.log('rect1 Contains point0', rect1.Contains(point0));
JR.log('rect2 Contains point0', rect2.Contains(point0));
JR.log('rect2 Contains (3, 3)', rect2.Contains(point_3_3));

JR.log('rect2 MoveBy (5, 5)', rect2.MoveBy(new Point(5, 5)));
JR.log('rect2', rect2);
JR.log('rect2 Contains (3, 3)', rect2.Contains(point_3_3));
JR.log('rect2 MoveTo (1, 1)', rect2.MoveTo(new Point(1, 1)));
JR.log('rect2', rect2);
JR.log('rect2 Contains (3, 3)', rect2.Contains(point_3_3));
