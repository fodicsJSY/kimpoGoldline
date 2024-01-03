<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rushHourPage</title>

    <%-- css --%>
    <link rel="stylesheet" href="../../resources/css/rushHourMode-style.css">

    <%-- echarts --%>
	<script src="../../resources/js/echart/echart.min.js"></script>

    <%-- jquery --%>
    <script src="../../resources/js/jquery/jquery.min.js"></script>

    <style>
        input[type='date'] {

        }

        /* 달력 이미지 변경 시작*/
        input[type='date']::-webkit-calendar-picker-indicator {
            
        padding: 10px;
        background: url(/resources/img/combo_drop.png) center no-repeat;

        border-radius: 8px;
        text-align: center;
        /* font-size: 100%; */
        margin: 10px;
        }

        input[type='date']::-webkit-calendar-picker-indicator:hover{
            cursor: pointer;
        }
        /* 달력 이미지 변경 끝*/
    </style>
    
</head>
<body>
<c:set var="rushHourTotalList" value="${rushHourTotalList}"/>
<c:set var="selectPungmuPlatform1" value="${selectPungmuPlatform1}"/>
<c:set var="selectPungmuPlatform2" value="${selectPungmuPlatform2}"/>
<c:set var="selectGochonPlatform1" value="${selectGochonPlatform1}"/>
<c:set var="selectGochonPlatform2" value="${selectGochonPlatform2}"/>
    <main>
    <section>
        <div class="gridBox gridBox1">
            <div class="headContainer" >
                <div class="modeContainer" >
                    <div><a href="/"><button type="button" class="modeBtn" id="rushHourBtn" >출근모드</button></a></div>
                    <div><a href="/normalPage"><button type="button" class="modeBtn">기본모드</button></a></div>
                </div>
                <div class="clockContainer">
                    <h1><p id="time_title" class="time">2021-00-00 10:00:00</p></h1>
                </div>
                <div class="btnContainer">
                    <%-- <div>
                        <button type="button" class="settingButton" id="openModalBtn">설정</button>
                    </div> --%>
                    <div>
                        <%-- <a href="gimpoCSV://" id="exec"> --%>
                            <button type="button" class="scvButton" id="scvBtn">
                                <img src="/resources/img/icon_excel.png" class="excelImg" alt="">
                                <span>CSV</span>
                            </button>
                        <%-- </a> --%>
                    </div>
                    <div class="searchBox" style="display: flex; justify-content: space-around;">
                        <div><button type="button" class="searchBtn" id="rushHourModeSearchBtn">검색</button></div>
                        <div><input type="date" class="dateInput" id="mainDateSearch" aria-label="Date-Time"></div>
                    </div>
                </div>
                    <%-- <div><button id="csvBtn">csv</button></div> --%>
                    <%-- <div class="modeBox" style="display: flex; ">
                    </div> --%>
            </div>
        </div>
        <div class="gridBox gridBox2">
            <div class="rushHourChartTitleContainer">
                <div class="rushHourTitleBox">
                    <div><img src="/resources/img/icon_subway.png" alt=""></div>
                    <div class="lineName">김포골드라인</div>
                </div>
                <div class="chartName">인파 계수 실시간 누적 집계도</div>
            </div>
            <div class="chartContainer" id="rushHourChart" style="width: 100%; height:100%;">
                <%-- 막대차트 캔버스 --%>
            </div> 
        </div>
        <div class="gridBox gridBox3">
            <div class="cameraContainer">
                <div class="cameraBox cameraBox1">
                    <div class="throngChartTitleBox">
                        <div class="rushHourTitleBox">
                            <div><img src="/resources/img/icon_subway.png" alt=""></div>
                            <div class="lineName">고촌역</div>
                        </div>
                        <div class="chartName">군중밀집</div>
                    </div>
                    <div class="throngChartContents">
                        <div class="throngChartBox">
                            <div class="throngChartTitle">
                                플랫폼2
                            </div>
                            <div class="throngChartContainer" id="gochonPlatform1">
                                <%-- 게이지차트 캔버스 --%>
                            </div>
                        </div>
                        <div class="throngChartBox">
                            <div class="throngChartTitle">
                                플랫폼2
                            </div>
                            <div class="throngChartContainer" id="gochonPlatform2">
                                <%-- 게이지차트 캔버스 --%>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cameraBox cameraBox2">
                    <div class="throngChartTitleBox">
                        <div class="rushHourTitleBox">
                            <div><img src="/resources/img/icon_subway.png" alt=""></div>
                            <div class="lineName">풍무역</div>
                        </div>
                        <div class="chartName">군중밀집</div>
                    </div>
                    <div class="throngChartContents">
                        <div class="throngChartBox">
                            <div class="throngChartTitle">
                                플랫폼1
                            </div>
                            <div class="throngChartContainer" id="pungmuPlatform1">
                                <%-- 게이지차트 캔버스 --%>
                            </div>
                        </div>
                        <div class="throngChartBox">
                            <div class="throngChartTitle">
                                플랫폼2
                            </div>
                            <div class="throngChartContainer" id="pungmuPlatform2">
                                <%-- 게이지차트 캔버스 --%>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="gridBox gridBox4" >
            <div class="lineBox">
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div class="peopleCountContainer">
                <div class="peopleCountBox">
                    <div class="countTitleBox">
                        <div class="imgBox"><img src="/resources/img/icon_inflow.png" alt=""></div>
                        <div>풍무</div>
                    </div>
                    <div class="peopleCount">
                        <div class="inCount" id="pungmuInCount">
                            <fmt:formatNumber value="${rushHourTotalList[0].pungmuCount}" pattern="#,###" />
                        </div>
                    </div>
                </div>
                <div class="peopleCountBox">
                    <div class="countTitleBox">
                        <div class="imgBox"><img src="/resources/img/icon_inflow.png" alt=""></div>
                        <div>고촌</div>
                    </div>
                    <div class="peopleCount">
                        <div class="inCount" id="gochonInCount">
                            <fmt:formatNumber value="${rushHourTotalList[0].gochonCount}" pattern="#,###" />
                        </div>
                    </div>
                    <div class="peopleCount2">
                        <div>
                            입구1
                        </div>
                        <div class="inCount" id="gochon1Count">
                            <fmt:formatNumber value="${rushHourTotalList[0].gochon1_Count}" pattern="#,###" />
                        </div>
                    </div>
                    <div class="peopleCount2">
                        <div>
                            입구2
                        </div>
                        <div class="inCount" id="gochon2Count">
                            <fmt:formatNumber value="${rushHourTotalList[0].gochon2_Count}" pattern="#,###" />
                        </div>
                    </div>

                </div>
                <div class="peopleCountBox">
                    <div class="countTitleBox">
                        <div class="imgBox"><img src="/resources/img/icon_outflow.png" alt=""></div>
                        <div>
                            <div>김포</div>
                            <div>공항</div>
                        </div>
                    </div>
                    <div class="peopleCount">
                        <div class="outCount" id="gimpoOutCount">
                            <fmt:formatNumber value="${rushHourTotalList[0].gimpoInCount}" pattern="#,###" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="gridBox gridBox5">
            <div class="updateText">※ 화면에 표시되는 모든 실시간 데이터는 1분마다 자동으로 업데이트 합니다. 다만 시간별 그래프의경우 실시간 데이터는 정시에 한 번씩 업데이트 합니다.</div>
            <div><img src="/resources/img/fodics_logo.png" alt=""></div>
        </div>
    </section>
    </main>
    <%-- 모달창 사용 안함 --%>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" id="closeModalBtn">&times;</span>
            <p>
                <form action="">
                    고촌 플랫폼1
                    <select name="플랫폼1" class="selectBox" id="selectGochon1" >
                        <option value="">고촌-밀집-1</option>
                        <option value="">고촌-밀집-2</option>
                        <option value="">풍무-밀집-1</option>
                        <option value="">풍무-밀집-2</option>
                    </select>

                    <br><br>

                    고촌 플랫폼2
                    <select name="플랫폼2" class="selectBox" id="selectGochon2" >
                        <option value="">고촌-밀집-1</option>
                        <option value="">고촌-밀집-2</option>
                        <option value="">풍무-밀집-1</option>
                        <option value="">풍무-밀집-2</option>
                    </select>

                    <br><br>

                    풍무 플랫폼1
                    <select name="플랫폼1" class="selectBox" id="selectPungmu1" >
                        <option value="">고촌-밀집-1</option>
                        <option value="">고촌-밀집-2</option>
                        <option value="">풍무-밀집-1</option>
                        <option value="">풍무-밀집-2</option>
                    </select>

                    <br><br>

                    풍무 플랫폼2
                    <select name="플랫폼2" class="selectBox" id="selectPungmu2" >
                        <option value="">고촌-밀집-1</option>
                        <option value="">고촌-밀집-2</option>
                        <option value="">풍무-밀집-1</option>
                        <option value="">풍무-밀집-2</option>
                    </select>

                    <br><br>
                    
                    <button class="btn" id="confrim">확인</button>
                    <button class="btn" id="cancel">취소</button>
                </form>
            
            </p>
        </div>
    <%-- 모달창 사용 안함 --%>
</div>

    
    <%-- 전역변수 시작 --%>
    <script>
        var selectPungmuPlatform1 = ${selectPungmuPlatform1 != null ? selectPungmuPlatform1: 0 };
        var selectPungmuPlatform2 = ${selectPungmuPlatform2 != null ? selectPungmuPlatform2: 0 };
        var selectGochonPlatform1 = ${selectGochonPlatform1 != null ? selectGochonPlatform1: 0 };
        var selectGochonPlatform2 = ${selectGochonPlatform2 != null ? selectGochonPlatform2: 0 };
    </script>
    <%-- 전역변수 끝 --%>



    <script src="../../resources/js/clock.js"></script>
    <script src="../../resources/js/rushHourSearch.js"></script>
    <script src="../../resources/js/rushHourChart.js"></script>
    <script src="../../resources/js/gauge.js"></script>
    <script src="../../resources/js/ajax.js"></script>
    <%-- <script src="../../resources/js/refresh.js"></script> --%>
    <script src="../../resources/js/csv.js"></script> 
</body>
</html>
