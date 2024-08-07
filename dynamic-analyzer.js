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
    scales: {
      y: {
        beginAtZero: true, // начинать отсчет от нуля
        ticks: {
          stepSize: 5, // шаг между метками на оси Y
          font: {
            size: 14 // размер шрифта меток
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 14 // размер шрифта меток
          }
        }
      }
    }
  }
};

// Создаем изображение графика
canvasRenderService.renderToBuffer(configuration)
  .then(image => {
    // Сохраняем изображение графика
    fs.writeFileSync('chart.png', image);
    console.log('График успешно сохранен в файл chart.png');
  })
  .catch(error => {
    console.error('Ошибка при создании графика:', error);
  });
const createChart = async (type, data, labels, outputFilePath) => {
  const configuration = {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: 'Пример графика',
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5,
            font: {
              size: 14
            }
          }
        },
        x: {
          ticks: {
            font: {
              size: 14
            }
          }
        }
      }
    }
  };

  const canvasRenderService = new CanvasRenderService(800, 400);
  try {
    const image = await canvasRenderService.renderToBuffer(configuration);
    fs.writeFileSync(outputFilePath, image);
    console.log(`График успешно сохранен в файл ${outputFilePath}`);
  } catch (error) {
    console.error('Ошибка при создании графика:', error);
  }
};

