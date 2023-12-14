const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 상태변수 유저가 로그인하기에 적합한가? -> 상태를 관리하는 변수 true, false
// 상태변수 관리 하는이유 : (로그인 버튼 누를 떄마다 db를 불러오면) 쓸데없는 리소스 낭비때문에

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

// 이메일과 패스워드가 정규표현식에 맞는지까지 완료
// -> user.email, user.pw 가 작성되면 로그인 성공
// -> 로그인하면 페이지 welcome.html로 넘어감
*/

function emailReg(text) {
  // 이메일 형식에 맞게 입력했는지 체크
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase()); // 형식에 맞는 경우에만 true 리턴
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

//이메일, 패스워드, 로그인 버튼에 각각 클래스와 아이디 찾아서 변수 선언
const email = document.querySelector(".user-email-input");
const pw = document.querySelector(".user-password-input");
const button = document.querySelector(".btn-login");

//(1)
// 이메일 실시간 체크
function handleEmail() {
  // 입력창의 값이 이메일 형태와 맞지 않게 입력된 경우
  if (emailReg(email.value) || email.value == "") {
    // 테두리 색 원래대로 변경
    email.style.borderColor = "#03cf5d";
    // 경고 텍스트 안보이게 처리
    email.classList.remove("is--invalid");
  }
  // 이메일 형태에 적합하게 입력된 경우
  else {
    // 이메일 입력창의 테두리 빨간색으로 변경
    email.style.borderColor = "#EF4444";
    // 입력창 하단의 경고 텍스트 보이게
    email.classList.add("is--invalid");
  }
}

//이메일 정규식 체크하는 함수

//(2)
// 비밀번호 실시간 체크
function handlePw() {
  // 입력한 비밀번호가 6자 이상이고, 특수문자가 포함일경우
  if (pwReg(pw.value) || pw.value == "") {
    // 입력창 테두리 원래 색으로 표시하고 경고 텍스트 안보이게 처리
    pw.style.borderColor = "#03cf5d";
    pw.classList.remove("is--invalid");
  } else {
    // 입력창 테두리 빨간색으로 표시하고 경고 텍스트 보이게 처리
    pw.style.borderColor = "#EF4444";
    pw.classList.add("is--invalid");
  }
}

//(4)
// 이메일/비밀번호 입력값이 모두 유효할 때만 버튼 활성화
function handleLogin(e) {
  e.preventDefault();
  // 이메일 입력조건과 비밀번호 입력조건중  둘다 만족한 경우 로그인 성공
  emailReg(email.value) && pwReg(pw.value)
    ? userLogin()
    : console.log("로그인 실패");
}

function userLogin() {
  email.value === user.id && pw.value === user.pw
    ? (window.location.href = "welcome.html")
    : alert("user님의 로그인이 실패했습니다.");
}

// -- addEventListener --
pw.addEventListener("input", handlePw);
email.addEventListener("input", handleEmail);
button.addEventListener("click", handleLogin);

// -- on 이벤트 메서드 --
// pw.oninput = printPw;
// email.oninput = printEmail;
// button.onclick = handleLogin;
