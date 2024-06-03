let query;
let cookie = {};
(async () => {
  try {
    const url = new URL(window.location.href);
    query = url.searchParams;
  } catch (err) {
    console.error(err);
    query = undefined;
  }
})();
(async () => {
  try {
    if (window.document.cookie != "") {
      const temp = window.document.cookie.split(";").map((item) => item.trim());
      temp.forEach((item) => {
        const keyValue = item.split("=");
        cookie[keyValue[0]] = keyValue[1];
      });
    }
  } catch (err) {
    console.error(err);
    cookie = undefined;
  }
})();

// query.get(찾을 변수명) 혹은 query.getAll(찾을 변수명)으로 찾을 수 있다.