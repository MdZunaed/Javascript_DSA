

function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(`${outerVariable}`);
    }

    return innerFunction;
}

const closureFuntion = outerFunction();

closureFuntion();