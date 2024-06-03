// recentChannel_data

const recentChannelList = [
  ["/dksa", "아아아"],
  ["/dksa", "아아아"],
  ["/dksa", "아아아"],
];
// 최근 방문 채널(구현 힘듬, 수정하게 되면 나중에)

// categoryList_data

const categoryList = [
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", true],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
  ["/link", "ㅇㅇ", false],
];
//카테고리 경로, 카테고리명, 선택된 상태

// channelInfo_data

const channelName = "dd";
const channelHref = "/dasd"; //채널의 indexPage
const adminName = "dd";
const channelDescription = "dd.";

// channelBoardList_data

// username, userExists는 top_data에서 받아온다.
//${temp.getFullYear()}.${temp.getMonth() + 1}.${temp.getDate()}
const channelBoardInformList = [
  {
    href: "/dsadk",
    number: "1",
    blackBox: "",
    title: "ㅁㅁ",
    commentCount: "3",
    writer: "하하",
    created_at: `212`,
    looks: "43535",
    recommendCount: "1234",
    isSub: false,
  },
];

const channelBoardInformList_concealed = [
  {
    href: "/dsadk",
    number: "1",
    blackBox: "ㅇㅇ",
    title: "ㅁㅁ",
    commentCount: "3",
    writer: "하하",
    created_at: "212",
    looks: "43535",
    recommendCount: "1234",
    isSub: true,
  },
];

const channelBoardList = [
  {
    href: "/dsadk",
    number: "1",
    blackBox: "ㅇㅇ",
    title: "ㅁㅁ",
    commentCount: "3",
    writer: "하하",
    created_at: "2132",
    looks: "43535",
    recommendCount: "1234",
    isSub: true,
    isAdmin: false,
  },
];

// channelPage_data

// axios({
//     method: "get",
//     path: `http://localhost:3080/b?page=${page}`,
//     body: {
//         channel,
//         category
//     },
//     withCredentials: true
// });

// writing_Button
const writingPagePath = "/";
