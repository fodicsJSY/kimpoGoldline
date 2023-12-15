<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>normalPage</title>

    <%-- css --%>
    <link rel="stylesheet" href="../../resources/css/normalMode-style.css">

    <style>
        input[type='date'] {
            font-size: 23px;
            
        }

        /* 달력 이미지 변경 시작*/
        input[type='date']::-webkit-calendar-picker-indicator {
            
        padding: 10px;
        background: url(/resources/img/combo_drop.png) no-repeat;
        border-radius: 8px;
        text-align: center;
        font-size: 100%;
        margin: 10px;
        }

        input[type='date']::-webkit-calendar-picker-indicator:hover{
            cursor: pointer;
        }
        /* 달력 이미지 변경 끝*/
    </style>
    
</head>
<body>
<c:set var="total24CountList" value="${total24CountList}"/>
    <main>
    <section>
        <div class="gridBox gridBox1">
            <div class="headContainer" >
                <div class="modeContainer" >
                    <div><a href="/"><button type="button" class="modeBtn">출근모드</button></a></div>
                    <div><a href="/normalPage"><button type="button" class="modeBtn"  id="normalBtn" >기본모드</button></a></div>
                </div>
                <div class="clockContainer">
                    <h1><p id="time_title" class="time">2021-00-00 10:00:00</p></h1>
                </div>
                <div class="searchBox" style="display: flex; justify-content: space-around;">
                    <div><button type="button" class="searchBtn" id="normalModeSearchBtn">검색</button></div>
                    <div><input type="date" class="dateInput" id="normalDateSearch" aria-label="Date-Time"></div>
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
            <div class="chartContainer" id="normalChart" style="width: 100%; height:100%;">
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
                        <div><img src="/resources/img/icon_inflow.png" alt=""></div>
                        <div>풍무</div>
                    </div>
                    <div class="peopleCount">
                        <div class="inCount" id="pungmu24Count">
                            <fmt:formatNumber value="${total24CountList[0].pungmu24Count}" pattern="#,###" />
                        </div>
                    </div>
                </div>
                <div class="peopleCountBox">
                    <div class="countTitleBox">
                        <div><img src="/resources/img/icon_inflow.png" alt=""></div>
                        <div>고촌</div>
                    </div>
                    <div class="peopleCount">
                        <div class="inCount" id="gochon24Count">
                            <fmt:formatNumber value="${total24CountList[0].gochon24Count}" pattern="#,###" />
                        </div>
                    </div>
                    <div class="peopleCount2">
                        <div>
                            입구1
                        </div>
                        <div class="inCount" id="gochon1_24Count">
                            <fmt:formatNumber value="${total24CountList[0].gochon1_24Count}" pattern="#,###" />
                        </div>
                    </div>
                    <div class="peopleCount2">
                        <div>
                            입구2
                        </div>
                        <div class="inCount" id="gochon2_24Count">
                            <fmt:formatNumber value="${total24CountList[0].gochon2_24Count}" pattern="#,###" />
                        </div>
                    </div>

                </div>
                <div class="peopleCountBox">
                    <div class="countTitleBox">
                        <div><img src="/resources/img/icon_outflow.png" alt=""></div>
                        <div>
                            <div>김포</div>
                            <div>공항</div>
                        </div>
                    </div>
                    <div class="peopleCount">
                        <div class="outCount" id="gimpo24Count">
                            <fmt:formatNumber value="${total24CountList[0].gimpoIn24Count}" pattern="#,###" />
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

    <%-- CSV 대화상자 --%>
    <dialog open id="csv_dialog" style = "display:none; background-color: rgba(30,30,30,1); color:rgba(192,192,192,1); width: 336px; padding: 0px; top:80px; left:980px;">		
        <div style = "font-size: 14px; width: 330px; background-color: rgba(45,45,45,1); color:rgba(255,255,255,1); padding: 16px; ">
            <p>.csv 파일로 내려받기를 원하시는 항목을 선택</p>						
            <p style = "margin-top: 6px">하여 체크한 후 [확인] 버튼을 누르세요.</p>
        </div>
        <div style = "width: 330px;  border: 1px solid gray;"></div>
        <div style = "margin : 15px;"><input name="round" id="chk_csv_rushHourChart" type="checkbox"> <label for="chk_csv_rushHourChart"> 누적집계차트</label></div>
        <div style = "margin : 15px;"><input name="round" id="chk_csv_gochon1" type="checkbox">  <label for="chk_csv_gochon1">고촌1군중밀집</label></div>
        <div style = "margin : 15px;"><input name="round" id="chk_csv_gochon2" type="checkbox"> <label for="chk_csv_gochon2">고촌2군중밀집</label></div>
        <div style = "margin : 15px;"><input name="round" id="chk_csv_pungmu1" type="checkbox"> <label for="chk_csv_pungmu1"> 풍무1군중밀집</label></div>
        <div style = "margin : 15px;"><input name="round" id="chk_csv_pungmu2" type="checkbox">  <label for="chk_csv_pungmu2">풍무2군중밀집</label></div>
        <div style = "margin : 15px;"><input name="round" id="chk_csv_rushHourDaliyTotal" type="checkbox"> <label for="chk_csv_rushHourDaliyTotal">일일누계</label></div>
        <div style = "margin : 10px; float: right;">
            <a class="rollover" alt="확인" OnClick="OnCSV_OK()"><img  src="../../resources/img/btn_popConfirm.png"> <img src="../../resources/img/btn_popConfirm_hover.png" class="over"></a>
            <a class="rollover" alt="취소" OnClick="OnCSV_Cancel()"><img src="../../resources/img/btn_popCancel.png"> <img src="../../resources/img/btn_popCancel_hover.png" class="over"></a>
        </div>
    </dialog>

    <%-- 전역변수 시작 --%>
    <script>
        
    </script>
    <%-- 전역변수 끝 --%>

    <%-- echarts --%>
	<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <script src="../../resources/js/clock.js"></script>
    <script src="../../resources/js/normalMode/normalChart.js"></script>
    <script src="../../resources/js/normalMode/normalGauge.js"></script>
    <script src="../../resources/js/normalMode/normalSearch.js"></script>
    <script src="../../resources/js/normalMode/normalAjax.js"></script>
    <script src="../../resources/js/dialog.js"></script>
    <%-- <script src="../../resources/js/refresh.js"></script> --%>
</body>
</html>
