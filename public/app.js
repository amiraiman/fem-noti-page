const notiContainer = document.querySelector("div.noti");
const notiToggle = notiContainer.querySelector("#notiToggle");
const notis = notiContainer.querySelectorAll(".noti-box");
const notiUnread = notiContainer.querySelector("#notiUnread");

let readState = true;

notiToggle.addEventListener("click", function () {
    notis.forEach((noti) => {
        noti.dataset.read = readState.toString();
    });

    readState = !readState;
    this.textContent = readState ? "Mark all as read" : "Unmark all as read";
    updateUnread(notis, notiUnread);
});

// Change count for unread messages
function updateUnread(notiNodeList, unreadEl) {
    let unread = 0;
    notiNodeList.forEach((noti) => {
        unread += noti.dataset.read === "false" ? 1 : 0;
    });

    unreadEl.textContent = unread;
}

window.onload = () => {
    updateUnread(notis, notiUnread);
};
