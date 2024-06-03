(async () => {
    let username = "";
    let userEmail = "";
    let userExists = false;
    try {

        let data = (
            await axios({
                method: "post",
                url: `${reqHostPort}/u/userInfo`,
                data: { channel: "" },
                withCredentials: true,
            })
        ).data;

        if (data?.userinfo) username = data.userinfo.nick;
        if (data?.userinfo) userExists = true;
        if (data?.userinfo) userEmail = data.userinfo.email;
    } catch (err) {
        username = ""
        userExists = false;
        alert(err.response.data.error);
        window.location.replace(`${clientAddress}/?channel=${channel}`)
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
        `
        document.getElementById("withdrawButton").onclick = () => {
            axios({
                method: "delete",
                url: `${reqHostPort}/u/withdraw`,
                data: {
                    channel: channel
                },
                withCredentials: true
            }).then((res) => {
                alert("회원가입에 성공했습니다.")
                window.location.replace(`${clientAddress}/?channel=${channel}`)
            }).catch(err => {
                alert(err.response.data.error);
                window.location.replace(`${clientAddress}/?channel=${channel}`)
            })
        }
    }
})();