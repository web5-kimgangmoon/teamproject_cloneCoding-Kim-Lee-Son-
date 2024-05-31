// boardContentBox_data_insert
document.getElementById("boardContentBox").innerHTML = `
<div class="writerFunctionBox ${boardContent["isWriter"] ? "" : "out"}">
<a href="${boardContent.deleteHref}">
<button class="writerFunctionButton first">
<div class="imgIcon"><img src="./../imgs/trash.svg"></img></div>삭제
</button>
</a>
<a href="${boardContent.updateHref}">
<button class="writerFunctionButton">
<div class="imgIcon"><img src="./../imgs/create-outline.svg"></img></div>수정
</button>
</a>
<a href="${boardContent.subscribeHref}">
<button class="writerFunctionButton">
<div class="imgIcon"><img src="./../imgs/notification-bell.png"></img></div>
</button>
</a>
</div>
<div class="title">
  <div class="titleContent"><span class="${
    boardContent.blackBox ? "blackBox" : ""
  }">${boardContent.blackBox}</span>
    ${boardContent.title}
  </div>
  <div class="titleEtc">
    <div class="writerBox left_line">
      <a href="${boardContent.userInfoHref}/">
        <span>${boardContent.writer}</span></a>
        <div class="${
          boardContent["isAdmin"]
            ? boardContent["isSub"]
              ? "blueCheckIcon"
              : "orangeCheckIcon"
            : ""
        } ${
  boardContent["isAdmin"] ? "" : "greyCheckIcon"
} checkIcon imgIcon" title="${
  boardContent["isAdmin"]
    ? boardContent["isSub"]
      ? "부관리자"
      : "주관리자"
    : ""
}
          ${boardContent["isAdmin"] ? "" : "사용자"}">
          <img src="./../imgs/checkmark-outline.svg" /></div>
      <div class="userProfile imgIcon">
        <img src="./../imgs/gameImg.jpg">
      </div>
    </div>
    <div class="right_line">
      <div class="viewBox recommendView"><span class="type">추천</span><span class="count">${
        boardContent.recommend
      }</span></div>
      <div class="viewBox unrecommendView"><span class="type">비추천</span><span class="count">${
        boardContent.unrecommend
      }</span></div>
      <div class="viewBox commentView"><span class="type">댓글</span><span class="count">${
        boardContent.commentCount
      }</span></div>
      <div class="viewBox looksView"><span class="type">조회수</span><span class="count">${
        boardContent.looks
      }</span></div>
      <div class="viewBox dateView"><span class="type">작성일</span><span class="count">${
        boardContent.createdAt
      }</span></div>
    </div>
  </div>
</div>
<div class="linkSite"><a href="${
  boardContent.boardHref
}"><span class="sharingLink">${boardContent.boardHref}</span>
    <div class="sharingIcon imgIcon">
      <img src="./../imgs/share-social-sharp.svg">
    </div>
  </a></div>
<div class="channelImgWrapper">
  <img src="../imgs/gameImg.jpg" />
  <!-- 채널 이미지는 채널 기본 이미지 크기 조정용 -->
</div>
<div class="boardContent">
${boardContent.content}
  <!-- 어차피 다 된 상태로 들어올것(건들지 말자) -->
</div>
<!-- js에서 처리해줘야하는 목록 -->
<div class="recommendButtonLine">
  <button type="button" class="recommendButton" id="boardRecommendButton">
    <div class="textLine">추천!<span class="count"> ${
      boardContent.recommend
    }</span></div>
    <small class="imgLine"><span>(</span>
      <div class="imgIcon"><img src="../imgs/help-outline.svg"></div><span class="recommendCount">0</span><span>)</span>
    </small>
  </button>
  <button type="button" class="unrecommendButton">
    <div class="textLine">비추!<span class="count" id="boardUnrecommendButton"> ${
      boardContent.unrecommend
    }</span></div>
    <small class="imgLine">(<div class="imgIcon"><img src="../imgs/help-outline.svg"></div><span class="recommendCount">0</span>)
    </small>
  </button>
</div>`;

// commentContainer_insert

document.getElementById("commentContainer").innerHTML = `
<div class="board_buttonList">
<button type="button">
  <div class="imgIcon"><img src="./../imgs/bookmark.png"></img></div>스크랩
</button>
<button type="button" title="공유">
  <div class="imgIcon"><img src="./../imgs/arrow-redo.svg"></img></div>공유
</button>
<a href="/">
  <button type="button" class="redBackground" title="신고">
    <div class="imgIcon"><img src="./../imgs/notification-bell.png"></div>신고
  </button>
</a>
</div>
<div class="commentInfo">
<div class="left_line">
  <div class="imgIcon"><img src="./../imgs/chatbubbles-sharp.svg" /></div>
  <span class="text">댓글</span>
  <span class="count">${boardContent.commentCount}</span>
</div>
<div class="right_line" id="commentButtonLine_Board_writing">
</div>
</div>
<div class="commentBoardListBox" id="commentBoardListBox">
</div>`;

// commentButtonLine_Board_writing_insert

document.getElementById(
  "commentButtonLine_Board_writing"
).innerHTML = `                <a href="${writingPagePath}" title="글쓰기">
  <button type="button">
    <div class="writeIcon imgIcon"><img src="./../imgs/create-outline.svg" /></div><span>글쓰기</span>
  </button>
  </a>
  `;
