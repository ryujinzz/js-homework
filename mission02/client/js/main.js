/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector(".nav");
const visualImage = document.querySelector(".visual img");
const Letter = document.querySelector(".nickName");

function handleClick(e) {
  e.preventDefault();
  let target = e.target;
  let li = target.closest("li");

  if (!li) return;

  let index = li.dataset.index;
  console.log(data);
  const list = Array.from(nav.children);

  //li를 전부 돌아가면서 리무브해버림
  list.forEach((li) => {
    li.classList.remove("is-active");
  });

  // const button = e.target.closest("button");
  // visualImage.src = a.href;//이런 방법도 있지만 alt설명이 전혀 바뀌지 않는다.

  //내가 n번째 li를 선택하고 있는가?
  //data-index 수집하기

  // visualImage.src = `./assets/part01/visual${index}.jpg`;
  // visualImage.src = `./assets/${index1}.jpeg`;
  // visualImage.alt = data[index - 1].alt;

  li.classList.add("is-active");
}

nav.addEventListener("click", handleClick);
