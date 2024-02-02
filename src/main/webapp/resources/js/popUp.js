
// 팝업창 크기 조정
window.resizeTo(1000, 1000);


document.getElementById("selectMonth").addEventListener("click",()=>{

    // 월별 라디오 버튼이 선택되면 calenderContainer에 월 달력을 보여주도록 설정
    let container = document.getElementById("CalendarBox");

    // 기존의 월 달력 input이 이미 있다면 제거
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // 새로운 월 달력 input을 생성하여 추가
    let monthCalendarInput = document.createElement("input");
    monthCalendarInput.type = "month";
    monthCalendarInput.className = "dateInput";
    container.appendChild(monthCalendarInput);

    // calenderContainer를 보이도록 변경
    container.style.display = "block";

});



document.getElementById("selectDay").addEventListener("click",()=>{

    // 월별 라디오 버튼이 선택되면 calenderContainer에 월 달력을 보여주도록 설정
    let container = document.getElementById("CalendarBox");

    // 기존의 월 달력 input이 이미 있다면 제거
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // 새로운 월 달력 input을 생성하여 추가
    let monthCalendarInput = document.createElement("input");
    monthCalendarInput.type = "date";
    monthCalendarInput.className = "dateInput";
    container.appendChild(monthCalendarInput);

    // calenderContainer를 보이도록 변경
    container.style.display = "block";

});


document.getElementById("selectDay").addEventListener("click",()=>{

    // 월별 라디오 버튼이 선택되면 calenderContainer에 월 달력을 보여주도록 설정
    let container = document.getElementById("CalendarBox");

    // 기존의 월 달력 input이 이미 있다면 제거
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // 새로운 월 달력 input을 생성하여 추가
    let monthCalendarInput = document.createElement("input");
    monthCalendarInput.type = "date";
    monthCalendarInput.className = "dateInput";
    monthCalendarInput.className = "dateInput";
    container.appendChild(monthCalendarInput);

    // calenderContainer를 보이도록 변경
    container.style.display = "block";

});


document.getElementById("selectCustom").addEventListener("click",()=>{

    // 월별 라디오 버튼이 선택되면 calenderContainer에 월 달력을 보여주도록 설정
    let container = document.getElementById("CalendarBox");

    // 기존의 월 달력 input이 이미 있다면 제거
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // 새로운 월 달력 input을 생성하여 추가
    
    let fristDiv = document.createElement("div");
    container.appendChild(fristDiv);
    let monthCalendarInput = document.createElement("input");
    monthCalendarInput.type = "date";
    monthCalendarInput.className = "dateInput";
    monthCalendarInput.className = "dateInput";
    fristDiv.appendChild(monthCalendarInput);

    let secoDiv = document.createElement("div");

    // calenderContainer를 보이도록 변경
    container.style.display = "block";

});