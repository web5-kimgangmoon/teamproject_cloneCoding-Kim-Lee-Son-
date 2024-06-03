(async () => {
  let username = "";
  let userEmail = "";
  let userExists = false;
  try {
    let data = (
      await axios({
        method: "post",
        url: `${reqHostPort}/u/userInfo`,
        data: { channel: "main" },
        withCredentials: true,
      })
    ).data;

    if (data.userinfo.userinfo[0]) username = data.userinfo.userinfo[0].nick;
    if (data.userinfo.userinfo[0]) userExists = true;
    if (data.userinfo.userinfo[0]) userEmail = data.userinfo.userinfo[0].email;
  } catch (err) {
    username = "";
    userExists = false;
    alert(err.response.data.error);
    window.location.replace(`${clientAddress}/?channel=${channel}`);
  } finally {
    document.getElementById("userInfoBox").innerHTML = `
        <div class="bodyCenterContent" style="display:flex; align-items:center;
        flex-direction:column">
        <div>
        유저 닉네임 : ${username}
        </div>
        <div>
        유저 이메일 : ${userEmail}
        </div>
        <div>
        <button type="button" id="withdrawButton">회원탈퇴</button>
        </div>
        </div>
        `;
    document.getElementById("withdrawButton").onclick = () => {
      axios({
        method: "delete",
        url: `${reqHostPort}/u/withdraw`,
        data: {
          channel: channel,
        },
        withCredentials: true,
      })
        .then((res) => {
          alert("회원가입에 성공했습니다.");
          window.location.replace(`${clientAddress}/?channel=${channel}`);
        })
        .catch((err) => {
          alert(err.response.data.error);
          window.location.replace(`${clientAddress}/?channel=${channel}`);
        });
    };
  }
})();
