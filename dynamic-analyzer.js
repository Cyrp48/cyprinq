const { CanvasRenderService } = require('chartjs-node-canvas');
const fs = require('fs');

// Создаем новый график
const canvasRenderService = new CanvasRenderService(800, 400);
const configuration = {
  type: 'line', // тип графика (линейный)
  data: {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [{
      label: 'Пример графика',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    // дополнительные настройки
  }
};

(async () => {
  // Создаем изображение графика
  const image = await canvasRenderService.renderToBuffer(configuration);
  
  // Сохраняем изображение графика
  fs.writeFileSync('chart.png', image);
})();
