var hello = 'Hello';
let world = 'Hello world';
const helloWorld = 'Hello world';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld)
}

anotherFunction();

//mala práctica
const helloWorld = () => {
  globalVAr = 'im global'
}

helloWorld()
console.log(globalVAr);