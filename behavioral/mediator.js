'use strict';

// Intent:
// Define an object that encapsulates how a set of objects interact. Mediator promotes loose
// coupling by keeping objects from referring to each other explicitly, and it lets you vary their
// interaction independently.

function Widget () {

	let _director;

	function constructor (dialogDirector) {
		_director = dialogDirector;
	}

	this.Changed = function () {
		_director.WidgetChanged(this);
	};

	this.HandleMouse = function (event) {

	};

	return constructor.apply(this, arguments);
}

function ListBox () {

	Widget.apply(this, arguments);

	let _director;
	let _listItems;
	let _selectedIndex;

	function constructor (dialogDirector) {
		_director = dialogDirector;
	}

	this.GetSelection = function () {
		return _listItems[_selectedIndex];
	};

	this.SetList = function (listItems) {
		let _selectedItem = _listItems[_selectedIndex];
		_listItems = listItems;
		let _newIndex = 0;
		for (let i = 0; i < _listItems.length; i++) {
			if (_listItems[i] === _selectedItem) {
				_newIndex = i;
				break;
			}
		}

		_selectedIndex = _newIndex;
	};

	this.HandleMouse = function (event) {

	};

	return constructor.apply(this, arguments);
}

function EntryField () {

	Widget.apply(this, arguments);

	let _director;
	let _text;

	function constructor (dialogDirector) {
		_director = dialogDirector;
		_text = '';
	}

	this.SetText = function (text) {
		_text = text;
	};

	this.GetText = function () {
		return _text;
	};

	this.HandleMouse = function (event) {

	};

	return constructor.apply(this, arguments);
}

function Button () {

	Widget.apply(this, arguments);

	let _director;
	let _text;

	function constructor (dialogDirector) {
		_director = dialogDirector;
		_text = '';
	}

	this.SetText = function (text) {
		_text = text;
	};

	this.HandleMouse = function (event) {
		this.Changed();
	};

	return constructor.apply(this, arguments);
}

function DialogDirector () {

	function constructor () {

	}

	this.ShowDialog = function () {

	};

	this.WidgetChanged = function (theChangedWidget) {

	};

	return constructor.apply(this, arguments);
}

function FontDialogDirector () {

	DialogDirector.apply(this, arguments);

	let _ok;
	let _cancel;
	let _fontList;
	let _fontName;

	function constructor () {

	}

	this.WidgetChanged = function (theChangedWidget) {
		if (theChangedWidget === _fontList) {
			_fontName.SetText(_fontList.GetSelection());
		} else if (theChangedWidget === _ok) {
			// apply font change and discmiss dialog
			// ...
		} else if (theChangedWidget === _cancel) {
			// dismiss dialog
			// I added this just for testing everything
			console.log('closing dialog without saving');
		}
	};

	this.CreateWidgets = function () {
		_ok = new Button(this);
		_cancel = new Button(this);
		_fontList = new ListBox(this);
		_fontName = new EntryField(this);
		// fill the listBox with the available font names
		// assemble the widgets in the dialog
	};

	// I added this just for testing everything out
	this.GetWidgets = function () {
		return { ok: _ok, cancel: _cancel, fontList: _fontList, fontName: _fontName };
	};

	return constructor.apply(this, arguments);
}

module.exports = FontDialogDirector;
