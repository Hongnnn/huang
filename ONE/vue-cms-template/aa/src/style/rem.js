(function(win) {
　　resizeRoot();
　　function resizeRoot() {
　　　　var wWidth = document.documentElement.clientWidth;
　　　　if (wWidth > 640) wWidth = 640;
　　　　else if (wWidth < 320) wWidth = 320;
　　　　document.documentElement.style.fontSize = wWidth / 7.5 + 'px'
　　}
　　window.onresize = resizeRoot
})(window);