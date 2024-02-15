// 모달 열기 버튼과 모달 닫기 버튼 요소 가져오기
var scvBtn = document.getElementById('scvBtn');
var closeBtn = document.getElementById('closeBtn');

// 모달 요소 가져오기
var modal = document.getElementById('myModal');
var dimmedLayer = document.getElementById('dimmedLayer');

let isModalOpen = false;

// 모달 열기 버튼에 이벤트 리스너 추가
scvBtn.addEventListener('click', function() {
   // 새로고침 타이머를 멈추기
  clearInterval(refreshTimer);

  //모달창 열림
  modal.style.display = 'block';
  isModalOpen = true;
  initializeOnModalClose();
  
});




// 모달 닫기 버튼에 이벤트 리스너 추가
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  isModalOpen = false;
  refreshEveryMinute();
});




//모달 외부를 클릭하면 모달이 닫히도록 설정
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    isModalOpen = false;
    refreshEveryMinute();
  }
});




/* 월별 라디오버튼 클릭 시작 */ 
var selectMonth = document.getElementById("selectMonth");
selectMonth.addEventListener("click",()=>{
  monthClickEvent();
});

function monthClickEvent(){
    // 월별 라디오 버튼이 선택되면 calenderContainer에 월 달력을 보여주도록 설정
  let container = document.getElementById("CalendarBox");

  // 기존의 월 달력 input이 이미 있다면 제거
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }

  // 새로운 월 달력 input을 생성하여 추가
  let monthCalendarInput = document.createElement("input");
  monthCalendarInput.type = "month";
  monthCalendarInput.className = "calender";
  monthCalendarInput.id = "monthSearch";

  // 현재 날짜를 가져와서 설정
  var today = new Date();
  var formattedDate = today.toISOString().substring(0, 7);
  // monthSearch.innerHTML = formattedDate;
  // console.log("monthSearch", monthSearch);

  monthCalendarInput.value = formattedDate;

  container.appendChild(monthCalendarInput);

  // calenderContainer를 보이도록 변경
  container.style.display = "block";
};
/* 월별 라디오버튼 클릭 끝 */ 






/* 일별 라디오버튼 클릭 시작 */ 
var selectDay = document.getElementById("selectDay");
selectDay.addEventListener("click",()=>{
  dayClickEvent();
});


function dayClickEvent(){

  // 일별 라디오 버튼이 선택되면 calenderContainer에 월 달력을 보여주도록 설정
  let container = document.getElementById("CalendarBox");

  // 기존의 일 달력 input이 이미 있다면 제거
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }

  // 새로운 일 달력 input을 생성하여 추가
  let dayCalendarInput = document.createElement("input");
  dayCalendarInput.type = "date";
  dayCalendarInput.className = "calender";
  dayCalendarInput.id = "daySearch";

  // 현재 날짜를 가져와서 설정
  var today = new Date();
  var formattedDate = today.toISOString().substring(0, 10);
  dayCalendarInput.value = formattedDate;

  container.appendChild(dayCalendarInput);

  // calenderContainer를 보이도록 변경
  container.style.display = "block";

};
/* 일별 라디오버튼 클릭 끝 */ 




/* 커스텀 라디오버튼 클릭 시작 */ 
var selectCustom = document.getElementById("selectCustom");
selectCustom.addEventListener("click",()=>{
  customClickEvent();
});

function customClickEvent() {

    // 월별 라디오 버튼이 선택되면 calenderContainer에 월 달력을 보여주도록 설정
    let container = document.getElementById("CalendarBox");
  
    // 기존의 월 달력 input이 이미 있다면 제거
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
  
    // 새로운 달력 input을 생성하여 추가
    let fristDiv = document.createElement("div");
    container.appendChild(fristDiv);
    let customCalendarInput = document.createElement("input");
    customCalendarInput.type = "date";
    customCalendarInput.className = "calender";
    customCalendarInput.id = "customDaySearch1";

  
    // 현재 날짜를 가져와서 설정
    var today = new Date();
    var formattedDate = today.toISOString().substring(0, 10);
    customCalendarInput.value = formattedDate;

    fristDiv.appendChild(customCalendarInput);
    // console.log("customCalendarInput", customCalendarInput.value);

    let secondDiv = document.createElement("div");
    container.appendChild(secondDiv);
    secondDiv.innerHTML= "&nbsp~&nbsp";
      
    let thridDiv = document.createElement("div");
    container.appendChild(thridDiv);
    let customCalendarInput2 = document.createElement("input");
    customCalendarInput2.type = "date";
    customCalendarInput2.className = "calender";
    customCalendarInput2.id = "customDaySearch2";

    customCalendarInput2.value = formattedDate;
  
    thridDiv.appendChild(customCalendarInput2);
    // console.log("customCalendarInput2", customCalendarInput2.value);
  
  
    // calenderContainer를 보이도록 변경
    container.style.display = "block";
};
/* 커스텀 라디오버튼 클릭 끝 */ 





// formatToYYYYMM 함수 정의
function formatToYYYYMM(dateString) {
  var year = dateString.substring(0, 4);
  var month = dateString.substring(5, 7);
  return year + month;
}



//모달 초기화
function initializeOnModalClose() {
  if (isModalOpen) {
      // 모달이 닫힐 때의 초기화 작업을 수행
      // 예: 입력 필드 초기화, 상태 초기화 등

      // selectCombo 요소 가져오기
      var selectCombo = document.getElementById("selectCombo");

      // "김포공항역 승차" 옵션 선택하기
      for (var i = 0; i < selectCombo.options.length; i++) {
          if (selectCombo.options[i].value === "GimOut") {
              selectCombo.options[i].selected = true;
              break;
          }
      }

      selectMonth.checked=true;
      daySumCheckbox.checked=false;

      // 월 input창 생성
      monthClickEvent();

      var monthSearch = document.getElementById("monthSearch");
      // console.log("monthSearch", monthSearch.value);
      var occuMonth = formatToYYYYMM(monthSearch.value);
      var from_date = occuMonth + "01";
      var to_date = occuMonth + "31";
        //console.log('from_date:', from_date); // 콘솔에 occuDate 값 로그 출력

      tableTitle.innerHTML = "김포공항 승차";
      fristTible();

      // 데이터 가져오기
      $.ajax({
        url: "/monthUrl",
        type: "POST",
        data: { from_date: from_date, to_date: to_date, comboValue: "GimOut", bSum: 0 },
        success: function (response) {
            if (response.goToGimpoCSV && response.goToGimpoCSV.length > 0) {
              goGimpoTableNotDaySum(response.goToGimpoCSV);
            } else {
              renderNoDataMessage();
            }
        }
      });
  }
}


