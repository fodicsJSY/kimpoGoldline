    
    var gochon1 = echarts.init(document.getElementById("gochon1"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [
                    [0.29, '#32B16C'],
                    [0.39, '#FFFF00'],
                    [0.49, '#F39800'],
                    [1, '#E5004F']
                    ],
                },
                roundCap: false
            },
            detail: {
                
                borderRadius: 3,
            },
            pointer: {
            icon: 'path://M 0 -20 Q 5 -25, 10 -20 Q 5 -19, 0 -20 Z',
            length: '35%',
            width: 32,
            offsetCenter: [0, '-38%'],
            itemStyle: {
                color: 'auto',
                borderColor: '#fff',  // 테두리 색상 설정
                borderWidth: 2,  // 테두리 굵기 설정
            }
            },
            axisTick: {
                // show: false,
                length: 20,
                distance: -60,
                lineStyle: {
                    color: 'auto',
                    width: 0
                }
            },
            splitLine: {
                // show: false,
                distance: -70,
                offsetCenter: [0, '-100%'],
                length: 15,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                show: false,
                color: '#F3F2F1',
                fontSize: 15,
                distance: -40,
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
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 10) + '명/㎡';
            },
            color: 'inherit'
            },
            data: [
            {
                value: 0.5,
            }
            ]
        }
        ],
    };

        //  차트 옵션 설정하기
        gochon1.setOption(option)
    
    var gochon2 = echarts.init(document.getElementById("gochon2"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [
                    [0.29, '#32B16C'],
                    [0.39, '#FFFF00'],
                    [0.49, '#F39800'],
                    [1, '#E5004F']
                    ],
                },
                roundCap: false
            },
            detail: {
                
                borderRadius: 3,
            },
            pointer: {
            icon: 'path://M 0 -20 Q 5 -25, 10 -20 Q 5 -19, 0 -20 Z',
            length: '35%',
            width: 32,
            offsetCenter: [0, '-38%'],
            itemStyle: {
                color: 'auto',
                borderColor: '#fff',  // 테두리 색상 설정
                borderWidth: 2,  // 테두리 굵기 설정
            }
            },
            axisTick: {
                // show: false,
                length: 20,
                distance: -60,
                lineStyle: {
                    color: 'auto',
                    width: 0
                }
            },
            splitLine: {
                // show: false,
                distance: -70,
                offsetCenter: [0, '-100%'],
                length: 15,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                show: false,
                color: '#F3F2F1',
                fontSize: 15,
                distance: -40,
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
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 10) + '명/㎡';
            },
            color: 'inherit'
            },
            data: [
            {
                value: 0.5,
            }
            ]
        }
        ],
    };

        //  차트 옵션 설정하기
        gochon2.setOption(option)
    
    var pungmu1 = echarts.init(document.getElementById("pungmu1"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [
                    [0.29, '#32B16C'],
                    [0.39, '#FFFF00'],
                    [0.49, '#F39800'],
                    [1, '#E5004F']
                    ],
                },
                roundCap: false
            },
            detail: {
                
                borderRadius: 3,
            },
            pointer: {
            icon: 'path://M 0 -20 Q 5 -25, 10 -20 Q 5 -19, 0 -20 Z',
            length: '35%',
            width: 32,
            offsetCenter: [0, '-38%'],
            itemStyle: {
                color: 'auto',
                borderColor: '#fff',  // 테두리 색상 설정
                borderWidth: 2,  // 테두리 굵기 설정
            }
            },
            axisTick: {
                // show: false,
                length: 20,
                distance: -60,
                lineStyle: {
                    color: 'auto',
                    width: 0
                }
            },
            splitLine: {
                // show: false,
                distance: -70,
                offsetCenter: [0, '-100%'],
                length: 15,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                show: false,
                color: '#F3F2F1',
                fontSize: 15,
                distance: -40,
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
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 10) + '명/㎡';
            },
            color: 'inherit'
            },
            data: [
            {
                value: 0.5,
            }
            ]
        }
        ],
    };

        //  차트 옵션 설정하기
        pungmu1.setOption(option)
    
    var pungmu2 = echarts.init(document.getElementById("pungmu2"));

     option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [
                    [0.29, '#32B16C'],
                    [0.39, '#FFFF00'],
                    [0.49, '#F39800'],
                    [1, '#E5004F']
                    ],
                },
                roundCap: false
            },
            detail: {
                
                borderRadius: 3,
            },
            pointer: {
            icon: 'path://M 0 -20 Q 5 -25, 10 -20 Q 5 -19, 0 -20 Z',
            length: '35%',
            width: 32,
            offsetCenter: [0, '-38%'],
            itemStyle: {
                color: 'auto',
                borderColor: '#fff',  // 테두리 색상 설정
                borderWidth: 2,  // 테두리 굵기 설정
            }
            },
            axisTick: {
                // show: false,
                length: 20,
                distance: -60,
                lineStyle: {
                    color: 'auto',
                    width: 0
                }
            },
            splitLine: {
                // show: false,
                distance: -70,
                offsetCenter: [0, '-100%'],
                length: 15,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                show: false,
                color: '#F3F2F1',
                fontSize: 15,
                distance: -40,
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
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 10) + '명/㎡';
            },
            color: 'inherit'
            },
            data: [
            {
                value: 0.5,
            }
            ]
        }
        ],
    };

        //  차트 옵션 설정하기
        pungmu2.setOption(option)


window.addEventListener('resize', function() {
    gochon1.resize();
    gochon2.resize();
    pungmu1.resize();
    pungmu2.resize();
});