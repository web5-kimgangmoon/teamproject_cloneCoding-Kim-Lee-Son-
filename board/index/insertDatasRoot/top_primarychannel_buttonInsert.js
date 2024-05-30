const primarychannelList = [["forExample", "예를 들면"], ["thisChannel", "이런 채널"], ["ofCourseAdmin", "물론 관리자 채널도!"]];
const userPrimaryRoot = "hahaha";

document.getElementById("top_primarychannel_button").innerHTML = `
        <div class="channelSelectorButton" title="채널">
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

const top_primarychannel_channelBox = document.getElementById("top_primarychannel_channelBox");

const top_primary_channelList = document.createElement("div")
top_primary_channelList.className = "channelAreaLiner";
top_primarychannel_channelBox.appendChild(top_primary_channelList);

subscribechannelList.forEach((item) => {
  top_primary_channelList.innerHTML += `<div class="channelList"><a href="/${item[0]}">${item[1]}</a></div>`;
});
top_primarychannel_channelBox.innerHTML += `<div class="channelList"><a href="/${userPrimaryRoot}">더보기</a></div>`;

document.getElementById("top_primarychannel_button").onclick = (e) => {
  e.preventDefault();
  top_userInfoBox.classList.add("out")
  top_subscribechannel_channelBox.classList.add("out");
  top_primarychannel_channelBox.classList.toggle("out");
}