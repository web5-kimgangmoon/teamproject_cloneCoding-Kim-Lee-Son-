const formElem = document.getElementById("idForm");
// 전체를 감싸는 폼
const BTNElem = document.getElementById("btn");
// 다음 버튼
const inputElem = document.getElementById("idInput");
// 아이디 적는칸

let idInf

inputElem.oninput = (e) => {
    // 아이디적는 칸에 값을 입력했을때
    idInf = e.target.value
    // idInf로 적은 아이디를 가져온다
    // console.log(idInf);
};

BTNElem.onclick = () => {
    formElem.innerHTML = // 폼안에 있는 html을 바꾼다
    `<div class="pwBox">
    <div class="box">
        <div><h1>아카라이브 로그인</h1></div>
        <div class="username-block ">
            <button class="username-wrap" data-tostage="1" type="button">
            <span class="back-icon ion-chevron-left"></span>
            <span class="will-fill-username">USERNAME</span>
            </button>
        </div>
        <button type="button" class="fallback" id="fallback"></button>
        <div class="blurry">비밀번호</div>
        <input type="text" id="idInput" class="input" name="username" minlength="1" maxlength="64" spellcheck="false" autocomplete="on" >
        <!-- <div class="input-b">
            <input type="text" id="idInput" name="username" minlength="1" maxlength="64" spellcheck="false" enterkeyhint="next" autocomplete="username" data-listener-added_d090e0e7="true" class="" style="animation-duration: 0.5s;">
        </div> -->
        <div class="Purple">아이디/비밀번호 찾기</div>
        <button type="button" class="btn-a center">로그인</button>
        <div class="createdId center Purple">계정 만들기</div>
        <style>
        .fallback {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0,0.1);
            box-sizing: border-box;
            border-radius: 20px;
            border: 1px solid rgba(0, 0, 0,0.0);
        }
        
        .fallback:hover{
            background-color: rgba(0, 0, 0,0.3);
        }

        .fallback::after{
            content: <
        }
        </style>
    <div></div>
    </div>
</div>`
    const fallback = document.getElementById("fallback");
    fallback.innerHTML = idInf;

};


