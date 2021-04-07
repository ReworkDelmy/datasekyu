const load = () => {  //Funckja która jest wyłowywana gdy strona się wyświetli
  const buttons = document.querySelectorAll('.circle-container__dot'); //Pobieranie elementów
  const header = document.querySelector('.heading');
  const img = document.querySelector('.main__image');
  const main = document.querySelector('.main');

  let currentIndex = 0; //ustawienie indexu na 0

  buttons.forEach((button, index) => { //pętla po wszystkich przyciskach
    button.addEventListener('click', () => { //Ustawienie słuchania na kliknięcie
      buttons[currentIndex].classList.remove('circle-container__dot--active'); //Usunięcie klasy z obecnego przycisku
      button.classList.add('circle-container__dot--active'); //ustawienie innemu przyciskowi klasy aktywnej
      currentIndex = index; //zmiana indexu

      switch (currentIndex) { //zmienianie zdarzen na podstawie indexu
        case 0: //przypadek
          header.textContent = "Bezpieczeństwo i ochrona baz danych"; //zmiana tekstu
          img.src = './img/webDesign.png'; //zmiana zdjecia
          img.style.display = 'inline'; //zmiana wyswietlania
          main.style.background = ''; //zmiana tła

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

load(); //wyłowanie funkcji
