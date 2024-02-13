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

    /*
  $.ajax({
    url: "/monthUrl", 
    type: "POST",
    data: { from_date:from_date, to_date:to_date, comboValue:"GimOut", bSum:0},
    success: function(response){

      console.log("response", response);


      if(response.goToGimpoCSV){
      
        var goToGimpoCSV = response.goToGimpoCSV;

        if(goToGimpoCSV.length == 0){
          console.log("length : 0")
          var dataContainer = document.querySelector(".dataContainer");
          while (dataContainer.firstChild) {
            dataContainer.removeChild(dataContainer.firstChild);
          }
          let div1 = document.createElement("div");
          dataContainer.appendChild(div1);
          
          let dataTable1 = document.createElement("table");
          dataTable1.className = "dataTable";
          div1.appendChild(dataTable1);
          
          let dataThead = document.createElement("thead");
          dataThead.className = "dataThead";
          dataTable1.appendChild(dataThead);
  
          let tr1 = document.createElement("tr");
          dataThead.appendChild(tr1);

          let th1 = document.createElement("th");
          th1.className = "th1";
          th1.innerHTML = "순번"
          let th2 = document.createElement("th");
          th2.className = "th2";
          th2.innerHTML = "날짜"
          let th7 = document.createElement("th");
          th7.className = "th7";
          th7.innerHTML = "시간"
          let th3 = document.createElement("th");
          th3.className = "th3";
          th3.innerHTML = "계단"
          let th4 = document.createElement("th");
          th4.className = "th4";
          th4.innerHTML = "엘리베이터"
          let th5 = document.createElement("th");
          th5.className = "th5";
          th5.innerHTML = "에스컬레이터"
          let th6 = document.createElement("th");
          th6.className = "th6";
          th6.innerHTML = "합계"

          tr1.appendChild(th1);
          tr1.appendChild(th2);
          tr1.appendChild(th7);
          tr1.appendChild(th3);
          tr1.appendChild(th4);
          tr1.appendChild(th5);
          tr1.appendChild(th6);

          let div2 = document.createElement("div");
          dataContainer.appendChild(div2);
        
          let dataTable2 = document.createElement("table");
          dataTable2.className = "dataTable";
          div2.appendChild(dataTable2);
          let dataTbody = document.createElement("tbody");
          dataTbody.className = "dataTbody";
          dataTable2.appendChild(dataTbody);
          let tr2;
          let td_data1;

          tr2 = document.createElement("tr");
          dataTbody.appendChild(tr2);

          td_data1 = document.createElement("td");
          td_data1.className = "noData";
          td_data1.innerHTML = "데이터를 찾을 수 없습니다.";
          tr2.appendChild(td_data1);
        }

        let no;
        let occuTime=[];
        let occu_Date=[];
        let gimpo_st_out = [];
        let gimpo_ev_out = [];
        let gimpo_ec_out = [];
        
        
        for (var i = 0; i < goToGimpoCSV.length-1; i++) {
          var currentItem = goToGimpoCSV[i];
          //console.log(currentItem);

          
          occuTime.push(currentItem.occuTime);
          occu_Date.push(currentItem.occuDate);
          gimpo_st_out.push(currentItem.gimpo_st_out);
          gimpo_ev_out.push(currentItem.gimpo_ev_out);
          gimpo_ec_out.push(currentItem.gimpo_ec_out);
          
          
          // currentItem의 속성에 접근 확인
          //console.log("i", i);
          // console.log("no", no);
          // console.log("occuTime", occuTime);
          // console.log("occu_Date", occu_Date);
          // console.log("gimpo_st_out", gimpo_st_out);
          // console.log("gimpo_ev_out", gimpo_ev_out);
          // console.log("gimpo_ec_out", gimpo_ec_out);

          if(occuTime[i] == null){
            //console.log("occu_Date", 0);
            
            var dataContainer = document.querySelector(".dataContainer");
            while (dataContainer.firstChild) {
              dataContainer.removeChild(dataContainer.firstChild);
            }
            
            let div1 = document.createElement("div");
            dataContainer.appendChild(div1);
            
            let dataTable1 = document.createElement("table");
            dataTable1.className = "dataTable";
            div1.appendChild(dataTable1);
            
            let dataThead = document.createElement("thead");
            dataThead.className = "dataThead";
            dataTable1.appendChild(dataThead);
    
            let tr1 = document.createElement("tr");
            dataThead.appendChild(tr1);

            let th1 = document.createElement("th");
            th1.className = "th1";
            th1.innerHTML = "순번"
            let th2 = document.createElement("th");
            th2.className = "th2";
            th2.innerHTML = "날짜"
            let th3 = document.createElement("th");
            th3.className = "th3";
            th3.innerHTML = "계단"
            let th4 = document.createElement("th");
            th4.className = "th4";
            th4.innerHTML = "엘리베이터"
            let th5 = document.createElement("th");
            th5.className = "th5";
            th5.innerHTML = "에스컬레이터"
            let th6 = document.createElement("th");
            th6.className = "th6";
            th6.innerHTML = "합계"

            tr1.appendChild(th1);
            tr1.appendChild(th2);
            tr1.appendChild(th3);
            tr1.appendChild(th4);
            tr1.appendChild(th5);
            tr1.appendChild(th6);

            let div2 = document.createElement("div");
            dataContainer.appendChild(div2);
          
            let dataTable2 = document.createElement("table");
            dataTable2.className = "dataTable";
            div2.appendChild(dataTable2);
            let dataTbody = document.createElement("tbody");
            dataTbody.className = "dataTbody";
            dataTable2.appendChild(dataTbody);
            let tr2;
            let td_data1;
            let td_data2;
            let td_data3;
            let td_data4;
            let td_data5;
            let td_data6;
            let td_data7;

            



            for(var j = 0; j < goToGimpoCSV.length-1; j++){
              let no1 = j+1;
              no = no1++ ;
//              console.log("j", j);
//              console.log("no", no);
//              console.log("occuTime", occuTime);
//              console.log("occu_Date", occu_Date);
//              console.log("gimpo_st_out", gimpo_st_out);
//              console.log("gimpo_ev_out", gimpo_ev_out);
//              console.log("gimpo_ec_out", gimpo_ec_out);

              tr2 = document.createElement("tr");
              dataTbody.appendChild(tr2);

              td_data1 = document.createElement("td");
              td_data1.className = "td_data1";
              td_data1.innerHTML = no;
              td_data2 = document.createElement("td");
              td_data2.className = "td_data2";
              td_data2.innerHTML = occu_Date[j];
              td_data3 = document.createElement("td");
              td_data3.className = "td_data3";
              td_data3.innerHTML = gimpo_st_out[j];
              td_data4 = document.createElement("td");
              td_data4.className = "td_data4";
              td_data4.innerHTML = gimpo_ev_out[j];
              td_data5 = document.createElement("td");
              td_data5.className = "td_data5";
              td_data5.innerHTML = gimpo_ec_out[j];
              td_data6 = document.createElement("td");
              td_data6.className = "td_data6";
              td_data6.innerHTML = gimpo_st_out[j]+gimpo_ev_out[j]+gimpo_ec_out[j];
              tr2.appendChild(td_data1);
              tr2.appendChild(td_data2);
              tr2.appendChild(td_data3);
              tr2.appendChild(td_data4);
              tr2.appendChild(td_data5);
              tr2.appendChild(td_data6);
            }
          }
        
          if(occuTime[0] != null){
              //console.log("occu_Date", 1);

              var dataContainer = document.querySelector(".dataContainer");
              while (dataContainer.firstChild) {
                dataContainer.removeChild(dataContainer.firstChild);
              }
              
              let div1 = document.createElement("div");
              dataContainer.appendChild(div1);
              
              let dataTable1 = document.createElement("table");
              dataTable1.className = "dataTable";
              div1.appendChild(dataTable1);
              
              let dataThead = document.createElement("thead");
              dataThead.className = "dataThead";
              dataTable1.appendChild(dataThead);
      
              let tr1 = document.createElement("tr");
              dataThead.appendChild(tr1);
  
              let th1 = document.createElement("th");
              th1.className = "th1";
              th1.innerHTML = "순번"
              let th2 = document.createElement("th");
              th2.className = "th2";
              th2.innerHTML = "날짜"
              let th7 = document.createElement("th");
              th7.className = "th7";
              th7.innerHTML = "시간"
              let th3 = document.createElement("th");
              th3.className = "th3";
              th3.innerHTML = "계단"
              let th4 = document.createElement("th");
              th4.className = "th4";
              th4.innerHTML = "엘리베이터"
              let th5 = document.createElement("th");
              th5.className = "th5";
              th5.innerHTML = "에스컬레이터"
              let th6 = document.createElement("th");
              th6.className = "th6";
              th6.innerHTML = "합계"
  
              tr1.appendChild(th1);
              tr1.appendChild(th2);
              tr1.appendChild(th7);
              tr1.appendChild(th3);
              tr1.appendChild(th4);
              tr1.appendChild(th5);
              tr1.appendChild(th6);
  
              let div2 = document.createElement("div");
              dataContainer.appendChild(div2);
            
              let dataTable2 = document.createElement("table");
              dataTable2.className = "dataTable";
              div2.appendChild(dataTable2);
              let dataTbody = document.createElement("tbody");
              dataTbody.className = "dataTbody";
              dataTable2.appendChild(dataTbody);
              let tr2;
              let td_data1;
              let td_data2;
              let td_data3;
              let td_data4;
              let td_data5;
              let td_data6;
              let td_data7;
  
  
  
              for(var j = 0; j < goToGimpoCSV.length-1; j++){
                let no1 = j+1;
                no = no1++ ;
//                console.log("j", j);
//                console.log("no", no);
//                console.log("occuTime", occuTime);
//                console.log("occu_Date", occu_Date);
//                console.log("gimpo_st_out", gimpo_st_out);
//                console.log("gimpo_ev_out", gimpo_ev_out);
//                console.log("gimpo_ec_out", gimpo_ec_out);
//                console.log("+", gimpo_ec_out[0]+gimpo_ev_out[0]+gimpo_ec_out[0]);
  
                tr2 = document.createElement("tr");
                dataTbody.appendChild(tr2);
  
                td_data1 = document.createElement("td");
                td_data1.className = "td_data1";
                td_data1.innerHTML = no;
                td_data2 = document.createElement("td");
                td_data2.className = "td_data2";
                td_data2.innerHTML = occu_Date[j];
                td_data7 = document.createElement("td");
                td_data7.className = "td_data7";
                td_data7.innerHTML = occuTime[j];
                td_data3 = document.createElement("td");
                td_data3.className = "td_data3";
                td_data3.innerHTML = gimpo_st_out[j];
                td_data4 = document.createElement("td");
                td_data4.className = "td_data4";
                td_data4.innerHTML = gimpo_ev_out[j];
                td_data5 = document.createElement("td");
                td_data5.className = "td_data5";
                td_data5.innerHTML = gimpo_ec_out[j];
                td_data6 = document.createElement("td");
                td_data6.className = "td_data6";
                td_data6.innerHTML = gimpo_st_out[j]+gimpo_ev_out[j]+gimpo_ec_out[j];
                tr2.appendChild(td_data1);
                tr2.appendChild(td_data2);
                tr2.appendChild(td_data7);
                tr2.appendChild(td_data3);
                tr2.appendChild(td_data4);
                tr2.appendChild(td_data5);
                tr2.appendChild(td_data6);
              }
                // console.log("no", no);
                // console.log("occu_Date", occu_Date);
                // console.log("gimpo_st_out", gimpo_st_out);
                // console.log("gimpo_ev_out", gimpo_ev_out);
                // console.log("gimpo_ec_out", no);

          }
        }
      }

    }
  }); */
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