const { JSDOM } = require('jsdom');
const { CanvasRenderService } = require('chartjs-node-canvas');
const fs = require('fs');

// Создаем виртуальный DOM
const { window } = new JSDOM('<!DOCTYPE html>');
global.window = window;
global.document = window.document;

// Импортируем Chart.js
const Chart = require('chart.js');

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

// Создаем изображение графика
canvasRenderService.renderToBuffer(configuration)
  .then(image => {
    // Сохраняем изображение графика
    fs.writeFileSync('chart.png', image);
  })
  .catch(error => {
    console.error('Ошибка при создании графика:', error);
  });