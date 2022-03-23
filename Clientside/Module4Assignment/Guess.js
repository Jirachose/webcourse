var msg1 = document.getElementById("message1")  
var msg2 = document.getElementById("message2")  
var msg3 = document.getElementById("message3")  
var guess = Math.floor(Math.random()*10) + 1;  
var rand = 0;  
var num = [];  
function Guess(){  
  var user = document.getElementById("guess").value;  
  if(user < 1 || user > 10 ){  
    alert("Please Enter a number Between 1 to 10");  
  }  
  else{  
    num.push(user);  
    rand+= 1;  
    if(user < guess){  
 msg1.textContent = "Your Guess is Too low"  
 msg2.textContent = " Guesses : " +  
 rand;  
 msg3.textContent = " Your Guessed Number Are: " +  
 num;  
    }  
    else if(user > guess){  
      msg1.textContent = "Your Guess is Too High"  
      msg2.textContent = " Guesses : " +  
      rand;  
      msg3.textContent = " Your Guessed Number Are: " +  
      num;  
    }  
    else if(user == guess){  
      msg1.textContent = "Congradulations You won!!"  
      msg2.textContent = "the Number was " + guess 
      msg3.textContent = " You guessd it in " +  rand  +"Guesses"; 
      document.getElementById("butt").disable=true;
    }  
  }  
} 