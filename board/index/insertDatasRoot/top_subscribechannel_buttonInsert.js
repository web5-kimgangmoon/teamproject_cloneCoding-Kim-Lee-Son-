const subscribechannelList = [["forExample", "예를 들면"], ["thisChannel", "이런 채널"], ["ofCourseAdmin", "물론 관리자 채널도!"]];


document.getElementById("top_subscribechannel_button").innerHTML = `
<div class="channelSelectorButton" title="구독 채널">
  <span>구독</span><span class="topchannel">&nbsp;채널</span>
  <div class="arrowButton"></div>
</div>
<div class="channelBox out" id="top_subscribechannel_channelBox">
  <div class="channelAreaLiner">
    <div class="channelList"><a href="/">구독 중인 채널</a></div>
  </div>
</div>
`;

const top_subscribechannel_channelBox = document.getElementById("top_subscribechannel_channelBox");

subscribechannelList.forEach((item, index) => {
    top_subscribechannel_channelBox.innerHTML += `<div class="channelList"><a href="/${item[0]}">${item[1]} 채널<span class="index_box">${index + 1}</span></a></div>`;
});

document.getElementById("top_subscribechannel_button").onclick = (e) => {
    e.preventDefault();
    top_userInfoBox.classList.add("out")
    top_primarychannel_channelBox.classList.add("out");
    top_subscribechannel_channelBox.classList.toggle("out");
}