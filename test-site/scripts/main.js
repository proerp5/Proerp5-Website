var myImage = document.querySelector('img');

myImage.onclick = function() {
	
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.png') {
      myImage.setAttribute ('src','images/test-image-2.png');
    } else {
      myImage.setAttribute ('src','images/test-image.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Tigers are great!!, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Tigers are great!!, ' + storedName;
}