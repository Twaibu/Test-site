var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/jw-people.jpeg'){
       myImage.setAttribute('src','images/jw-family.jpeg');
    }else{
     myImage.setAttribute('src','images/jw-people.jpeg');
    }
  }



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Earthly paradize is soon , ' + myName;
 }

if(!localStorage.getItem('name')){
    setUserName();
 }else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Earthly paradize is soon , ' + storedName;
 }

myButton.onclick = function(){
    setUserName();
}




     
