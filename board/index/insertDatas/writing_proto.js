(async () => {
  // channelInfo_data
  let channelName_writing = "dd";
  let channelHref_writing = "/dasd"; // 채널 기본 경로
  let adminName_writing = "dd";
  let channelDescription_writing = "dd.";
  let boardContent = "";
  let writingTitle = "";
  let writingUserInfo = {};
  // boardContent

  let boardWritingContent = {
    placeholder: "dsadsaads",
    categoryList: [
      { value: "dklsajd", name: "dkasj" },
      { value: "dklsajd", name: "정보" },
      { value: "dklsajd", name: "하이" },
      { value: "dklsajd", name: "dkasj" },
    ],
  };
  let editorInstance;
  if (boardId != "") {
    try {
      let data2 = (
        await axios({
          method: "post",
          url: `${reqHostPort}/u/userInfo`,
          data: { channel: "" },
          withCredentials: true,
        })
      ).data.userInfo;
      if (data2) writingUserInfo.username = data2.nick;
      if (data2) writingUserInfo.userExists = true;
    } catch (err) {
      writingUserInfo.username = "";
      writingUserInfo.userExists = false;
      writingUserInfo.isWriter = false;
    } finally {
      (async () => {
        try {
          const data = (
            await axios({
              method: "post",
              url: `${reqHostPort}/b/view`,
              data: {
                channel: channel,
                category: category,
              },
              params: {
                page: page,
                boardId: boardId,
              },
              withCredentials: true,
            })
          ).data;
          if (data.view.User.nick != writingUserInfo.username) {
            alert("작성자가 아닙니다!");
            window.location.replace(`${clientAddress}?channel=${channel}`);
            return;
          }
          for (let item of data.channel.ChannelAdmins) {
            if (item.superAdmin) adminName_writing = item.User.nick;
          }
          channelHref_writing = `${clientAddress}?channel=${channel}`;
          channelName_writing = data.channel.title;
          channelDescription_writing = data.channel.description;
          boardWritingContent = {
            placeholder: data.channel.writePlaceholder,
            categoryList: [],
          };
          for (let item of data.category) {
            boardWritingContent.categoryList.push({
              value: item.engTitle,
              name: item.name,
              selected: item.engTitle == category,
            });
          }
          boardContent = data.view.contents;
          writingTitle = data.view.title;
        } catch (err) {
        } finally {
          document.getElementById("channelInfo").innerHTML = `
        <div class="channelImg">
        <a href="/"><img src="./../imgs/gameImg.jpg" /></a>
        </div>
        <div class="channelInfo">
        <div class="channelPathNButtons">
          <div class="channelPath" title="${channelName_writing} 채널" id="channelInfo_channelTitle"><a href="${channelHref_writing}">${channelName_writing} 채널</a></div>
          <div class="channelButtons">
            <a href="/">
              <button>
                <div class="bookIcon imgIcon"><img src="./../imgs/book.svg" /></div><span>채널위키</span>
              </button>
            </a>
            <button>
              <div class="alarmIcon imgIcon"><img src="./../imgs/notifications-outline.svg" /></div>
              <span>알림</span>
            </button>
            <button>
              <div class="plusIcon imgIcon"><img src="./../imgs/add-outline.svg" /></div><span>구독</span>
            </button>
          </div>
        </div>
        <div class="channelDescription">
          <div class="channelBaseInfo">
            <div class="subscribeCount baseInfoBox">구독자 96154명</div>
            <div class="alarmCount baseInfoBox">알림수신 1897명</div>
            <div class="channelAdmin baseInfoBox" id="channelInfo_adminName"><a href="/">@${adminName_writing}</a>
              <div class="checkIcon imgIcon"><img src="./../imgs/checkmark-outline.svg" /></div>
            </div>
          </div>
          <div class="channelInfoText">${channelDescription_writing}</div>
        </div>
        </div>
        `;
          document.getElementById("writingPageTitle").value = writingTitle;
          const temp = document.createElement("select");
          temp.classList = "selectCategory";
          temp.name = "category";
          document.getElementById("categorySelectBox").appendChild(temp);
          boardWritingContent.categoryList.forEach((item) => {
            temp.innerHTML += `
  <option value="${item.value}" ${item.selected ? 'selected=""' : ""}>${item.name
              }</option>
`;
          });
          // 이미지는 포기하자. 구현하기엔 시간이 없다.
          (async () => {
            editorInstance = await ClassicEditor.create(
              document.getElementById("ckeditorBox"),
              {
                language: "ko",
                placeholder: boardWritingContent.placeholder,
                removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed"],
              }
            );

            editorInstance.setData(`<p>${boardContent}</p>`);
          })();
        }
        document.getElementById("boardWritingButton").onclick = (e) => {
          if (editorInstance.getData() == "") {
            alert("값을 입력해주세요!");
            return;
          }
          axios({
            method: "patch",
            url: `${reqHostPort}/b/modify`,
            data: {
              channel: channel,
              category: document
                .getElementById("categorySelectBox")
                .getElementsByClassName("selectCategory")[0].value,
              contents: editorInstance.getData(),
              title: document.getElementById("writingPageTitle").value,
            },
            params: {
              boardId,
            },
            withCredentials: true,
          })
            .then((res) => {
              alert("게시글을 수정했습니다!");
            })
            .catch((err) => {
              alert(err.response.data.err);
            })
            .finally(() => {
              window.location.replace(`${clientAddress}?channel=${channel}`);
            });
        };
      })();
    }
  } else {
    try {
      let data2 = (
        await axios({
          method: "post",
          url: `${reqHostPort}/u/userInfo`,
          data: { channel: "" },
          withCredentials: true,
        })
      ).data.userInfo;
      if (data2) writingUserInfo.username = data2.nick;
      if (data2) writingUserInfo.userExists = true;
    } catch (err) {
      writingUserInfo.username = "";
      writingUserInfo.userExists = false;
    } finally {
      (async () => {
        try {
          const data = (
            await axios({
              method: "post",
              url: `${reqHostPort}/b/`,
              data: {
                channel: channel,
                category: category,
              },
              params: {
                page: page,
              },
              withCredentials: true,
            })
          ).data;
          if (!writingUserInfo.userExists) {
            alert("비회원은 글작성이 불가능합니다!");
            window.location.replace(`${clientAddress}?channel=${channel}`);
            return;
          }
          for (let item of data.channel.ChannelAdmins) {
            if (item.superAdmin) adminName_writing = item.User.nick;
          }
          channelHref_writing = `${clientAddress}?channel=${channel}`;
          channelName_writing = data.channel.title;
          channelDescription_writing = data.channel.description;
          boardWritingContent = {
            placeholder: data.channel.writePlaceholder,
            categoryList: [],
          };
          for (let item of data.category) {
            boardWritingContent.categoryList.push({
              value: item.engTitle,
              name: item.name,
              selected: item.engTitle == category,
            });
          }
        } catch (err) {
        } finally {
          document.getElementById("channelInfo").innerHTML = `
          <div class="channelImg">
          <a href="/"><img src="./../imgs/gameImg.jpg" /></a>
          </div>
          <div class="channelInfo">
          <div class="channelPathNButtons">
            <div class="channelPath" title="${channelName_writing} 채널" id="channelInfo_channelTitle"><a href="${channelHref_writing}">${channelName_writing} 채널</a></div>
            <div class="channelButtons">
              <a href="/">
                <button>
                  <div class="bookIcon imgIcon"><img src="./../imgs/book.svg" /></div><span>채널위키</span>
                </button>
              </a>
              <button>
                <div class="alarmIcon imgIcon"><img src="./../imgs/notifications-outline.svg" /></div>
                <span>알림</span>
              </button>
              <button>
                <div class="plusIcon imgIcon"><img src="./../imgs/add-outline.svg" /></div><span>구독</span>
              </button>
            </div>
          </div>
          <div class="channelDescription">
            <div class="channelBaseInfo">
              <div class="subscribeCount baseInfoBox">구독자 96154명</div>
              <div class="alarmCount baseInfoBox">알림수신 1897명</div>
              <div class="channelAdmin baseInfoBox" id="channelInfo_adminName"><a href="/">@${adminName_writing}</a>
                <div class="checkIcon imgIcon"><img src="./../imgs/checkmark-outline.svg" /></div>
              </div>
            </div>
            <div class="channelInfoText">${channelDescription_writing}</div>
          </div>
          </div>
          `;

          const temp = document.createElement("select");
          temp.classList = "selectCategory";
          temp.name = "category";
          document.getElementById("categorySelectBox").appendChild(temp);
          boardWritingContent.categoryList.forEach((item) => {
            temp.innerHTML += `
    <option value="${item.value}" ${item.selected ? 'selected=""' : ""}>${item.name
              }</option>
  `;
          });
          // 이미지는 포기하자. 구현하기엔 시간이 없다.
          (async () => {
            editorInstance = await ClassicEditor.create(
              document.getElementById("ckeditorBox"),
              {
                language: "ko",
                placeholder: boardWritingContent.placeholder,
                removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed"],
              }
            );
          })();
          document.getElementById("boardWritingButton").onclick = (e) => {
            if (editorInstance.getData() == "") {
              alert("값을 입력해주세요!");
              return;
            }
            axios({
              method: "post",
              url: `${reqHostPort}/b/write`,
              data: {
                channel: channel,
                category: document
                  .getElementById("categorySelectBox")
                  .getElementsByClassName("selectCategory")[0].value,
                contents: editorInstance.getData(),
                title: document.getElementById("writingPageTitle").value,
              },
              params: {
                boardId,
              },
              withCredentials: true,
            })
              .then((res) => {
                alert("게시글을 추가했습니다!");
              })
              .catch((err) => {
                alert(err.response.data.error);
              })
              .finally(() => {
                window.location.replace(`${clientAddress}?channel=${channel}`);
              });
          };
        }
      })();
    }
  }
})();
