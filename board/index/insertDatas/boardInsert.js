const boardTableBox = document.getElementById("boardTableBox");
boardTableBox.innerHTML = `
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
`;

function boardInformInsert({
  number,
  blackBox,
  title,
  commentCount,
  writer,
  created_at,
  looks,
  recommendCount,
}) {
  boardTableBox.innerHTML += `
  <a href="/">
  <div class="boardInformRow boardRow">
    <div class="divideLineOne">
      <div class="numberColumn">${number}</div>
      <div class="titleColumn">
        <dlv class="titleContent">
          <div class="textWrapper">
            <div class="blackBox">${blackBox}</div>
            <div class="previewIcon imgIcon"><img src="./../../imgs/copy-outline.svg" /></div>
            <div class="text">
            ${title}
            </div>
          </div>
          <div class="commentCountBox">[${commentCount}]</div>
        </dlv>
      </div>
    </div>
    <div class="divideLineTwo ">
      <div class="writerColumn left_position">
        <div class="text">${writer}</div>
        <div class="checkIcon imgIcon" title="주황색"><img src="./../../imgs/checkmark-outline.svg" /></div>
      </div>
      <div class="right_position">
        <div class="dataColumn">${created_at}</div>
        <div class="looksColumn">${looks}</div>
        <div class="recommendColumn">${recommendCount}</div>
      </div>
    </div>
  </div>
  </a>`;
}

function normalBoardInsert({
  number,
  blackBox,
  title,
  commentCount,
  writer,
  created_at,
  looks,
  recommendCount,
}) {
  boardTableBox.innerHTML += `
  <a href="/">
  <div class="boardRow">
    <div class="divideLineOne">
      <div class="numberColumn">${number}</div>
      <div class="titleColumn">
        <dlv class="titleContent">
          <div class="textWrapper">
            <div class="blackBox">${blackBox}</div>
            <div class="previewIcon imgIcon"><img src="./../../imgs/copy-outline.svg" /></div>
            <div class="text">
            ${title}
            </div>
          </div>
          <div class="commentCountBox">[${commentCount}]</div>
        </dlv>
      </div>
    </div>
    <div class="divideLineTwo ">
      <div class="writerColumn left_position">
        <div class="text">${writer}</div>
        <div class="checkIcon imgIcon" title="주황색"><img src="./../../imgs/checkmark-outline.svg" /></div>
      </div>
      <div class="right_position">
        <div class="dataColumn">${created_at}</div>
        <div class="looksColumn">${looks}</div>
        <div class="recommendColumn">${recommendCount}</div>
      </div>
    </div>
  </div>
  </a>`;
}

function boardStretchButtonInsert(concealInformCount) {
  boardTableBox += `
  <div class="boardInformStretchButton boardRow">
  숨겨진 공지 펼치기(${concealInformCount}개) <div class="unfoldIcon imgIcon" title="공지"><img src="./../../imgs/archive.svg" /></div>
  </div>`;
}

boardInformInsert({
  number: "1",
  blackBox: "도와줘",
  title: "진심 신경쓰기 싫은데",
  commentCount: "34",
  writer: "살려줘",
  created_at: "2024-05-30",
  looks: "324231",
  recommendCount: "402",
});
