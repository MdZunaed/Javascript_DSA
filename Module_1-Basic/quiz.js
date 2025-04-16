console.log(typeof NaN);

///////////////////////////

console.log(0 == "0");


/////////////////////////

function test() {

    console.log(x);
  
    var x = 10;
  
  }
  
  test();

  /////////////////////

  function outer() {

    let count = 0;
  
    return function inner() {
  
      count++;
  
      console.log(count);
  
    };
  
  }
  
  const increment = outer();
  
  increment();
  
  increment();

  ///////////////////////

  switch (true) {

    case 1:
  
      console.log("One");
  
      break;
  
    case true:
  
      console.log("True");
  
      break;
  
    default:
  
      console.log("Default");
  
  }

  /////////////////////

  let x = 10;

function test() {

  let x = 20;

  if (true) {

    let x = 30;

    console.log(x);

  }

  console.log(x);

}

test();

console.log(x);

////////////////////

console.log(a);

var a = 5;

console.log(a);

///////////////////


const sum = (a, b) => a + b;

console.log(`${sum(1,2)}`);