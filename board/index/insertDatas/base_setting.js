const container = document.getElementById("container");
const shortCutHelpBox = document.getElementById("shortCutHelpBox");
const viewConfigBox = document.getElementById("viewConfigBox");
const curtain = document.getElementById("curtain");
const reqHostPort = "http://127.0.0.1:3001";
const clientAddress = "http://localhost";

const bottom_convenience_buttons = document.getElementById(
  "bottom_convenience_buttons"
);

shortCutHelpBox.innerHTML = `
<div class="boxTop">
<div class="title">단축키 도움말</div>
<div class="x_shape" id="shortCutHelpBox_closeButton">×</div>
</div>
<div class="shortCutContent">
<div class="siteShortCutSet">
  <div class="shortCutSetTitle">사이트에서</div>
  <ul>
    <li>
      <div class="shortCut"><span class="shortCutWord">1</span>
        <span>&nbsp;~</span><span class="shortCutWord">0</span>
      </div>
      <div class="description">구독 채널 바로가기</div>
    </li>
    <li>
      <div class="shortCut"><span class="shortCutWord">R</span></div>
      <div class="description">새로고침</div>
    </li>
    <li>
      <div class="shortCut"><span class="shortCutWord">?</span></div>
      <div class="description">단축키 도움말</div>
    </li>
    <li>
      <div class="shortCut"><span class="shortCutWord">T</span></div>
      <div class="description">맨 위로</div>
    </li>
    <li>
      <div class="shortCut"><span class="shortCutWord">W</span></div>
      <div class="description">글 작성</div>
    </li>
    <li>
      <div class="shortCut"><span class="shortCutWord">B</span></div>
      <div class="description">채널 이동</div>
    </li>
  </ul>
</div>
<div class="boardShortCutSet">
  <div class="shortCutSetTitle">게시글에서</div>
  <ul>
    <li>
      <div class="shortCut"><span class="shortCutWord">A</span></div>
      <div class="description">이전 글</div>
    </li>
    <li>
      <div class="shortCut"><span class="shortCutWord">S</span></div>
      <div class="description">다음 글</div>
    </li>
    <li>
      <div class="shortCut"><span class="shortCutWord">C</span></div>
      <div class="description">댓글</div>
    </li>
  </ul>
</div>
</div>`;

viewConfigBox.innerHTML = `
<div class="boxTop">
  <div class="title">표시 설정</div>
  <div class="x_shape" id="viewConfigBox_closeButton">×</div>
</div>
<div class="typeSelect" id="viewConfigBox_typeSelect">
  <span class="">일반</span>
  <span class="selected">컨텐츠</span>
</div>
<div class="configTemplate">
  <div class="general out" id="viewConfigBox_general">
    <div class="optionLine">
      <div class="optionBox">
        <label class="optionName" for="userConfig_language"><span>언어<sup><i> α+</i></sup></span></label>
        <div class="optionSelect">
          <select name="userConfig_language" id="userConfig_language">
            <option>(자동 인식)</option>
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </div>
    <div class="optionLine">
      <div class="optionBox">
        <label class="optionName" for="userConfig_font"><span>글꼴</span></label>
        <div class="optionSelect">
          <select name="userConfig_font" id="userConfig_font">
            <option>자동</option>
            <option value="browser">브라우저 기본</option>
            <option value="nanum_barun_gothic">나눔바른고딕</option>
            <option value="nanum_gothic">나눔고딕</option>
            <option value="noto_sans_kr">Noto Sans KR</option>
            <option value="apple_sd_gothic_neo">Apple SD Gothic Neo</option>
            <option value="pretendard">Pretendard</option>
          </select>
        </div>
      </div>
      <div class="optionBox">
        <label class="optionName" for="userConfig_font_size"><span>글자 크기</span></label>
        <div class="optionSelect">
          <select name="userConfig_font_size" id="userConfig_font_size">
            <option value="browser">브라우저 기본</option>
            <option value="biggest">가장 크게</option>
            <option value="big">크게</option>
            <option value="medium">보통</option>
            <option value="small">작게</option>
            <option value="smallest">가장 작게</option>
          </select>
        </div>
      </div>
    </div>
    <div class="optionLine">
      <div class="optionBox">
        <label class="optionName" for="userConfig_backgroundColor"><span>배경</span></label>
        <div class="optionSelect">
          <select name="userConfig_backgroundColor" id="userConfig_backgroundColor">
            <option value="browser">브라우저 기본</option>
            <option value="light">밝게</option>
            <option value="dark">어둡게</option>
          </select>
        </div>
      </div>
      <div class="optionBox">
        <label class="optionName" for="userConfig_backgroundColor_contrast"><span>어두운 배경 색상</span></label>
        <div class="optionSelect">
          <select name="userConfig_backgroundColor_contrast" id="userConfig_backgroundColor_contrast">
            <option value="dart">어둡게</option>
            <option value="dark_black">완전 어둡게</option>
          </select>
        </div>
      </div>
    </div>
    <div class="optionLine">
      <div class="optionBox">
        <label class="optionName" for="userConfig_pageWidth"><span>페이지 폭</span></label>
        <div class="optionSelect">
          <select name="userConfig_pageWidth" id="userConfig_pageWidth">
            <option>고정안함</option>
            <option value="1100px">1100px</option>
            <option value="1200px">1200px</option>
            <option value="1300px">1300px</option>
            <option value="1500px">1500px</option>
            <option value="1600px">1600px</option>
          </select>
        </div>
      </div>
      <div class="optionBox">
        <label class="optionName" for="userConfig_topLocation"><span>상단바 위치</span></label>
        <div class="optionSelect">
          <select name="userConfig_topLocation" id="userConfig_topLocation">
            <option value="fixed">고정</option>
            <option value="scroll">스크롤</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="contents" id="viewConfigBox_contents">
    <div class="optionLine">
      <div class="optionBox">
        <label class="optionName" for="userConfig_arcacon_alarm"><span>알림 아카콘 표시</span></label>
        <div class="optionSelect">
          <select name="userConfig_arcacon_alarm" id="userConfig_arcacon_alarm">
            <option value="use">사용</option>
            <option value="unuse">사용 안 함</option>
          </select>
        </div>
      </div>
      <div class="optionBox">
        <label class="optionName" for="userConfig_favicon_alarm"><span>브라우저 아이콘 알림</span></label>
        <div class="optionSelect">
          <select name="userConfig_favicon_alarm" id="userConfig_favicon_alarm">
            <option value="use">사용</option>
            <option value="unuse">사용 안 함</option>
          </select>
        </div>
      </div>
    </div>
    <div class="optionLine">
      <div class="optionBox">
        <label class="optionName" for="userConfig_img_preview"><span>이미지 미리보기</span></label>
        <div class="optionSelect">
          <select name="userConfig_arcacon_alarm" id="userConfig_img_preview">
            <option value="use">사용</option>
            <option value="unuse">사용 안 함</option>
          </select>
        </div>
      </div>
      <div class="optionBox">
        <label class="optionName" for="userConfig_channelImg_view"><span>채널 기본 이미지 표시</span></label>
        <div class="optionSelect">
          <select name="userConfig_channelImg_view" id="userConfig_channelImg_view">
            <option value="use">사용</option>
            <option value="unuse">사용 안 함</option>
          </select>
        </div>
      </div>
    </div>
    <div class="optionLine">
      <div class="optionBox">
        <label class="optionName" for="userConfig_sideContents"><span>사이드바 컨텐츠</span></label>
        <div class="optionSelect">
          <select name="userConfig_sideContents" id="userConfig_sideContents">
            <option value="random">랜덤</option>
            <option value="humor_dontLook">유머채널 안보기</option>
            <option value="hotDeal_dontLook">핫딜 안보기</option>
          </select>
        </div>
      </div>
      <div class="optionBox">
        <label class="optionName" for="userConfig_arcacon_autoplayBlock"><span>아카콘 자동 재생 방지</span></label>
        <div class="optionSelect">
          <select name="userConfig_backgroundColor_arcacon_autoplayBlock" id="userConfig_arcacon_autoplayBlock">
            <option value="use">사용</option>
            <option value="unuse">사용 안 함</option>
          </select>
        </div>
      </div>
    </div>
    <div class="optionLine">
      <div class="optionBox">
        <label class="optionName" for="userConfig_sensitiveContents_view"><span>민감한 컨텐츠 표시</span></label>
        <div class="optionSelect">
          <select name="userConfig_sensitiveContents_view" id="userConfig_sensitiveContents_view">
            <option value="auto">자동</option>
            <option value="view">표시</option>
            <option value="dontView">안 보기</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>`;

