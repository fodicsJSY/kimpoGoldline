    var gochonPlatformNormal1 = echarts.init(document.getElementById("gochonPlatformNormal1"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 0,
            max: 3,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [
                        [0.25, '#32B16C'],
                        [0.5, '#FFFF00'],
                        [0.75, '#F39800'],
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
            width: 20,
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
                    if (value === 3) {
                        return '심각';
                        } else if (value === 2) {
                        return '혼잡';
                        } else if (value === 1) {
                        return '주의';
                        } else if (value === 0) {
                        return '보통';
                        }
                        return '';
                }
            },
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: function (value) {
                if (value === 3) {
                    return '심각';
                    } else if (value === 2) {
                    return '혼잡';
                    } else if (value === 1) {
                    return '주의';
                    } else if (value === 0) {
                    return '보통';
                    }
                    return '';
            },
            color: 'inherit'
            },
            data: [selectGochonPlatform1]
        }
        ],
    };

        //  차트 옵션 설정하기
        gochonPlatformNormal1.setOption(option)
    
    var gochonPlatformNormal2 = echarts.init(document.getElementById("gochonPlatformNormal2"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 0,
            max: 3,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [
                        [0.25, '#32B16C'],
                        [0.5, '#FFFF00'],
                        [0.75, '#F39800'],
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
            width: 20,
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
                    if (value === 3) {
                        return '심각';
                        } else if (value === 2) {
                        return '혼잡';
                        } else if (value === 1) {
                        return '주의';
                        } else if (value === 0) {
                        return '보통';
                        }
                        return '';
                }
            },
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: function (value) {
                if (value === 3) {
                    return '심각';
                    } else if (value === 2) {
                    return '혼잡';
                    } else if (value === 1) {
                    return '주의';
                    } else if (value === 0) {
                    return '보통';
                    }
                    return '';
            },
            color: 'inherit'
            },
            data: [selectGochonPlatform2]
        }
        ],
    };

        //  차트 옵션 설정하기
        gochonPlatformNormal2.setOption(option)
    
    var pungmuPlatformNormal1 = echarts.init(document.getElementById("pungmuPlatformNormal1"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 0,
            max: 3,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [
                        [0.25, '#32B16C'],
                        [0.5, '#FFFF00'],
                        [0.75, '#F39800'],
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
            width: 20,
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
                    if (value === 3) {
                        return '심각';
                        } else if (value === 2) {
                        return '혼잡';
                        } else if (value === 1) {
                        return '주의';
                        } else if (value === 0) {
                        return '보통';
                        }
                        return '';
                }
            },
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: function (value) {
                if (value === 3) {
                    return '심각';
                    } else if (value === 2) {
                    return '혼잡';
                    } else if (value === 1) {
                    return '주의';
                    } else if (value === 0) {
                    return '보통';
                    }
                    return '';
            },
            color: 'inherit'
            },
            data: [
                {
                    value: selectPungmuPlatform1,
                    name: selectPungmuPlatform1
                }

            ]
        }
        ],
    };

        //  차트 옵션 설정하기
        pungmuPlatformNormal1.setOption(option)
    
    var pungmuPlatformNormal2 = echarts.init(document.getElementById("pungmuPlatformNormal2"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 0,
            max: 3,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [
                        [0.25, '#32B16C'],
                        [0.5, '#FFFF00'],
                        [0.75, '#F39800'],
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
            width: 20,
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
                    if (value === 3) {
                        return '심각';
                        } else if (value === 2) {
                        return '혼잡';
                        } else if (value === 1) {
                        return '주의';
                        } else if (value === 0) {
                        return '보통';
                        }
                        return '';
                }
            },
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: function (value) {
                if (value === 3) {
                    return '심각';
                    } else if (value === 2) {
                    return '혼잡';
                    } else if (value === 1) {
                    return '주의';
                    } else if (value === 0) {
                    return '보통';
                    }
                    return '';
            },
            color: 'inherit'
            },
            data: [selectPungmuPlatform2]
        }
        ],
        
    };

        //  차트 옵션 설정하기
        pungmuPlatformNormal2.setOption(option)


window.addEventListener('resize', function() {
    gochonPlatformNormal1.resize();
    gochonPlatformNormal2.resize();
    pungmuPlatformNormal1.resize();
    pungmuPlatformNormal2.resize();
});

