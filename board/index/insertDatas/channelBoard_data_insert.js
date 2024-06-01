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
  <!--<div class="channelImgWrapper">
  <img src="../imgs/gameImg.jpg" />
   채널 이미지는 채널 기본 이미지 크기 조정용
</div>  -->
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
  <button type="button" class="unrecommendButton" id="boardUnrecommendButton">
    <div class="textLine">비추!<span class="count"> ${
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

// commentBoardListBox_data_insert

const commentBoardListBox = document.getElementById("commentBoardListBox");

(() => {
  const idStack = [];
  commentList.forEach((item) => {
    const temp = document.createElement("div");
    temp.classList = "commentBoardBox";
    temp.innerHTML = `
  <div class="commentBoard">
    <div class="commentBoard_top">
      <div class="writerView left_line">
        <a href="${item.userInfoHref}">${item.writer}</a>
              <div class="${
                item["isAdmin"]
                  ? item["isSub"]
                    ? "blueCheckIcon"
                    : "orangeCheckIcon"
                  : ""
              } ${
      item["isAdmin"] ? "" : "greyCheckIcon"
    } checkIcon imgIcon" title="${
      item["isAdmin"] ? (item["isSub"] ? "부관리자" : "주관리자") : ""
    }
                ${item["isAdmin"] ? "" : "사용자"}">
                <img src="./../imgs/checkmark-outline.svg" /></div>
      </div>
      <div class="right_line">
        <div class="dateView etcBox">
          ${item["created_at"]}
        </div>
        <div class="reportButton etcBox"><a href="/">
            <div class="imgIcon">
              <img src="./../imgs/alertImg.png" />
            </div>
            신고
          </a></div>
        <div class="deleteButton etcBox ${
          boardContent["isWriter"] ? "" : "out"
        }" id="deleteButton${item.id}">
            <div class="imgIcon">
              <img src="./../imgs/trash.svg" />
            </div>
            삭제
          </div>
        <div class="updateButton etcBox ${
          boardContent["isWriter"] ? "" : "out"
        }" id="updateButton${item.id}">
          <div class="imgIcon">
            <img src="./../imgs/create-outline.svg" />
          </div>
          수정
        </div>
        <div class="replyButton etcBox ${
          userExists ? "" : "out"
        }" id="replyButton${item.id}">
          <div class="imgIcon">
            <img src="./../imgs/arrow-undo.svg" />
          </div>
          답글
        </div>
        <div class="alarmButton etcBox">
          <a href="/">
            <div class="imgIcon">
              <img src="./../imgs/notification-bell.png" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="commentBoard_content">
      <span class="remake_inform">${item["isUpdated"] ? "*수정됨" : ""}</span>${
      item["content"]
    }
    </div>
  </div>
  <div class="commentWritingBox commentUpdateBox out" id="commentUpdateBox${
    item.id
  }">
    <div class="commentWritingBox_top">
      <div class="commentWritingBox_leftLine">
        <div class="titleText">댓글 수정</div>
        <div class="writerInfoWrapper">
          <div class="writerInfo">
            <div class="imgIcon">
              <img src="./../imgs/testimg.png">
            </div>
            <span class="buttonText">${item.writer}</span>
          </div>
        </div>
      </div>
      <div class="commentWritingBox_rightLine">
        <button type="button" class="etcButton arcaCon">
          <div class="imgIcon">
            <img src="./../imgs/happy-outline.svg">
          </div>
          <span class="buttonText">아카콘</span>
        </button>
      </div>
    </div>
    <div class="commentWritingBox_content">
      <button type="button" class="commitButton" id="update_commitButton${
        item.id
      }">작성</button>
      <textarea class="commentInput" name="commentContent" id="update_commentContent${
        item.id
      }" maxlength="8000" placeholder="${
      boardContent.channelCommentPlaceHolder
    }"></textarea>
    </div>
  </div>
  <div class="replyCommentBoardListBox" id="replyCommentBoardListBox${item.id}">
    <div class="commentWritingBox commentReplyWritingBox out" id="commentReplyWritingBox${
      item.id
    }">
      <div class="commentWritingBox_top">
        <div class="commentWritingBox_leftLine">
          <div class="titleText">답글 작성</div>
          <div class="writerInfoWrapper">
            <div class="writerInfo">
              <div class="imgIcon">
                <img src="./../imgs/testimg.png">
              </div>
              <span class="buttonText">${username}</span>
            </div>
          </div>
        </div>
        <div class="commentWritingBox_rightLine">
          <button type="button" class="etcButton arcaCon">
            <div class="imgIcon">
              <img src="./../imgs/happy-outline.svg">
            </div>
            <span class="buttonText">아카콘</span>
          </button>
        </div>
      </div>
      <div class="commentWritingBox_content">
        <button type="button" class="commitButton" id="reply_commitButton${
          item.id
        }">작성</button>
        <textarea class="commentInput" id="reply_commentContent${
          item.id
        }" name="commentContent" maxlength="8000" placeholder="${
      boardContent.channelCommentPlaceHolder
    }"></textarea>
      </div>
    </div>
  </div>
  `;
    // temp.getElementsByClassName("updateButton")[0];
    // temp.getElementsByClassName("replyButton")[0];

    const idIndex = idStack.indexOf(item.replyId);
    if (idIndex != -1) {
      const temp2 = document.createElement("div");
      temp2.classList = "replyCommentBoardBox";
      temp2.innerHTML = `<div class="upIcon imgIcon">
      <img src="./../imgs/caret-up-outline.svg" />
    </div>`;
      temp2.appendChild(temp);
      document
        .getElementById(`replyCommentBoardListBox${idStack[idIndex]}`)
        .appendChild(temp2);
    } else {
      commentBoardListBox.append(temp);
    }
    idStack.push(item.id);
  });
})();

// commentBoardListBox.innerHTML += `
// <div class="pageBoxWrapper">
// <div class="pageBoxList boardCommentPage">
//   <a href="/">
//     <div class="pageBox">1</div>
//   </a>
//   <a href="/">
//     <div class="pageBox">2</div>
//   </a>
//   <a href="/">
//     <div class="pageBox">3</div>
//   </a>
// </div>
// </div>
// `
//구현 포기

commentBoardListBox.innerHTML += `
<div class="commentWritingBox basic ${userExists ? "" : "out"}">
<div class="commentWritingBox_top">
  <div class="commentWritingBox_leftLine">
    <div class="titleText">댓글 작성</div>
    <div class="writerInfoWrapper">
      <div class="writerInfo">
        <div class="imgIcon">
          <img src="./../imgs/testimg.png">
        </div>
        <span class="buttonText">${username}</span>
      </div>
    </div>
  </div>
  <div class="commentWritingBox_rightLine">
    <button type="button" class="etcButton voiceComment">
      <div class="imgIcon">
        <img src="./../imgs/mic-sharp.svg">
      </div>
      <span class="buttonText">음성댓글</span>
    </button>
    <button type="button" class="etcButton arcaCon">
      <div class="imgIcon">
        <img src="./../imgs/happy-outline.svg">
      </div>
      <span class="buttonText">아카콘</span>
    </button>
  </div>
</div>
<div class="commentWritingBox_content">
  <button type="button" class="commitButton" id="basic_commentCommitButton">작성</button>
  <textarea class="commentInput" name="commentContent" maxlength="8000" placeholder="${
    boardContent.channelCommentPlaceHolder
  }" id="basic_commentContent"></textarea>
</div>
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
