var normalChart = echarts.init(document.getElementById("normalChart"));
    
    
const colors = ['#5470C6', '#91CC75', '#EE6666'];
option = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    // right: '5%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['김포공항역', '고촌역', '풍무역'],
    textStyle: {
      color: '#fff',
      fontSize: 25
      }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        show: true,
        lineStyle: {
            // type: 'dashed',
            // color: "#555555"
        }
    },
    splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#555555'
            },
            interval: 0  // y축 간격
        },
        
    axisLabel: {
        color: '#fff',  // x축 글씨색을 흰색으로 설정
        fontSize: 15
    },
      // prettier-ignore
      data: ['00', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    }
  ],
  yAxis: [
    {
      type: 'value',
      // name: '유입인원',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
            // type: 'dashed',
            // color: "#555555"
        }
      },
      axisLabel: {
        formatter: '{value}명',
        color: "#fff",
        fontSize: 15
      },
      splitLine: {
        show: true,
        lineStyle: {
            type: 'dashed',
            color: '#555555'
        }
    }
    },
    {
      type: 'value',
      name: '고촌역',
      alignTicks: true,
      offset: 150,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value} 명'
      }
    },
    {
      type: 'value',
      name: '풍무역',
      alignTicks: true,
      offset: 150,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[3]
        }
      },
      axisLabel: {
        formatter: '{value} 명'
      }
    },
    // {
    //   type: 'value',
    //   name: '군중밀집',
    //   position: 'left',
    //   alignTicks: true,
    //   axisLine: {
    //     show: true,
    //     lineStyle: {
    //       type: 'dashed',
    //         color: "#555555"
    //     }
    //   },
    //   axisLabel: {
    //     formatter: '{value} 명/m2',
    //     color: "#fff",
    //     fontSize: 15
    //   }
    // }
  ],
  series: [
    {
      name: '김포공항역',
      type: 'bar',
      //barGap: '0%',  // 막대 그래프 간의 간격 조절
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
    },
    {
      name: '고촌역',
      type: 'bar',
      yAxisIndex: 0,
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]
    },
    {
      name: '풍무역',
      type: 'bar',
      yAxisIndex: 0,
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]
    },
    // {
    //   name: '군중밀집',
    //   type: 'line',
    //   yAxisIndex: 3,
    //   data: [1, 0, 0, 0, 0, 1, 4, 5, 6, 5, 5, 3, 2, 2, 1, 1, 2, 2, 3, 2, 2, 2, 2, 3]
    // }
  ]
};


    //  차트 옵션 설정하기
    normalChart.setOption(option)


window.addEventListener('resize', function() {
    normalChart.resize();
});
