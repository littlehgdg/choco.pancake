const candles = document.querySelectorAll('.candle');

candles.forEach(candle => {
  candle.addEventListener('click', () => {
    candle.style.animation = 'blink 0.5s infinite';
    setTimeout(() => {
      candle.style.animation = 'none';
      candle.style.opacity = '0.3';
    }, 3000);
  });
});
