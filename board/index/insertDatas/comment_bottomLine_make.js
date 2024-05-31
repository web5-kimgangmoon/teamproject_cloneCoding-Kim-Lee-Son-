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
<div class="commentWritingBox basic">
<div class="commentWritingBox_top">
  <div class="commentWritingBox_leftLine">
    <div class="titleText">댓글 작성</div>
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
  <button type="button" class="commitButton">작성</button>
  <textarea class="commentInput" name="commentContent" maxlength="8000" placeholder="ㅇㅇㅇㅇㅇ"></textarea>
</div>
</div>`;
