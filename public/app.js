const notiContainer = document.querySelector("div.noti");
const notiToggle = notiContainer.querySelector("#notiToggle");
const notis = notiContainer.querySelectorAll(".noti-box");

let readState = true;

notiToggle.addEventListener("click", function () {
    notis.forEach((noti) => {
        noti.dataset.read = readState.toString();
    });

    readState = !readState;
    this.textContent = readState ? "Mark all as read" : "Unmark all as read";
});
