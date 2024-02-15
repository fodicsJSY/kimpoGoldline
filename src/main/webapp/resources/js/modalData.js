var selectCombo = document.getElementById('selectCombo');
let daySumCheckbox = document.getElementById("daySumCheckbox");

let bSum;
let tableTitle = document.getElementById("table_title");


document.getElementById("modalDataBtn").addEventListener("click", ()=>{

  fristTible();
  
  let comboValue = selectCombo.value;
  if(comboValue==="GimOut"){
    tableTitle.innerHTML = "김포공항 승차";
    selectRadio(comboValue);
  }
  if(comboValue==="GimIn"){
    tableTitle.innerHTML = "김포공항 하차";
    selectRadio(comboValue);
  }
  if(comboValue==="PungInOut"){
    tableTitle.innerHTML = "풍무역 승/하차";
    selectRadio(comboValue);
  }
  if(comboValue==="GoInOut"){
    tableTitle.innerHTML = "고촌역 승/하차";
    selectRadio(comboValue);
  }

});




function selectRadio(comboValue){
  /* 월별 클릭 시 날짜데이터 가져옴 시작*/ 
  if(selectMonth.checked){
    var monthSearch = document.getElementById("monthSearch");
    //console.log("monthSearch", monthSearch.value);
    var occuMonth = formatToYYYYMM(monthSearch.value);
    var from_date = occuMonth + "01";
    var to_date = occuMonth + "31";
      //console.log('from_date:', from_date); // 콘솔에 occuDate 값 로그 출력

    if(daySumCheckbox.checked === false ){
      bSum = 0;
    }
    if(daySumCheckbox.checked === true){
      bSum = 1;
    }
    //console.log("bSum", bSum);

    $.ajax({
      url: "/monthUrl", 
      type: "POST",
      data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
      success: function(response){
        // console.log("response", response);
        /* 김포 승차 */
        if (response.goToGimpoCSV ) {
          if(response.goToGimpoCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            goGimpoTableNotDaySum(response.goToGimpoCSV);
          }else{
            goGimpoTableDaySum(response.goToGimpoCSV);
          }
        } 

        /* 김포 하차 */
        if (response.getOffGimpoCSV ) {
          if(response.getOffGimpoCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            getGimpoTableNotDaySum(response.getOffGimpoCSV);
          }else{
            getGimpoTableDaySum(response.getOffGimpoCSV);
          }
        } 

        /* 풍무 승하차 */
        if (response.goToPungmuCSV ) {
          if(response.goToPungmuCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            pungmoTableNotDaySum(response.goToPungmuCSV);
          }else{
            pungmoTableDaySum(response.goToPungmuCSV);
          }
        } 

        /* 고촌 승하차 */
        if (response.goToGochonCSV ) {
          if(response.goToGochonCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            gochonTableNotDaySum(response.goToGochonCSV);
          }else{
            gochonTableDaySum(response.goToGochonCSV);
          }
        } 
      }
    });
  }
  /* 월별 클릭 시 날짜데이터 가져옴 끝*/ 


  /* 일별 클릭 시 날짜데이터 가져옴 시작*/ 
  if(selectDay.checked){
    var daySearch = document.getElementById("daySearch");
    // console.log("daySearch", daySearch.value);
    var occuDay = formatToYYYYMMDD(daySearch.value);
    var from_date = occuDay;
    var to_date = occuDay;

      //console.log('occuDay:', occuDay); // 콘솔에 occuDate 값 로그 출력

    if(daySumCheckbox.checked === false ){
      bSum = 0;
    }
    if(daySumCheckbox.checked === true){
      bSum = 1;
    }

    $.ajax({
      url: "/dayUrl", 
      type: "POST",
      data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
      success: function(response){
        
          /* 김포 승차 */
        if (response.goToGimpoCSV ) {
          if(response.goToGimpoCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            goGimpoTableNotDaySum(response.goToGimpoCSV);
          }else{
            goGimpoTableDaySum(response.goToGimpoCSV);
          }
        } 

        /* 김포 하차 */
        if (response.getOffGimpoCSV ) {
          if(response.getOffGimpoCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            getGimpoTableNotDaySum(response.getOffGimpoCSV);
          }else{
            getGimpoTableDaySum(response.getOffGimpoCSV);
          }
        } 


        /* 풍무 승하차 */
        if (response.goToPungmuCSV ) {
          if(response.goToPungmuCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            pungmoTableNotDaySum(response.goToPungmuCSV);
          }else{
            pungmoTableDaySum(response.goToPungmuCSV);
          }
        } 


        /* 고촌 승하차 */
        if (response.goToGochonCSV ) {
          if(response.goToGochonCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            gochonTableNotDaySum(response.goToGochonCSV);
          }else{
            gochonTableDaySum(response.goToGochonCSV);
          }
        } 
      }
    });
  }
  /* 일별 클릭 시 날짜데이터 가져옴 끝*/ 


  /* 기간별 클릭 시 날짜데이터 가져옴 시작*/ 
  if(selectCustom.checked){
    var customDaySearch1 = document.getElementById("customDaySearch1");
    var customDaySearch2 = document.getElementById("customDaySearch2");
    // console.log("customDaySearch1", customDaySearch1.value);
    // console.log("customDaySearch2", customDaySearch2.value);
    var customDate1 = formatToYYYYMMDD(customDaySearch1.value);
    var customDate2 = formatToYYYYMMDD(customDaySearch2.value);
    var from_date = customDate1;
    var to_date = customDate2;
      //console.log('customDate1:', customDate1); // 콘솔에 occuDate 값 로그 출력
      //console.log('customDate2:', customDate2); // 콘솔에 occuDate 값 로그 출력

    if(daySumCheckbox.checked === false ){
      bSum = 0;
    }
    if(daySumCheckbox.checked === true){
      bSum = 1;
    }

    $.ajax({
      url: "/customUrl", 
      type: "POST",
      data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
      success: function(response){
         /* 김포 승차 */
        if (response.goToGimpoCSV ) {
          if(response.goToGimpoCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            goGimpoTableNotDaySum(response.goToGimpoCSV);
          }else{
            goGimpoTableDaySum(response.goToGimpoCSV);
          }
        } 

        /* 김포 하차 */
        if (response.getOffGimpoCSV ) {
          if(response.getOffGimpoCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            getGimpoTableNotDaySum(response.getOffGimpoCSV);
          }else{
            getGimpoTableDaySum(response.getOffGimpoCSV);
          }
        } 

        /* 풍무 승하차 */
        if (response.goToPungmuCSV ) {
          if(response.goToPungmuCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            pungmoTableNotDaySum(response.goToPungmuCSV);
          }else{
            pungmoTableDaySum(response.goToPungmuCSV);
          }
        } 

        /* 고촌 승하차 */
        if (response.goToGochonCSV ) {
          if(response.goToGochonCSV.length == 0){
            renderNoDataMessage();
          }else if(response.parameter3 == 0){
            gochonTableNotDaySum(response.goToGochonCSV);
          }else{
            gochonTableDaySum(response.goToGochonCSV);
          }
        } 
      }
    });
  }
  /* 기간별 클릭 시 날짜데이터 가져옴 끝*/ 
}






// formatToYYYYMM 함수 정의
function formatToYYYYMM(dateString) {
  var year = dateString.substring(0, 4);
  var month = dateString.substring(5, 7);
  return year + month;
}


/* 날짜 형식화 함수 */
/* YYYYMMDD 형식으로 변환하는 함수 */
function formatToYYYYMMDD(dateString) {
  var year = dateString.substring(0, 4);
  var month = dateString.substring(5, 7);
  var day = dateString.substring(8, 10);
  return year + month + day;
}