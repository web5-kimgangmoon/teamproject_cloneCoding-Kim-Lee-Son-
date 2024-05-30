const categoryList = ["ㅇㅇ", "ㄴㅁㄴ", "ㅂㅂ", "ㅈㅈ", "ㄷㄷ"];
const categoryListBox = document.getElementById("categoryList");

categoryListBox.innerHTML += `
  <a href="/" class="selected">
    <div class="category">ㅇㅇ</div>
  </a>
  `;
categoryList.forEach((item) => {
  categoryListBox.innerHTML += `
  <a href="/">
    <div class="category">${item}</div>
  </a>
  `;
});
