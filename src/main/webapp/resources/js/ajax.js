$(function(){
    $.ajax({
        url: "/rushHourChartData", 
        type: "GET",
        success: function(response){
            console.log('성공 : ', response.rushHourCountList);

            /*********************막대차트****************************/
            var rushHourCountList = response.rushHourCountList;

            var gimpoInRushHour=[];
            var gimpoOutRushHour=[];
            var gochonRushHour=[];
            var pungmuRushHour=[];


            for(var i = 0; i < rushHourCountList.length; i++){
                var currentItem = rushHourCountList[i];

                gimpoInRushHour.push(currentItem.gimpoInRushHour);
                gimpoOutRushHour.push(currentItem.gimpoOutRushHour);
                gochonRushHour.push(currentItem.gochonRushHour);
                pungmuRushHour.push(currentItem.pungmuRushHour);

                // currentItem의 속성에 접근 확인
                console.log(gimpoInRushHour);
                console.log(gochonRushHour);
                console.log(pungmuRushHour);

                // 인파계수 실시간 누적 집계도 
                var rushHourChart = echarts.init(document.getElementById("rushHourChart"));
            
                const colors = ['#5470C6', '#91CC75', '#EE6666'];
                option = {
                // responsive: true,
                color: colors,
                legend: {
                    data: ['김포공항역(하차)', '고촌역(승차)', '풍무역(승차)'],
                    textStyle: {
                        color: '#fff',
                        fontSize: 30
                        }
                },
                grid: {
                    tooltip: {
                        show: false
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
                    data: gimpoInRushHour,
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
                    data: gochonRushHour,
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
                    data: pungmuRushHour,
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
    
    
    



            }
            /*********************막대차트****************************/








        },
        error: function(xhr, status, error) {
            console.error('Error loading chart data:', status, error);
        }
    });

});







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








