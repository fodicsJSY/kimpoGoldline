var rushHourChart = echarts.init(document.getElementById("rushHourChart"));
    
    
    
const colors = ['#5470C6', '#91CC75', '#EE6666'];
option = {
// responsive: true,
color: colors,
tooltip: {
    trigger: 'axis',
    axisPointer: {
    type: 'cross'
    }
},
grid: {
    // top: '0%',
    // left: '10%'
},
toolbox: {
    feature: {
    dataView: { show: true, readOnly: false },
    restore: { show: true },
    saveAsImage: { show: true }
    }
},
legend: {
    data: ['김포공항역(하차)', '고촌역(승차)', '풍무역(승차)'],
    textStyle: {
        color: '#fff',
        fontSize: 30
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
            type: 'dashed',
            color: "#555555"
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
        fontSize: 24
    },
    // prettier-ignore
    data: ['7시', '8시', '9시'],
    },
    
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
            type: 'dashed',
            color: "#555555"
        }
},
axisLabel: {
    formatter: '{value}',
    color: "#fff",
    fontSize: 20
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
    name: '고촌역(승차)',
    position: 'left',
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
    name: '풍무역(승차)',
    position: 'left',
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
],

// series: [
//     {
//     name: '김포공항역(하차)',
//     type: 'bar',
//     data: [kimpo7to8Count, kimpo8to9Count, kimpo9to10Count],
            // label: {
        //         show: true,
        //         position: 'top',
        //         color: '#fff'  // 라벨 글씨색을 흰색으로 설정
        //     }
//     },
//     {
//     name: '고촌역(승차)',
//     type: 'bar',
//     yAxisIndex: 0,
//     data: [gochon7to8Count, gochon8to9Count, gochon9to10Count],
            // label: {
        //         show: true,
        //         position: 'top',
        //         color: '#fff'  // 라벨 글씨색을 흰색으로 설정
        //     }
//     },
//     {
//     name: '풍무역(승차)',
//     type: 'bar',
//     yAxisIndex: 0,
//     data: [pungmu7to8Count, pungmu8to9Count, pungmu9to10Count],
        // label: {
        //         show: true,
        //         position: 'top',
        //         color: '#fff'  // 라벨 글씨색을 흰색으로 설정
        //     }
//     }
    
// ]
series: [
    {
    name: '김포공항역(하차)',
    type: 'bar',
    data: [1234, 1234, 1234],
    label: {
        show: true,
        position: 'top',
        color: '#fff'  // 라벨 글씨색을 흰색으로 설정
    }
    },
    {
    name: '고촌역(승차)',
    type: 'bar',
    yAxisIndex: 0,
    data: [1234, 1234, 1234],
    label: {
        show: true,
        position: 'top',
        color: '#fff'  // 라벨 글씨색을 흰색으로 설정
    }
    },
    {
    name: '풍무역(승차)',
    type: 'bar',
    yAxisIndex: 0,
    data: [1234, 1234, 1234],
    label: {
        show: true,
        position: 'top',
        color: '#fff'  // 라벨 글씨색을 흰색으로 설정
    }
    }
    
]
};


    //  차트 옵션 설정하기
rushHourChart.setOption(option)


window.addEventListener('resize', function() {
    rushHourChart.resize();
});
