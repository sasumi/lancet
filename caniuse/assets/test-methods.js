/* jshint browser:true */
(function() {

window.setResult = function (id, result, data) {
	var el = document.getElementById(id);
	var className;
	if (result === 'partial') {
		className = 'partial';
	} else if (result) {
		className = 'pass';
	} else {
		className = 'fail';
	}
	el.setAttribute('class', (el.getAttribute('class') || '') + ' ' + className);
	if (data && data.text) {
		el.innerHTML = data.text;
	}
	if (data && data.title) {
		el.title = data.title;
	}
};

var testArr = function (type, id, arr, subject) {
	if (!subject) {
		setResult(id, false);
		return;
	}
	var len = arr.length;
	var found = 0;
	var failed = [];
	for (var i = 0; i < len; i++) {
	  var item = arr[i];
		var test;
	  if (type === 'function') {
		  test = ((typeof subject[ item ]) === 'function'); 
	  } else {
		  test = (item in subject); 
	  }
	  if (test) {
		found++;
	  } else {
		failed.push(item);
	  }
	}
	var result;
	if (found === 0) {
		result = false;
	} else if (found === len) {
		result = true;
	} else {
		result = 'partial';
	}
	var data = {
		text: found + '/' + len
	};
	if (failed.length) {
		data.title = 'Failed: \n\n' + failed.join('\n');
	}
	window.setResult(id, result, data);
}
	
window.testProps = function (id, arr, subject) {
	testArr('props', id, arr, subject);
};
	
window.testMethods = function (id, arr, subject) {
	testArr('function', id, arr, subject);
};
	
}());