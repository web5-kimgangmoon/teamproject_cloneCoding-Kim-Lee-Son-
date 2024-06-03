// search_function
const subTopSearchBox_input = document.getElementById("subTopSearchBox_input");
const subTopSearchBox = document.getElementById("subTopSearchBox");
const top_search_input = document.getElementById("top_search_input");
const top_search_channelSearchBox = document.getElementById(
  "top_search_channelSearchBox"
);

const top_search_channelSearchBox_channelSearchButtonLine =
  document.getElementById(
    "top_search_channelSearchBox_channelSearchButtonLine"
  );

top_search_input.onclick = (e) => {
  top_userInfoBox.classList.add("out");
  top_subscribechannel_channelBox.classList.add("out");
  top_notification_box.classList.add("out");
  top_primarychannel_channelBox.classList.add("out");
  top_search_channelSearchBox.classList.remove("out");
};
top_search_input.onkeydown = (e) => {
  top_userInfoBox.classList.add("out");
  top_subscribechannel_channelBox.classList.add("out");
  top_notification_box.classList.add("out");
  top_primarychannel_channelBox.classList.add("out");
  top_search_channelSearchBox.classList.remove("out");
  if (top_search_input.value != "")
    top_search_channelSearchBox_channelSearchButtonLine.innerHTML = `<a href="/${top_search_input.value}"><span>"${top_search_input.value}"</span>검색 결과 이동...</a>`;
  else top_search_channelSearchBox.classList.add("out");
};
subTopSearchBox_input.onclick = () => {
  top_userInfoBox.classList.add("out");
  top_subscribechannel_channelBox.classList.add("out");
  top_notification_box.classList.add("out");
  top_primarychannel_channelBox.classList.add("out");
  top_search_channelSearchBox.classList.remove("out");
};
subTopSearchBox_input.onkeydown = (e) => {
  top_userInfoBox.classList.add("out");
  top_subscribechannel_channelBox.classList.add("out");
  top_notification_box.classList.add("out");
  top_primarychannel_channelBox.classList.add("out");
  top_search_channelSearchBox.classList.remove("out");
  if (subTopSearchBox_input.value != "")
    top_search_channelSearchBox_channelSearchButtonLine.innerHTML = `<a href = "/${subTopSearchBox_input.value}"><span>"${subTopSearchBox_input.value}"</span>검색 결과 이동...</a>`;
  else top_search_channelSearchBox.classList.add("out");
};

document.getElementById("top_search_channelSearchCloseButton").onclick = () => {
  top_userInfoBox.classList.add("out");
  top_primarychannel_channelBox.classList.add("out");
  top_subscribechannel_channelBox.classList.add("out");
  top_search_channelSearchBox.classList.add("out");
};
document.getElementById("top_subTopSearchBox_button").onclick = () => {
  top_primarychannel_channelBox.classList.add("out");
  top_subscribechannel_channelBox.classList.add("out");
  subTopSearchBox.classList.toggle("out");
};

// subscribechannel_function

document.getElementById("top_subscribechannel_button").onclick = (e) => {
  e.preventDefault();
  top_userInfoBox.classList.add("out");
  top_notification_box.classList.add("out");
  top_primarychannel_channelBox.classList.add("out");
  top_subscribechannel_channelBox.classList.toggle("out");
};

// login_function

if (userExists) {
  document.getElementById("top_userInfoBoxButton").onclick = (e) => {
    e.preventDefault();
    top_subscribechannel_channelBox.classList.add("out");
    top_primarychannel_channelBox.classList.add("out");
    top_notification_box.classList.add("out");
    top_userInfoBox.classList.toggle("out");
  };
}

document.getElementById("top_userInfoBox_helpButton").onclick = (e) => {
  e.preventDefault();
  container.style.top = "-" + window.scrollY.toString();
  container.style.position = "fixed";
  top_userInfoBox.classList.add("out");
  shortCutHelpBox.classList.remove("out");
  curtain.classList.remove("out");
};

document.getElementById("shortCutHelpBox_closeButton").onclick = (e) => {
  e.preventDefault();
  const heightY = -Number(container.style.top.split("px")[0]);
  //   console.log(container.style.top);
  //   console.log(heightY);
  container.style.position = "static";
  container.style.top = 0;
  window.scrollTo(0, heightY);
  shortCutHelpBox.classList.add("out");
  curtain.classList.add("out");
};

document.getElementById("top_userInfoBox_logout_button").onclick = async (
  e
) => {
  e.preventDefault();
  //백엔드에 요청을 보내고, 리다이렉트가 필요합니다.
};

// notification_function

const top_notification_box = document.getElementById("top_notification_box");

document.getElementById("top_notification_button").onclick = (e) => {
  e.preventDefault();
  top_userInfoBox.classList.add("out");
  top_subscribechannel_channelBox.classList.add("out");
  top_primarychannel_channelBox.classList.add("out");
  top_notification_box.classList.toggle("out");
};

document.getElementById("top_notification_readAll_button").onclick = (e) => {
  e.preventDefault();
  top_notification_box_messages.childNodes.forEach((item) => {
    item.className = "newLink grey";
  });
};

// primarychannel_function

document.getElementById("top_primarychannel_button").onclick = (e) => {
  e.preventDefault();
  top_userInfoBox.classList.add("out");
  top_subscribechannel_channelBox.classList.add("out");
  top_notification_box.classList.add("out");
  top_primarychannel_channelBox.classList.toggle("out");
};
