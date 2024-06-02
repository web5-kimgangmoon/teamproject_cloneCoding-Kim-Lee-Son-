// search_data

const searchedChannelList = [
  ["./../imgs/Arcalive_logo.svg", "하아"],
  ["./../imgs/Arcalive_logo.svg", "후아"],
];
// 이미지 경로, 채널이름

// subscribechannel_data

// 채널 리스트 받아오는 코드가 필요, 백엔드에 요청

const subscribechannelList = [
  ["forExample", "예를 들면"],
  ["thisChannel", "이런 채널"],
  ["ofCourseAdmin", "물론 관리자 채널도!"],
];
// 경로(전체), 채널명

// login_data

let username = "";
// username은 channel_data_insert, channelBoard에서도 사용한다.
let userPoint = 200;
let userExists = true;
const userIconHref = "http://localhost/login";

(async () => {
  try {
    const data = (
      await axios({
        method: "post",
        url: `${reqHostPort}/u/userInfo`,
        data: { channel: "" },
        withCredentials: true,
      })
    ).data.user;
    username = data;
  } catch (err) {
    if (err.request.status == 419) {
      userExists = false;
    }
  } finally {
  }
})();

// notification_data

const notificationMessages = [
  ["link3", "아아", "어쩐다"],
  ["link5", "큭큭", "선이 보이지 않아!"],
  ["link7", "하히후", "헤호"],
];

// 경로(전체), 작성자, 게시글 제목

// primarychannel_data

const primarychannelList = [
  ["forExample", "예를 들면"],
  ["thisChannel", "이런 채널"],
  ["ofCourseAdmin", "물론 관리자 채널도!"],
];
const userPrimaryRoot = "hahaha";

// 경로(전체), 채널명
