// left: 37, up: 38, right: 39, down: 40
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37:1, 38:1, 39:1, 40:1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// Modern Chrome browsers require { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() { supportsPassive = true; }
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// Disable Scrolling
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // Older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // Modern Desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // Mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// Enable Scrolling
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }

