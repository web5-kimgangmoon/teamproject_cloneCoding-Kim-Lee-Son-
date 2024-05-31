// search_insert

document.getElementById("top_search").innerHTML = `
<div class="searchIconBox">
    <div class="search-img"><img src="./../imgs/searchImg.png" /></div>
    <input type="search" name="channelName" placeholder="찾기" autocomplete="off" id="top_search_input"/>
</div>
<div class="searchMiniBox" id="top_subTopSearchBox_button">
  <div class="search-img"><img src="./../imgs/searchImg.png" /></div>
  <span>검색</span>
</div>
<div class="channelSearchBox out" id="top_search_channelSearchBox">
  <div class="channelList loadingBox" id="top_search_channelSearchBox_loadingBox">
    <div class="loading">
      <div class="loadingWhite"></div>
    </div>
  </div>
  <div class="searchedChannelList" id="top_search_channelSearchBox_searchedChannelList">
  </div>
  <div class="channelSearchButtonLine" id="top_search_channelSearchBox_channelSearchButtonLine"></div>
  <div class="channelcloseButtonLine">
    <button type="button" id="top_search_channelSearchCloseButton">닫기</button>
  </div>
</div>`;
// top_search_channelSearchBox_loadingBox

// const top_search_channelSearchBox_loadingBox = document.getElementById(
//   "top_search_channelSearchBox_loadingBox"
// );
const top_search_channelSearchBox_searchedChannelList = document.getElementById(
  "top_search_channelSearchBox_searchedChannelList"
);

searchedChannelList.forEach((item) => {
  top_search_channelSearchBox_searchedChannelList.innerHTML += `
<div class="channelList">
    <a href="/">
        <img class="logo" src="${item[0]}" />
        <span>${item[1]}</span>
        <img class="playImg" src="./../imgs/playShape.png" />
    </a>
</div>`;
});

// subscribechannel_insert

document.getElementById("top_subscribechannel").innerHTML = `
<div class="channelSelectorButton" title="구독 채널" id="top_subscribechannel_button">
  <span>구독</span><span class="topchannel">&nbsp;채널</span>
  <div class="arrowButton"></div>
</div>
<div class="channelBox out" id="top_subscribechannel_channelBox">
  <div class="channelAreaLiner">
    <div class="channelList"><a href="/">구독 중인 채널</a></div>
  </div>
</div>
`;

const top_subscribechannel_channelBox = document.getElementById(
  "top_subscribechannel_channelBox"
);

subscribechannelList.forEach((item, index) => {
  top_subscribechannel_channelBox.innerHTML += `<div class="channelList"><a href="${
    item[0]
  }">${item[1]} 채널<span class="index_box">${index + 1}</span></a></div>`;
});

// login_insert

document.getElementById("top_login").innerHTML = `
<div class="loginIconBox" title="Member menu" id="top_userInfoBoxButton">
  <span class="userName-login">${username}</span>
  <a class="personLogin-icon" ${userIconHref}>
    <div class="person-img"><img src="./../imgs/person.png"></div>
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

// notification_insert

document.getElementById("top_notification").innerHTML = `
<div class="notification-img" title="notification" id="top_notification_button"><img src="./../imgs/notification-bell.png" /></div>
<div class="notificationBox out" id="top_notification_box">
  <div class="notificationBellTitle"><span>알림</span><button type="button" class="readAllButton" id="top_notification_readAll_button">모두
      읽기</button></div>
  <div class="notificatetionMessages" id="top_notification_box_messages">
  </div>
  <div class="allLook">
    <a href="/lookAll">전체보기</a>
  </div>
</div>`;

const top_notification_box_messages = document.getElementById(
  "top_notification_box_messages"
);

notificationMessages.forEach((item) => {
  top_notification_box_messages.innerHTML += `<div class="newLink"><a href="${item[0]}">${item[1]}님의 새 개념글 : ${item[2]}</a></div>`;
});

// primarychannel_insert

document.getElementById("top_primarychannel").innerHTML = `
        <div class="channelSelectorButton" title="채널" id="top_primarychannel_button">
            <span>주요</span><span class="topchannel">&nbsp;채널</span>
            <div class="arrowButton"></div>
        </div>
<div class="channelBox out" id="top_primarychannel_channelBox">
  <div class="channelAreaLiner">
    <div class="channelList"><a href="/">베스트 라이브</a></div>
    <div class="channelList"><a href="/">유머 채널</a></div>
    <div class="channelList"><a href="/">핫딜 채널</a></div>
    <div class="channelList"><a href="/">개념글 모음</a></div>
    <div class="channelList"><a href="/">종합 심의대상</a></div>
    <div class="channelList"><a href="/">종합 속보</a></div>
  </div>
  <div class="channelAreaLiner">
    <div class="channelList"><a href="/">공지사항</a></div>
    <div class="channelList"><a href="/">문의 게시판</a></div>
    <div class="channelList"><a href="/">채널 문의 게시판</a></div>
  </div>

</div>
`;

const top_primarychannel_channelBox = document.getElementById(
  "top_primarychannel_channelBox"
);

const top_primary_channelList = document.createElement("div");
top_primary_channelList.className = "channelAreaLiner";
top_primarychannel_channelBox.appendChild(top_primary_channelList);

subscribechannelList.forEach((item) => {
  top_primary_channelList.innerHTML += `<div class="channelList"><a href="${item[0]}">${item[1]}</a></div>`;
});
top_primarychannel_channelBox.innerHTML += `<div class="channelList"><a href="${userPrimaryRoot}">더보기</a></div>`;
