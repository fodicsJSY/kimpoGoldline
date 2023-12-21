<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mainPage</title>

    <%-- fontawesome --%>
	<script src="https://kit.fontawesome.com/e75afc7597.js" crossorigin="anonymous"></script>

    <style>

        *{ 
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            background-color: #1e1e1e;
            color:white;
            font-family: NanumSquareEB;
        }


        /* 다 만들고 삭제예정 */
        div, main, section, header, footer, article, nav, aside, form 
        { border: 1px solid yellow; }  


        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh; /* 최소 높이를 뷰포트 높이의 100%로 설정합니다. */
            justify-content: center;
        }



        main{
            /* width: 1140px; */
            margin: auto;
            min-width: 100%;
            min-height: 100%;
            /* min-height: 요소의 최소 높이  
                            -> 내부 요소 없어도 최소 높이 유지
                            -> 내부 요소가 지정된 크기를 초과하면 
                                그에 맞게 늘어남
            */
            /* min-height: 500px; */
        }


        section{
            width:100%;
            height:100%;
            display: grid;
            /* grid-template-columns: repeat(2, 1fr);  */
            /* grid-auto-rows: 200px; */
            gap: 15px;
            grid-template-areas:
                "a a "
                "b c"
                "b c"
            ;
        }

        .gridBox{
            border: 1px solid white;
        }


        
        .gridBox1{
            grid-area: a;
            min-height: 200px;
        }
        .gridBox2{
            grid-area: b;
            min-height: 900px;
        }

        .gridBox3{
            grid-area: c;
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
     <%--
    <header style="background-color:skyblue;">
        <div style="height: 100%;  display:flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <div class="TopLeft">
                <div><a class="logo"> <img src="../../resources/img/fodics_bi.png"></a></div>
                <div><h1 id="main_title" >Ai VinUS DASHBOARD</h1></div>
            </div>
            <div class="TopRight">
                <p id="time_title" class="time">2021-00-00 10:00:00</p>
                <button class="btn btn-secondary dropdown-toggle" type="button" id="settingBtn" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-gear" style="color: #ffffff;"></i>
                </button>
            </div>
        </div> 

    </header>--%>

    <main>
    <section>
        <div class="gridBox gridBox1" style="background-color: red;"></div>
        <div class="gridBox gridBox2" style="background-color: orange;"></div>
        <div class="gridBox gridBox3" >
            <div class="cameraContainer" style="background-color: yellow;">
                <div class="cameraBox cameraBox1"  style="background-color: green;"></div>
                <div class="cameraBox cameraBox2"  style="background-color: blue;"></div>
                <div class="cameraBox cameraBox3" style="background-color: violet;"></div>
            </div>
        </div>
    </section>


    </main>

<%--
    <footer style="background-color:skyblue;">
         <div style="height: 100%; display:flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <div>※ 화면에 표시되는 모든 실시간 데이터는 1분마다 자동으로 업데이트 합니다. 다만 “시간대별 현황” 그래프의 실시간 데이터는 정시에 한 번씩 업데이트 합니다.</div>
            <div><img src="../../resources/img/fodics_logo.png"></div>
        </div> 
    </footer>
--%>

    <script>
    
    </script>
</body>
</html>
