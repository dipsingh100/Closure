// function counter() {
//   var counter = 0;

//   function IncreaseCounter() {
//     return (counter += 1);
//   }

//   return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//   var outerVar = "a";

//   (function innerFunc(innerArg) {
//     var innerVar = "b";

//     console.log("outerArg = " + outerArg +
//         "\n" + "innerArg = " + innerArg +
//         "\n" + "outerVar = " + outerVar +
//         "\n" + "innerVar = " + innerVar +
//         "\n" + "globalVar = " + globalVar
//     );
//   })(456);
// })(123);
