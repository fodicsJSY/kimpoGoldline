/* 전역변수 시작 */
var forDate = document.getElementById('mainDateSearch').value
/* 전역변수 끝 */

/* 오늘 날짜로 초기화 시작*/
// 페이지 로드 시 오늘 날짜로 초기화
document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var formattedDate = today.toISOString().substring(0, 10);
    document.getElementById('mainDateSearch').value = formattedDate;
    forDate = formattedDate; // forDate 초기화
});
/* 오늘 날짜로 초기화 끝*/



/* 날짜 input값 바뀔때마다 서버로 보내기 */
document.getElementById('rushHourModeSearchBtn').addEventListener('click', function () {
    sendToServer();
});




/* 전역변수 보내기 시작???? */
function sendToServer() {
    occuDate = formatToYYYYMMDD(document.getElementById('mainDateSearch').value);
    // console.log('Sending occuDate to server:', occuDate); // 콘솔에 occuDate 값 로그 출력

    $.ajax({
        url: '/rushHourDateChange',
        type: 'GET',
        data: { occuDate: occuDate },
        success: function (response) {
            // console.log('Data sent successfully to server!');
            // console.log('response : ',response);

            
            var rushHourDateChangeList = response.rushHourDateChangeList;
            let hour = [];
            let gimpoInChange = [];
            let gochonChange = [];
            let pungmuChange = [];

            for (var i = 0; i < rushHourDateChangeList.length; i++) {
                var currentItem = rushHourDateChangeList[i];
                //console.log(currentItem);


                hour.push(currentItem.hour);
                gimpoInChange.push(currentItem.gimpoInChange);
                gochonChange.push(currentItem.gochonChange);
                pungmuChange.push(currentItem.pungmuChange);
                
                
                // currentItem의 속성에 접근 확인
                // console.log(gimpoInChange);
                // console.log(gochonChange);
                // console.log(pungmuChange);


                    // 인파계수 실시간 누적 집계도 
                    var rushHourChangeChart = echarts.init(document.getElementById("rushHourChart"));
                
                    const colors = ['#5470C6', '#91CC75', '#EE6666'];
                    option = {
                    // responsive: true,
                    color: colors,
                    tooltip: {
                        trigger: 'axis',
                        axis: 'false',
                        axisPointer: {
                        type: 'cross'
                        }
                    },
                    toolbox: {
                        feature: {
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                        },
                        
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
                        data: gimpoInChange,
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
                        data: gochonChange,
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
                        data: pungmuChange,
                            label: {
                                    show: true,
                                    position: 'top',
                                    color: '#fff'  // 라벨 글씨색을 흰색으로 설정
                                }
                        }
                    ]
                    };
                    //  차트 옵션 설정하기
                    rushHourChangeChart.setOption(option)
            }


        /*************인파계수 실시간 누적 count시작*************/
            var rushHourChangeTotalCount = response.rushHourChangeTotalCount;
            // console.log('rushHourChangeTotalCount', rushHourChangeTotalCount);

            var gimpoInChangeCount = rushHourChangeTotalCount[0].gimpoInChangeCount;
            var gimpoOutChangeCount = rushHourChangeTotalCount[0].gimpoOutChangeCount;
            var gochonChangeCount = rushHourChangeTotalCount[0].gochonChangeCount;
            var gochon1_ChangeCount = rushHourChangeTotalCount[0].gochon1_ChangeCount;
            var gochon2_ChangeCount = rushHourChangeTotalCount[0].gochon2_ChangeCount;
            var pungmuChangeCount = rushHourChangeTotalCount[0].pungmuChangeCount;


            // console.log('gimpoInChangeCount', gimpoInChangeCount);
            // console.log('gimpoOutChangeCount', gimpoOutChangeCount);
            // console.log('gochonChangeCount', gochonChangeCount);
            // console.log('gochon1_ChangeCount', gochon1_ChangeCount);
            // console.log('gochon2_ChangeCount', gochon2_ChangeCount);
            // console.log('pungmuChangeCount', pungmuChangeCount);

            var gimpoOutCount = document.getElementById('gimpoOutCount');
            gimpoOutCount.innerText = formatNumber(gimpoInChangeCount);
            var gochonInCount = document.getElementById('gochonInCount');
            gochonInCount.innerText = formatNumber(gochonChangeCount);
            var gochon1Count = document.getElementById('gochon1Count');
            gochon1Count.innerText = formatNumber(gochon1_ChangeCount);
            var gochon2Count = document.getElementById('gochon2Count');
            gochon2Count.innerText = formatNumber(gochon2_ChangeCount);
            var pungmuInCount = document.getElementById('pungmuInCount');
            pungmuInCount.innerText = formatNumber(pungmuChangeCount);




            // 숫자를 천 단위로 포맷팅하는 함수
            function formatNumber(number) {
                return new Intl.NumberFormat().format(number);
            }

        /*************인파계수 실시간 누적 count끝*************/

        }
    });



    /* 날짜 형식화 함수 */
    /* YYYYMMDD 형식으로 변환하는 함수 */
    function formatToYYYYMMDD(dateString) {
        var year = dateString.substring(0, 4);
        var month = dateString.substring(5, 7);
        var day = dateString.substring(8, 10);
        return year + month + day;
    }
};