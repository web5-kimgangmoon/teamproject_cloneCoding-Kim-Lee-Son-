// recentChannelList_insert
const recentChannelListBox = document.getElementById("recentChannelListBox");
recentChannelListBox.innerHTML = `
<div class="title">최근<span> 방문 채널</span></div>
`

recentChannelList.forEach((item) => {
  recentChannelListBox.innerHTML += `
  <div class="channelList">
  <a href="${item[0]}"><span>${item[1]}</span></a>
  <div class="imgIcon closeIcon"><img src="./imgs/close.svg" /></div>
</div>`
});

// category_insert

const categoryListBox = document.getElementById("categoryListBox");

categoryList.forEach((item) => {
  categoryListBox.innerHTML += `
  <a href="${item[0]}" class="${!item[2] || "selected"}">
    <div class="category">${item[1]}</div>
  </a>
  `;
});

// channelInfo_insert

document.getElementById("channelInfo").innerHTML = `
<div class="channelImg">
<a href="/"><img src="./imgs/gameImg.jpg" /></a>
</div>
<div class="channelInfo">
<div class="channelPathNButtons">
  <div class="channelPath" title="${channelName} 채널" id="channelInfo_channelTitle"><a href="${channelHref}">${channelName} 채널</a></div>
  <div class="channelButtons">
    <a href="/">
      <button>
        <div class="bookIcon imgIcon"><img src="./imgs/book.svg" /></div><span>채널위키</span>
      </button>
    </a>
    <button>
      <div class="alarmIcon imgIcon"><img src="./imgs/notifications-outline.svg" /></div>
      <span>알림</span>
    </button>
    <button>
      <div class="plusIcon imgIcon"><img src="./imgs/add-outline.svg" /></div><span>구독</span>
    </button>
  </div>
</div>
<div class="channelDescription">
  <div class="channelBaseInfo">
    <div class="subscribeCount baseInfoBox">구독자 96154명</div>
    <div class="alarmCount baseInfoBox">알림수신 1897명</div>
    <div class="channelAdmin baseInfoBox" id="channelInfo_adminName"><a href="/">@${adminName}</a>
      <div class="checkIcon imgIcon"><img src="./imgs/checkmark-outline.svg" /></div>
    </div>
  </div>
  <div class="channelInfoText">${channelDescription}</div>
</div>
</div>
`;

// channelBoard_insert

const boardTableBox = document.getElementById("boardTableBox");
boardTableBox.innerHTML = `
<a>
<div class="boardFieldListBox boardRow">
<div class="divideLineOne">
  <div class="numberColumn">번호</div>
  <div class="titleColumn">
    <dlv class="titleContent">
      <div class="textWrapper">
        <!-- <div class="blackBox"></div> -->
        <div class="previewIcon imgIcon"></div>
        <div class="text">
          제목
        </div>
      </div>
      <div class="commentCountBox"></div>
    </dlv>
  </div>
</div>
<div class="divideLineTwo ">
  <div class="writerColumn left_position">
    <div class="text">작성자</div>
  </div>
  <div class="right_position">
    <div class="dataColumn">작성일</div>
    <div class="looksColumn">조회수</div>
    <div class="recommendColumn">추천</div>
  </div>
</div>
</div>
</a>
`;

channelBoardInformList.forEach((item) => {
  boardTableBox.innerHTML += `
<a href="${item["href"]}">
<div class="boardInformRow boardRow">
  <div class="divideLineOne">
    <div class="numberColumn">${item["number"]}</div>
    <div class="titleColumn">
      <dlv class="titleContent">
        <div class="textWrapper">
          <div class="blackBox ${item["blackBox"] == "" && "out"}">${item["blackBox"]}</div>
          <!-- <div class="previewIcon imgIcon"><img src="./imgs/copy-outline.svg" /></div> --!>
          <div class="text">
          ${item["title"]}
          </div>
        </div>
        <div class="commentCountBox">[${item["commentCount"]}]</div>
      </dlv>
    </div>
  </div>
  <div class="divideLineTwo ">
    <div class="writerColumn left_position">
      <div class="text">${item["writer"]}</div>
      <div class="checkIcon imgIcon ${item["isSub"] ? "blueCheckIcon" : "orangeCheckIcon"}" title="${item["isSub"] ? "부관리자" : "주관리자"}"><img src="./imgs/checkmark-outline.svg" /></div>
    </div>
    <div class="right_position">
      <div class="dataColumn">${item["created_at"]}</div>
      <div class="looksColumn">${item["looks"]}</div>
      <div class="recommendColumn">${item["recommendCount"]}</div>
    </div>
  </div>
</div>
</a>`;
})

let channelBoardInformList_concealed_count = 0;
channelBoardInformList_concealed.forEach((item) => {
  boardTableBox.innerHTML += `<a href="${item["href"]}" class="out"><div class="boardInformRow boardRow">
  <div class="divideLineOne">
    <div class="numberColumn">${item["number"]}</div>
    <div class="titleColumn">
      <dlv class="titleContent">
        <div class="textWrapper">
          <div class="blackBox ${item["blackBox"] == "" && "out"}">${item["blackBox"]}</div>
          <!-- <div class="previewIcon imgIcon"><img src="./imgs/copy-outline.svg" /></div> --!>
          <div class="text">
          ${item["title"]}
          </div>
        </div>
        <div class="commentCountBox">[${item["commentCount"]}]</div>
      </dlv>
    </div>
  </div>
  <div class="divideLineTwo">
    <div class="writerColumn left_position">
      <div class="text">${item["writer"]}</div>
      <div class="checkIcon imgIcon ${item["isSub"] || "orangeCheckIcon"} ${item["isSub"] && "blueCheckIcon"}" title="${item["isSub"] ? "" : "주관리자"} ${item["isSub"] ? "부관리자" : ""}"><img src="./imgs/checkmark-outline.svg" /></div>
    </div>
    <div class="right_position">
      <div class="dataColumn">${item["created_at"]}</div>
      <div class="looksColumn">${item["looks"]}</div>
      <div class="recommendColumn">${item["recommendCount"]}</div>
    </div>
  </div>
</div></a>`;
  channelBoardInformList_concealed_count++;
})

