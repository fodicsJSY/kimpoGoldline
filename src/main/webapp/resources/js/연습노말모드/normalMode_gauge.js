    
    var gochonNormal1 = echarts.init(document.getElementById("gochonNormal1"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '90%',
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
            lineStyle: {
                width: 6,
                color: [
                [0.29, '#7CFFB2'],
                [0.39, '#FDDD60'],
                [0.49, '#58D9F9'],
                [1, '#FF6E76']
                ]
            }
            },
            pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '35%',
            // width: 40,
            offsetCenter: [0, '-50%'],
            itemStyle: {
                color: 'auto'
            }
            },
            axisTick: {
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 0
            }
            },
            splitLine: {
            length: 20,
            lineStyle: {
                color: 'auto',
                // width: 20
            }
            },
            axisLabel: {
            color: '#F3F2F1',
            // fontSize: 40,
            distance: -60,
            rotate: 'tangential',
            formatter: function (value) {
                if (value === 0.7) {
                return '위험';
                } else if (value === 0.4) {
                return '경고';
                } else if (value === 0.3) {
                return '주의';
                } else if (value === 0.2) {
                return '안전';
                }
                return '';
            }
            },
            title: {
            offsetCenter: [0, '-10%'],
            // fontSize: 40
            },
            detail: {
            // fontSize: 50,
            offsetCenter: [0, '-35%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 10) + '명/㎡';
            },
            color: 'inherit'
            },
            data: [
            {
                value: 0.5,
                name: '군중 밀집도'
            }
            ]
        }
        ]
    };

        //  차트 옵션 설정하기
        gochonNormal1.setOption(option)
    
    var gochonNormal2 = echarts.init(document.getElementById("gochonNormal2"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '90%',
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
            lineStyle: {
                width: 6,
                color: [
                [0.29, '#7CFFB2'],
                [0.39, '#FDDD60'],
                [0.49, '#58D9F9'],
                [1, '#FF6E76']
                ]
            }
            },
            pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '35%',
            // width: 40,
            offsetCenter: [0, '-50%'],
            itemStyle: {
                color: 'auto'
            }
            },
            axisTick: {
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 0
            }
            },
            splitLine: {
            length: 20,
            lineStyle: {
                color: 'auto',
                // width: 20
            }
            },
            axisLabel: {
            color: '#F3F2F1',
            // fontSize: 40,
            distance: -60,
            rotate: 'tangential',
            formatter: function (value) {
                if (value === 0.7) {
                return '위험';
                } else if (value === 0.4) {
                return '경고';
                } else if (value === 0.3) {
                return '주의';
                } else if (value === 0.2) {
                return '안전';
                }
                return '';
            }
            },
            title: {
            offsetCenter: [0, '-10%'],
            // fontSize: 40
            },
            detail: {
            // fontSize: 50,
            offsetCenter: [0, '-35%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 10) + '명/㎡';
            },
            color: 'inherit'
            },
            data: [
            {
                value: 0.5,
                name: '군중 밀집도'
            }
            ]
        }
        ]
    };

        //  차트 옵션 설정하기
        gochonNormal2.setOption(option)
    
    var pungmuNormal1 = echarts.init(document.getElementById("pungmuNormal1"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '90%',
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
            lineStyle: {
                width: 6,
                color: [
                [0.29, '#7CFFB2'],
                [0.39, '#FDDD60'],
                [0.49, '#58D9F9'],
                [1, '#FF6E76']
                ]
            }
            },
            pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '35%',
            // width: 40,
            offsetCenter: [0, '-50%'],
            itemStyle: {
                color: 'auto'
            }
            },
            axisTick: {
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 0
            }
            },
            splitLine: {
            length: 20,
            lineStyle: {
                color: 'auto',
                // width: 20
            }
            },
            axisLabel: {
            color: '#F3F2F1',
            // fontSize: 40,
            distance: -60,
            rotate: 'tangential',
            formatter: function (value) {
                if (value === 0.7) {
                return '위험';
                } else if (value === 0.4) {
                return '경고';
                } else if (value === 0.3) {
                return '주의';
                } else if (value === 0.2) {
                return '안전';
                }
                return '';
            }
            },
            title: {
            offsetCenter: [0, '-10%'],
            // fontSize: 40
            },
            detail: {
            // fontSize: 50,
            offsetCenter: [0, '-35%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 10) + '명/㎡';
            },
            color: 'inherit'
            },
            data: [
            {
                value: 0.5,
                name: '군중 밀집도'
            }
            ]
        }
        ]
    };

        //  차트 옵션 설정하기
        pungmuNormal1.setOption(option)
    
    var pungmuNormal2 = echarts.init(document.getElementById("pungmuNormal2"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '90%',
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
            lineStyle: {
                width: 6,
                color: [
                [0.29, '#7CFFB2'],
                [0.39, '#FDDD60'],
                [0.49, '#58D9F9'],
                [1, '#FF6E76']
                ]
            }
            },
            pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '35%',
            // width: 40,
            offsetCenter: [0, '-50%'],
            itemStyle: {
                color: 'auto'
            }
            },
            axisTick: {
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 0
            }
            },
            splitLine: {
            length: 20,
            lineStyle: {
                color: 'auto',
                // width: 20
            }
            },
            axisLabel: {
            color: '#F3F2F1',
            // fontSize: 40,
            distance: -60,
            rotate: 'tangential',
            formatter: function (value) {
                if (value === 0.7) {
                return '위험';
                } else if (value === 0.4) {
                return '경고';
                } else if (value === 0.3) {
                return '주의';
                } else if (value === 0.2) {
                return '안전';
                }
                return '';
            }
            },
            title: {
            offsetCenter: [0, '-10%'],
            // fontSize: 40
            },
            detail: {
            // fontSize: 50,
            offsetCenter: [0, '-35%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 10) + '명/㎡';
            },
            color: 'inherit'
            },
            data: [
            {
                value: 0.5,
                name: '군중 밀집도'
            }
            ]
        }
        ]
    };

        //  차트 옵션 설정하기
        pungmuNormal2.setOption(option)


window.addEventListener('resize', function() {
    gochonNormal1.resize();
    gochonNormal2.resize();
    pungmuNormal1.resize();
    pungmuNormal2.resize();
});