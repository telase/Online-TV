document.onkeydown = function(e) {
    if(event.keyCode == 123) {
	return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
	return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
	return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
	return false;
    }
    if(e.shiftKey && e.keyCode == 116){
	return false;
    }
    if(e.shiftKey && e.keyCode == 118){
	return false;
    }
    if(e.shiftKey && e.keyCode == 120){
	return false;
    }
};
document.oncontextmenu = cmenu; function cmenu() { return false; }
