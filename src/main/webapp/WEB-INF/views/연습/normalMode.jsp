<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nomalModePage</title>

    <%-- fontawesome --%>
	<script src="https://kit.fontawesome.com/e75afc7597.js" crossorigin="anonymous"></script>

    <%-- css --%>
    <link rel="stylesheet" href="../../resources/css/normalModePage-style.css">

    <style>

        *{ 
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            background-color: #1e1e1e;
            color:white;
            font-family: NanumSquareEB;
        }

        button:hover, a:hover{
            cursor: pointer;
        }


        /* 다 만들고 삭제예정 */
        div, main, section, header, footer, article, nav, aside, form 
        { border: 1px solid yellow; }  


        body {
            /* display: flex;
            flex-direction: column;
            justify-content: center; */
            min-height: 100vh; /* 최소 높이를 뷰포트 높이의 100%로 설정합니다. */
        }



        main{
            margin: auto;
            min-width: 100vh;
            min-height: 100vh;
            /* min-height: 요소의 최소 높이  
                            -> 내부 요소 없어도 최소 높이 유지
                            -> 내부 요소가 지정된 크기를 초과하면 
                                그에 맞게 늘어남
            */
            
        }


        section{
            width:100%;
            height:100%;
            display: grid;
            /* grid-template-columns: repeat(2, 1fr);  */
            /* grid-auto-rows: 200px; */
            gap: 15px;
            grid-template-areas:
                "a a"
                "b c"
                "b c"
            ;
        }

        .gridBox{
            border: 1px solid white;
        }


        
        .gridBox1{
            grid-area: a;
            /* min-height: 200px; */
            max-width: 100%;
        }
        .gridBox2{
            grid-area: b;
            /* min-height: 900px; */
            width: 100%;
            min-height: 1000px;
        }

        .gridBox3{
            grid-area: c;
            width: 100%;
        }


        .cameraContainer{
            width:100%;
            height:100%;
            display: grid;
            gap: 15px;
            grid-template-areas:
                "a b"
                "a b"
                "c c"
            ;
        }


        .cameraBox1{
            grid-area: a;
            min-height: 500px;
        }
        .cameraBox2{
            grid-area: b;
        }
        .cameraBox3{
            grid-area: c;
            min-height: 250px;
        }

    </style>
    
</head>
<body>
    <main>
    <section>
        <div class="gridBox gridBox1" style="background-color: red; ">
            <div class="headContainer" style="background-color: yellow;">
                <div class="modeContainer" >
                    <div class="searchBox" style="display: flex; justify-content: space-around;">
                        <div><input type="date" id="normalDateSearch" aria-label="Date-Time"></div>
                        <div><button type="button" id="normalDateSearchBtn">검색</button></div>
                    </div>
                    <div><a href="/"><button type="button">출근 모드 (7시 ~ 9시)</button></a></div>
                    <div><a href="/normalMode"><button type="button">기본 모드</button></a></div>
                    <div class="modeBox" style="display: flex; ">
                    </div>
                </div>
                <div class="clockContainer">
                    <h1><p id="time_title" class="time">2021-00-00 10:00:00</p></h1>
                </div>
            </div>
        </div>
        <div class="gridBox gridBox2" style="background-color: orange; width: 100%">
                <%-- 막대차트 캔버스 --%>
            <div class="chartContainer" id="NormalModeChart" style="width: 100%; height:100%;">
            </div> 
        </div>
        <div class="gridBox gridBox3" style="width: 100%">
            <div class="cameraContainer" style="background-color: yellow;">
                <div class="cameraBox cameraBox1"  style="background-color: green;">
                    <div class="throngChartTitleBox">
                        <h1>고촌역 군중밀집</h1>
                    </div>
                    <div class="throngChartBox">
                        <div class="throngChartTitle">
                            플랫폼1
                        </div>
                        <div class="throngChartContainer" id="gochonNormal1">
                            <%-- 게이지차트 캔버스 --%>
                        </div>
                    </div>
                    <div class="throngChartBox">
                        <div class="throngChartTitle">
                            플랫폼2
                        </div>
                        <div class="throngChartContainer" id="gochonNormal2">
                            <%-- 게이지차트 캔버스 --%>
                        </div>
                    </div>
                </div>
                <div class="cameraBox cameraBox2"  style="background-color: blue;">
                    <div class="throngChartTitleBox">
                        <h1>풍무역 군중밀집</h1>
                    </div>
                    <div class="throngChartBox">
                        <div class="throngChartTitle">
                            플랫폼1
                        </div>
                        <div class="throngChartContainer" id="pungmuNormal1">
                            <%-- 게이지차트 캔버스 --%>
                        </div>
                    </div>
                    <div class="throngChartBox">
                        <div class="throngChartTitle">
                            플랫폼2
                        </div>
                        <div class="throngChartContainer" id="pungmuNormal2">
                            <%-- 게이지차트 캔버스 --%>
                        </div>
                    </div>
                </div>
                <div class="cameraBox cameraBox3" style="background-color: violet;">
                    <div>일일 누계</div>
                    <div>
                        <div>(유출)김포공항역: </div>
                        <div>112233명</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>

    <script>
    </script>

    <%-- echarts --%>
	<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <script src="../../resources/js/clock.js"></script>
    <script src="../../resources/js/normalMode/normalSearch.js"></script>
    <script src="../../resources/js/normalMode/normalModeChart.js"></script>
    <script src="../../resources/js/normalMode/normalMode_gauge.js"></script>
</body>
</html>
