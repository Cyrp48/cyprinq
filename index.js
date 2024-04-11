// Подключаем библиотеку Chart.js
const Chart = require('chart.js');

// Создаем новый график
const canvasRenderService = require('chartjs-node-canvas');

(async () => {
  const width = 400; // Ширина графика
  const height = 400; // Высота графика

  // Данные для графика
  const data = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [{
      label: 'Пример графика',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  // Настройки графика
  const options = {
    // дополнительные настройки
  };

  // Создаем Canvas
  const canvas = canvasRenderService.createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Создаем новый график на Canvas
  const chart = new Chart(ctx, {
    type: 'line', // тип графика (линейный)
    data: data,
    options: options
  });

  // Получаем изображение графика в формате base64
  const image = await chart.getImageBuffer('image/png');

  // Выводим изображение графика
  const fs = require('fs');
  fs.writeFileSync('chart.png', image);

})();
