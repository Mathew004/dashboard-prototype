var sidebarOpen=false;
var sidebar=document.getElementById("sidebar");
function openSidebar(){
    if(!sidebarOpen)
    {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen=true;
    }}
function closeSidebar(){
        if(!sidebarOpen)
        {
            sidebar.classList.remove("sidebar-responsive");
            sidebarOpen=false;
        }
}


var barChartOptions = {
    series: [{
    data: [4,6,8,2,1]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors:[
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4535al"
  ],
  plotOptions: {
    bar: {
        distributed:false,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['phone', 'laptop', 'monitor', 'camera', 'headphones'
    ],
  },
  yaxis:{
    title:{
        text:"count"
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();


  var areaChartOptions = {
    series: [{
    name: 'purchase orders',
    
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    name: 'sales orders',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
    chart: {
    height: 350,
    
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Series A',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Series B',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();