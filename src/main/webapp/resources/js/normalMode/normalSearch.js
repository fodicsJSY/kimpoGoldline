
/* 전역변수 시작 */
var forDate = document.getElementById('normalDateSearch').value
/* 전역변수 끝 */

/* 오늘 날짜로 초기화 시작*/
// 페이지 로드 시 오늘 날짜로 초기화
document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var formattedDate = today.toISOString().substring(0, 10);
    document.getElementById('normalDateSearch').value = formattedDate;
    forDate = formattedDate; // forDate 초기화
});
/* 오늘 날짜로 초기화 끝*/







/* 날짜 input값 바뀔때마다 서버로 보내기 */
document.getElementById('normalModeSearchBtn').addEventListener('click', function () {
    sendToServer();
});


/* 전역변수 보내기 시작???? */
function sendToServer() {
    occuDate = formatToYYYYMMDD(document.getElementById('normalDateSearch').value);
    console.log('Sending occuDate to server:', occuDate); // 콘솔에 occuDate 값 로그 출력

    $.ajax({
        url: '/normalDateChange',
        type: 'GET',
        data: { occuDate: occuDate },
        success: function (response) {
            console.log('Data sent successfully to server!');
            console.log('response : ',response);

            /*************인파계수 실시간 누적 집계도 시작************ */
            var normalDateChangeList = response.normalDateChangeList;
            let gimpoIn24Change = [];
            let gimpoOut24Change = [];
            let gochon24Change = [];
            let pungmu24Change = [];

            for (var i = 0; i < normalDateChangeList.length; i++) {
                var currentItem = normalDateChangeList[i];
                //console.log(currentItem);


                gimpoIn24Change.push(currentItem.gimpoIn24Change);
                gimpoOut24Change.push(currentItem.gimpoOut24Change);
                gochon24Change.push(currentItem.gochon24Change);
                pungmu24Change.push(currentItem.pungmu24Change);
                
                
                // currentItem의 속성에 접근 확인
                // console.log(gimpoIn24Change);
                // console.log(gochon24Change);
                // console.log(pungmu24Change);


                // 인파계수 실시간 누적 집계도 차트
                var normalChangeChart = echarts.init(document.getElementById("normalChart"));


                const colors = ['#5470C6', '#91CC75', '#EE6666'];
                option = {
                color: colors,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'cross'
                    }
                },
                grid: {
                    // right: '5%'
                },
                toolbox: {
                    feature: {
                    dataView: { show: true, readOnly: false },
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
                    data: ['00', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
                    }
                ],
                yAxis: [
                    {
                    type: 'value',
                    position: 'left',
                    alignTicks: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
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
                    name: '고촌역',
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
                    name: '김포공항역',
                    type: 'bar',
                    data: gimpoIn24Change
                    ,
                    },
                    {
                    name: '고촌역',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: gochon24Change
                    },
                    {
                    name: '풍무역',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: pungmu24Change
                    },
                ]
                };
                //  차트 옵션 설정하기
                normalChangeChart.setOption(option)
            }
            /*************인파계수 실시간 누적 집계도 끝************ */



            /*************인파계수 실시간 누적 count시작************ */
            var normalDateChangeCount = response.normalDateChangeCount;
            console.log('normalDateChangeCount', normalDateChangeCount);

            var gimpoIn24ChangeCount = normalDateChangeCount[0].gimpoIn24ChangeCount;
            var gimpoOut24ChangeCount = normalDateChangeCount[0].gimpoOut24ChangeCount;
            var gochon24ChangeCount = normalDateChangeCount[0].gochon24ChangeCount;
            var gochon1_24ChangeCount = normalDateChangeCount[0].gochon1_24ChangeCount;
            var gochon2_24ChangeCount = normalDateChangeCount[0].gochon2_24ChangeCount;
            var pungmu24ChangeCount = normalDateChangeCount[0].pungmu24ChangeCount;


            console.log('gimpoIn24ChangeCount', gimpoIn24ChangeCount);
            console.log('gimpoOut24ChangeCount', gimpoOut24ChangeCount);
            console.log('gochon24ChangeCount', gochon24ChangeCount);
            console.log('gochon1_24ChangeCount', gochon1_24ChangeCount);
            console.log('gochon2_24ChangeCount', gochon2_24ChangeCount);
            console.log('pungmu24ChangeCount', pungmu24ChangeCount);



            var pungmu24Count = document.getElementById('pungmu24Count');
            pungmu24Count.innerText = formatNumber(pungmu24ChangeCount);
            var gochon24Count = document.getElementById('gochon24Count');
            gochon24Count.innerText = formatNumber(gochon24ChangeCount);
            var gochon1_24Count = document.getElementById('gochon1_24Count');
            gochon1_24Count.innerText = formatNumber(gochon1_24ChangeCount);
            var gochon2_24Count = document.getElementById('gochon2_24Count');
            gochon2_24Count.innerText = formatNumber(gochon2_24ChangeCount);
            var gimpo24Count = document.getElementById('gimpo24Count');
            gimpo24Count.innerText = formatNumber(gimpoIn24ChangeCount);


 

            // 숫자를 천 단위로 포맷팅하는 함수
            function formatNumber(number) {
                return new Intl.NumberFormat().format(number);
            }

            /*************인파계수 실시간 누적 count끝************ */



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