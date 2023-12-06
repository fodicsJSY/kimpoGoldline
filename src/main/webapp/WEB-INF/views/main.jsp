<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mainPage</title>

    <style>

        *{ 
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            background-color: black;
            color:white;
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


        header{
            height:10%;
        }


        footer{
            height:10%;
        }


        main{
            /* width: 1140px; */
            margin: auto;
            min-width: 100%;

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
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2개씩 설정 */
            gap: 5px;
            }

        .gridBox{
            min-height: 600px;
            border: 1px solid white;
        }

        .cameraContainer{
            width:100%;
            height:100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2개씩 설정 */
            gap: 5px;
        }


    </style>
    
</head>
<body>
    
    <header>
        <div>
            123456
        </div>
    </header>

    <main>
    <section>
        <div class="gridBox">
        123456
        </div>
        <div class="gridBox"></div>
        <div class="gridBox"></div>
        <div class="gridBox">
            <div class="cameraContainer">
                <div class="cameraBox"></div>
                <div class="cameraBox"></div>
                <div class="cameraBox"></div>
                <div class="cameraBox"></div>
            </div>
        </div>
    </section>


    </main>


    <footer>
        <div style="display:flex; flex-direction: row; justify-content: space-between;">
            <div>(주)포딕스시스템</div>
            <div>포딕스로고</div>
        </div>
    </footer>


    <script>
    
    </script>
</body>
</html>
