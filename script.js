const buttons = document.querySelectorAll(".question");
        let activeAnswer = null;

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const answer = button.nextElementSibling;
                
                if (activeAnswer && activeAnswer !== answer) {
                    activeAnswer.style.display = "none";
                }
                
                if (answer.style.display === "block") {
                    answer.style.display = "none";
                    activeAnswer = null;
                } else {
                    answer.style.display = "block";
                    activeAnswer = answer;
                }
            });
        });