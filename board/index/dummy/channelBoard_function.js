// boardBox_function

document.getElementById("commentBoardListBox").onclick = (e) => {
  if (e.target.id.search(/updateButton/) == 0) {
    document
      .getElementById(`commentUpdateBox${e.target.id.split("updateButton")[1]}`)
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
    // aixos({
    //   method:"delete",
    //   url:`http://localhost:3080/b/delete?boardId`,
    //   data:{

    //   },
    //   params:{
    //     channel
    //   }
    // })
    console.log(e.target.id.split("deleteButton")[1]);
  }

  if (e.target.id.search(/update_commitButton/) == 0) {
    console.log(
      document.getElementById(
        `update_commentContent${e.target.id.split("update_commitButton")[1]}`
      ).value
    );
  }
  if (e.target.id.search(/reply_commitButton/) == 0) {
    console.log(
      document.getElementById(
        `reply_commentContent${e.target.id.split("reply_commitButton")[1]}`
      ).value
    );
  }
  // document.getElementsByClassName("updateButton")[0].classList = "out";
};

// commentBoardListBox_boardRecommendButton_function

document.getElementById("boardRecommendButton").onclick = (e) => {
  e.preventDefault();
  console.log("1");
};
document.getElementById("boardUnrecommendButton").onclick = (e) => {
  e.preventDefault();
  console.log("2");
};

// basic_commentCommitButton_function

document.getElementById("basic_commentCommitButton").onclick = (e) => {
  console.log(document.getElementById("basic_commentContent").value);
};
