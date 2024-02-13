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
    <link rel="stylesheet" href="../../resources/css/modal.css">

    <%-- echarts --%>
	<script src="../../resources/js/echart/echart.min.js"></script>

    <%-- jquery --%>
    <script src="../../resources/js/jquery/jquery.min.js"></script>

    <%-- sweetalert2 --%>
    <script src="../../resources/js/sweetalert2.js"></script>

    <style>
        .dateInput{
            font-size: 23px;
        }

        /* 달력 이미지 변경 시작*/
        /*input[type='date']::-webkit-calendar-picker-indicator {*/
        .dateInput::-webkit-calendar-picker-indicator {
            
        padding: 10px;
        background: url(/resources/img/combo_drop.png) center no-repeat;

        border-radius: 8px;
        text-align: center;
        /* font-size: 100%; */
        margin: 10px;
        }

        .dateInput::-webkit-calendar-picker-indicator:hover{
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
                        <button type="button" class="scvButton" id="scvBtn">
                            <img src="/resources/img/icon_stats.png" class="excelImg" alt="">
                            <span>통계</span>
                        </button>
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
    <%-- 모달창 시작 --%>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <div class="section1">
                <div class="madalGrid">
                    <div class="modalHeader">
                        <div class="statsImgBox">
                            <div><img src="/resources/img/icon_stats.png" alt="" class="icon_statsImg"></div>
                            <div class="modalName">통계</div>
                        </div>
                        <div><img src="/resources/img/popup_winClose.png" alt="" class="close" id="closeBtn"></div>
                    </div>
                </div>
                <div class="madalGrid">
                    <div class="contentGrid">
                        <div class="selectOptionBox">
                            <div class="comboBoxContainer">
                                <select name="플랫폼1" class="selectBox" id="selectCombo" >
                                    <option class="selectOption" value="GimOut">김포공항역 승차</option>
                                    <option class="selectOption" value="GimIn">김포공항역 하차</option>
                                    <option class="selectOption" value="PungInOut">풍무역 승/하차</option>
                                    <option class="selectOption" value="GoInOut">고촌역 승/하차</option>
                                </select>
                            </div>
                            <div class="selectDate"><input type="radio" name="selectDate" id="selectMonth" checked> <label for="selectMonth">월별</label></div>
                            <div class="selectDate"><input type="radio" name="selectDate" id="selectDay"> <label for="selectDay">일별</label></div>
                            <div class="customBox">
                                <div class="selectDate"><input type="radio" name="selectDate" id="selectCustom"> <label for="selectCustom">기간별</label></div>
                                <div class="selectDate"><input type="checkBox" name="daySum" id="daySumCheckbox" ><label for="daySumCheckbox"> 일합계</label></div>
                                <%-- <div class="selectDate"><input type="checkBox" name="daySum" id="daySumCheckbox" disabled><label for="daySum"> 일합계</label></div> --%>
                            </div>
                        </div>
                        <div class="selectOptionBox">
                            <div class="calenderContainer" id="CalendarBox">
                                <%-- <div><input type="month" class="calender" id="monthSearch" aria-label="Date-Time"></div> --%>
                            </div>
                            <div><button class="btn" id="modalDataBtn">조회</button></div>
                        </div>
                    </div>
                    <div class="contentGrid">
                        <div class="titleBox">
                            <div class="tableTitle" id="table_title"></div>
                                <div><button class="btn" id="dataSaveBtn">저장</button></div>
                        </div>
                        <div class="dataContainer">
                        <div>
                            <table class="dataTable">
                                <thead class="dataThead">
                                    <tr>
                                        <th>순번</th>
                                        <th>날짜</th>
                                        <th>시간</th>
                                        <th>계단</th>
                                        <th>엘리베이터</th>
                                        <th>에스컬레이터</th>
                                        <th>합계</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>    
                        <div>
                            <table class="dataTable">
                                <tbody class="dataTbody">
                                <tr>
                                    <td style="text-align: center;">데이터를 불러오고 있습니다.</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <%-- 모달창 끝 --%>

    
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
    <script src="../../resources/js/refresh.js"></script>
    <script src="../../resources/js/modal.js"></script> 
    <script src="../../resources/js/modalData.js"></script> 
    <script src="../../resources/js/modalSave.js"></script> 
</body>
</html>
