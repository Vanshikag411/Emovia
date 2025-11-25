function calculateResults() {
    let score = 0;
    let form = document.forms['quizForm'];
  
    // Loop through each question
    for (let i = 0; i < form.elements.length; i++) {
      let element = form.elements[i];
      if (element.checked) {
        score += parseInt(element.value);
      }
    }
  
    // Display the results
    let resultDiv = document.getElementById('results');
    let feedback = '';
  
    if (score <= 60) {
      feedback = "You seem to be managing your mental health well, but it's always good to continue practicing healthy habits and self-care.";
    } else if (score <= 120) {
      feedback = "You may be experiencing some challenges, but you're doing your best to cope. It might be helpful to seek support in certain areas.";
    } else {
      feedback = "You seem to be facing significant mental health challenges. It's important to talk to a mental health professional for guidance and support.";
    }
  
    resultDiv.innerHTML = `Your total score is: ${score}. <br>${feedback}`;
    resultDiv.style.display = 'block';
  }
  