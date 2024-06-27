var selectCombo = document.getElementById('selectCombo');
let daySumCheckbox = document.getElementById("daySumCheckbox");

let bSum;
let tableTitle = document.getElementById("table_title");


var progressDiv = document.getElementById('progressDiv');


document.getElementById("modalDataBtn").addEventListener("click", ()=>{
  // console.log("클릭");
  // fristTible();
  

  let comboValue = selectCombo.value;
  if(comboValue==="GimOut"){
      tableTitle.innerHTML = "김포공항 하선/하차인원";
      selectRadio(comboValue);
  }
  if(comboValue==="GimIn"){
      tableTitle.innerHTML = "김포공항 상선/승차인원";
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

  function ajaxStart(){
    var dataContainer = document.querySelector(".dataContainer");
    dataContainer.innerHTML = ""; // Clear previous data
    progressDiv.style.display = 'block';
    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";
    dataContainer.innerHTML = ""; // Clear previous data again
    // console.log("After second clearing:", dataContainer.innerHTML);

  }


function selectRadio(comboValue){
  /* 월별 클릭 시 날짜데이터 가져옴 시작*/ 
  if(selectMonth.checked){
    var monthSearch = document.getElementById("monthSearch");
    // console.log("monthSearch", monthSearch.value);
    var occuMonth = formatToYYYYMM(monthSearch.value);
    var from_date = occuMonth + "01";
    // var to_date = occuMonth + "31";
      // console.log('from_date:', from_date); // 콘솔에 occuDate 값 로그 출력
      
      let monthValue = monthSearch.value;
      // console.log('monthValue:', monthValue); // 콘솔에 occuDate 값 로그 출력
      var monthDate = monthValue + "-" + "01";
      // console.log('monthDate:', monthDate); // 콘솔에 occuDate 값 로그 출력
      
      let lastDate = new Date(monthDate);
      // console.log('lastDate:', lastDate); // 콘솔에 occuDate 값 로그 출력
      
      
      let to_date = formatToLastDay(lastDate);
      // console.log('to_date:', to_date); // 콘솔에 occuDate 값 로그 출력

    if(daySumCheckbox.checked === false ){
      bSum = 0;
    }
    if(daySumCheckbox.checked === true){
      bSum = 1;
    }
    // console.log("bSum", bSum);

    ajaxStart();

    let per

    $.ajax({
      url: "/monthUrl", 
      type: "POST",
      data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
      timeout: 3000000, // milliseconds (3000 seconds)
      // beforeSend: function() {
      // },
      // xhr: function(){
      //   var xhr = $.ajaxSettings.xhr();
      //   xhr.upload.onprogress = function(e){
      //       per = e.loaded * 100 / e.total;
      //       progressBar(per);
      //   };
      //   return xhr;
      // },
      success: function(response){
        // console.log("response", response);

           /* 김포공항 하선/하차인원 */
        if (response.goToGimpoCSV) {
          if(response.parameter3 == 0){
            goGimpoTableNotDaySum(response.goToGimpoCSV)
          }else{
            goGimpoTableDaySum(response.goToGimpoCSV);
          }
        } 

        /* 김포공항 상선/승차인원 */
        if (response.getOffGimpoCSV) {
          if(response.parameter3 == 0){
            getGimpoTableNotDaySum(response.getOffGimpoCSV);
          }else{
            getGimpoTableDaySum(response.getOffGimpoCSV);
          }
        } 

        /* 풍무 승하차 */
        if (response.goToPungmuCSV) {
          if(response.parameter3 == 0){
            pungmoTableNotDaySum(response.goToPungmuCSV);
          }else{
            pungmoTableDaySum(response.goToPungmuCSV);
          }
        } 

        /* 고촌 승하차 */
        if (response.goToGochonCSV) {
          if(response.parameter3 == 0){
            gochonTableNotDaySum(response.goToGochonCSV);
          }else{
            gochonTableDaySum(response.goToGochonCSV);
          }
        } 
      },
      // complete: function() {
      //   progressDiv.style.display = 'none';
      // },
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

      // console.log('occuDay:', occuDay); // 콘솔에 occuDate 값 로그 출력

    if(daySumCheckbox.checked === false ){
      bSum = 0;
    }
    if(daySumCheckbox.checked === true){
      bSum = 1;
    }

      ajaxStart();

    // console.log("bSum", bSum);
  
    $.ajax({
      url: "/dayUrl", 
      type: "POST",
      data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
      timeout: 3000000, // milliseconds (3000 seconds)
      // beforeSend: function() {
      //       per = 0;
      // },
      // xhr: function(){
      //   var xhr = $.ajaxSettings.xhr();
      //   xhr.upload.onprogress = function(e){
      //       per = e.loaded * 100 / e.total;
      //       progressBar(per);
      //   };
      //   return xhr;
      // },
      success: function(response){
        // console.log("response", response);
        // console.log("response.goToGimpoCSV", response.goToGimpoCSV);
        /* 김포공항 하선/하차인원 */
        if (response.goToGimpoCSV) {
          if(response.parameter3 == 0){
            goGimpoTableNotDaySum(response.goToGimpoCSV);
          }else{
            goGimpoTableDaySum(response.goToGimpoCSV);
          }
        } 


        /* 김포공항 상선/승차인원 */
        if (response.getOffGimpoCSV) {
          if(response.parameter3 == 0){
            getGimpoTableNotDaySum(response.getOffGimpoCSV);
          }else{
            getGimpoTableDaySum(response.getOffGimpoCSV);
          }
        } 

        /* 풍무 승하차 */
        if (response.goToPungmuCSV) {
          if(response.parameter3 == 0){
            pungmoTableNotDaySum(response.goToPungmuCSV);
          }else{
            pungmoTableDaySum(response.goToPungmuCSV);
          }
        } 

        /* 고촌 승하차 */
        if (response.goToGochonCSV) {
          if(response.parameter3 == 0){
            gochonTableNotDaySum(response.goToGochonCSV);
          }else{
            gochonTableDaySum(response.goToGochonCSV);
          }
        } 
      },
      // complete: function() {
      //   progressDiv.style.display = 'none';
      // },
    });
  }
  /* 일별 클릭 시 날짜데이터 가져옴 끝*/ 



  function calculateDaysBetween(fromDate, toDate) {
    // 날짜 문자열을 Date 객체로 변환
    const from = new Date(fromDate.slice(0, 4), fromDate.slice(4, 6) - 1, fromDate.slice(6, 8));
    const to = new Date(toDate.slice(0, 4), toDate.slice(4, 6) - 1, toDate.slice(6, 8));

    // 밀리초 단위로 차이 계산
    const differenceInTime = to.getTime() - from.getTime();

    // 일 수로 변환 (밀리초를 일로 변환)
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    // 결과 반환 (소수점 버림)
    return Math.floor(differenceInDays);
  }



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
      // console.log('from_date:', from_date); // 콘솔에 occuDate 값 로그 출력
      // console.log('to_date:', to_date); // 콘솔에 occuDate 값 로그 출력

    var days = calculateDaysBetween(from_date, to_date);;
      // console.log('days:', days); // 콘솔에 occuDate 값 로그 출력


    if(daySumCheckbox.checked === false ){
      bSum = 0;
      // console.log("bSum0 :", bSum);
    }
    if(daySumCheckbox.checked === true){
      bSum = 1;
      // console.log("bSum1 :", bSum);
    }

    ajaxStart();





    if(from_date === to_date){

      // console.log("=============================");

      $.ajax({
        url: "/dayUrl", 
        type: "POST",
        data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
        timeout: 3000000, // milliseconds (3000 seconds)
        // beforeSend: function() {
        //       per = 0;
        // },
        // xhr: function(){
        //   var xhr = $.ajaxSettings.xhr();
        //   xhr.upload.onprogress = function(e){
        //       per = e.loaded * 100 / e.total;
        //       progressBar(per);
        //   };
        //   return xhr;
        // },
        success: function(response){
          // console.log("response", response);
          // console.log("response.goToGimpoCSV", response.goToGimpoCSV);
          
          /* 김포공항 하선/하차인원 */
          if (response.goToGimpoCSV) {
            if(response.parameter3 == 0){
              goGimpoTableNotDaySum(response.goToGimpoCSV);
            }else{
              goGimpoTableDaySum(response.goToGimpoCSV);
            }
          } 
  
  
          /* 김포공항 상선/승차인원 */
          if (response.getOffGimpoCSV) {
            if(response.parameter3 == 0){
              getGimpoTableNotDaySum(response.getOffGimpoCSV);
            }else{
              getGimpoTableDaySum(response.getOffGimpoCSV);
            }
          } 
  
          /* 풍무 승하차 */
          if (response.goToPungmuCSV) {
            if(response.parameter3 == 0){
              pungmoTableNotDaySum(response.goToPungmuCSV);
            }else{
              pungmoTableDaySum(response.goToPungmuCSV);
            }
          } 
  
          /* 고촌 승하차 */
          if (response.goToGochonCSV) {
            if(response.parameter3 == 0){
              gochonTableNotDaySum(response.goToGochonCSV);
            }else{
              gochonTableDaySum(response.goToGochonCSV);
            }
          } 
        },
        // complete: function() {
        //   progressDiv.style.display = 'none';
        // },
      });
    }else{

      
          let dateValue = customDaySearch1.value;
          // console.log("dateValue", dateValue);
      
          let fromdate = new Date(dateValue);
          // console.log("fromdate", fromdate);
      
      
          let setDate = formatToYYYY_MM_DD(fromdate);
          // console.log(" setDate1: ", setDate);
      
          let dataList = [];
      
          let listNum = 0;
          let daysum = 0;
      
          ajaxStart();

          var processedItems = 0;
          // console.log("processedItems", processedItems);

          
      
      

      
          

      
          for(let i=0 ; i<=days; i++){
      
            // console.log("i", i);
            // console.log("for processedItems", processedItems);
      
            let setDate = formatToYYYY_MM_DD(fromdate);
            // console.log(" setDate: ", setDate);
      
      
            (function(i){
              $.ajax({
                url: "/customUrl", 
                async: false,	
                type: "POST",
                data: { from_date:setDate, to_date:setDate, comboValue:comboValue, bSum:bSum},
                timeout: 3000000, // milliseconds (3000 seconds)
                // beforeSend: function() {
                //       per=0;
                // },
                // xhr: function(){
                //   var xhr = $.ajaxSettings.xhr();
                //   xhr.upload.onprogress = function(e){
                //       per = e.loaded * 100 / e.total;
                //       progressBar(per);
                //   };
                //   return xhr;
                // },
                success: function(response){
                  // console.log("response : ", response);
                  // console.log("response.parameter3 :", response.parameter3);
      
                  if (response.goToGimpoCSV) {
                    listNum = 0;
                    // dataList.push(response.goToGimpoCSV);
                    // console.log("dataList", dataList);
                    if (response.parameter3 == 0) {
                      goGimpoNotDaySum(response.goToGimpoCSV);
                    }
                    if (response.parameter3 == 1) {
                      daysum = 1;
                      goGimpoDaySum(response.goToGimpoCSV);
                    }
                  }
                  if (response.getOffGimpoCSV) {
                    listNum = 1;
                    // dataList.push(response.getOffGimpoCSV);
                    // console.log("dataList", dataList);
                    if (response.parameter3 == 0) {
                      getGimpoNotDaySum(response.getOffGimpoCSV);
                    }
                    if (response.parameter3 == 1) {
                      daysum = 1;
                      getGimpoDaySum(response.getOffGimpoCSV);
                    }
                  }
                  if (response.goToPungmuCSV) {
                    listNum = 2;
                    // dataList.push(response.goToPungmuCSV);
                    // console.log("dataList", dataList);
                    if (response.parameter3 == 0) {
                      pungmuNotDaySum(response.goToPungmuCSV);
                    }
                    if (response.parameter3 == 1) {
                      daysum = 1;
                      pungmuDaySum(response.goToPungmuCSV);
                    }
                  }
                  if (response.goToGochonCSV) {
                    listNum = 3;
                    // dataList.push(response.goToGochonCSV);
                    // console.log("dataList", dataList);
                    if (response.parameter3 == 0) {
                      gochonNotDaySum(response.goToGochonCSV);
                    }
                    if (response.parameter3 == 1) {
                      daysum = 1;
                      gochonDaySum(response.goToGochonCSV);
                    }
                  }
                }
              });
              updateProgressBar(processedItems, days);
            })(i);
      
            processedItems++;
      
            fromdate.setDate(fromdate.getDate() + 1);
            // console.log(" fromdate: ", fromdate);
      
      
          }

    }

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

/* 날짜 형식화 함수 */
/* YYYYMMDD 형식으로 변환하는 함수 */
function formatToYYYY_MM_DD(dateString) {
  let year = dateString.getFullYear();
  let month = dateString.getMonth()+1;
  let monthValue = month < 10 ? "0" + month : month.toString();
  let day = dateString.getDate();
  let dayValue = day < 10 ? "0" + day : day.toString();
  return year+monthValue+dayValue;
}

/* 날짜 형식화 함수 */
/* YYYYMMDD 형식으로 변환하는 함수 */
function formatToLastDay(dateString) {
  let year = dateString.getFullYear();
  let month = dateString.getMonth()+1;
  let monthValue = month < 10 ? "0" + month : month.toString();

  let lastDate = new Date(year, month, 0);

  let lastday = lastDate.getDate();
  let lastdayValue = lastday < 10 ? "0" + lastday : lastday.toString();
  return year+monthValue+lastdayValue;
}
