/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

console.log(data);

const nav = document.querySelector(".nav");
const list = nav.querySelectorAll("li");
const visualImage = document.querySelector(".visual img");
const Letter = document.querySelector(".nickName");

function handleClick(e) {
  e.preventDefault();
  let target = e.target;
  let li = target.closest("li");

  if (!li) return;
  let index = li.dataset.index;

  //li를 전부 돌아가면서 리무브해버림
  list.forEach((li) => {
    li.classList.remove("is-active");
  });

  const button = e.target.closest("button");
  // visualImage.src = a.href;//이런 방법도 있지만 alt설명이 전혀 바뀌지 않는다.

  //내가 n번째 li를 선택하고 있는가?
  //data-index 수집하기

  // data에서 특정 프로퍼티만 가져오는 방법
  // 그러면 data에 있는 프로퍼티를 어떻게 사용해야
  // visualImage의 alt와 src를 바꾸고
  // body의 background 스타일을 변경할 수 있을까?

  visualImage.alt = data[index - 1].alt;

  li.classList.add("is-active");
}

nav.addEventListener("click", handleClick);
