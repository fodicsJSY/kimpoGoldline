    
    var gochonPlatform1 = echarts.init(document.getElementById("gochonPlatform1"));

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
                    if (value === 3) {
                        return '위험';
                        } else if (value === 2) {
                        return '경고';
                        } else if (value === 1) {
                        return '주의';
                        } else if (value === 0) {
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
                if (value === 3) {
                    return '위험';
                    } else if (value === 2) {
                    return '경고';
                    } else if (value === 1) {
                    return '주의';
                    } else if (value === 0) {
                    return '안전';
                    }
                    return '';
            },
            color: 'inherit'
            },
            data: [selectPungmuPlatform1]
        }
        ],
    };

        //  차트 옵션 설정하기
        gochonPlatform1.setOption(option)



    /***************************************************************/
    


    var gochonPlatform2 = echarts.init(document.getElementById("gochonPlatform2"));

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
                    if (value === 3) {
                        return '위험';
                        } else if (value === 2) {
                        return '경고';
                        } else if (value === 1) {
                        return '주의';
                        } else if (value === 0) {
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
                if (value === 3) {
                    return '위험';
                    } else if (value === 2) {
                    return '경고';
                    } else if (value === 1) {
                    return '주의';
                    } else if (value === 0) {
                    return '안전';
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
        gochonPlatform2.setOption(option)


    /***************************************************************/    
    
    var pungmuPlatform1 = echarts.init(document.getElementById("pungmuPlatform1"));

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
            width: 32,
            offsetCenter: [0, '-38%'],
            itemStyle: {
                color: 'auto',
                borderColor: '#fff',  // 테두리 색상 설정
                borderWidth: 2,  // 테두리 굵기 설정
            }
            },
            axisTick: {
                show: false,
                length: 5,
                //splitNumber: 2, 
                distance: -70,
                lineStyle: {
                    color: 'fff',
                }
            },
            splitLine: {
                // show: false,
                distance: -70,
                offsetCenter: [0, '-100%'],
                length: 15,
                splitNumber: 1, 
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
                        return '위험';
                        } else if (value === 2) {
                        return '경고';
                        } else if (value === 1) {
                        return '주의';
                        } else if (value === 0) {
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
                if (value === 3) {
                    return '위험';
                    } else if (value === 2) {
                    return '경고';
                    } else if (value === 1) {
                    return '주의';
                    } else if (value === 0) {
                    return '안전';
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
        pungmuPlatform1.setOption(option)

    /***************************************************************/
    
    var pungmuPlatform2 = echarts.init(document.getElementById("pungmuPlatform2"));

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
                    if (value === 3) {
                        return '위험';
                        } else if (value === 2) {
                        return '경고';
                        } else if (value === 1) {
                        return '주의';
                        } else if (value === 0) {
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
                if (value === 3) {
                    return '위험';
                    } else if (value === 2) {
                    return '경고';
                    } else if (value === 1) {
                    return '주의';
                    } else if (value === 0) {
                    return '안전';
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
        pungmuPlatform2.setOption(option)


/***************************************************************/

window.addEventListener('resize', function() {
    gochonPlatform1.resize();
    gochonPlatform2.resize();
    pungmuPlatform1.resize();
    pungmuPlatform2.resize();
});