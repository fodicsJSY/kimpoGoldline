var NormalModeChart = echarts.init(document.getElementById("NormalModeChart"));
    
    const colors = ['#5470C6', '#91CC75', '#EE6666'];
    option = {
    responsive: true,
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        type: 'cross'
        }
    },
    grid: {
        // top: '0%',
        left: '10%'
    },
    toolbox: {
        feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['김포공항역', '고촌역', '풍무역']
    },
    xAxis: [
        {
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        // prettier-ignore
        data: ['7', '8', '9']
        }
    ],
    yAxis: [
        {
        type: 'value',
        name: '유입인원',
        position: 'left',
        alignTicks: true,
        axisLine: {
            show: true,
            lineStyle: {
            color: colors[0]
            }
        },
        axisLabel: {
            formatter: '{value} 명'
        }
        },
        {
        type: 'value',
        name: '고촌역',
        position: 'right',
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
        position: 'right',
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
        }
    ],
    series: [
        {
        name: '김포공항역',
        type: 'bar',
        data: [
            500, 2000, 2500
        ]
        },
        {
        name: '고촌역',
        type: 'bar',
        yAxisIndex: 0,
        data: [
            50, 200, 250
        ]
        },
        {
        name: '풍무역',
        type: 'bar',
        yAxisIndex: 0,
        data: [
            35, 130, 110
        ]
        }
        
    ]
    };

    //  차트 옵션 설정하기
    NormalModeChart.setOption(option)


window.addEventListener('resize', function() {
    NormalModeChart.resize();
});