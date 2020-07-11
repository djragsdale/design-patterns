'use strict';

// Intent:
// Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level
// interface that makes the subsystem easier to use.

// Related Patterns:
// Abstract Factory can be used with Facade to provide an interface for creating subsystem objects
// in a subsystem-independent way. Abstract Factory can also be used as an alternative to Facade to
// hide platform-specific classes.
//
// Mediator is similar to Facade in that it abstracts functionality of existing classes. However,
// Mediator's purpose is to abstract arbitrary communication between colleague objects, often
// centralizing functionality that doesn't belong in any one of them. A mediator's colleagues are
// aware of and communicate with the mediator instead of communicating with each other directly.
// In contrast, a facade merely abstracts the interface to subsystem objects to make them easier to
// use; it doesn't define new functionality, and subsystem classes don't know about it.
//
// Usually only one Facade object is required. thus Facade objects are often Singletons.

const ListIterator = require('../foundation/ListIterator');

function Scanner () {

  let _inputStream;

  function constructor (istream) {
    _inputStream = istream;
  }

  this.Scan = function () {

  };

  return constructor.apply(this, arguments);
}

function Parser () {

  function constructor () {
    
  }

  this.Parse = function (scanner, programNodeBuilder) {

  };

  return constructor.apply(this, arguments);
}

function ProgramNode () {

  function constructor () {
    
  }

  // program node manipulation
  this.GetSourcePosition = function (line, index) {

  };
  // ...

  // child manipulation
  this.Add = function (programNode) {

  };
  this.Remove = function (programNode) {

  };
  // ...
  this.Traverse = function (programNode) {

  };

  return constructor.apply(this, arguments);
}

function ProgramNodeBuilder () {

  let _node;

  function constructor () {

  }

  this.NewVariable = function (variableName) {

  };

  this.NewAssignment = function (value) {

  };

  this.NewReturnStatement = function (value) {

  };

  this.NewCondition = function (condition, truePart, falsePart) {

  };

  this.GetRootNode = function () {

  };

  return constructor.apply(this, arguments);
}

// CodeGenerator has subclasses, for example, StackMachineCodeGenerator and RISCCodeGenerator, that
// generate machine code for different hardware architectures.
function CodeGenerator () {

  let _output;

  function constructor (output) {
    _output = output;
  }

  // Could be StatementNode or ExpressionNode
  this.Visit = function (node) {

  };

  return constructor.apply(this, arguments);
}

function RISCCodeGenerator() {

  CodeGenerator.apply(this, arguments);

  function constructor() {

  }

  return constructor.apply(this, arguments);
}

function ExpressionNode() {

  ProgramNode.apply(this, arguments);

  let _children;

  function constructor() {

  }
  
  this.Traverse = function (cg) {
    cg.Visit(this);

    const i = new ListIterator(_children);

    for (i.First(); !i.IsDone(); i.Next()) {
      i.CurrentItem().Traverse(cg);
    }
  };

  return constructor.apply(this, arguments);
}

// The Compiler class is the final facade which puts all these pieces together.

function Compiler () {

  function constructor () {

  }

  this.Compile = function (input, output) {
    const scanner = new Scanner(input);
    let builder;
    let parser;

    parser.Parse(scanner, builder);

    const generator = new RISCCodeGenerator(output);
    const parseTree = builder.GetRootNode();
    parseTree.Traverse(generator);
  };

  return constructor.apply(this, arguments);
}
