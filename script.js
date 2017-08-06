var results = [{
  'position': 'x1',
  'height': 150
}, {
  'position': 'x2',
  'height': 250
}, {
  'position': 'x3',
  'height': 220
}, {
  'position': 'x4',
  'height': 320
}, {
  'position': 'x5',
  'height': 290
}, {
  'position': 'x6',
  'height': 390
}, {
  'position': 'x7',
  'height': 350
}, {
  'position': 'x8',
  'height': 400
}]

var results2 = [{
  'position': 'x1',
  'height': 150
}, {
  'position': 'x2',
  'height': 130
}, {
  'position': 'x3',
  'height': 220
}, {
  'position': 'x4',
  'height': 180
}, {
  'position': 'x5',
  'height': 290
}, {
  'position': 'x6',
  'height': 250
}, {
  'position': 'x7',
  'height': 350
}, {
  'position': 'x8',
  'height': 300
}]

function drawChart() {
  drawLineChart("nyancat",  "visits", "Number of visits", "date");
}

  var ctx = document.getElementById("nyancat").getContext("2d");
  var gradientStroke = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke.addColorStop(0.25, "rgba(244, 67, 54, 1)");
  gradientStroke.addColorStop(0.35, "rgba(255, 152, 0, 1)");
  gradientStroke.addColorStop(0.5, "rgba(255, 235, 59, 1)");
  gradientStroke.addColorStop(0.6, "rgba(76, 175, 80, 1)");
  gradientStroke.addColorStop(0.8, "rgba(33, 150, 243, 1)");
  gradientStroke.addColorStop(1, "rgba(103, 58, 183, 1)");
  
  
  var gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
gradientFill.addColorStop(0.25, "rgba(244, 67, 54, 1)");
  gradientFill.addColorStop(0.35, "rgba(255, 152, 0, 1)");
  gradientFill.addColorStop(0.5, "rgba(255, 235, 59, 1)");
  gradientFill.addColorStop(0.6, "rgba(76, 175, 80, 1)");
  gradientFill.addColorStop(0.8, "rgba(33, 150, 243, 1)");
  gradientFill.addColorStop(1, "rgba(103, 58, 183, 1)");

  var labels = results.map(function(item) {
    return item["position"];
  });
  var data1 = results.map(function(item) {
    return item["height"]
  })
  var data2 = results2.map(function(item) {
    return item["height"]
  })

  var cat = new Image();
  cat.src = 'https://vignette3.wikia.nocookie.net/nine/images/d/dc/Nyancat.png/revision/latest?cb=20120317044335';
 
  
 Chart.pluginService.register({
    afterUpdate: function(chart) {
       chart.config.data.datasets[0]._meta[0].data[7]._model.pointStyle = cat;
     
       
    }
});

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 8,
        pointHoverRadius: 8,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: true,
        backgroundColor: gradientFill,
        borderWidth: 4,
        data: data1
      }]
    },
    options: {
      scaleShowLabels : false,
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "none"
      },
      scales: {
        yAxes: [{
          position:"right",
          ticks: {
            fontColor: "#303F9F",
            beginAtZero: true,
            maxTicksLimit: 1,
            padding:  100,
            
          },
          gridLines: {
            drawTicks: false,
            display: false,
            drawBorder: false
          }

        }],
        xAxes: [{
          ticks:{
            display: false,

          },
          gridLines: {
            zeroLineColor: "transparent"
          },          
          gridLines: {
            
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      }
    }
  });

var i = 1;

function changeDataSets(){
  if (i%2 == 0){
    myChart.data.datasets[0].data = data1;    
  }
  else{
    myChart.data.datasets[0].data = data2;     
  }
  i++;
  myChart.update();
}

setInterval(function(){changeDataSets()}, 500);