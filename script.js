function toggleAnswer(num) {
    var answer = document.querySelector(".faq-answer:nth-of-type(" + num + ")");
    answer.style.display = (answer.style.display === 'none') ? 'block' : 'none';
}
