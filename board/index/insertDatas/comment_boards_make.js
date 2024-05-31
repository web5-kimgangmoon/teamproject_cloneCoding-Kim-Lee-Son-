const commentBoardListBox = document.getElementById("commentBoardListBox");

const commentList = [
  { id: 1, replyId: 2 },
  { id: 3, replyId: 1 },
  { id: 5, replyId: 6 },
];
const commentListObjectArr = [];
const idStack = [];
// commentBoardListBox.innerHTML =;

commentList.forEach((item, index) => {
  const temp = document.createElement("div");
  temp.classList = "commentBoardBox";
  temp.innerHTML = `
  <div class="commentBoardBox">
  <div class="commentBoard">
    <div class="commentBoard_top">
      <div class="writerView left_line">
        <a href="/">ㅇㅇ</a>
        <div class="checkIcon orangeCheckIcon imgIcon">
          <img src="./../imgs/checkmark-outline.svg" />
        </div>
        <div class="imgIcon">
          <img src="./../imgs/gameImg.jpg" />
        </div>
      </div>
      <div class="right_line">
        <div class="dateView etcBox">
          2024-05-27 18:59:02
        </div>
        <div class="reportButton etcBox"><a href="/">
            <div class="imgIcon">
              <img src="./../imgs/alertImg.png" />
            </div>
            신고
          </a></div>
        <div class="deleteButton etcBox" id="deleteButton${item.id}"><a href="/">
            <div class="imgIcon">
              <img src="./../imgs/trash.svg" />
            </div>
            삭제
          </a></div>
        <div class="updateButton etcBox" id="updateButton${item.id}">
          <div class="imgIcon">
            <img src="./../imgs/create-outline.svg" />
          </div>
          수정
        </div>
        <div class="replyButton etcBox replyButton${item.id}">
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
      <span class="remake_inform">*수정됨</span>ssssasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    </div>
  </div>
  <div class="commentWritingBox commentUpdateBox out" id="commentUpdateBox${item.id}">
    <div class="commentWritingBox_top">
      <div class="commentWritingBox_leftLine">
        <div class="titleText">댓글 수정</div>
        <div class="writerInfoWrapper">
          <div class="writerInfo">
            <div class="imgIcon">
              <img src="./../imgs/testimg.png">
            </div>
            <span class="buttonText">하히후헤호</span>
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
      <button type="button" class="commitButton">작성</button>
      <textarea class="commentInput" name="commentContent" maxlength="8000" placeholder="ㅇㅇㅇㅇㅇ"></textarea>
    </div>
  </div>
  <div class="replyCommentBoardListBox">
    <div class="commentWritingBox commentReplyWritingBox out commentReplyWritingBox${item.id}">
      <div class="commentWritingBox_top">
        <div class="commentWritingBox_leftLine">
          <div class="titleText">답글 작성</div>
          <div class="writerInfoWrapper">
            <div class="writerInfo">
              <div class="imgIcon">
                <img src="./../imgs/testimg.png">
              </div>
              <span class="buttonText">하히후헤호</span>
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
        <button type="button" class="commitButton">작성</button>
        <textarea class="commentInput" name="commentContent" maxlength="8000" placeholder="ㅇㅇㅇㅇㅇ"></textarea>
      </div>
    </div>
  </div>
  </div>
  `;
  commentBoardListBox.append(temp);
  // temp.onclick = (e) => {
  //   // getElementsByClassName("deleteButton")[0]
  //   console.log("dasd");
  //   return false;
  // };
  // temp.getElementsByClassName("updateButton")[0];
  // temp.getElementsByClassName("replyButton")[0];

  const idIndex = idStack.indexOf(item.replyId);
  if (idIndex != -1) {
    console.log(idIndex);
  }
  commentListObjectArr.push({
    comment: temp,
    id: item["id"],
    index,
  });
  idStack.push(item.id);
  if (item.replyId) {
    item;
  }
});
commentListObjectArr.forEach((item) => {
  commentBoardListBox.append(item["comment"]);
});
document.getElementById("commentBoardListBox").onclick = (e) => {
  if (e.target.id.search(/updateButton/) == 0) {
    document
      .getElementById(`commentUpdateBox${e.target.id.split("updateButton")[1]}`)
      .classList.toggle("out");
  }
  console.log();
  // document.getElementsByClassName("updateButton")[0].classList = "out";
};
