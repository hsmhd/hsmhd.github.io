let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.jpg'){
        myImage.setAttribute('src', 'images/one.jpg');
    }else{
        myImage.setAttribute('src', 'images/logo.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setGoals() {
    let myGoal = prompt('Please Tell me your objectif for 2022');
    if(!myGoal){
        setGoals();
    }else{
        localStorage.setItem('goal', myGoal);
        myHeading.textContent = 'this is me hossam and I am gonna: ' + myGoal;
    }
}
if(!localStorage.getItem('goal')){
    setGoals();
}else{
    let storedGoal = localStorage.getItem('goal');
    myHeading.textContent = 'this is me Hossam and I AM Gonna: ' + storedGoal;
}
myButton.onclick = function() {
    setGoals();
  }