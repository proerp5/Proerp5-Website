var myImage = document.querySelector('img');

myImage.onclick = function() {
	
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.png') {
      myImage.setAttribute ('src','images/test-image-2.png');
    } else {
      myImage.setAttribute ('src','images/test-image.png');
    }
}