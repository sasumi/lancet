window.onload = function() {
	// Shouldn't run with module support!
	document.body.style.background = 'red';
	setTimeout(function() {
	  // Just in case module ran first
	  document.body.style.background = 'red';
	}, 2000);
};