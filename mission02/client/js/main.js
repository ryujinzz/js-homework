/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
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

  list.forEach((li) => {
    li.classList.remove("is-active");
  });
  li.classList.add("is-active");

  //이미지와 글자 변경
  visualImage.alt = data[index - 1].alt;
  visualImage.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  Letter.textContent = data[index - 1].name;

  //배경색 변경
  const color1 = data[index - 1].color[0];
  const color2 = data[index - 1].color[1];
  document.body.style.backgroundImage = `linear-gradient(to bottom right, ${color1}, ${color2})`;

  //오디오 재생 추가
  let audios = new Audio(
    `./assets/audio/${data[index - 1].name.toLowerCase()}.m4a`
  );
  audios.loop = false; // 반복재생하지 않음
  audios.volume = 0.3; // 음량 설정
  audios.play(); // sound1.mp3 재생
}

nav.addEventListener("click", handleClick);
