var test1 = document.getElementById("test");
console.log(test1);
var str = "welcome home dear :)";
// var sec = 1000;
// var test = function (x) {
//   console.log(str[x]);
// };
// for (var i = 0; i < str.length; i++) {
//   setInterval(function () {
//     setTimeout(test(i), sec);
//   }, 1000);

// sec = sec + 1000;
// }
// for(var i = 0; i<str.length)
var i = 0;
var test2 = setInterval(function () {
  // console.log(str[i]);
  test1.innerHTML += str[i];
  i++;
  if (i >= str.length) {
    clearInterval(test2);
  }
}, 1000);
