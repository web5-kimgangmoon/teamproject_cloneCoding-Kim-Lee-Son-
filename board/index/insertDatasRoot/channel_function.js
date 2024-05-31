// channelBoard_insert


document.getElementById("boardInformStretchButton").onclick = (e) => {

    boardTableBox.childNodes.
        forEach((item) => {
            item.classList = "";
        })
    document.getElementById("boardInformStretchButton").classList.add("out");
}