export const showBox = (boxes) => {
    const triggerBottom = (window.innerHeight / 25) * 24;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("showBox");
        } else {
            box.classList.remove("showBox");
        }
    });
}