// BTNElem.onclick = (e) => {
//     // // 아이디적는 칸에 값을 입력했을때
//     // idInf = e.target.value
//     if(emailElem == null){
//         console.log(`<div class="hide">메일 주소를 입력해주세요</div>`)
//         // document.innerHTML = `<div class="hide">메일 주소를 입력해주세요</div>`
//     };
//     if(ckeckElem != onclick){
//         document.innerHTML = `<div class="hide-1">이용 약관에 동의해주시기 바랍니다.</div>`
//     };

// };

// document.getElementById("idForm").addEventListener("submit", function(event)
function validateForm(e) {
  const hideElem1 = document.getElementById("hide-1");
  const ckeckElem = document.getElementById("keep");
  const emailElem = document.getElementById("email");
  const hideElem = document.getElementById("hide");
  let isValid = true;

  if (!ckeckElem.checked) {
    e.preventDefault(); // 폼 제출을 막음
    hideElem1.classList.remove("hidden");
    hideElem1.classList.add("hide-1");
    isValid = false;
  } else {
    hideElem1.classList.remove("hide-1");
    hideElem1.classList.add("hidden");
  }

  if (emailElem.value.trim() === "") {
    hideElem.classList.remove("hidden");
    hideElem.classList.add("hide");
    isValid = false;
  } else {
    e.preventDefault();
    hideElem.classList.remove("hide");
    hideElem.classList.add("hidden");
  }

  return isValid;
}

// const idInputElem = document.getElementById("idInput");
// const nickInputElem = document.getElementById("nickInput");

const formElem = document.getElementById("idForm");
// 전체를 감싸는 폼
const BTNElem = document.getElementById("createdBTN");
// 다음 버튼
const inputElem = document.getElementById("email");
// 이메일 적는칸
const selectBox = document.querySelector("#selectEmail");
const selectedOption = selectBox.options[selectBox.selectedIndex];
const value = selectedOption.value;
const target = document.getElementById("selectEmail");

// target.options[target.selectedOption].value
let idInf;

inputElem.oninput = (e) => {
  // 아이디적는 칸에 값을 입력했을때
  idInf = e.target.value;
  // idInf로 적은 아이디를 가져온다
  // console.log(idInf);
};

/* <div>
      프로필 이미지 : 
      <form class="inputImg" method="post" enctype="multipart/form-data"> <!-- 이미지 파일 데이터에 알맞는 enctype 설정 -->
        <div class="addImage" id="image-show"> <!-- 이미지 띄울 공간 -->
        </div>
        <input type="file" accept="image/*" onchange="loadFile(this)">
    </div> */

