const categoryList = [
  "ㅇㅇ",
  "ㄴㅁㄴ",
  "ㅂㅂ",
  "ㅈㅈ",
  "ㄷㄷ",
];


categoryListBox.innerHTML += `
  <a href="/" class="selected">
    <div class="category">ㅇㅇ</div>
  </a>
  `;
categoryList.forEach((item) => {
  document.getElementById("categoryList").innerHTML += `
  <a href="/">
    <div class="category">${item}</div>
  </a>
  `;
});
