

function mainFunction(){


const userFirstName = document.getElementById("userInput1").value;
const userSecondName = document.getElementById("userInput2").value;

function Greeting(){



const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning" + userFirstName;
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
  return greeting;
}

document.getElementById("demo").innerHTML = `Welcome ${userFirstName} ${userSecondName} !` + " " + Greeting() ;
return false;
}
