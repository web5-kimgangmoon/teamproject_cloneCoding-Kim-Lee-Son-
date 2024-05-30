const searchedChannelList = [["./imgs/Arcalive_logo.svg", "하아"], ["./imgs/Arcalive_logo.svg", "후아"]]

document.getElementById("top_search_button").innerHTML = `
<div class="searchIconBox">
    <div class="search-img"><img src="./imgs/searchImg.png" /></div>
    <input type="search" name="channelName" placeholder="찾기" autocomplete="off" id="top_search_input"/>
</div>
<div class="searchMiniBox">
  <div class="search-img"><img src="./imgs/searchImg.png" /></div>
  <span>검색</span>
</div>
<div class="channelSearchBox out" id="top_search_channelSearchBox">
  <div class="channelList loadingBox" id="top_search_channelSearchBox_loadingBox">
    <div class="loading">
      <div class="loadingWhite"></div>
    </div>
  </div>
  <div class="searchedChannelList" id="top_search_channelSearchBox_searchedChannelList">
  </div>
  <div class="channelSearchButtonLine" id="top_search_channelSearchBox_channelSearchButtonLine"></div>
  <div class="channelcloseButtonLine">
    <button type="button" id="channelSearchCloseButton">닫기</button>
  </div>
</div>`
// top_search_channelSearchBox_loadingBox

const top_search_channelSearchBox = document.getElementById("top_search_channelSearchBox");
const top_search_channelSearchBox_loadingBox = document.getElementById("top_search_channelSearchBox_loadingBox");
const top_search_channelSearchBox_searchedChannelList = document.getElementById("top_search_channelSearchBox_searchedChannelList");
const top_search_input = document.getElementById("top_search_input");
const top_search_channelSearchBox_channelSearchButtonLine = document.getElementById("top_search_channelSearchBox_channelSearchButtonLine");

searchedChannelList.forEach((item) => {
    top_search_channelSearchBox_searchedChannelList.innerHTML += `
<div class="channelList">
    <a href="/">
        <img class="logo" src="${item[0]}" />
        <span>${item[1]}</span>
        <img class="playImg" src="./imgs/playShape.png" />
    </a>
</div>`
})

top_search_input.onkeydown = (e) => {
    // e.preventDefault();
    top_userInfoBox.classList.add("out")
    top_primarychannel_channelBox.classList.add("out");
    top_subscribechannel_channelBox.classList.add("out");
    top_search_channelSearchBox.classList.remove("out");
    if (top_search_input.value != "") top_search_channelSearchBox_channelSearchButtonLine.innerHTML = `<a href="/${e.target.value}"><span>"${e.target.value}"</span>검색 결과 이동...</a>`
}
// top_search_input.onkeyup = (e) => {
//     // e.preventDefault();
//     // top_userInfoBox.classList.add("out")
//     // top_primarychannel_channelBox.classList.add("out");
//     // top_subscribechannel_channelBox.classList.add("out");
//     // top_search_channelSearchBox.classList.toggle("add");
//     if (top_search_input.value != "") top_search_channelSearchBox_channelSearchButtonLine.innerHTML = `<a href="/${e.target.value}"><span>"${e.target.value}"</span>검색 결과 이동...</a>`
// }


subTopSearchBox_input.onkeydown = (e) => {
    // e.preventDefault();
    top_userInfoBox.classList.add("out")
    top_primarychannel_channelBox.classList.add("out");
    top_subscribechannel_channelBox.classList.add("out");
    if (e.target.value != "") top_search_channelSearchBox_channelSearchButtonLine.innerHTML = `<a href = "/${e.target.value}"><span>"${e.target.value}"</span>검색 결과 이동...</a>`
}
