/* Menyikon som knapp för öppning av overlay meny */

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

/*drop-down meny för ofta ställda frågor*/
document.addEventListener("DOMContentLoaded", () => { // Changed "DomContentLoader" to "DOMContentLoaded"
    const questions = document.querySelectorAll(".faq-question"); // Changed 'question' to 'questions' for clarity as it's a NodeList

    questions.forEach(question => {
        question.addEventListener("click", () => {
            // Toggle the 'active' class on the question button
            question.classList.toggle("active");

            // Get the answer and the icon related to this specific question
            const answer = question.nextElementSibling;
            const icon = question.querySelector(".icon");

            // Toggle the display of the answer
            if (answer.style.display === "block") { // Use strict equality
                answer.style.display = "none";
                icon.textContent = "+";
            } else {
                answer.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});