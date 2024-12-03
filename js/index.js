document.addEventListener("DOMContentLoaded", function () {
  // Функція для форматування чисел (додає 0, якщо число менше 10)
  function formatTime(number) {
      return number < 10 ? `0${number}` : number;
  }

  // Функція для розрахунку часу до кінця дня
  function updateTimer() {
      const now = new Date();
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59); // Кінець дня
      const timeLeft = endOfDay - now;

      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Оновлення значень у таймері
      document.querySelector(".timer__time--hours").textContent = `${formatTime(hours)}:`; 
      document.querySelector(".timer__time--minutes").textContent = `${formatTime(minutes)}:`;
      document.querySelector(".timer__time--seconds").textContent = `${formatTime(seconds)}`; 
      
  }

  // Оновлювати таймер щосекунди
  setInterval(updateTimer, 1000);

  // Перший виклик функції
  updateTimer();
  
  // Swiper ініціалізація
  const swiper = new Swiper('.swiper-reviews', {
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 14,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          991.98: {
              slidesPerView: 3.3,
              spaceBetween: 50,
          },
      },
  });


  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Поточна позиція прокрутки
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight; // Загальна висота сторінки
    const scrolledPercentage = (scrollPosition / pageHeight) * 100; // Відсоток прокрутки
    
    const fixedContainer = document.querySelector('.fixed-container');

    if (scrolledPercentage > 15) {
        fixedContainer.classList.add('scrolled'); // Додає клас, якщо прокручено більше 20%
    } else {
        fixedContainer.classList.remove('scrolled'); // Видаляє клас, якщо менше 20%
    }
});




});
