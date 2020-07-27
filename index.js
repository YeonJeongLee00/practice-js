// // function sayHello(name, age) {
// //   console.log("Hello", name, age);
// // }

// // 백틱 사용
// function sayHello(name, age) {
//   console.log(`Hello ${name} you are ${age} years old`);
// }

// sayHello("yeonjeong", 13);

// const calcutator = {
//   puls: function (a, b) {
//     return a + b;
//   },
// };
// const plus = calcutator.puls(5, 5);
// console.log(plus);

// const title = document.getElementById("title");
// title.style.color = "red";
// console.log(title);

// // 모든 js object를 볼 수 있다.
// console.dir(title);

// function handleResize() {
//   console.log("hi!");
// }

// window.addEventListener("resize", handleResize);

const title1 = document.querySelector("#title");

const BASE_COLOR = "red";
const OTHER_COLOR = "aliceblue";
// 함수 생성
function handClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title1.style.color = OTHER_COLOR;
  } else {
    title1.style.color = BASE_COLOR;
  }
}

// 함수 초기화
function init() {
  // 함수를 호출할 때 괄호가 있으면 즉시 호출
  // 괄호가 없으면 이벤트가 실행될 때 함수가 호출
  title1.style.color = BASE_COLOR;
  title1.addEventListener("mouseenter", handClick);
}

init();

//if-else
