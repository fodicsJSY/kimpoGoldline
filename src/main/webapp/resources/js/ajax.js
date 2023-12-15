$(function(){
    $.ajax({
        url: "/rushHourChartData", 
        type: "GET",
        success: function(response){
            // console.log('성공 : ', response.rushHour7List);

            
            //==================7시=========================
            var rushHour7List = response.rushHour7List;

            for (var i = 0; i < rushHour7List.length; i++) {
                var currentItem = rushHour7List[i];
                //console.log(currentItem);


                var gimpoIn7 = currentItem.gimpoIn7 || 0;
                var gimpoOut7 = currentItem.gimpoOut7 || 0;
                var gochon7 = currentItem.gochon7 || 0;
                var pungmu7 = currentItem.pungmu7 || 0;
                
                
                // currentItem의 속성에 접근 확인
                // console.log(currentItem.gimpoIn7);
            }
            //==================7시=========================


            //==================8시=========================
            var rushHour8List = response.rushHour8List;
            
            for (var i = 0; i < rushHour8List.length; i++) {
                var currentItem = rushHour8List[i];
                //console.log(currentItem);
                
                
                var gimpoIn8 = currentItem.gimpoIn8 || 0;
                var gimpoOut8 = currentItem.gimpoOut8 || 0;
                var gochon8 = currentItem.gochon8 || 0;
                var pungmu8 = currentItem.pungmu8 || 0;
                
                
                // currentItem의 속성에 접근 확인
                // console.log(currentItem.gimpoIn8);
            }
            //==================8시=========================


            //==================9시=========================
            var rushHour9List = response.rushHour9List;
            
            for (var i = 0; i < rushHour9List.length; i++) {
                var currentItem = rushHour9List[i];
                //console.log(currentItem);
                
                
                var gimpoIn9 = currentItem.gimpoIn9 || 0;
                var gimpoOut9 = currentItem.gimpoOut9 || 0;
                var gochon9 = currentItem.gochon9 || 0;
                var pungmu9 = currentItem.pungmu9 || 0;
                
                
                // currentItem의 속성에 접근 확인
                // console.log(currentItem.gimpoIn9);
            }
            //==================9시=========================

            rushHourChart1();

             // 인파계수 실시간 누적 집계도 
            function rushHourChart1() {
                
                var rushHourChart1 = echarts.init(document.getElementById("rushHourChart"));
            
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

                series: [
                    {
                    name: '김포공항역(하차)',
                    type: 'bar',
                    data: [gimpoIn7, gimpoIn8, gimpoIn9],
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
                    data: [gochon7, gochon8, gochon9],
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
                    data: [pungmu7, pungmu8, pungmu9],
                        label: {
                                show: true,
                                position: 'top',
                                color: '#fff'  // 라벨 글씨색을 흰색으로 설정
                            }
                    }
                ]
                };
                //  차트 옵션 설정하기
                rushHourChart1.setOption(option)



                //정각이 되면 차트 리프레쉬 시작
                refreshAtTopOfHour()
            }

        },
        error: function(xhr, status, error) {
            console.error('Error loading chart data:', status, error);
        }
    });

});




/* 1분 간격으로 페이지 리프레쉬 시작 */
function refreshEveryMinute() {
    // 현재 시간 정보 가져오기
    var now = new Date();
    
    // 다음 정각 시간 설정
    var nextMinute = new Date(now);
    nextMinute.setMinutes(now.getMinutes() + 1);
    nextMinute.setSeconds(0);
    nextMinute.setMilliseconds(0);
    
    // 다음 정각까지의 시간 계산
    var millisTillNextMinute = nextMinute - now;
    
    // 다음 정각이 이미 지났으면 다음 분으로 설정
    if (millisTillNextMinute < 0) {
        millisTillNextMinute += 60000; // 1분 = 60000 밀리초
    }
    
    // 타이머 설정하여 매 1분마다 새로 고침
    setInterval(function () {
        location.reload(true); // true 파라미터는 캐시를 무시하고 새로고침
    }, millisTillNextMinute);
}

// 1분 간격으로 페이지 리프레쉬 시작
// refreshEveryMinute();


/* 정각이 되면 페이지 리프레쉬 시작 */
/* 매 시간 정각마다 페이지 리프레쉬 시작 */
function refreshAtTopOfHour() {
    // 현재 시간 정보 가져오기
    var now = new Date();
    
    // 다음 정각 시간 설정
    var nextHour = new Date(now);
    nextHour.setHours(now.getHours() + 1);
    nextHour.setMinutes(0);
    nextHour.setSeconds(0);
    nextHour.setMilliseconds(0);
    
    // 다음 정각까지의 시간 계산
    var millisTillNextHour = nextHour - now;
    
    // 정각이 이미 지났으면 다음 시간으로 설정
    if (millisTillNextHour < 0) {
        millisTillNextHour += 3600000; // 1시간 = 3600000 밀리초
    }
    
    // 타이머 설정하여 매 정각마다 새로 고침
    setInterval(function () {
        location.reload(true); // true 파라미터는 캐시를 무시하고 새로고침
    }, millisTillNextHour);
}
