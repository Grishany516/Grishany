document.addEventListener('DOMContentLoaded', function() {
   const playPauseButton = document.getElementById('playPauseButton');
   const audio = document.getElementById('backgroundMusic');

   playPauseButton.addEventListener('click', function() {
       console.log('Кнопка нажата'); // Для отладки
       if (audio.paused) {
           audio.play().then(() => {
               playPauseButton.textContent = 'Пауза';
           }).catch(error => console.log('Ошибка воспроизведения:', error)); // Ловим ошибки
       } else {
           audio.pause();
           playPauseButton.textContent = 'Играть музыку';
       }
   });
});