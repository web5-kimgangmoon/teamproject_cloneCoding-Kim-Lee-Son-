const categoryList = [
  "돌겠다",
  "왜 저따위로",
  "해놨냐",
  "상상했던",
  "그이상이다",
];
document.getElementById("categoryList").innerHTML += `
  <a href="/" class="selected">
    <div class="category">미치겠다진짜</div>
  </a>
  `;
categoryList.forEach((item) => {
  document.getElementById("categoryList").innerHTML += `
  <a href="/">
    <div class="category">${item}</div>
  </a>
  `;
});
