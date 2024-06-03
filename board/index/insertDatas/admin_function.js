const checkAdmin_channel = document.getElementById("checkAdmin_channel");
const paranoidRegen_english =
  /[가-힣ㅏ-ㅣㄱ-ㅎ0-9\!\@\#\$\%\|\^\&\*\(\)\-\=\\\+\_\.\/\?\,\<\>\;\:\'\"\[\{\}\]\`\~]/;
const paranoidRegen_number =
  /[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z\!\@\#\$\%\|\^\&\*\(\)\-\=\\\+\_\.\/\?\,\<\>\;\:\'\"\[\{\}\]\`\~]/;
const paranoidRegen_hangul =
  /[ㄱ-ㅎㅏ-ㅣa-zA-Z0-9\!\@\#\$\%\|\^\&\*\(\)\-\=\\\+\_\.\/\?\,\<\>\;\:\'\"\[\{\}\]\`\~]/;

document.forms["functionButtonOpenBox"].onclick = (e) => {
  e.preventDefault();
  if (e.target == document.getElementById("insertChannel_open"))
    document.getElementById("insertChannel").classList.toggle("out");
  if (e.target == document.getElementById("updateChannel_open"))
    document.getElementById("updateChannel").classList.toggle("out");
  if (e.target == document.getElementById("deleteChannel_open"))
    document.getElementById("deleteChannel").classList.toggle("out");
  if (e.target == document.getElementById("insertCategory_open"))
    document.getElementById("insertCategory").classList.toggle("out");
  if (e.target == document.getElementById("updateCategory_open"))
    document.getElementById("updateCategory").classList.toggle("out");
  if (e.target == document.getElementById("deleteCategory_open"))
    document.getElementById("deleteCategory").classList.toggle("out");
  if (e.target == document.getElementById("deleteUser_open"))
    document.getElementById("deleteUser").classList.toggle("out");
  if (e.target == document.getElementById("grantSubadmin_open"))
    document.getElementById("grantSubadmin").classList.toggle("out");
  if (e.target == document.getElementById("deleteSubadmin_open"))
    document.getElementById("deleteSubadmin").classList.toggle("out");
};

document.getElementById("insertChannel_submit").onclick = (e) => {
  e.preventDefault();
  if (
    checkAdmin_channel.value == "" ||
    checkAdmin_channel.value.search(paranoidRegen_english) != -1
  ) {
    alert("관리하시는 채널의 영문 이름을 입력해주세요!");
    return;
  }
  if (
    document.forms["insertChannel"].title.value == "" ||
    document.forms["insertChannel"].engTitle.value == ""
  ) {
    alert("채널명이나 채널의 영문명의 입력값이 비었습니다!");
    return;
  }
  if (
    document.forms["insertChannel"].title.value.search(paranoidRegen_hangul) !=
      -1 ||
    document.forms["insertChannel"].engTitle.value.search(
      paranoidRegen_english
    ) != -1
  ) {
    alert("잘못된 입력값을 넣으셨습니다!");
    return;
  }
  axios({
    method: "post",
    url: `${reqHostPort}/a/newChannel`,
    data: {
      channel: checkAdmin_channel.value,
      title: document.forms["insertChannel"].title.value,
      engTitle: document.forms["insertChannel"].engTitle.value,
      writePlaceholder: document.forms["insertChannel"].writePlaceholder.value,
      commentPlaceholder:
        document.forms["insertChannel"].commentPlaceholder.value,
      description: document.forms["insertChannel"].description.value,
    },
    withCredentials: true,
  })
    .then((res) => {
      alert("채널이 만들어졌습니다!");
      window.location.replace(clientAddress);
    })
    .catch((err) => {
      alert(err.response.data.error);
      window.location.replace(clientAddress);
    });
};

document.getElementById("updateChannel_submit").onclick = (e) => {
  e.preventDefault();
  if (
    checkAdmin_channel.value == "" ||
    checkAdmin_channel.value.search(paranoidRegen_english) != -1
  ) {
    alert("관리하시는 채널의 영문 이름을 입력해주세요!");
    return;
  }
  if (
    document.forms["updateChannel"].title.value == "" ||
    document.forms["updateChannel"].engTitle.value == ""
  ) {
    alert("채널명이나 채널의 영문명의 입력값이 비었습니다!");
    return;
  }
  if (
    document.forms["updateChannel"].title.value.search(paranoidRegen_hangul) !=
      -1 ||
    document.forms["updateChannel"].engTitle.value.search(
      paranoidRegen_english
    ) != -1
  ) {
    alert("잘못된 입력값을 넣으셨습니다!");
    return;
  }
  axios({
    method: "patch",
    url: `${reqHostPort}/a/modifyChannel`,
    data: {
      channel: checkAdmin_channel.value,
      title: document.forms["updateChannel"].title.value,
      engTitle: document.forms["updateChannel"].engTitle.value,
      writePlaceholder: document.forms["updateChannel"].writePlaceholder.value,
      commentPlaceholder:
        document.forms["updateChannel"].commentPlaceholder.value,
      description: document.forms["updateChannel"].description.value,
    },
    withCredentials: true,
  })
    .then((res) => {
      alert("채널이 수정됐습니다!");
      window.location.replace(clientAddress);
    })
    .catch((err) => {
      alert(err.response.data.error);
      window.location.replace(clientAddress);
    });
};

document.getElementById("deleteChannel_submit").onclick = (e) => {
  e.preventDefault();
  if (
    checkAdmin_channel.value == "" ||
    checkAdmin_channel.value.search(paranoidRegen_english) != -1
  ) {
    alert("관리하시는 채널의 영문 이름을 입력해주세요!");
    return;
  }
  axios({
    method: "delete",
    url: `${reqHostPort}/a/deleteChannel`,
    data: {
      channel: checkAdmin_channel.value,
    },
    withCredentials: true,
  })
    .then((res) => {
      alert("채널이 삭제됐습니다!");
      window.location.replace(clientAddress);
    })
    .catch((err) => {
      alert(err.response.data.error);

      window.location.replace(clientAddress);
    });
};

document.getElementById("insertCategory_submit").onclick = (e) => {
  e.preventDefault();
  if (
    checkAdmin_channel.value == "" ||
    checkAdmin_channel.value.search(paranoidRegen_english) != -1
  ) {
    alert("관리하시는 채널의 영문 이름을 입력해주세요!");
    return;
  }
  if (
    document.forms["insertCategory"].name.value == "" ||
    document.forms["insertCategory"].engTitle.value == ""
  ) {
    alert("카테고리명이나 카테고리의 영문명이 비었습니다!");
    return;
  }
  if (
    document.forms["insertCategory"].name.value.search(paranoidRegen_hangul) !=
      -1 ||
    document.forms["insertCategory"].engTitle.value.search(
      paranoidRegen_english
    ) != -1
  ) {
    alert("잘못된 입력값을 넣으셨습니다!");
    return;
  }
  axios({
    method: "post",
    url: `${reqHostPort}/a/newCategory`,
    data: {
      channel: checkAdmin_channel.value,
      name: document.forms["insertCategory"].name.value,
      engTitle: document.forms["insertCategory"].engTitle.value,
    },
    withCredentials: true,
  })
    .then((res) => {
      alert("카테고리가 등록됐습니다!");
      window.location.replace(clientAddress);
    })
    .catch((err) => {
      alert(err.response.data.error);

      window.location.replace(clientAddress);
    });
};

document.getElementById("updateCategory_submit").onclick = (e) => {
  e.preventDefault();
  if (
    checkAdmin_channel.value == "" ||
    checkAdmin_channel.value.search(paranoidRegen_english) != -1
  ) {
    alert("관리하시는 채널의 영문 이름을 입력해주세요!");
    return;
  }
  if (
    document.forms["updateCategory"].name.value == "" ||
    document.forms["updateCategory"].engTitle.value == ""
  ) {
    alert("카테고리명이나 카테고리의 영문명이 비었습니다!");
    return;
  }
  if (
    document.forms["updateCategory"].name.value.search(paranoidRegen_hangul) !=
      -1 ||
    document.forms["updateCategory"].category.value.search(
      paranoidRegen_english
    ) != -1
  ) {
    alert("잘못된 입력값을 넣으셨습니다!");
    return;
  }
  axios({
    method: "patch",
    url: `${reqHostPort}/a/modifyCategory`,
    data: {
      channel: checkAdmin_channel.value,
      name: document.forms["updateCategory"].name.value,
      engTitle: document.forms["updateCategory"].category.value,
    },
    withCredentials: true,
  })
    .then((res) => {
      alert("카테고리가 수정됐습니다!");
      window.location.replace(clientAddress);
    })
    .catch((err) => {
      alert(err.response.data.error);

      window.location.replace(clientAddress);
    });
};

document.getElementById("deleteCategory_submit").onclick = (e) => {
  e.preventDefault();
  if (
    checkAdmin_channel.value == "" ||
    checkAdmin_channel.value.search(paranoidRegen_english) != -1
  ) {
    alert("관리하시는 채널의 영문 이름을 입력해주세요!");
    return;
  }
  if (document.forms["deleteCategory"].category.value == "") {
    alert("카테고리의 영문명이 비었습니다!");
    return;
  }
  if (
    document.forms["deleteCategory"].category.value.search(
      paranoidRegen_english
    ) != -1
  ) {
    alert("잘못된 입력값을 넣으셨습니다!");
    return;
  }
  axios({
    method: "delete",
    url: `${reqHostPort}/a/deleteCategory`,
    data: {
      channel: checkAdmin_channel.value,
      category: document.forms["deleteCategory"].category.value,
    },
    withCredentials: true,
  })
    .then((res) => {
      alert("카테고리가 삭제됐습니다!");
      window.location.replace(clientAddress);
    })
    .catch((err) => {
      alert(err.response.data.error);

      window.location.replace(clientAddress);
    });
  //   window.location.replace(clientAddress);
};
document.getElementById("grantSubadmin_submit").onclick = (e) => {
  e.preventDefault();
  if (
    checkAdmin_channel.value == "" ||
    checkAdmin_channel.value.search(paranoidRegen_english) != -1
  ) {
    alert("관리하시는 채널의 영문 이름을 입력해주세요!");
    return;
  }
  if (document.forms["grantSubadmin"].nick.value == "") {
    alert("유저명이 비었습니다!");
    return;
  }
  axios({
    method: "post",
    url: `${reqHostPort}/a/newSubadmin`,
    data: {
      nick: document.forms["grantSubadmin"].nick.value,
    },
    withCredentials: true,
  })
    .then((res) => {
      alert("부관리자가 임명됐습니다!");
      window.location.replace(clientAddress);
    })
    .catch((err) => {
      alert(err.response.data.error);

      window.location.replace(clientAddress);
    });
};
document.getElementById("deleteSubadmin_submit").onclick = (e) => {
  e.preventDefault();
  if (
    checkAdmin_channel.value == "" ||
    checkAdmin_channel.value.search(paranoidRegen_english) != -1
  ) {
    alert("관리하시는 채널의 영문 이름을 입력해주세요!");
    return;
  }
  if (document.forms["deleteSubadmin"].nick.value == "") {
    alert("유저명이 비었습니다!");
    return;
  }
  axios({
    method: "delete",
    url: `${reqHostPort}/a/deleteSubadmin`,
    data: {
      nick: document.forms["deleteSubadmin"].nick.value,
    },
    withCredentials: true,
  })
    .then((res) => {
      alert("부관리자를 제명했습니다!");
      window.location.replace(clientAddress);
    })
    .catch((err) => {
      alert(err.response.data.error);

      window.location.replace(clientAddress);
    });
};
document.getElementById("deleteUser_submit").onclick = (e) => {
  e.preventDefault();
  if (
    checkAdmin_channel.value == "" ||
    checkAdmin_channel.value.search(paranoidRegen_english) != -1
  ) {
    alert("관리하시는 채널의 영문 이름을 입력해주세요!");
    return;
  }
  if (document.forms["deleteUser"].nick.value == "") {
    alert("유저명이 비었습니다!");
    return;
  }
  axios({
    method: "delete",
    url: `${reqHostPort}/a/deleteUser`,
    data: {
      nick: document.forms["deleteUser"].nick.value,
    },
    withCredentials: true,
  })
    .then((res) => {
      alert(`${document.forms["deleteUser"].nick.value}를 강제탈퇴시켰습니다.`);
      window.location.replace(clientAddress);
    })
    .catch((err) => {
      alert(err.response.data.error);

      window.location.replace(clientAddress);
    });
};
