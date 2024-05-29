const channelName = "히히";
const adminName = "돌겠네";
const channelDescription = "미쳐버리겠다 진짜.";

const channelInfoBox = document.getElementById("channelInfo");
channelInfoBox.innerHTML = `
<div class="channelImg">
<a href="/"><img src="./../../imgs/gameImg.jpg" /></a>
</div>
<div class="channelInfo">
<div class="channelPathNButtons">
  <div class="channelPath" title="${channelName} 채널" id="channelInfo_channelTitle"><a href="/">${channelName} 채널</a></div>
  <div class="channelButtons">
    <a href="/">
      <button>
        <div class="bookIcon imgIcon"><img src="./../../imgs/book.svg" /></div><span>채널위키</span>
      </button>
    </a>
    <button>
      <div class="alarmIcon imgIcon"><img src="./../../imgs/notifications-outline.svg" /></div>
      <span>알림</span>
    </button>
    <button>
      <div class="plusIcon imgIcon"><img src="./../../imgs/add-outline.svg" /></div><span>구독</span>
    </button>
  </div>
</div>
<div class="channelDescription">
  <div class="channelBaseInfo">
    <div class="subscribeCount baseInfoBox">구독자 96154명</div>
    <div class="alarmCount baseInfoBox">알림수신 1897명</div>
    <div class="channelAdmin baseInfoBox" id="channelInfo_adminName"><a href="/">@${adminName}</a>
      <div class="checkIcon imgIcon"><img src="./../../imgs/checkmark-outline.svg" /></div>
    </div>
  </div>
  <div class="channelInfoText">${channelDescription}</div>
</div>
</div>
`;
