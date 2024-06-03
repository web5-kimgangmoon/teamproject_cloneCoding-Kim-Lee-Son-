// issue 2. 페이지 폭을 마음대로 변경시켜줄 수 있는 기능이 있다.(bodyCenter, topCenter, footerCenter width 변경으로 해결)

// document.title로 제목 제어 가능(query문 이용하기);
// position:sticky로 해놓은 사이드의 top에 0.8rem에 상단바의 높이만큼 더해주자.
// document.getElementById("newChannel_icon").onchange = (e) => {
//   axios.pose("http")
// };
// document.getElementById("newChannel_icon").onchange = (e) => {
//   const formData = new FormData();
//   let data;
//   [...e.target.files].forEach((item) => {
//     formData.append("icon", item);
//   });
//   axios({
//     method: "post",
//     url: "http://localhost:3080/upload",
//     Headers: {
//       "Content-type": "multipart/form-data",
//     },
//     data: formData,
//     withCredentials: true,
//   }).then((res) => {
//     console.log(res.data.url);
//     // document.getElementsByClassName("informBox")[0].innerHTML = `<img src="${res.data.url}" />`;
//   });
// };
(async () => {
  await axios.post(
    "http://localhost:3001/u/login",
    {
      channel: "main",
      strid: "qwerasd",
      pw: "1q2w3e4r",
    },
    {
      withCredentials: true,
    }
  );
})();

document.getElementById("newChannel_open").onclick = async (e) => {
  e.preventDefault();
  try {
    const data = await axios({
      method: "post",
      url: `http://localhost:3001/u/userInfo`,
      data: { channel: "" },
      withCredentials: true,
    });
    console.log(data.data.userinfo);
  } catch (err) {
    console.log(err);
    if (err.request.status == 419) {
    }
  }
};