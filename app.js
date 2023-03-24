window.addEventListener("DOMContentLoaded", () => {

    const item = document.querySelector(".item"),
        placeholders = document.querySelectorAll(".placeholder");

    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);

    placeholders.forEach( item => {
        item.addEventListener("dragover", dragOver);
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("dragleave", dragLeave);
        item.addEventListener("drop", dragDrop);
    });

    function dragStart(e) {
        e.target.classList.add("hold");
        setTimeout( () => {
            e.target.classList.add("hide");
        }, 0);
    }

    function dragEnd(e) {
        e.target.classList.remove("hold", "hide");
        e.target.classList.remove("hide");
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.target.classList.add("hovered");
    }

    function dragLeave(e) {
        e.target.classList.remove("hovered");
    }

    function dragDrop(e) {
        e.target.append(item);
        e.target.classList.remove("hovered");
    }
});