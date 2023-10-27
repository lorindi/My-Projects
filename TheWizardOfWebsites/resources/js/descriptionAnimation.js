const sentences = document.querySelectorAll('.part-team-description');
let i = 0;

function animateText() {
  if (i < sentences.length) {
    const currentSentence = sentences[i];
    const textContainer = document.querySelector('.text');
    const text = currentSentence.textContent;
    let index = 0;
    currentSentence.style.display = 'none'



    function addLetter() {
      if (index < text.length) {
        textContainer.textContent += text[index]; // Добавяме буквата в инлайн елемента
        index++;
        setTimeout(addLetter, 50); // Променете скоростта на изписване, ако е необходимо
      } else {
        i++;
        setTimeout(() => {
          currentSentence.style.opacity = 0; // Скриваме параграфа след като завърши
          // textContainer.textContent = ''; 
          // animateText(); // Продължаваме към следващия параграф
        }, 1000); // Променете задръжката преди следващото изречение
      }
    }

    addLetter();
  }
}

animateText(); // Започваме анимацията
