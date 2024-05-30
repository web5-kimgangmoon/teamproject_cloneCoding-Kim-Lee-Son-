
const username = "하하";
const userPoint = 200;
const userExists = true;
const userIconHref = userExists ? "" : "href='/login'";

document.getElementById("top_login_button").innerHTML =
  `
<div class="loginIconBox" title="Member menu" id="top_userInfoBoxButton">
  <span class="userName-login">${username}</span>
  <a class="personLogin-icon" ${userIconHref}>
    <div class="person-img"><img src="./imgs/person.png"></div>
  </a>
</div>
<div class="userInfoBox out" id="top_userInfoBox">
  <div class="userInfoListLiner">
    <div class="userName"><a href="/userInfo"><span>${username}</span></a></div>
    <div class="userPoint">${userPoint} ⓟ</div>
  </div>
  <div class="userInfoListLiner">
    <button class="userInfoList" type="button"><a href="/userInfo">유저 정보</a></button>
    <button class="userInfoList" type="button"><a>표시설정</a></button>
    <button class="userInfoList" type="button"><a>시리즈</a></button>
    <button class="userInfoList" type="button"><a>포인트 내역</a></button>
    <button class="userInfoList" type="button"><a>스크랩 목록</a></button>
    <button class="userInfoList" type="button" id="top_userInfoBox_helpButton"><a>단축키 도움말</a></button>
  </div>
  <div class="userInfoListLiner">
    <button class="userInfoList" type="button"><a href="/">최근 읽은글</a></button>
    <button class="userInfoList" type="button"><a>나의 신고 목록</a></button>
    <button class="userInfoList" type="button"><a>채널 만들기</a></button>
    <button class="userInfoList" type="button"><a>광고 집행</a></button>
    <button class="userInfoList" type="button"><a>나무게임</a></button>
    <button class="userInfoList" type="button"><a>라이브 온도계</a></button>
    <button class="userInfoList" type="button"><a>아카콘</a></button>
  </div>
  <button class="userInfoList" id="top_userInfoBox_logout_button" type="button"><a>로그아웃</a></button>
</div>`;

document.getElementById("top_userInfoBox_logout_button").onclick = async (e) => {
  e.preventDefault();
  //백엔드에 요청을 보내고, 리다이렉트가 필요합니다.
}

if (userExists) {
  document.getElementById("top_userInfoBoxButton").onclick = (e) => {
    e.preventDefault();
    top_subscribechannel_channelBox.classList.add("out");
    top_primarychannel_channelBox.classList.add("out");
    top_userInfoBox.classList.toggle("out")
  }
}

document.getElementById("top_userInfoBox_helpButton").onclick = (e) => {
  e.preventDefault();
  container.style.top = "-" + window.scrollY.toString();
  container.style.position = "fixed";
  top_userInfoBox.classList.toggle("out");
  shortCutHelpBox.classList.toggle("out");
  curtain.classList.toggle("out");
}

document.getElementById("shortCutHelpBox_closeButton").onclick = (e) => {
  e.preventDefault();
  const heightY = Number(container.style.top.split("-")[1].split("px")[0]);
  console.log(container.style.top);
  console.log(heightY);
  container.style.position = "static";
  container.style.top = 0;
  window.scrollTo(0, heightY);
  shortCutHelpBox.classList.toggle("out");
  curtain.classList.toggle("out");
}