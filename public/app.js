const notiContainer = document.querySelector("div.noti");

notiContainer.addEventListener("click", function (e) {
    const btn = e.target;
    if (!btn.classList.contains("noti-markread")) return;

    const notis = this.querySelectorAll(".noti-box");

    notis.forEach((noti) => {
        noti.dataset.read = "true";
    });
});
