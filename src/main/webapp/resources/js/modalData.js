var selectCombo = document.getElementById('selectCombo');
let daySumCheckbox = document.getElementById("daySumCheckbox");

let bSum;

var tableTitle = document.getElementsByClassName("tableTitle");

document.getElementById("modalDataBtn").addEventListener("click", ()=>{


  let comboValue = selectCombo.value;
  if(comboValue==="GimOut"){
    //tableTitle.innerHTML = "김포공항 승차";
    selectRadio(comboValue);
  }
  if(comboValue==="GimIn"){
    //tableTitle.innerHTML = "김포공항 김포공항";
    selectRadio(comboValue);
  }
  if(comboValue==="PungInOut"){
    //tableTitle.innerHTML = "풍무역 승/하차";
    selectRadio(comboValue);
  }
  if(comboValue==="GoInOut"){
    //tableTitle.innerHTML = "고촌역 승/하차";
    selectRadio(comboValue);
  }

  console.log("클릭");
  
});












function selectRadio(comboValue){
  /* 월별 클릭 시 날짜데이터 가져옴 시작*/ 
  if(selectMonth.checked){
    var monthSearch = document.getElementById("monthSearch");
    // console.log("monthSearch", monthSearch.value);
    var occuMonth = formatToYYYYMM(monthSearch.value);
    var from_date = occuMonth + "01";
    var to_date = occuMonth + "31";
      console.log('from_date:', from_date); // 콘솔에 occuDate 값 로그 출력

    if(daySumCheckbox.checked === false ){
      bSum = 0;
    }
    if(daySumCheckbox.checked === true){
      bSum = 1;
    }
    console.log("bSum", bSum);

    $.ajax({
      url: "/monthUrl", 
      type: "POST",
      data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
      success: function(response){

        console.log("response", response);

        if(response.goToGimpoCSV){

        
        
          var goToGimpoCSV = response.goToGimpoCSV;

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
            console.log("i", i);
            // console.log("no", no);
            // console.log("occuTime", occuTime);
            // console.log("occu_Date", occu_Date);
            // console.log("gimpo_st_out", gimpo_st_out);
            // console.log("gimpo_ev_out", gimpo_ev_out);
            // console.log("gimpo_ec_out", gimpo_ec_out);

            if(occuTime[i] == null){
              console.log("occu_Date", 0);
              
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
                console.log("occu_Date", 1);

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


        /* 김포 하차 */
        if(response.getOffGimpoCSV){
          var getOffGimpoCSV = response.getOffGimpoCSV;
          console.log("getOffGimpoCSV", getOffGimpoCSV);
          let no;
          let occuTime=[];
          let occu_Date=[];
          let gimpo_st_in = [];
          let gimpo_ev_in = [];
          let gimpo_ec_in = [];
          
          
          for (var i = 0; i < getOffGimpoCSV.length-1; i++) {
            var currentItem = getOffGimpoCSV[i];
            //console.log(currentItem);

            
            occuTime.push(currentItem.occuTime);
            occu_Date.push(currentItem.occuDate);
            gimpo_st_in.push(currentItem.gimpo_st_in);
            gimpo_ev_in.push(currentItem.gimpo_ev_in);
            gimpo_ec_in.push(currentItem.gimpo_ec_in);
            
            
            // currentItem의 속성에 접근 확인
            console.log("i", i);
            // console.log("no", no);
            // console.log("occuTime", occuTime);
            // console.log("occu_Date", occu_Date);
            // console.log("gimpo_st_out", gimpo_st_out);
            // console.log("gimpo_ev_out", gimpo_ev_out);
            // console.log("gimpo_ec_out", gimpo_ec_out);

            if(occuTime[i] == null){
              console.log("occu_Date", 0);
              
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



              for(var j = 0; j < getOffGimpoCSV.length-1; j++){
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
                td_data3.innerHTML = gimpo_st_in[j];
                td_data4 = document.createElement("td");
                td_data4.className = "td_data4";
                td_data4.innerHTML = gimpo_ev_in[j];
                td_data5 = document.createElement("td");
                td_data5.className = "td_data5";
                td_data5.innerHTML = gimpo_ec_in[j];
                td_data6 = document.createElement("td");
                td_data6.className = "td_data6";
                td_data6.innerHTML = gimpo_st_in[j]+gimpo_ev_in[j]+gimpo_ec_in[j];
                tr2.appendChild(td_data1);
                tr2.appendChild(td_data2);
                tr2.appendChild(td_data3);
                tr2.appendChild(td_data4);
                tr2.appendChild(td_data5);
                tr2.appendChild(td_data6);
              }
            }
          
            if(occuTime[0] != null){
                console.log("occu_Date", 1);

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
    
    
    
                for(var j = 0; j < getOffGimpoCSV.length-1; j++){
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
                  td_data3.innerHTML = gimpo_st_in[j];
                  td_data4 = document.createElement("td");
                  td_data4.className = "td_data4";
                  td_data4.innerHTML = gimpo_ev_in[j];
                  td_data5 = document.createElement("td");
                  td_data5.className = "td_data5";
                  td_data5.innerHTML = gimpo_ec_in[j];
                  td_data6 = document.createElement("td");
                  td_data6.className = "td_data6";
                  td_data6.innerHTML = gimpo_st_in[j]+gimpo_ev_in[j]+gimpo_ec_in[j];
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






        /* 풍무 승하차 */
        if(response.goToPungmuCSV){
          var goToPungmuCSV = response.goToPungmuCSV;

          let no;
          let occuTime=[];
          let occu_Date=[];
          let pungmu_in = [];
          let pungmu_out = [];
          
          
          for (var i = 0; i < goToPungmuCSV.length-1; i++) {
            var currentItem = goToPungmuCSV[i];
            //console.log(currentItem);

            
            occuTime.push(currentItem.occuTime);
            occu_Date.push(currentItem.occuDate);
            pungmu_in.push(currentItem.pungmu_in);
            pungmu_out.push(currentItem.gimpo_ev_out);
            
            
            // currentItem의 속성에 접근 확인
            // console.log("no", no);
            // console.log("occuTime", occuTime);
            // console.log("occu_Date", occu_Date);

            if(occuTime[i] == null){
              console.log("occu_Date", 0);
              
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

              let goPung_th1 = document.createElement("th");
              goPung_th1.className = "goPung_th1";
              goPung_th1.innerHTML = "순번"
              let goPung_th2 = document.createElement("th");
              goPung_th2.className = "goPung_th2";
              goPung_th2.innerHTML = "날짜"
              let goPung_th3 = document.createElement("th");
              goPung_th3.className = "goPung_th3";
              goPung_th3.innerHTML = "승차"
              let goPung_th4 = document.createElement("th");
              goPung_th4.className = "goPung_th4";
              goPung_th4.innerHTML = "하차"

              tr1.appendChild(goPung_th1);
              tr1.appendChild(goPung_th2);
              tr1.appendChild(goPung_th3);
              tr1.appendChild(goPung_th4);

              let div2 = document.createElement("div");
              dataContainer.appendChild(div2);
            
              let dataTable2 = document.createElement("table");
              dataTable2.className = "dataTable";
              div2.appendChild(dataTable2);
              let dataTbody = document.createElement("tbody");
              dataTbody.className = "dataTbody";
              dataTable2.appendChild(dataTbody);
              let tr2;
              let goPung_td_data1;
              let goPung_td_data2;
              let goPung_td_data3;
              let goPung_td_data4;



              for(var j = 0; j < goToPungmuCSV.length-1; j++){
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

                goPung_td_data1 = document.createElement("td");
                goPung_td_data1.className = "goPung_td_data1";
                goPung_td_data1.innerHTML = no;
                goPung_td_data2 = document.createElement("td");
                goPung_td_data2.className = "goPung_td_data2";
                goPung_td_data2.innerHTML = occu_Date[j];
                goPung_td_data3 = document.createElement("td");
                goPung_td_data3.className = "goPung_td_data3";
                goPung_td_data3.innerHTML = pungmu_in[j];
                goPung_td_data4 = document.createElement("td");
                goPung_td_data4.className = "goPung_td_data4";
                goPung_td_data4.innerHTML = pungmu_out[j];

                tr2.appendChild(goPung_td_data1);
                tr2.appendChild(goPung_td_data2);
                tr2.appendChild(goPung_td_data3);
                tr2.appendChild(goPung_td_data4);
              }
            }
          
            if(occuTime[0] != null){
                console.log("occu_Date", 1);

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
    
                let goPung_th1 = document.createElement("th");
                goPung_th1.className = "goPung_th1";
                goPung_th1.innerHTML = "순번"
                tr1.appendChild(goPung_th1);
                let goPung_th2 = document.createElement("th");
                goPung_th2.className = "goPung_th2";
                goPung_th2.innerHTML = "날짜"
                tr1.appendChild(goPung_th2);
                let goPung_th5 = document.createElement("th");
                goPung_th5.className = "goPung_th5";
                goPung_th5.innerHTML = "시간"
                tr1.appendChild(goPung_th5);
                let goPung_th3 = document.createElement("th");
                goPung_th3.className = "goPung_th3";
                goPung_th3.innerHTML = "승차"
                tr1.appendChild(goPung_th3);
                let goPung_th4 = document.createElement("th");
                goPung_th4.className = "goPung_th4";
                goPung_th4.innerHTML = "하차"
                tr1.appendChild(goPung_th4);

    
                let div2 = document.createElement("div");
                dataContainer.appendChild(div2);
              
                let dataTable2 = document.createElement("table");
                dataTable2.className = "dataTable";
                div2.appendChild(dataTable2);
                let dataTbody = document.createElement("tbody");
                dataTbody.className = "dataTbody";
                dataTable2.appendChild(dataTbody);


                let tr2;
                let goPung_td_data1;
                let goPung_td_data2;
                let goPung_td_data3;
                let goPung_td_data4;
                let goPung_td_data5;
    
    
    
                for(var j = 0; j < goToPungmuCSV.length-1; j++){
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
    
                  goPung_td_data1 = document.createElement("td");
                  goPung_td_data1.className = "goPung_td_data1";
                  goPung_td_data1.innerHTML = no;
                  goPung_td_data2 = document.createElement("td");
                  goPung_td_data2.className = "goPung_td_data2";
                  goPung_td_data2.innerHTML = occu_Date[j];
                  goPung_td_data5 = document.createElement("td");
                  goPung_td_data5.className = "goPung_td_data5";
                  goPung_td_data5.innerHTML = occuTime[j];
                  goPung_td_data3 = document.createElement("td");
                  goPung_td_data3.className = "goPung_td_data3";
                  goPung_td_data3.innerHTML = pungmu_in[j];
                  goPung_td_data4 = document.createElement("td");
                  goPung_td_data4.className = "goPung_td_data4";
                  goPung_td_data4.innerHTML = pungmu_out[j];
                  tr2.appendChild(goPung_td_data1);
                  tr2.appendChild(goPung_td_data2);
                  tr2.appendChild(goPung_td_data5);
                  tr2.appendChild(goPung_td_data3);
                  tr2.appendChild(goPung_td_data4);
                }
                  // console.log("no", no);
                  // console.log("occu_Date", occu_Date);
                  // console.log("gimpo_st_out", gimpo_st_out);
                  // console.log("gimpo_ev_out", gimpo_ev_out);
                  // console.log("gimpo_ec_out", no);
            }
          }
        }



        /*  고촌 승하차*/
        if(response.goToGochonCSV){
          var goToGochonCSV = response.goToGochonCSV;

          let no;
          let occuTime=[];
          let occu_Date=[];
          let gochon_in = [];
          let gochon_out = [];
          
          
          for (var i = 0; i < goToGochonCSV.length-1; i++) {
            var currentItem = goToGochonCSV[i];
            //console.log(currentItem);

            
            occuTime.push(currentItem.occuTime);
            occu_Date.push(currentItem.occuDate);
            gochon_in.push(currentItem.pungmu_in);
            gochon_out.push(currentItem.gimpo_ev_out);
            
            
            // currentItem의 속성에 접근 확인
            // console.log("no", no);
            // console.log("occuTime", occuTime);
            // console.log("occu_Date", occu_Date);

            if(occuTime[i] == null){
              console.log("occu_Date", 0);
              
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

              let goPung_th1 = document.createElement("th");
              goPung_th1.className = "goPung_th1";
              goPung_th1.innerHTML = "순번"
              let goPung_th2 = document.createElement("th");
              goPung_th2.className = "goPung_th2";
              goPung_th2.innerHTML = "날짜"
              let goPung_th3 = document.createElement("th");
              goPung_th3.className = "goPung_th3";
              goPung_th3.innerHTML = "승차"
              let goPung_th4 = document.createElement("th");
              goPung_th4.className = "goPung_th4";
              goPung_th4.innerHTML = "하차"

              tr1.appendChild(goPung_th1);
              tr1.appendChild(goPung_th2);
              tr1.appendChild(goPung_th3);
              tr1.appendChild(goPung_th4);

              let div2 = document.createElement("div");
              dataContainer.appendChild(div2);
            
              let dataTable2 = document.createElement("table");
              dataTable2.className = "dataTable";
              div2.appendChild(dataTable2);
              let dataTbody = document.createElement("tbody");
              dataTbody.className = "dataTbody";
              dataTable2.appendChild(dataTbody);
              let tr2;
              let goPung_td_data1;
              let goPung_td_data2;
              let goPung_td_data3;
              let goPung_td_data4;



              for(var j = 0; j < goToGochonCSV.length-1; j++){
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

                goPung_td_data1 = document.createElement("td");
                goPung_td_data1.className = "goPung_td_data1";
                goPung_td_data1.innerHTML = no;
                goPung_td_data2 = document.createElement("td");
                goPung_td_data2.className = "goPung_td_data2";
                goPung_td_data2.innerHTML = occu_Date[j];
                goPung_td_data3 = document.createElement("td");
                goPung_td_data3.className = "goPung_td_data3";
                goPung_td_data3.innerHTML = gochon_in[j];
                goPung_td_data4 = document.createElement("td");
                goPung_td_data4.className = "goPung_td_data4";
                goPung_td_data4.innerHTML = gochon_out[j];

                tr2.appendChild(goPung_td_data1);
                tr2.appendChild(goPung_td_data2);
                tr2.appendChild(goPung_td_data3);
                tr2.appendChild(goPung_td_data4);
              }
            }
          
            if(occuTime[0] != null){
                console.log("occu_Date", 1);

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
    
                let goPung_th1 = document.createElement("th");
                goPung_th1.className = "goPung_th1";
                goPung_th1.innerHTML = "순번"
                tr1.appendChild(goPung_th1);
                let goPung_th2 = document.createElement("th");
                goPung_th2.className = "goPung_th2";
                goPung_th2.innerHTML = "날짜"
                tr1.appendChild(goPung_th2);
                let goPung_th5 = document.createElement("th");
                goPung_th5.className = "goPung_th5";
                goPung_th5.innerHTML = "시간"
                tr1.appendChild(goPung_th5);
                let goPung_th3 = document.createElement("th");
                goPung_th3.className = "goPung_th3";
                goPung_th3.innerHTML = "승차"
                tr1.appendChild(goPung_th3);
                let goPung_th4 = document.createElement("th");
                goPung_th4.className = "goPung_th4";
                goPung_th4.innerHTML = "하차"
                tr1.appendChild(goPung_th4);

    
                let div2 = document.createElement("div");
                dataContainer.appendChild(div2);
              
                let dataTable2 = document.createElement("table");
                dataTable2.className = "dataTable";
                div2.appendChild(dataTable2);
                let dataTbody = document.createElement("tbody");
                dataTbody.className = "dataTbody";
                dataTable2.appendChild(dataTbody);


                let tr2;
                let goPung_td_data1;
                let goPung_td_data2;
                let goPung_td_data3;
                let goPung_td_data4;
                let goPung_td_data5;
    
    
    
                for(var j = 0; j < goToGochonCSV.length-1; j++){
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
    
                  goPung_td_data1 = document.createElement("td");
                  goPung_td_data1.className = "goPung_td_data1";
                  goPung_td_data1.innerHTML = no;
                  goPung_td_data2 = document.createElement("td");
                  goPung_td_data2.className = "goPung_td_data2";
                  goPung_td_data2.innerHTML = occu_Date[j];
                  goPung_td_data5 = document.createElement("td");
                  goPung_td_data5.className = "goPung_td_data5";
                  goPung_td_data5.innerHTML = occuTime[j];
                  goPung_td_data3 = document.createElement("td");
                  goPung_td_data3.className = "goPung_td_data3";
                  goPung_td_data3.innerHTML = gochon_in[j];
                  goPung_td_data4 = document.createElement("td");
                  goPung_td_data4.className = "goPung_td_data4";
                  goPung_td_data4.innerHTML = gochon_out[j];
                  tr2.appendChild(goPung_td_data1);
                  tr2.appendChild(goPung_td_data2);
                  tr2.appendChild(goPung_td_data5);
                  tr2.appendChild(goPung_td_data3);
                  tr2.appendChild(goPung_td_data4);
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

      console.log('occuDay:', occuDay); // 콘솔에 occuDate 값 로그 출력

    if(daySumCheckbox.checked === false ){
      daySumCheck = 0;
    }
    if(daySumCheckbox.checked === true){
      daySumCheck = 1;
    }

      $.ajax({
        url: "/dayUrl", 
        type: "POST",
        data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
        success: function(response){
  
          console.log("response", response);
          // 여기에서 wfSv 내용을 출력합니다.
          // const wfSvContent = data.response.body.items.item[0].wfSv;
          // console.log("wfSv Content:", wfSvContent);
          // document.getElementById("weatherContents").innerHTML = wfSvContent;

























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
      console.log('customDate1:', customDate1); // 콘솔에 occuDate 값 로그 출력
      console.log('customDate2:', customDate2); // 콘솔에 occuDate 값 로그 출력

    if(daySumCheckbox.checked === false ){
      daySumCheck = 0;
    }
    if(daySumCheckbox.checked === true){
      daySumCheck = 1;
    }


  $.ajax({
    url: "/customUrl", 
    type: "POST",
    data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
    success: function(response){

      console.log("response", response);
      // 여기에서 wfSv 내용을 출력합니다.
      // const wfSvContent = data.response.body.items.item[0].wfSv;
      // console.log("wfSv Content:", wfSvContent);
      // document.getElementById("weatherContents").innerHTML = wfSvContent;
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