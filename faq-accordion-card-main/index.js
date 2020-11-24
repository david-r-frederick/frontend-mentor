const questions = document.getElementsByClassName('question');
const arrows = document.getElementsByClassName("question-arrow");

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            questions[i].children[0].style.transform = "rotate(0deg)";
            questions[i].style.fontWeight = "normal";
          } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            questions[i].children[0].style.transform = "rotate(180deg)";
            questions[i].style.fontWeight = "bold";
        }
    });
}