const viewConfigBox_typeSelect = document.getElementById(
  "viewConfigBox_typeSelect"
);
const viewConfigBox_contents = document.getElementById(
  "viewConfigBox_contents"
);
const viewConfigBox_general = document.getElementById("viewConfigBox_general");

bottom_convenience_buttons.innerHTML = `
<div class="icon" title="" id="bottom_convenience_button_setting"><img class="iconImg" src="./../imgs/settings-sharp.svg" /></div>
<div class="icon" title="맨 위로 이동" id="bottom_convenience_button_goTop"><img class="iconImg" src="./../imgs/caret-up-outline.svg" /></div>
<div class="icon" title="맨 아래로 이동" id="bottom_convenience_button_goBottom"><img class="iconImg" src="./../imgs/caret-down-outline.svg" /></div>
`;

document.getElementById("bottom_convenience_button_setting").onclick = (e) => {
  e.preventDefault();
  container.style.top = "-" + window.scrollY.toString() + "px";
  container.style.position = "fixed";
  viewConfigBox.classList.remove("out");
  curtain.classList.remove("out");
};

document.getElementById("viewConfigBox_closeButton").onclick = (e) => {
  e.preventDefault();

  const heightY = -Number(container.style.top.split("px")[0]);
  container.style.position = "static";
  container.style.top = 0;
  window.scrollTo(0, heightY);
  viewConfigBox.classList.add("out");
  curtain.classList.add("out");

  //   console.log(container.style.top);
  //   console.log(heightY);
};

document.getElementById("viewConfigBox_typeSelect").onclick = (e) => {
  if (e.target.innerText == "일반") {
    [...viewConfigBox_typeSelect.childNodes].forEach(
      (item) => (item.className = "")
    );
    e.target.className = "selected";
    viewConfigBox_contents.classList.add("out");
    viewConfigBox_general.classList.remove("out");
  } else if (e.target.innerText == "컨텐츠") {
    [...viewConfigBox_typeSelect.childNodes].forEach(
      (item) => (item.className = "")
    );
    e.target.className = "selected";
    viewConfigBox_general.classList.add("out");
    viewConfigBox_contents.classList.remove("out");
  }
};
document.getElementById("bottom_convenience_button_goTop").onclick = (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
};
document.getElementById("bottom_convenience_button_goBottom").onclick = (e) => {
  e.preventDefault();
  window.scrollTo(0, container.scrollHeight);
};
