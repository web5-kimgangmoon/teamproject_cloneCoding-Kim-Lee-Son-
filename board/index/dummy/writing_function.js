document.getElementById("boardWritingButton").onclick = (e) => {
  document.getElementById("preview").innerHTML = editorInstance.getData();
};
