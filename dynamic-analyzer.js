<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Анализ цен криптовалют</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <canvas id="cryptoChart" width="800" height="400"></canvas>

  <script>
    // Получаем контекст canvas
    var ctx = document.getElementById('cryptoChart').getContext('2d');

    // Инициализируем пустой график
    var cryptoChart = new Chart(ctx, {
      type: 'line', // тип графика (линейный)
      data: {
        labels: [],
        datasets: [{
          label: 'Цена криптовалюты',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'hour'
            },
            distribution: 'series'
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // Функция для обновления графика с новыми данными
    function updateChart(data) {
      // Получаем текущее время
      var now = new Date();
      // Добавляем метку времени и данные в график
      cryptoChart.data.labels.push(now);
      cryptoChart.data.datasets[0].data.push(data);
      // Ограничиваем количество точек в графике
      if (cryptoChart.data.labels.length > 20) {
        cryptoChart.data.labels.shift();
        cryptoChart.data.datasets[0].data.shift();
      }
      // Обновляем график
      cryptoChart.update();
    }

    // Функция для получения данных с API криптовалютной биржи (замените URL на соответствующий API)
    function fetchData() {
      fetch('https://api.example.com/cryptocurrency/price')
        .then(response => response.json())
        .then(data => {
          // В этом примере предполагается, что данные возвращаются в виде объекта с полем "price"
          updateChart(data.price);
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error);
        });
    }

    // Обновляем график каждые 5 секунд
    setInterval(fetchData, 5000);
  </script>
</body>
</html>