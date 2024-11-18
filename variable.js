var x = 5;
x = 10;  // Allowed
var x = 15;  // Also allowed


let y = 20;
y = 25;  // Allowed
let y = 30;  // Not allowed in the same scope


const z = 50;
z = 60;  // Error: Cannot reassign a constant variable
const z = 70;  // Error: Cannot redeclare





var globalVar = "I'm global!";

function testScope() {
  console.log(globalVar);  // Accessible here
}


function testScope() {
    let localVar = "I'm local!";
    console.log(localVar);  // Accessible here
  }
  console.log(localVar);  // Error: localVar is not defined

  



  {
    let blockScoped = "I'm block-scoped!";
    console.log(blockScoped);  // Accessible here
  }
  console.log(blockScoped);  // Error: blockScoped is not defined

  




  console.log(a);  // Output: undefined (var is hoisted)
  var a = 10;
  
  console.log(b);  // Error: Cannot access 'b' before initialization
  let b = 20;
  