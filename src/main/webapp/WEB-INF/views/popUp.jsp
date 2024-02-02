<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>통계</title>

    <%-- css --%>
    <link rel="stylesheet" href="../../resources/css/popUp.css">


    <style>
   /* 다 만들고 삭제예정 */
        div, main, section, header, footer, article, nav, aside, form 
        { border: 1px solid yellow; }  




        .gridBox{
            border: 1px solid white;
        }

        .gridBox1{
            grid-area: a;
            /* min-height: 200px; */
            max-width: 100%;
            padding: 0 10px 5px 10px;


        }

        .gridBox2{
            grid-area: b;
            /* min-height: 200px; */
            max-width: 100%;
            padding: 0 10px 5px 10px;
        }

    </style>

    <%-- jquery --%>
    <script src="../../resources/js/jquery/jquery.min.js"></script>
</head>
<body>

    <main>
    <section>
        <div class="gridBox gridBox1">
            <div class="headContainer" >
                <div>
                    <select name="승/하차">
                        <option value="">김포공항역 승차</option>
                        <option value="">김포공항역 하차</option>
                        <option value="">풍무역 승/하차</option>
                        <option value="">고촌역 승/하차</option>
                    </select>
                </div>
                <div><input type="radio" name="selectDate" id="selectMonth" checked> <label for="selectMonth">월별</label></div>
                <div><input type="radio" name="selectDate" id="selectDay"> <label for="selectDay">일별</label></div>
                <div><input type="radio" name="selectDate" id="selectCustom"> <label for="selectCustom">기간별</label></div>
                <div class="calenderContainer" id="CalendarBox">
                    <div><input type="month" class="dateInput" id="startDateSearch" aria-label="Date-Time"></div>
                </div>
                <div><button class="searchBtn" id="tableSearchBtn">조회</button></div>
            </div>
        123456
        </div>
        <div class="gridBox gridBox2">
            <div class="titleContainer">
                <div><h1>김포공항 승차</h1></div>
                <div><button class="searchBtn" id="SaveBtn">저장</button></div>
            </div>
            <div class="contentContainer">
                <div class="tableContainer">
                    <table border=1>
                        <tr>
                            <th>순번</th>
                            <th>일시</th>
                            <th>계단</th>
                            <th>엘리베이터</th>
                            <th>에스컬레이터</th>
                            <th>합계</th>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>123</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>123</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </section>


    </main>

    <h1>팝업입니다만</h1>



    <script src="../../resources/js/popUp.js"></script> 
</body>
</html>