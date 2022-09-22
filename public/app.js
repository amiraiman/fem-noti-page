const notiContainer = document.querySelector("div.noti");
let readState = true;

notiContainer.addEventListener("click", function (e) {
    const btn = e.target;
    if (!btn.classList.contains("noti-markread")) return;

    const notis = this.querySelectorAll(".noti-box");

    notis.forEach((noti) => {
        noti.dataset.read = readState.toString();
    });

    readState = !readState;
    btn.textContent = readState ? "Mark all as read" : "Unmark all as read";
});
