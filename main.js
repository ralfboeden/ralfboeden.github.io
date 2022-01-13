var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/mailand2017.jpg') {
      myImage.setAttribute ('src','bilder/mailanddom.jpg');
    } else {
      myImage.setAttribute ('src','bilder/mailand2017.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mailand erleben ' + myName;
}if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mailand erleben ' + storedName;
}myButton.onclick = function() {
  setUserName();
}