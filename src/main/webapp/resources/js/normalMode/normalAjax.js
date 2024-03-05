$(function(){
    $.ajax({
        url: "/normalChartData", 
        type: "GET",
        success: function(response){
            // console.log('성공 : ', response);

            
            //==================24=========================
            var normal24List = response.normal24List;

            let occuHourList = [];
            let gimpoIn24List = [];
            let gimpoOut24List = [];
            let gochon24List = [];
            let pungmu24List = [];

            for (var i = 0; i < normal24List.length; i++) {
                var currentItem = normal24List[i];
                //console.log(currentItem);

                occuHourList.push(currentItem.occuHour);
                gimpoIn24List.push(currentItem.gimpoIn24);
                gimpoOut24List.push(currentItem.gimpoOut24);
                gochon24List.push(currentItem.gochon24);
                pungmu24List.push(currentItem.pungmu24);
                
                
                // currentItem의 속성에 접근 확인
                // console.log('occuHour1 : ', occuHourList);
                // console.log('gimpoIn24List : ', gimpoIn24List);
                // console.log('gimpoOut24List : ', gimpoOut24List);
                // console.log('gochon24List : ', gochon24List);
                // console.log('pungmu24List : ', pungmu24List);
    
                
                normalChart()
                
                // 인파계수 실시간 누적 집계도 
                function normalChart() {
                
                    var normalChart = echarts.init(document.getElementById("normalChart"));
                    // console.log('occuHour2 : ', occuHourList);
                
                    const colors = ['#5470C6', '#91CC75', '#EE6666', '#F7A221'];
                option = {
                color: colors,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'cross'
                    }
                },
                grid: {
                    tooltip: {
                        show: true
                    }
                },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['bar'] },
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
                    data: gimpoIn24List,
                    connectNulls: true  // 이 부분을 추가하여 꼭지점을 이어서 보도록 설정
                    },
                    {
                    name: '고촌역',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: gochon24List
                    },
                    {
                    name: '풍무역',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: pungmu24List
                    },
                    // {
                    // name: '군중밀집',
                    // type: 'line',
                    // yAxisIndex: 3,
                    // data: [1, 0, 0, 0, 0, 1, 4, 5, 6, 5, 5, 3, 2, 2, 1, 1, 2, 2, 3, 2, 2, 2, 2, 3]
                    // }
                ]
                };

                //  차트 옵션 설정하기
                normalChart.setOption(option)

            }
            }
            //==================24=========================
            
            
            

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
