

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
function validateForm() {
    const hideElem1 = document.getElementById("hide-1");
    const ckeckElem = document.getElementById("keep");
    const emailElem = document.getElementById("email");
    const hideElem = document.getElementById("hide");
    const isValid = true;

    if (!ckeckElem.checked) {
        event.preventDefault();  // 폼 제출을 막음
        hideElem1.classList.remove("hidden");
        hideElem1.classList.add("hide-1");
    } else {
        hideElem1.classList.remove("hide-1");
        hideElem1.classList.add("hidden");
    };

    if (emailElem.value.trim() === "") {
        hideElem.classList.remove("hidden");
        hideElem.classList.add("hide");
        isValid = false;
    } else {
        hideElem.classList.remove("hide");
        hideElem.classList.add("hidden");
    }

    return isValid;
};


// ckeckElem.addEventListener("click", ()=>{

// 	hideElem1.classList.toggle("close");
// });