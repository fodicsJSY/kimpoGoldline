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
  document.getElementById('selectMonth').checked = true;
  isModalOpen = true;
  // 월 input창 생성
  monthClickEvent();
  var monthSearch = document.getElementById("monthSearch");
  // console.log("monthSearch", monthSearch.value);
  var occuMonth = formatToYYYYMM(monthSearch.value);
  var from_date = occuMonth + "01";
  var to_date = occuMonth + "31";
    //console.log('from_date:', from_date); // 콘솔에 occuDate 값 로그 출력

  tableTitle.innerHTML = "김포공항 승차";

    
  $.ajax({
    url: "/monthUrl",
    type: "POST",
    data: { from_date: from_date, to_date: to_date, comboValue: "GimOut", bSum: 0 },
    success: function (response) {
        if (response.goToGimpoCSV && response.goToGimpoCSV.length > 0) {
          // GoGimpoTableNotDaySum(response.goToGimpoCSV);
        } else {
          // renderNoDataMessage();
        }
    }
  });
});


/* 김포 승차 시작 */
// tbody 
function goGimpoTableNotDaySum(data) {
  var dataContainer = document.querySelector(".dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  let div01 = document.createElement("div");
  dataContainer.appendChild(div01);
  let div02 = document.createElement("div");
  dataContainer.appendChild(div02);

  var dataTable1 = createGimpoTableNotDaySum();
  dataTable1.className = "dataTable";
  div01.appendChild(dataTable1);

  var dataTable2 = document.createElement("table");
  dataTable2.className = "dataTable";
  div02.appendChild(dataTable2);
  
  var dataTbody = document.createElement("tbody");
  dataTbody.className = "dataTbody";
  dataTable2.appendChild(dataTbody);

  data.forEach(function (item, index) {
    var no = index + 1;

    var tr = document.createElement("tr");
    dataTbody.appendChild(tr);

    createCell(tr, "td", "td_data1", no);
    createCell(tr, "td", "td_data2", item.occuDate);
    createCell(tr, "td", "td_data7", item.occuTime);
    createCell(tr, "td", "td_data3", item.gimpo_st_out);
    createCell(tr, "td", "td_data4", item.gimpo_ev_out);
    createCell(tr, "td", "td_data5", item.gimpo_ec_out);
    createCell(tr, "td", "td_data6", item.gimpo_st_out + item.gimpo_ev_out + item.gimpo_ec_out);
  });
}


// tbody + 일합계
function goGimpoTableDaySum(data) {
  var dataContainer = document.querySelector(".dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  let div01 = document.createElement("div");
  dataContainer.appendChild(div01);
  let div02 = document.createElement("div");
  dataContainer.appendChild(div02);

  var dataTable1 = createGimpoTableDaySum();
  dataTable1.className = "dataTable";
  div01.appendChild(dataTable1);

  var dataTable2 = document.createElement("table");
  dataTable2.className = "dataTable";
  div02.appendChild(dataTable2);
  
  var dataTbody = document.createElement("tbody");
  dataTbody.className = "dataTbody";
  dataTable2.appendChild(dataTbody);

  data.forEach(function (item, index) {
    var no = index + 1;

    var tr = document.createElement("tr");
    dataTbody.appendChild(tr);

    createCell(tr, "td", "td_data1", no);
    createCell(tr, "td", "td_data2", item.occuDate);
    createCell(tr, "td", "td_data3", item.gimpo_st_out);
    createCell(tr, "td", "td_data4", item.gimpo_ev_out);
    createCell(tr, "td", "td_data5", item.gimpo_ec_out);
    createCell(tr, "td", "td_data6", item.gimpo_st_out + item.gimpo_ev_out + item.gimpo_ec_out);
  });
}
/* 김포 승차 끝 */



/* 김포 하차 시작 */
// tbody 
function getGimpoTableNotDaySum(data) {
  var dataContainer = document.querySelector(".dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  let div01 = document.createElement("div");
  dataContainer.appendChild(div01);
  let div02 = document.createElement("div");
  dataContainer.appendChild(div02);

  var dataTable1 = createGimpoTableNotDaySum();
  dataTable1.className = "dataTable";
  div01.appendChild(dataTable1);

  var dataTable2 = document.createElement("table");
  dataTable2.className = "dataTable";
  div02.appendChild(dataTable2);
  
  var dataTbody = document.createElement("tbody");
  dataTbody.className = "dataTbody";
  dataTable2.appendChild(dataTbody);

  data.forEach(function (item, index) {
    var no = index + 1;

    var tr = document.createElement("tr");
    dataTbody.appendChild(tr);

    createCell(tr, "td", "td_data1", no);
    createCell(tr, "td", "td_data2", item.occuDate);
    createCell(tr, "td", "td_data7", item.occuTime);
    createCell(tr, "td", "td_data3", item.gimpo_st_in);
    createCell(tr, "td", "td_data4", item.gimpo_ev_in);
    createCell(tr, "td", "td_data5", item.gimpo_ec_in);
    createCell(tr, "td", "td_data6", item.gimpo_st_in + item.gimpo_ev_in + item.gimpo_ec_in);
  });
}


// tbody + 일합계
function getGimpoTableDaySum(data) {
  var dataContainer = document.querySelector(".dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  let div01 = document.createElement("div");
  dataContainer.appendChild(div01);
  let div02 = document.createElement("div");
  dataContainer.appendChild(div02);

  var dataTable1 = createGimpoTableDaySum();
  dataTable1.className = "dataTable";
  div01.appendChild(dataTable1);

  var dataTable2 = document.createElement("table");
  dataTable2.className = "dataTable";
  div02.appendChild(dataTable2);

  var dataTbody = document.createElement("tbody");
  dataTbody.className = "dataTbody";
  dataTable2.appendChild(dataTbody);

  data.forEach(function (item, index) {
    var no = index + 1;

    var tr = document.createElement("tr");
    dataTbody.appendChild(tr);

    createCell(tr, "td", "td_data1", no);
    createCell(tr, "td", "td_data2", item.occuDate);
    createCell(tr, "td", "td_data3", item.gimpo_st_in);
    createCell(tr, "td", "td_data4", item.gimpo_ev_in);
    createCell(tr, "td", "td_data5", item.gimpo_ec_in);
    createCell(tr, "td", "td_data6", item.gimpo_st_in + item.gimpo_ev_in + item.gimpo_ec_in);
  });
}
/* 김포 하차 끝 */





/* 풍무 승하차 시작 */
// tbody 
function pungmoTableNotDaySum(data) {
  var dataContainer = document.querySelector(".dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  let div01 = document.createElement("div");
  dataContainer.appendChild(div01);
  let div02 = document.createElement("div");
  dataContainer.appendChild(div02);

  var dataTable1 = createGoPungTableNotDaySum();
  dataTable1.className = "dataTable";
  div01.appendChild(dataTable1);

  var dataTable2 = document.createElement("table");
  dataTable2.className = "dataTable";
  div02.appendChild(dataTable2);
  
  var dataTbody = document.createElement("tbody");
  dataTbody.className = "dataTbody";
  dataTable2.appendChild(dataTbody);

  data.forEach(function (item, index) {
    var no = index + 1;

    var tr = document.createElement("tr");
    dataTbody.appendChild(tr);

    createCell(tr, "td", "goPung_td_data1", no);
    createCell(tr, "td", "goPung_td_data2", item.occuDate);
    createCell(tr, "td", "goPung_td_data5", item.occuTime);
    createCell(tr, "td", "goPung_td_data3", item.pungmu_in);
    createCell(tr, "td", "goPung_td_data4", item.pungmu_out);
  });
}


// tbody + 일합계
function pungmoTableDaySum(data) {
  var dataContainer = document.querySelector(".dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  let div01 = document.createElement("div");
  dataContainer.appendChild(div01);
  let div02 = document.createElement("div");
  dataContainer.appendChild(div02);

  var dataTable1 = createGoPungTableDaySum();
  dataTable1.className = "dataTable";
  div01.appendChild(dataTable1);

  var dataTable2 = document.createElement("table");
  dataTable2.className = "dataTable";
  div02.appendChild(dataTable2);

  var dataTbody = document.createElement("tbody");
  dataTbody.className = "dataTbody";
  dataTable2.appendChild(dataTbody);

  data.forEach(function (item, index) {
    var no = index + 1;

    var tr = document.createElement("tr");
    dataTbody.appendChild(tr);

    createCell(tr, "td", "goPung_td_data1", no);
    createCell(tr, "td", "goPung_td_data2", item.occuDate);
    createCell(tr, "td", "goPung_td_data3", item.pungmu_in);
    createCell(tr, "td", "goPung_td_data4", item.pungmu_out);
  });
}
/* 풍무 승하차 끝 */



/* 고촌 승하차 시작 */
// tbody 
function gochonTableNotDaySum(data) {
  var dataContainer = document.querySelector(".dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  let div01 = document.createElement("div");
  dataContainer.appendChild(div01);
  let div02 = document.createElement("div");
  dataContainer.appendChild(div02);

  var dataTable1 = createGoPungTableNotDaySum();
  dataTable1.className = "dataTable";
  div01.appendChild(dataTable1);

  var dataTable2 = document.createElement("table");
  dataTable2.className = "dataTable";
  div02.appendChild(dataTable2);
  
  var dataTbody = document.createElement("tbody");
  dataTbody.className = "dataTbody";
  dataTable2.appendChild(dataTbody);

  data.forEach(function (item, index) {
    var no = index + 1;

    var tr = document.createElement("tr");
    dataTbody.appendChild(tr);

    createCell(tr, "td", "goPung_td_data1", no);
    createCell(tr, "td", "goPung_td_data2", item.occuDate);
    createCell(tr, "td", "goPung_td_data5", item.occuTime);
    createCell(tr, "td", "goPung_td_data3", item.gochon_in);
    createCell(tr, "td", "goPung_td_data4", item.gochon_out);
  });
}


// tbody + 일합계
function gochonTableDaySum(data) {
  var dataContainer = document.querySelector(".dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  let div01 = document.createElement("div");
  dataContainer.appendChild(div01);
  let div02 = document.createElement("div");
  dataContainer.appendChild(div02);

  var dataTable1 = createGoPungTableDaySum();
  dataTable1.className = "dataTable";
  div01.appendChild(dataTable1);

  var dataTable2 = document.createElement("table");
  dataTable2.className = "dataTable";
  div02.appendChild(dataTable2);

  var dataTbody = document.createElement("tbody");
  dataTbody.className = "dataTbody";
  dataTable2.appendChild(dataTbody);

  data.forEach(function (item, index) {
    var no = index + 1;

    var tr = document.createElement("tr");
    dataTbody.appendChild(tr);

    createCell(tr, "td", "goPung_td_data1", no);
    createCell(tr, "td", "goPung_td_data2", item.occuDate);
    createCell(tr, "td", "goPung_td_data3", item.gochon_in);
    createCell(tr, "td", "goPung_td_data4", item.gochon_out);
  });
}
/* 고촌 승하차 끝 */






/* 김포 테이블헤드 시작*/
// thead
function createGimpoTableNotDaySum() {
  var table = document.createElement("table");
  table.className = "dataTable";
  var thead = document.createElement("thead");
  thead.className = "dataThead";
  table.appendChild(thead);
  var tr = document.createElement("tr");
  thead.appendChild(tr);
  
  ["순번", "날짜", "시간", "계단", "엘리베이터", "에스컬레이터", "합계"].forEach(function (title) {
    var th = document.createElement("th");
    th.innerHTML = title;
    if (title === "순번") {
      th.classList.add("th1");
    }else if(title === "날짜") {
      th.classList.add("th2");
    }else if(title === "시간") {
      th.classList.add("th7");
    }else if(title === "계단") {
      th.classList.add("th3");
    }else if(title === "엘리베이터") {
      th.classList.add("th4");
    }else if(title === "에스컬레이터") {
      th.classList.add("th5");
    }else{
      th.classList.add("th6");
    }
    tr.appendChild(th);
  });
  return table;
}

// thead + 일합계
function createGimpoTableDaySum() {
  var table = document.createElement("table");
  table.className = "dataTable";
  var thead = document.createElement("thead");
  thead.className = "dataThead";
  table.appendChild(thead);
  var tr = document.createElement("tr");
  thead.appendChild(tr);
  
  ["순번", "날짜", "계단", "엘리베이터", "에스컬레이터", "합계"].forEach(function (title) {
    var th = document.createElement("th");
    th.innerHTML = title;
    if (title === "순번") {
      th.classList.add("th1");
    }else if(title === "날짜") {
      th.classList.add("th2");
    }else if(title === "계단") {
      th.classList.add("th3");
    }else if(title === "엘리베이터") {
      th.classList.add("th4");
    }else if(title === "에스컬레이터") {
      th.classList.add("th5");
    }else{
      th.classList.add("th6");
    }
    tr.appendChild(th);
  });
  return table;
}
/* 김포 테이블헤드 끝*/


/* 풍무&고촌 테이블헤드 시작*/
// thead
function createGoPungTableNotDaySum() {
  var table = document.createElement("table");
  table.className = "dataTable";
  var thead = document.createElement("thead");
  thead.className = "dataThead";
  table.appendChild(thead);
  var tr = document.createElement("tr");
  thead.appendChild(tr);
  
  ["순번", "날짜", "시간", "승차", "하차"].forEach(function (title) {
    var th = document.createElement("th");
    th.innerHTML = title;
    if (title === "순번") {
      th.classList.add("goPung_th1");
    }else if(title === "날짜") {
      th.classList.add("goPung_th2");
    }else if(title === "시간") {
      th.classList.add("goPung_th5");
    }else if(title === "승차") {
      th.classList.add("goPung_th3");
    }else{
      th.classList.add("goPung_th4");
    }
    tr.appendChild(th);
  });
  return table;
}

// thead + 일합계
function createGoPungTableDaySum() {
  var table = document.createElement("table");
  table.className = "dataTable";
  var thead = document.createElement("thead");
  thead.className = "dataThead";
  table.appendChild(thead);
  var tr = document.createElement("tr");
  thead.appendChild(tr);
  
  ["순번", "날짜", "승차", "하차"].forEach(function (title) {
    var th = document.createElement("th");
    th.innerHTML = title;
    if (title === "순번") {
      th.classList.add("th1");
    }else if(title === "날짜") {
      th.classList.add("th2");
    }else if(title === "승차") {
      th.classList.add("th3");
    }else{
      th.classList.add("th4");
    }
    tr.appendChild(th);
  });
  return table;
}
/* 풍무&고촌 테이블헤드 끝*/




function createCell(row, elementType, className, content) {
    var cell = document.createElement(elementType);
    cell.className = className;
    cell.innerHTML = content;
    row.appendChild(cell);
}

function renderNoDataMessage() {
  var dataContainer = document.querySelector(".dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  let div01 = document.createElement("div");
  dataContainer.appendChild(div01);
  let div02 = document.createElement("div");
  dataContainer.appendChild(div02);

  var dataTable1 = createGimpoTableNotDaySum();
  dataTable1.className = "dataTable";
  div01.appendChild(dataTable1);
  
  var dataTable2 = document.createElement("table");
  dataTable2.className = "dataTable";
  div02.appendChild(dataTable2);
  
  var dataTbody = document.createElement("tbody");
  dataTbody.className = "dataTbody";
  dataTable2.appendChild(dataTbody);
  
  var tr = document.createElement("tr");
  dataTbody.appendChild(tr);
  
  var td = document.createElement("td");
  td.className = "noData";
  tr.appendChild(td);
  td.innerHTML = "데이터를 찾을 수 없습니다.";
}



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


// 모달이 열려 있는 경우에만 초기화
function initializeOnModalClose() {
  if (isModalOpen) {
      // 모달이 닫힐 때의 초기화 작업을 수행
      // 예: 입력 필드 초기화, 상태 초기화 등
      selectMonth.checked=true;
      selectDay.checked=false;
      selectCustom.checked=false;
      daySumCheckbox.checked=false;
  }
}