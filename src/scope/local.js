const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
}

helloWorld();
console.log(hello); //no está definido ni accesible

//ámbito léxico
var scope = "i am global";
const functionScope = () => {
  var scope = "i am a just local";
  const func = () => {
    return scope;
  }
  console.log(func());
}

functionScope();