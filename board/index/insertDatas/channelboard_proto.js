(async () => {
  // boardContentBox_data_get
  let writingPagePath = `${clientAddress}/writing?channel=${channel}`;
  let boardContent = {
    blackBox: "",
    title: "ss",
    writer: "dd",
    isAdmin: false,
    isSub: false,
    recommend: "123",
    unrecommend: "456",
    commentCount: "23",
    looks: "1234",
    createdAt: "2024-05-31 11:30:25",
    boardHref: "/edasdsad",
    content: "dksaljdlsajdlkasj",
    isWriter: false,
    deleteHref: "dsds", // 버튼을 만들어야함
    updateHref: "dsad", // 경로 설정 필요
    subscribeHref: "fdf", //필요X
    channelCommentPlaceHolder: "daskjdlkasjdklsajd",
    username: "", // 로그인한 유저의 이름
    userExists: true, //로그인 유저 존재
  };

  // commentBoardListBox_data_get

  let commentList = [
    {
      id: 1,
      replyId: null,
      writer: "dsad",
      userInfoHref: "dasd",
      isAdmin: true,
      isSub: false,
      created_at: "2032-32-34 12:40:10",
      isUpdated: false,
      content: "djashdkjsahd",
    },
    {
      id: 4,
      replyId: 1,
      writer: "dsadasdzx",
      userInfoHref: "dasdxzc",
      isAdmin: false,
      isSub: true,
      created_at: "2032-32-34 12:40:10",
      isUpdated: true,
      content: "djashdkjsahsadsadzxd",
    },
    {
      id: 3,
      replyId: 1,
      writer: "dsad",
      userInfoHref: "dasdsadsad",
      isAdmin: true,
      isSub: true,
      created_at: "2032-32-34 12:40:10",
      isUpdated: false,
      content: "djashdkjsahd",
    },
    {
      id: 5,
      replyId: null,
      writer: "dsad",
      userInfoHref: "dasd",
      isAdmin: true,
      isSub: false,
      created_at: "2032-32-34 12:40:10",
      isUpdated: true,
      content: "djashdkjsahd",
    },
    {
      id: 7,
      replyId: 4,
      writer: "dsad",
      userInfoHref: "dasd",
      isAdmin: true,
      isSub: false,
      created_at: "2032-32-34 12:40:10",
      isUpdated: false,
      content: "djashdkjsahd",
    },
  ];
  try {
    let data2 = (
      await axios({
        method: "post",
        url: `${reqHostPort}/u/userInfo`,
        data: { channel: "main" },
        withCredentials: true,
      })
    ).data;
    if (data2.userinfo.userinfo[0])
      boardContent.username = data2.userinfo.userinfo[0].nick;
    if (data2.userinfo.userinfo[0]) boardContent.userExists = true;
    else {
      boardContent.username = "";
      boardContent.userExists = false;
      boardContent.isWriter = false;
    }
  } catch (err) {
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
        if (data.view.User.nick == boardContent.username) {
          boardContent.isWriter = true;
        } else {
          boardContent.isWriter = false;
        }
        boardContent.title = data.view.title;
        boardContent.writer = data.view.User.nick;
        for (let item of data.channel.ChannelAdmins) {
          if (data.view.User.id == item.id) {
            boardContent.isSub = item.superAdmin ? false : true;
            boardContent.isAdmin = true;
          }
        }
        boardContent.recommend = data.view.likeCount;
        boardContent.unrecommend = data.view.dislikeCount;
        boardContent.looks = data.view.viewPoint;
        boardContent.content = data.view.contents;
        boardContent.channelCommentPlaceHolder =
          data.channel.commentPlaceholder;
        let date = new Date(data.view.createdAt);
        boardContent.boardHref = `${clientAddress}/board?boardId=${data.view.id}&channel=${data.channel.engTitle}&category=${data.view.Category.engTitle}&page=${page}`;
        boardContent.createdAt = `${date.getFullYear()}.${
          date.getMonth() + 1
        }.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        boardContent.updateHref = `${clientAddress}/writing?boardId=${data.view.id}&channel=${data.channel.engTitle}&category=${data.view.Category.engTitle}`;
        boardContent.commentCount = data.view.Comments.length;
        // 테스트용
        // boardContent.isWriter = true;
        // boardContent.userExists = false;
        // boardContent.username = "asdf";
        commentList = [];
        for (let item of data.view.Comments) {
          date = new Date(item.createdAt);

          commentList.push({
            id: item.id,
            replyId: item.recommentId,
            writer: item.User.nick,
            content: item.contents,
            isAdmin: false,
            isSub: false,
            isUpdated: item.createdAt != item.updatedAt,
            created_at: `${date.getFullYear()}.${
              date.getMonth() + 1
            }.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            isWriter: boardContent.username == item.User.nick,
          });
        }
      } catch (err) {
      } finally {
        // boardContentBox_data_insert
        document.getElementById("boardContentBox").innerHTML = `
          <div class="writerFunctionBox ${
            boardContent["isWriter"] ? "" : "out"
          }">
          <a id="boardDeleteButton">
          <button class="writerFunctionButton first">
          <div class="imgIcon"><img src="./../imgs/trash.svg"></img></div>삭제
          </button>
          </a>
          <a href="${boardContent.updateHref}">
          <button class="writerFunctionButton">
          <div class="imgIcon"><img src="./../imgs/create-outline.svg"></img></div>수정
          </button>
          </a>
          <a href="${boardContent.subscribeHref}">
          <button class="writerFunctionButton">
          <div class="imgIcon"><img src="./../imgs/notification-bell.png"></img></div>
          </button>
          </a>
          </div>
          <div class="title">
            <div class="titleContent"><span class="${
              boardContent.blackBox ? "blackBox" : ""
            }">${boardContent.blackBox}</span>
              ${boardContent.title}
            </div>
            <div class="titleEtc">
              <div class="writerBox left_line">
                <a href="${boardContent.userInfoHref}/">
                  <span>${boardContent.writer}</span></a>
                  <div class="${
                    boardContent["isAdmin"]
                      ? boardContent["isSub"]
                        ? "blueCheckIcon"
                        : "orangeCheckIcon"
                      : ""
                  } ${
          boardContent["isAdmin"] ? "" : "greyCheckIcon"
        } checkIcon imgIcon" title="${
          boardContent["isAdmin"]
            ? boardContent["isSub"]
              ? "부관리자"
              : "주관리자"
            : ""
        }
                    ${boardContent["isAdmin"] ? "" : "사용자"}">
                    <img src="./../imgs/checkmark-outline.svg" /></div>
                <div class="userProfile imgIcon">
                  <img src="./../imgs/gameImg.jpg">
                </div>
              </div>
              <div class="right_line">
                <div class="viewBox recommendView"><span class="type">추천</span><span class="count">${
                  boardContent.recommend
                }</span></div>
                <div class="viewBox unrecommendView"><span class="type">비추천</span><span class="count">${
                  boardContent.unrecommend
                }</span></div>
                <div class="viewBox commentView"><span class="type">댓글</span><span class="count">${
                  boardContent.commentCount
                }</span></div>
                <div class="viewBox looksView"><span class="type">조회수</span><span class="count">${
                  boardContent.looks
                }</span></div>
                <div class="viewBox dateView"><span class="type">작성일</span><span class="count">${
                  boardContent.createdAt
                }</span></div>
              </div>
            </div>
          </div>
          <div class="linkSite"><a href="${
            boardContent.boardHref
          }"><span class="sharingLink">${boardContent.boardHref}</span>
              <div class="sharingIcon imgIcon">
                <img src="./../imgs/share-social-sharp.svg">
              </div>
            </a></div>
            <!--<div class="channelImgWrapper">
            <img src="../imgs/gameImg.jpg" />
             채널 이미지는 채널 기본 이미지 크기 조정용
          </div>  -->
          <div class="boardContent">
          ${boardContent.content}
            <!-- 어차피 다 된 상태로 들어올것(건들지 말자) -->
          </div>
          <!-- js에서 처리해줘야하는 목록 -->
          <div class="recommendButtonLine">
            <button type="button" class="recommendButton" id="boardRecommendButton">
              <div class="textLine">추천!<span class="count"> ${
                boardContent.recommend
              }</span></div>
              <small class="imgLine"><span>(</span>
                <div class="imgIcon"><img src="../imgs/help-outline.svg"></div><span class="recommendCount">0</span><span>)</span>
              </small>
            </button>
            <button type="button" class="unrecommendButton" id="boardUnrecommendButton">
              <div class="textLine">비추!<span class="count"> ${
                boardContent.unrecommend
              }</span></div>
              <small class="imgLine">(<div class="imgIcon"><img src="../imgs/help-outline.svg"></div><span class="recommendCount">0</span>)
              </small>
            </button>
          </div>`;

        // commentContainer_insert

        document.getElementById("commentContainer").innerHTML = `
          <div class="board_buttonList">
          <button type="button">
            <div class="imgIcon"><img src="./../imgs/bookmark.png"></img></div>스크랩
          </button>
          <button type="button" title="공유">
            <div class="imgIcon"><img src="./../imgs/arrow-redo.svg"></img></div>공유
          </button>
          <a href="/">
            <button type="button" class="redBackground" title="신고">
              <div class="imgIcon"><img src="./../imgs/notification-bell.png"></div>신고
            </button>
          </a>
          </div>
          <div class="commentInfo">
          <div class="left_line">
            <div class="imgIcon"><img src="./../imgs/chatbubbles-sharp.svg" /></div>
            <span class="text">댓글</span>
            <span class="count">${boardContent.commentCount}</span>
          </div>
          <div class="right_line" id="commentButtonLine_Board_writing">
          </div>
          </div>
          <div class="commentBoardListBox" id="commentBoardListBox">
          </div>`;

        // commentBoardListBox_data_insert

        const commentBoardListBox = document.getElementById(
          "commentBoardListBox"
        );

        (() => {
          const idStack = [];
          commentList.forEach((item) => {
            const temp = document.createElement("div");
            temp.classList = "commentBoardBox";
            temp.innerHTML = `
            <div class="commentBoard">
              <div class="commentBoard_top">
                <div class="writerView left_line">
                  <a href="${item.userInfoHref}">${item.writer}</a>
                        <div class="${
                          item["isAdmin"]
                            ? item["isSub"]
                              ? "blueCheckIcon"
                              : "orangeCheckIcon"
                            : ""
                        } ${
              item["isAdmin"] ? "" : "greyCheckIcon"
            } checkIcon imgIcon" title="${
              item["isAdmin"] ? (item["isSub"] ? "부관리자" : "주관리자") : ""
            }
                          ${item["isAdmin"] ? "" : "사용자"}">
                          <img src="./../imgs/checkmark-outline.svg" /></div>
                </div>
                <div class="right_line">
                  <div class="dateView etcBox">
                    ${item["created_at"]}
                  </div>
                  <div class="reportButton etcBox"><a href="/">
                      <div class="imgIcon">
                        <img src="./../imgs/alertImg.png" />
                      </div>
                      신고
                    </a></div>
                  <div class="deleteButton etcBox ${
                    item["isWriter"] ? "" : "out"
                  }" id="deleteButton${item.id}">
                      <div class="imgIcon">
                        <img src="./../imgs/trash.svg" />
                      </div>
                      삭제
                    </div>
                  <div class="updateButton etcBox ${
                    item["isWriter"] ? "" : "out"
                  }" id="updateButton${item.id}">
                    <div class="imgIcon">
                      <img src="./../imgs/create-outline.svg" />
                    </div>
                    수정
                  </div>
                  <div class="replyButton etcBox ${
                    boardContent.userExists ? "" : "out"
                  }" id="replyButton${item.id}">
                    <div class="imgIcon">
                      <img src="./../imgs/arrow-undo.svg" />
                    </div>
                    답글
                  </div>
                  <div class="alarmButton etcBox">
                    <a href="/">
                      <div class="imgIcon">
                        <img src="./../imgs/notification-bell.png" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="commentBoard_content">
                <span class="remake_inform">${
                  item["isUpdated"] ? "*수정됨" : ""
                }</span>${item["content"]}
              </div>
            </div>
            <div class="commentWritingBox commentUpdateBox out" id="commentUpdateBox${
              item.id
            }">
              <div class="commentWritingBox_top">
                <div class="commentWritingBox_leftLine">
                  <div class="titleText">댓글 수정</div>
                  <div class="writerInfoWrapper">
                    <div class="writerInfo">
                      <div class="imgIcon">
                        <img src="./../imgs/testimg.png">
                      </div>
                      <span class="buttonText">${item.writer}</span>
                    </div>
                  </div>
                </div>
                <div class="commentWritingBox_rightLine">
                  <button type="button" class="etcButton arcaCon">
                    <div class="imgIcon">
                      <img src="./../imgs/happy-outline.svg">
                    </div>
                    <span class="buttonText">아카콘</span>
                  </button>
                </div>
              </div>
              <div class="commentWritingBox_content">
                <button type="button" class="commitButton" id="update_commitButton${
                  item.id
                }">작성</button>
                <textarea class="commentInput" name="commentContent" id="update_commentContent${
                  item.id
                }" maxlength="8000" placeholder="${
              boardContent.channelCommentPlaceHolder
            }"></textarea>
              </div>
            </div>
            <div class="replyCommentBoardListBox" id="replyCommentBoardListBox${
              item.id
            }">
              <div class="commentWritingBox commentReplyWritingBox out" id="commentReplyWritingBox${
                item.id
              }">
                <div class="commentWritingBox_top">
                  <div class="commentWritingBox_leftLine">
                    <div class="titleText">답글 작성</div>
                    <div class="writerInfoWrapper">
                      <div class="writerInfo">
                        <div class="imgIcon">
                          <img src="./../imgs/testimg.png">
                        </div>
                        <span class="buttonText">${boardContent.username}</span>
                      </div>
                    </div>
                  </div>
                  <div class="commentWritingBox_rightLine">
                    <button type="button" class="etcButton arcaCon">
                      <div class="imgIcon">
                        <img src="./../imgs/happy-outline.svg">
                      </div>
                      <span class="buttonText">아카콘</span>
                    </button>
                  </div>
                </div>
                <div class="commentWritingBox_content">
                  <button type="button" class="commitButton" id="reply_commitButton${
                    item.id
                  }">작성</button>
                  <textarea class="commentInput" id="reply_commentContent${
                    item.id
                  }" name="commentContent" maxlength="8000" placeholder="${
              boardContent.channelCommentPlaceHolder
            }"></textarea>
                </div>
              </div>
            </div>
            `;
            // temp.getElementsByClassName("updateButton")[0];
            // temp.getElementsByClassName("replyButton")[0];

            const idIndex = idStack.indexOf(item.replyId);
            if (idIndex != -1) {
              const temp2 = document.createElement("div");
              temp2.classList = "replyCommentBoardBox";
              temp2.innerHTML = `<div class="upIcon imgIcon">
                <img src="./../imgs/caret-up-outline.svg" />
              </div>`;
              temp2.appendChild(temp);
              document
                .getElementById(`replyCommentBoardListBox${idStack[idIndex]}`)
                .appendChild(temp2);
            } else {
              commentBoardListBox.append(temp);
            }
            idStack.push(item.id);
          });
        })();

        // commentBoardListBox.innerHTML += `
        // <div class="pageBoxWrapper">
        // <div class="pageBoxList boardCommentPage">
        //   <a href="/">
        //     <div class="pageBox">1</div>
        //   </a>
        //   <a href="/">
        //     <div class="pageBox">2</div>
        //   </a>
        //   <a href="/">
        //     <div class="pageBox">3</div>
        //   </a>
        // </div>
        // </div>
        // `
        //구현 포기

        commentBoardListBox.innerHTML += `
          <div class="commentWritingBox basic ${
            boardContent.userExists ? "" : "out"
          }">
          <div class="commentWritingBox_top">
            <div class="commentWritingBox_leftLine">
              <div class="titleText">댓글 작성</div>
              <div class="writerInfoWrapper">
                <div class="writerInfo">
                  <div class="imgIcon">
                    <img src="./../imgs/testimg.png">
                  </div>
                  <span class="buttonText">${boardContent.username}</span>
                </div>
              </div>
            </div>
            <div class="commentWritingBox_rightLine">
              <button type="button" class="etcButton voiceComment">
                <div class="imgIcon">
                  <img src="./../imgs/mic-sharp.svg">
                </div>
                <span class="buttonText">음성댓글</span>
              </button>
              <button type="button" class="etcButton arcaCon">
                <div class="imgIcon">
                  <img src="./../imgs/happy-outline.svg">
                </div>
                <span class="buttonText">아카콘</span>
              </button>
            </div>
          </div>
          <div class="commentWritingBox_content">
            <button type="button" class="commitButton" id="basic_commentCommitButton">작성</button>
            <textarea class="commentInput" name="commentContent" maxlength="8000" placeholder="${
              boardContent.channelCommentPlaceHolder
            }" id="basic_commentContent"></textarea>
          </div>
          </div>`;

        // commentButtonLine_Board_writing_insert

        document.getElementById(
          "commentButtonLine_Board_writing"
        ).innerHTML = `                <a href="${writingPagePath}" title="글쓰기">
            <button type="button">
              <div class="writeIcon imgIcon"><img src="./../imgs/create-outline.svg" /></div><span>글쓰기</span>
            </button>
            </a>
            `;

        // boardBox_function

        document.getElementById("commentBoardListBox").onclick = async (e) => {
          try {
            if (e.target.id.search(/updateButton/) == 0) {
              document
                .getElementById(
                  `commentUpdateBox${e.target.id.split("updateButton")[1]}`
                )
                .classList.toggle("out");
            }
            if (e.target.id.search(/replyButton/) == 0) {
              document
                .getElementById(
                  `commentReplyWritingBox${e.target.id.split("replyButton")[1]}`
                )
                .classList.toggle("out");
            }
            if (e.target.id.search(/deleteButton/) == 0) {
              const data = await axios({
                method: "delete",
                url: `${reqHostPort}/b/view/delete`,
                data: {
                  channel: channel,
                },
                params: {
                  commeentId: Number(e.target.id.split("deleteButton")[1]),
                },
              });
              console.log(data);
              alert("댓글을 삭제했습니다!");
              window.location.replace(window.location.href);
            }
            if (e.target.id.search(/update_commitButton/) == 0) {
              await axios({
                method: "patch",
                url: `${reqHostPort}/b/view/modify`,
                data: {
                  contents: document.getElementById(
                    `update_commentContent${
                      e.target.id.split("update_commitButton")[1]
                    }`
                  ).value,
                },
                params: {
                  commeentId: Number(
                    e.target.id.split("update_commitButton")[1]
                  ),
                },
              });
              alert("댓글을 수정했습니다!");
              window.location.replace(window.location.href);
            }
            if (e.target.id.search(/reply_commitButton/) == 0) {
              await axios({
                method: "post",
                url: `${reqHostPort}/b/view/add`,
                data: {
                  contents: document.getElementById(
                    `reply_commentContent${
                      e.target.id.split("reply_commitButton")[1]
                    }`
                  ).value,
                },
                params: {
                  boardId: boardId,
                  commentId: e.target.id.split("reply_commitButton")[1],
                },
              });
              alert("답글을 작성했습니다!");
              window.location.replace(window.location.href);
            }
          } catch (err) {
            alert(err.response.data.error);
            window.location.replace(window.location.href);
          }
          // document.getElementsByClassName("updateButton")[0].classList = "out";
        };

        // commentBoardListBox_boardRecommendButton_function

        document.getElementById("boardRecommendButton").onclick = (e) => {
          e.preventDefault();
          axios({
            method: "post",
            url: `${reqHostPort}/b/view/like`,
            params: {
              boardId: boardId,
            },
          })
            .then((res) => {
              alert("추천을 완료했습니다!");
            })
            .catch((err) => {
              alert(err.response.data.error);
            })
            .finally(() => {
              window.location.replace(window.location.href);
            });
        };
        document.getElementById("boardUnrecommendButton").onclick = (e) => {
          e.preventDefault();
          axios({
            method: "post",
            url: `${reqHostPort}/b/view/dislike`,
            params: {
              boardId: boardId,
            },
          })
            .then((res) => {
              alert("비추천을 완료했습니다!");
            })
            .catch((err) => {
              alert(err.response.data.error);
            })
            .finally(() => {
              window.location.replace(window.location.href);
            });
        };

        // basic_commentCommitButton_function

        document.getElementById("basic_commentCommitButton").onclick = (e) => {
          e.preventDefault();
          axios({
            method: "post",
            url: `${reqHostPort}/b/view/add`,
            data: {
              contents: document.getElementById("basic_commentContent").value,
            },
            params: {
              boardId: boardId,
            },
          })
            .then(() => {
              alert("댓글을 작성했습니다!");
            })
            .catch((err) => {
              alert(err.response.data.error);
            })
            .finally(() => {
              window.location.replace(window.location.href);
            });
        };
        document.getElementById("boardDeleteButton").onclick = (e) => {
          console.log("e");
          axios({
            method: "delete",
            url: `${reqHostPort}/b/delete`,
            data: {
              channel: channel,
            },
            params: {
              boardId: boardId,
            },
          })
            .then(() => {
              alert("댓글을 작성했습니다!");
            })
            .catch((err) => {
              alert(err.response.data.error);
            })
            .finally(() => {
              window.location.replace(window.location.href);
            });
        };
      }
    })();
  }
})();
