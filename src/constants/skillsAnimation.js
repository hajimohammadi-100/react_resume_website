export const skillsAnimation = () => {
    const circularProgress = document.querySelectorAll(".pie");

    Array.from(circularProgress).forEach((progressBar) => {
        const progressValue = progressBar.querySelector(".skillNumber");
        let startValue = 0,
            endValue = Number(progressBar.getAttribute("dataSkillNumber")),
            speed = 50;

        const progress = setInterval(() => {
            startValue++;
            progressValue.textContent = `${startValue}%`;

            progressBar.style.background = `conic-gradient(#828282 ${startValue * 3.6}deg,transparent 0deg)`;
            if (startValue === endValue) {
                clearInterval(progress);
            }
        }, speed);
    });
}