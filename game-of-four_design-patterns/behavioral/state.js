'use strict';

// Intent:
// Allow an object to alter its behavior when its internal state changes. The object will appear
// to change its class.

// Related Patterns:
// The Flyweight pattern explains when and how State objects can be shared. State objects are often
// Singletons.

function TCPState() {

  this.ChangeState = function (tcpConnection, tcpState) {
    tcpConnection.ChangeState(tcpState);
  }

  this.Transmit = function (tcpConnection, tcpOctetStream) {

  };

  this.ActiveOpen = function (tcpConnection) {

  };

  this.PassiveOpen = function (tcpConnection) {

  };

  this.Close = function (tcpConnection) {

  };

  this.Synchronize = function (tcpConnection) {

  };

  this.Acknowledge = function (tcpConnection) {

  };

  this.Send = function (tcpConnection) {

  };
}

let _tcpEstablished;
const TCPEstablished = {};
TCPEstablished.Instance = function () {
  if (!_tcpEstablished) {
    _tcpEstablished = new TCPState();

    _tcpEstablished.Close = function (tcpConnection) {
      _tcpEstablished.ChangeState(tcpConnection, TCPListen.Instance());
    };

    _tcpEstablished.Transmit = function (tcpConnection, tcpOctetStream) {
      tcpConnection.ProcessOctet(tcpOctetStream);
    };
  }

  return _tcpEstablished;
};

let _tcpListen;
const TCPListen = {};
TCPListen.Instance = function () {
  if (!_tcpListen) {
    _tcpListen = new TCPState();

    _tcpListen.Send = function (tcpConnection) {
      _tcpListen.ChangeState(tcpConnection, TCPEstablished.Instance());
    };
  }

  return _tcpListen;
};

let _tcpClosed;
const TCPClosed = {};
TCPClosed.Instance = function () {
  if (!_tcpClosed) {
    _tcpClosed = new TCPState();

    _tcpClosed.ActiveOpen = function (tcpConnection) {
      this.ChangeState(tcpConnection, TCPEstablished.Instance());
    };

    _tcpClosed.PassiveOpen = function (tcpConnection) {
      this.ChangeState(tcpConnection, TCPListen.Instance());
    };
  }

  return _tcpClosed;
};

function TCPConnection () {

  let _state;

  function constructor() {
    _state = TCPClosed;
  }

  function ChangeState (state) {
    _state = s;
  }

  this.ActiveOpen = function () {
    _state.ActiveOpen(this);
  };

  this.PassiveOpen = function () {
    _state.PassiveOpen(this);
  };

  this.Close = function () {
    _state.Close(this);
  };

  this.Send = function () {
    
  };

  this.Acknowledge = function () {
    _state.Acknowledge(this);
  };

  this.Synchronize = function () {
    _state.Synchronize(this);
  };

  this.ProcessOctet = function (TCPOctetStream) {

  };

  return constructor.apply(this, arguments);
}
