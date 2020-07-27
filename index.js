const title1 = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handClick() {
  const currentClass = title1.className;
  if (currentClass !== CLICKED_CLASS) {
    title1.className = CLICKED_CLASS;
  } else {
    title1.className = "";
  }
}
// 함수 초기화
function init() {
  title1.addEventListener("click", handClick);
}

init();
