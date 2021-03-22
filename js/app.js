const load = () => {
  const buttons = document.querySelectorAll('.circle-container__dot');
  const header = document.querySelector('.heading');
  const img = document.querySelector('.main__image');
  const main = document.querySelector('.main');

  let currentIndex = 0;

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons[currentIndex].classList.remove('circle-container__dot--active');
      button.classList.add('circle-container__dot--active');
      currentIndex = index;

      switch (currentIndex) {
        case 0:
          header.textContent = 'Bezpieczeństwo i ochrona baz danych';
          img.src = './img/webDesign.png';
          img.style.display = 'inline';
          main.style.background = '';

          header.style.background = 'transparent';
          break;
        case 1:
          header.textContent = 'Bezpieczne bazy danych';
          img.style.display = 'none';
          main.style.background = 'url(./img/security.jpg)';
          main.style.backgroundRepeat = 'no-repeat';
          main.style.backgroundSize = 'cover';
          header.style.background = '#000';
          header.style.color = '#fff';

          break;
        case 2:
          header.textContent = 'Przechowywanie danych';
          img.style.display = 'inline';
          main.style.background = '';

          img.src = './img/dataStorage.png';
          header.style.background = 'transparent';
          break;
        default:
      }
    });
  });
};

load();
