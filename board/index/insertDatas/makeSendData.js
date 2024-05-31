let page = 1;
let category = "";
if (query.get("page") != null && !isNaN(query.get("page"))) {
  page = Number(query.get("page"));
}
let channel = "main";
if (query.get("channel") != null) {
  Channel = query.get("channel");
}
if (query.get("category") != null) {
  category = query.get("category");
}

const writingPagePath = "/";