if (channelBoardInformList_concealed_count > 0) {
  boardTableBox.innerHTML += `<a>
<div class="boardInformStretchButton boardRow" id="boardInformStretchButton">
숨겨진 공지 펼치기(${channelBoardInformList_concealed_count}개) <div class="unfoldIcon imgIcon" title="공지"><img src="./imgs/archive.svg" /></div>
</div></a>`;
}

channelBoardList.forEach((item) => {
  boardTableBox.innerHTML += `
  <a href="/">
  <div class="boardRow">
    <div class="divideLineOne">
      <div class="numberColumn">${item["number"]}</div>
      <div class="titleColumn">
        <dlv class="titleContent">
          <div class="textWrapper">
            <div class="blackBox ${item["blackBox"] == "" && "out"}">${item["blackBox"]}</div>
            <!-- <div class="previewIcon imgIcon"><img src="./imgs/copy-outline.svg" /></div> --!>
            <div class="text">
            ${item["title"]}
            </div>
          </div>
          <div class="commentCountBox">[${item["commentCount"]}]</div>
        </dlv>
      </div>
    </div>
    <div class="divideLineTwo ">
      <div class="writerColumn left_position">
        <div class="text">${item["writer"]}</div>
        <div class="${item["isAdmin"] ? item["isSub"] || "orangeCheckIcon" : ""} ${item["isAdmin"] ? item["isSub"] && "blueCheckIcon" : ""} ${item["isAdmin"] && "checkIcon"} imgIcon" title="${item["isAdmin"] ? item["isSub"] || "주관리자" : ""} ${item["isAdmin"] ? item["isSub"] && "부관리자" : ""}
        ${item["isAdmin"] ? "" : "사용자"}">
        <img src="${item["isAdmin"] ? "./imgs/checkmark-outline.svg" : "./imgs/person.svg"}" /></div>
      </div>
      <div class="right_position">
        <div class="dataColumn">${item["created_at"]}</div>
        <div class="looksColumn">${item["looks"]}</div>
        <div class="recommendColumn">${item["recommendCount"]}</div>
      </div>
    </div>
  </div>
  </a>`;
});

// pageBoxList_insert

(() => {
  let count = 1;
  let temp = `<a href="/?page=${page}&category=${category}&channel=${channel}" class="selected">
      <div class="pageBox">${page}</div>
      </a>
      <a href="/?page=${page + 1}&category=${category}&channel=${channel}">
      <div class="pageBox">${page + 1}</div>
      </a>
      <a href="/?page=${page + 2}&category=${category}&channel=${channel}">
      <div class="pageBox">${page + 2}</div>
      </a>
      <a href="/?page=${page + 3}&category=${category}&channel=${channel}">
      <div class="pageBox">${page + 3}</div>
      </a>
      <a href="/?page=${page + 4}&category=${category}&channel=${channel}">
      <div class="pageBox">${page + 4}</div>
      </a>
      <a href="/?page=${page + 5}&category=${category}&channel=${channel}">
      <div class="pageBox">${page + 5}</div>
      </a>
      <a href="/?page=${page + 6}&category=${category}&channel=${channel}">
      <div class="pageBox">
        <div class="imgIcon"><img src="./imgs/chevron-forward-outline.svg" /></div>
      </div>
      </a>
      `;
  while (page - count > 0 || count == 4) {
    temp = `<a href="/?page=${page - count}&category=${category}&channel=${channel}">
        <div class="pageBox">${page - count}</div>
        </a>`.concat(temp);
    count++;
  };
  if (page - count > 1) {
    temp = `<a href="/?page=${page - count}&category=${category}&channel=${channel}">
        <div class="pageBox">  <div class="imgIcon"><img src="./imgs/chevron-back-outline.svg" /></div></div>
        </a>`.concat(temp);
  }
  document.getElementById("channelPageBoxList").innerHTML = temp;
})()

// <a href="/">
// <div class="pageBox">
//   <div class="writeIcon imgIcon"><img src="./imgs/chevron-forward-outline.svg" /></div>
// </div>
// </a>
// <a href="/">
// <div class="pageBox doubleIcon">
//   <div class="writeIcon imgIcon"><img src="./imgs/chevron-forward-outline.svg" /></div>
//   <div class="writeIcon imgIcon"><img src="./imgs/chevron-forward-outline.svg" /></div>
// </div>
// </a>

// quickGoDate_insert

const currentDate = new Date();

document.getElementById("quickGoDate").innerHTML = `
<input type="datetime-local" name="quickGoDate" class="quickSelectBox"
data-datetime="${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate.getDate()}T${currentDate.getHours()}:${currentDate.getMinutes()}" data-format="Y-m-dTH:i" data-localdate="max"
max="${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate.getDate()}T${currentDate.getHours()}:${currentDate.getMinutes()}">
<a href="/"><button type="button">시간으로 바로가기</button></a>`