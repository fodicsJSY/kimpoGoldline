    function gauge_g1(result){
        console.log("gauge_g1 result", result );
        
        var gaugeData_g1 = result.selectGochonPlatform1;
        console.log("gauge_g1 gaugeData_g1", gaugeData_g1 );
        
        var g1_objectClass = gaugeData_g1[0].objectClass;
        console.log("gauge_g1 g1_objectClass", g1_objectClass );
        var g1_grade = gaugeData_g1[0].grade;
        console.log("gauge_g1 g1_grade", g1_grade );


        var gochonPlatform1 = echarts.init(document.getElementById("gochonPlatform1"));
        
        option = {
            series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 109,
            max: 189,
            splitNumber: 10,
            axisLabel: {  // 숫자 표시 없애기
                show: false
            },
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [
                        [0.25, '#32B16C'],
                        [0.5, '#FFFF00'],
                        [0.75, '#F39800'],
                        [1, '#E5004F']
                    ]
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
            length: 20,
            distance: -60,
            lineStyle: {
                color: 'auto',
                width: 0
            }
        },
        splitLine: {
            distance: -70,
            length: 15,
            offsetCenter: [0, '-100%'],
            lineStyle: {
                color: '#fff',
            }
        },
            title: {
                offsetCenter: [0, '-40%'],
            fontSize: 25,
            color: 'inherit'
            },
            detail: {
                fontSize: 30,
                offsetCenter: [0, '-5%'],
                valueAnimation: true,
                formatter: function (value) {
                    return value + '%';
                },
                color: 'inherit'
            },
            data: [
                {
                    name: g1_grade, // 등급
                    value: g1_objectClass, // %값
                }
            ]
        }
    ]
};

//  차트 옵션 설정하기
gochonPlatform1.setOption(option)


}

/***************************************************************/
    
    function gauge_g2(result){
        console.log("gauge_g1 result", result );
        
        var gaugeData_g2 = result.selectGochonPlatform2;
        console.log("gauge_g2 gaugeData_g2", gaugeData_g2 );
        
        var g2_objectClass = gaugeData_g2[0].objectClass;
        console.log("gauge_g2 g2_objectClass", g2_objectClass );
        var g2_grade = gaugeData_g2[0].grade;
        console.log("gauge_g2 g2_grade", g2_grade );


    var gochonPlatform2 = echarts.init(document.getElementById("gochonPlatform2"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 109,
            max: 189,
            splitNumber: 10,
            axisLabel: {  // 숫자 표시 없애기
            show: false
            },
            axisLine: {
            lineStyle: {
                width: 40,
            color: [
                [0.25, '#32B16C'],
                [0.5, '#FFFF00'],
                [0.75, '#F39800'],
                [1, '#E5004F']
            ]
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
            length: 20,
            distance: -60,
            lineStyle: {
                color: 'auto',
                width: 0
            }
            },
            splitLine: {
            distance: -70,
            length: 15,
            offsetCenter: [0, '-100%'],
            lineStyle: {
                color: '#fff',
            }
            },
            title: {
            offsetCenter: [0, '-40%'],
            fontSize: 25,
            color: 'inherit'
            },
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-5%'],
            valueAnimation: true,
            formatter: function (value) {
                return value + '%';
            },
            color: 'inherit'
            },
            data: [
            {
                name: g2_grade, // 등급
                value: g2_objectClass, // %값
            }
            ]
        }
        ]
    };


        //  차트 옵션 설정하기
        gochonPlatform2.setOption(option)

    }
    /***************************************************************/        
    function gauge_p1(result){
        console.log("gauge_p1 result", result );
        
        var gaugeData_p1 = result.selectPungmuPlatform1;
        console.log("gauge_p1 gaugeData_p1", gaugeData_p1 );
        
        var p1_objectClass = gaugeData_p1[0].objectClass;
        console.log("gauge_p1 p1_objectClass", p1_objectClass );
        var p1_grade = gaugeData_p1[0].grade;
        console.log("gauge_p1 p1_grade", p1_grade );
    
    var pungmuPlatform1 = echarts.init(document.getElementById("pungmuPlatform1"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 109,
            max: 189,
            splitNumber: 10,
            axisLabel: {  // 숫자 표시 없애기
            show: false
            },
            axisLine: {
            lineStyle: {
                width: 40,
            color: [
                [0.25, '#32B16C'],
                [0.5, '#FFFF00'],
                [0.75, '#F39800'],
                [1, '#E5004F']
            ]
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
            length: 20,
            distance: -60,
            lineStyle: {
                color: 'auto',
                width: 0
            }
            },
            splitLine: {
            distance: -70,
            length: 15,
            offsetCenter: [0, '-100%'],
            lineStyle: {
                color: '#fff',
            }
            },
            title: {
            offsetCenter: [0, '-40%'],
            fontSize: 25,
            color: 'inherit'
            },
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-5%'],
            valueAnimation: true,
            formatter: function (value) {
                return value + '%';
            },
            color: 'inherit'
            },
            data: [
            {
                name: p1_grade, // 등급
                value: p1_objectClass, // %값
            }
            ]
        }
        ]
    };


        //  차트 옵션 설정하기
        pungmuPlatform1.setOption(option)
    }
    /***************************************************************/

    function gauge_p2(result){
        console.log("gauge_p2 result", result );
        
        var gaugeData_p2 = result.selectPungmuPlatform2;
        console.log("gauge_p2 gaugeData_p2", gaugeData_p2 );
        
        var p2_objectClass = gaugeData_p2[0].objectClass;
        console.log("gauge_p2 p2_objectClass", p2_objectClass );
        var p2_grade = gaugeData_p2[0].grade;
        console.log("gauge_p2 p2_grade", p2_grade );
    
        var pungmuPlatform2 = echarts.init(document.getElementById("pungmuPlatform2"));

    option = {
        series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '100%',
            min: 109,
            max: 189,
            splitNumber: 10,
            axisLabel: {  // 숫자 표시 없애기
            show: false
            },
            axisLine: {
            lineStyle: {
                width: 40,
            color: [
                [0.25, '#32B16C'],
                [0.5, '#FFFF00'],
                [0.75, '#F39800'],
                [1, '#E5004F']
            ]
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
            length: 20,
            distance: -60,
            lineStyle: {
                color: 'auto',
                width: 0
            }
            },
            splitLine: {
            distance: -70,
            length: 15,
            offsetCenter: [0, '-100%'],
            lineStyle: {
                color: '#fff',
            }
            },
            title: {
            offsetCenter: [0, '-40%'],
            fontSize: 25,
            color: 'inherit'
            },
            detail: {
            fontSize: 30,
            offsetCenter: [0, '-5%'],
            valueAnimation: true,
            formatter: function (value) {
                return value + '%';
            },
            color: 'inherit'
            },
            data: [
            {
                name: p2_grade, // 등급
                value: p2_objectClass, // %값
            }
            ]
        }
        ]
    };


        //  차트 옵션 설정하기
        pungmuPlatform2.setOption(option)

}
/***************************************************************/

window.addEventListener('resize', function() {
    gochonPlatform1.resize();
    gochonPlatform2.resize();
    pungmuPlatform1.resize();
    pungmuPlatform2.resize();
});