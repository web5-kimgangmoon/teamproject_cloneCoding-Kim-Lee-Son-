(async () => {
  // search_data

  let searchedChannelList = [
    ["./../imgs/Arcalive_logo.svg", "ㅇㅇ"],
    ["./../imgs/Arcalive_logo.svg", "ㅁㅁ"],
  ];
  // 이미지 경로, 채널이름

  // subscribechannel_data

  // 채널 리스트 받아오는 코드가 필요, 백엔드에 요청

  let subscribechannelList = [
    ["forExample", "예를 들면"],
    ["thisChannel", "이런 채널"],
    ["ofCourseAdmin", "물론 관리자 채널도!"],
  ];
  // 경로(전체), 채널명

  // notification_data

  let notificationMessages = [
    ["link3", "아아", "ㅇㅇ"],
    ["link5", "ㅇㅇ", "ㅇㅇ"],
    ["link7", "ㅇㅇ", "ㅇㅇ"],
  ];

  // 경로(전체), 작성자, 게시글 제목

  // primarychannel_data

  let primarychannelList = [
    ["forExample", "예를 들면"],
    ["thisChannel", "이런 채널"],
    ["ofCourseAdmin", "물론 관리자 채널도!"],
  ];
  let userPrimaryRoot = "hahaha";

  try {
    let data = (
      await axios({
        method: "post",
        url: `${reqHostPort}/b/channellist`,
        withCredentials: true,
      })
    ).data.allchannellist;
    subscribechannelList = [];
    primarychannelList = [];

    for (let item of data) {
      subscribechannelList.push([
        `${clientAddress}?channel=${item.engTitle}`,
        item.title,
      ]);
    }
    for (let item of data) {
      primarychannelList.push([
        `${clientAddress}?channel=${item.engTitle}`,
        item.title,
      ]);
    }
    subscribechannelList.push([`${clientAddress}/admin`, "관리자 채널"]);
    primarychannelList.push([`${clientAddress}/admin`, "관리자"]);
  } catch (err) {
  } finally {
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
    const top_search_channelSearchBox_searchedChannelList =
      document.getElementById(
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
    // search_function
    const subTopSearchBox_input = document.getElementById(
      "subTopSearchBox_input"
    );
    const subTopSearchBox = document.getElementById("subTopSearchBox");
    const top_search_input = document.getElementById("top_search_input");
    const top_search_channelSearchBox = document.getElementById(
      "top_search_channelSearchBox"
    );

    const top_search_channelSearchBox_channelSearchButtonLine =
      document.getElementById(
        "top_search_channelSearchBox_channelSearchButtonLine"
      );

    top_search_input.onclick = (e) => {
      top_userInfoBox.classList.add("out");
      top_subscribechannel_channelBox.classList.add("out");
      top_notification_box.classList.add("out");
      top_primarychannel_channelBox.classList.add("out");
      top_search_channelSearchBox.classList.remove("out");
    };
    top_search_input.onkeydown = (e) => {
      top_userInfoBox.classList.add("out");
      top_subscribechannel_channelBox.classList.add("out");
      top_notification_box.classList.add("out");
      top_primarychannel_channelBox.classList.add("out");
      top_search_channelSearchBox.classList.remove("out");
      if (top_search_input.value != "")
        top_search_channelSearchBox_channelSearchButtonLine.innerHTML = `<a href="/${top_search_input.value}"><span>"${top_search_input.value}"</span>검색 결과 이동...</a>`;
      else top_search_channelSearchBox.classList.add("out");
    };
    subTopSearchBox_input.onclick = () => {
      top_userInfoBox.classList.add("out");
      top_subscribechannel_channelBox.classList.add("out");
      top_notification_box.classList.add("out");
      top_primarychannel_channelBox.classList.add("out");
      top_search_channelSearchBox.classList.remove("out");
    };
    subTopSearchBox_input.onkeydown = (e) => {
      top_userInfoBox.classList.add("out");
      top_subscribechannel_channelBox.classList.add("out");
      top_notification_box.classList.add("out");
      top_primarychannel_channelBox.classList.add("out");
      top_search_channelSearchBox.classList.remove("out");
      if (subTopSearchBox_input.value != "")
        top_search_channelSearchBox_channelSearchButtonLine.innerHTML = `<a href = "/${subTopSearchBox_input.value}"><span>"${subTopSearchBox_input.value}"</span>검색 결과 이동...</a>`;
      else top_search_channelSearchBox.classList.add("out");
    };

    document.getElementById("top_search_channelSearchCloseButton").onclick =
      () => {
        top_userInfoBox.classList.add("out");
        top_primarychannel_channelBox.classList.add("out");
        top_subscribechannel_channelBox.classList.add("out");
        top_search_channelSearchBox.classList.add("out");
      };
    document.getElementById("top_subTopSearchBox_button").onclick = () => {
      top_primarychannel_channelBox.classList.add("out");
      top_subscribechannel_channelBox.classList.add("out");
      subTopSearchBox.classList.toggle("out");
    };

    // subscribechannel_function

    document.getElementById("top_subscribechannel_button").onclick = (e) => {
      e.preventDefault();
      top_userInfoBox.classList.add("out");
      top_notification_box.classList.add("out");
      top_primarychannel_channelBox.classList.add("out");
      top_subscribechannel_channelBox.classList.toggle("out");
    };

    // notification_function

    const top_notification_box = document.getElementById(
      "top_notification_box"
    );

    document.getElementById("top_notification_button").onclick = (e) => {
      e.preventDefault();
      top_userInfoBox.classList.add("out");
      top_subscribechannel_channelBox.classList.add("out");
      top_primarychannel_channelBox.classList.add("out");
      top_notification_box.classList.toggle("out");
    };

    document.getElementById("top_notification_readAll_button").onclick = (
      e
    ) => {
      e.preventDefault();
      top_notification_box_messages.childNodes.forEach((item) => {
        item.className = "newLink grey";
      });
    };

    // primarychannel_function

    document.getElementById("top_primarychannel_button").onclick = (e) => {
      e.preventDefault();
      top_userInfoBox.classList.add("out");
      top_subscribechannel_channelBox.classList.add("out");
      top_notification_box.classList.add("out");
      top_primarychannel_channelBox.classList.toggle("out");
    };
  }
})();

(async () => {
  // 경로(전체), 채널명

  let userIconHref = `${clientAddress}/login?channel=${channel}`;

  // login_data

  let username = "";
  // username은 channel_data_insert, channelBoard에서도 사용한다.
  let userPoint = 200;
  let userExists = false;
  try {
    let data = (
      await axios({
        method: "post",
        url: `${reqHostPort}/u/userInfo`,
        data: { channel: "main" },
        withCredentials: true,
      })
    ).data;
    console.log(data);
    if (data.userinfo[0]) username = data.userinfo[0].nick;
    if (data.userinfo[0]) userExists = true;
  } catch (err) {
    username = "";
    userExists = false;
  } finally {
    document.getElementById("top_login").innerHTML = `
    <div class="loginIconBox" title="Member menu" id="top_userInfoBoxButton">
      <span class="userName-login">${username}</span>
      <a class="personLogin-icon" ${
        !userExists ? `href="${userIconHref}"` : ""
      }>
        <div class="person-img"><img src="./../imgs/person.png"></div>
      </a>
    </div>
    <div class="userInfoBox out" id="top_userInfoBox">
      <div class="userInfoListLiner">
        <div class="userName"><a href="/userInfo?channel=${channel}"><span>${username}</span></a></div>
        <div class="userPoint">${userPoint} ⓟ</div>
      </div>
      <div class="userInfoListLiner">
        <button class="userInfoList" type="button"><a href="/userInfo?channel=${channel}">유저 정보</a></button>
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

    // login_function

    if (userExists) {
      document.getElementById("top_userInfoBoxButton").onclick = (e) => {
        e.preventDefault();
        top_subscribechannel_channelBox.classList.add("out");
        top_primarychannel_channelBox.classList.add("out");
        top_notification_box.classList.add("out");
        top_userInfoBox.classList.toggle("out");
      };
    }

    document.getElementById("top_userInfoBox_helpButton").onclick = (e) => {
      e.preventDefault();
      container.style.top = "-" + window.scrollY.toString();
      container.style.position = "fixed";
      top_userInfoBox.classList.add("out");
      shortCutHelpBox.classList.remove("out");
      curtain.classList.remove("out");
    };

    document.getElementById("shortCutHelpBox_closeButton").onclick = (e) => {
      e.preventDefault();
      const heightY = -Number(container.style.top.split("px")[0]);
      //   console.log(container.style.top);
      //   console.log(heightY);
      container.style.position = "static";
      container.style.top = 0;
      window.scrollTo(0, heightY);
      shortCutHelpBox.classList.add("out");
      curtain.classList.add("out");
    };

    document.getElementById("top_userInfoBox_logout_button").onclick = async (
      e
    ) => {
      try {
        e.preventDefault();
        await axios({
          method: "post",
          url: `${reqHostPort}/u/logout`,
          data: { channel: "" },
          withCredentials: true,
        });
        window.location.replace(window.location.href);
        //백엔드에 요청을 보내고, 리다이렉트가 필요합니다.
      } catch (err) {
        alert(err.response.data.error);
      }
    };
  }
})();
