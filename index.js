function windowClose(win) {
    win.classList.add("hiddenFrame");
    setTimeout(() => {
        win.classList.remove("hiddenFrame");
        win.classList.add("hidden");
    }, 300)
}

function windowOpen(win) {
    win.classList.remove("hidden");
    win.classList.add("hiddenFrame");
    setTimeout(() => {
        win.classList.remove("hiddenFrame");
    }, 0)
}

document.querySelectorAll(".window button").forEach(el =>
    el.addEventListener("click", ev => {
        let parent = ev.target.parentElement.parentElement.parentElement;
        windowClose(parent);
    }));
document.querySelectorAll(".open-window").forEach(el =>
    el.addEventListener("click",
        ev => windowOpen(ev.target.nextElementSibling)));