BTNElem.onclick = (e) => {
  if (target.value == "골라주세요." || !validateForm(e)) {
    return;
  }
  formElem.innerHTML =
    // 폼안에 있는 html을 바꾼다
    `<div class="idInfo">
    
    <div>이메일 : 
      <input value="" type="text" id="fallback" class="fallback" name="emailInput" minlength="1" maxlength="64" spellcheck="false" autocomplete="on" >
    </div>
    <div>아이디 : 
      <input type="text" id="idInput" class="inputText" name="idInput" minlength="8" maxlength="64" spellcheck="false" autocomplete="on" >
    </div>
    <div>닉네임 : 
      <input type="text" id="nickInput" class="inputText" name="nickInput" minlength="8" maxlength="64" spellcheck="false" autocomplete="on" >
    </div>
    <div>비밀번호 : 
      <input type="text" id="pwInput" class="inputText" name="pwInput" minlength="8" maxlength="64" spellcheck="false" autocomplete="on" >
    </div>
    <div>비밀번호 확인: 
      <input type="text" id="pwInputCheck" class="inputText" name="pwInput" minlength="8" maxlength="64" spellcheck="false" autocomplete="on" >
    </div>
    <div class="mismatch-message hidden">비밀번호가 일치하지 않습니다</div>
    <div>
      <button class="createdAccount" id="createdBtn" type="button">계정 생성</button>
    </div>
    <style>
    .inputText::after{
        content: <
    }
    </style>
  </div>`;
  const idInputElem = document.getElementById("idInput");
  const nickInputElem = document.getElementById("nickInput");
  const createdBtnElem = document.getElementById("createdBtn");
  // 전체를 감싸는 폼

  // 다음 버튼
  // const emailInput = document.getElementById("emailInput");
  // emailInput.innerHTML = idInf;

  const fallback = document.getElementById("fallback");
  fallback.value = idInf.concat(target.value);

  // ckeckElem.addEventListener("click", ()=>{

  // 	hideElem1.classList.toggle("close");
  // });

  // function loadFile(input) {
  //     let file = input.files[0]; // 선택파일 가져오기

  //     let newImage = document.createElement("img"); //새 이미지 태그 생성

  //     //이미지 source 가져오기
  //     newImage.src = URL.createObjectURL(file);
  //     newImage.style.width = "100%"; //div에 꽉차게 넣으려고
  //     newImage.style.height = "100%";
  //     newImage.style.objectFit = "cover"; // div에 넘치지 않고 들어가게

  //     //이미지를 image-show div에 추가
  //     let container = document.getElementById('image-show');
  //     container.appendChild(newImage);
  // }

  const pwInputElem = document.getElementById("pwInput");
  const pwInputCheckElem = document.getElementById("pwInputCheck");

  // createdBtnElem.onclick = () => {

  //     if(pwInputElem!=pwInputCheckElem){
  //     alert("비밀번호를 확인하세요.")
  //     // console.log("비밀번호를 확인하세요.")
  //     };
  // }
  function isMatch(pwInputElem, pwInputCheckElem) {
    return pwInputElem === pwInputCheckElem;
  }
  let elMismatchMessage = document.querySelector(".mismatch-message");

  pwInputCheckElem.onkeydown = function (e) {
    console.log(e.target.value);
    // console.log(elInputPasswordRetype.value);
    if (pwInputCheckElem.value.length !== 0) {
      if (isMatch(pwInputElem.value, pwInputCheckElem.value)) {
        elMismatchMessage.classList.add("hidden"); // 실패 메시지가 가려져야 함
        createdBtnElem.onclick = function () {
          axios({
            method: "post",
            url: `${reqHostPort}/u/regist`,
            data: {
              channel: channel,
              strid: idInputElem.value,
              pw: pwInputElem.value,
              nick: nickInputElem.value,
              email: idInf.concat(target.value),
            },
            withCredentials: true,
          })
            .then((res) => {
              alert("회원가입에 성공했습니다!");
            })
            .catch((err) => {
              alert(err.response.data.error);
            })
            .finally(() => {
              window.location.replace(`${clientAddress}/?channel=${channel}`);
            });
        };
      } else {
        elMismatchMessage.classList.remove("hidden"); // 실패 메시지가 보여야 함
        createdBtnElem.onclick = null;
      }
    } else {
      elMismatchMessage.classList.add("hidden"); // 실패 메시지가 가려져야 함
      createdBtnElem.onclick = null;
    }
  };
  pwInputCheckElem.onkeyup = function (e) {
    console.log(e.target.value);
    // console.log(elInputPasswordRetype.value);
    if (pwInputCheckElem.value.length !== 0) {
      if (isMatch(pwInputElem.value, pwInputCheckElem.value)) {
        elMismatchMessage.classList.add("hidden"); // 실패 메시지가 가려져야 함
        createdBtnElem.onclick = function () {
          axios({
            method: "post",
            url: `${reqHostPort}/u/regist`,
            data: {
              channel: channel,
              strid: idInputElem.value,
              pw: pwInputElem.value,
              nick: nickInputElem.value,
              email: idInf.concat(target.value),
            },
            withCredentials: true,
          })
            .then((res) => {
              alert("회원가입에 성공했습니다!");
            })
            .catch((err) => {
              alert(err.response.data.error);
            })
            .finally(() => {
              window.location.replace(`${clientAddress}/?channel=${channel}`);
            });
        };
      } else {
        elMismatchMessage.classList.remove("hidden"); // 실패 메시지가 보여야 함
        createdBtnElem.onclick = null;
      }
    } else {
      elMismatchMessage.classList.add("hidden"); // 실패 메시지가 가려져야 함
      createdBtnElem.onclick = null;
    }
  };
};
