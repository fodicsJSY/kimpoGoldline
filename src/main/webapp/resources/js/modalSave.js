

document.getElementById("dataSaveBtn").addEventListener("click", ()=>{
    console.log("저장");

    let comboValue = selectCombo.value;
    if(comboValue==="GimOut"){
        saveData(comboValue);
    }
    if(comboValue==="GimIn"){
        saveData(comboValue);
    }
    if(comboValue==="PungInOut"){
        saveData(comboValue);
    }
    if(comboValue==="GoInOut"){
        saveData(comboValue);
    }

});



function saveData(comboValue){

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
                console.log("p3", response.parameter3);

                let p3 = response.parameter3;
                
                if(response.goToGimpoCSV){
                    var goToGimpoCSV = response.goToGimpoCSV;
                    // console.log("goToGimpoCSV", goToGimpoCSV);
                    // console.log("p3", p3);
                    if(p3 == 0){
                        flie_goToGimpoDataSave(goToGimpoCSV, occuMonth)
                    }
                    if(p3 == 1){
                        flie_goToGimpoDataSaveNoTime(goToGimpoCSV, occuMonth)
                    }
                }
                if(response.getOffGimpoCSV){
                    var getOffGimpoCSV = response.getOffGimpoCSV;
                    if(p3 == 0){
                        flie_getOffGimpoDataSave(getOffGimpoCSV, occuMonth)
                    }
                    if(p3 == 1){
                        flie_getOffGimpoDataSaveNoTime(getOffGimpoCSV, occuMonth)
                    }
                }
                if(response.goToGochonCSV){
                    var goToGochonCSV = response.goToGochonCSV;
                    if(p3 == 0){
                        flie_goToGochonDataSave(goToGochonCSV, occuMonth)
                    }
                    if(p3 == 1){
                        flie_goToGochonDataSaveNoTime(goToGochonCSV, occuMonth)
                    }
                }
                if(response.goToPungmuCSV){
                    var goToPungmuCSV = response.goToPungmuCSV;
                    if(p3 == 0){
                        flie_goToPungmuDataSave(goToPungmuCSV, occuMonth)
                    }
                    if(p3 == 1){
                        flie_goToPungmuDataSaveNoTime(goToPungmuCSV, occuMonth)
                    }
                }
            }
        });
    }

    if(selectDay.checked){
        var daySearch = document.getElementById("daySearch");
        // console.log("daySearch", daySearch.value);
        var occuDay = formatToYYYYMMDD(daySearch.value);
        var from_date = occuDay;
        var to_date = occuDay;
    
          console.log('occuDay:', occuDay); // 콘솔에 occuDate 값 로그 출력
    
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
                console.log("response", response);
                let p3 = response.parameter3;
                
                if(response.goToGimpoCSV){
                    var goToGimpoCSV = response.goToGimpoCSV;
                    // console.log("goToGimpoCSV", goToGimpoCSV);
                    // console.log("p3", p3);
                    if(p3 == 0){
                        flie_goToGimpoDataSave(goToGimpoCSV, occuDay);
                    }
                    if(p3 == 1){
                        flie_goToGimpoDataSaveNoTime(goToGimpoCSV, occuDay)
                    }
                }
                if(response.getOffGimpoCSV){
                    var getOffGimpoCSV = response.getOffGimpoCSV;
                    if(p3 == 0){
                        flie_getOffGimpoDataSave(getOffGimpoCSV, occuDay)
                    }
                    if(p3 == 1){
                        flie_getOffGimpoDataSaveNoTime(getOffGimpoCSV, occuDay)
                    }
                }
                if(response.goToGochonCSV){
                    var goToGochonCSV = response.goToGochonCSV;
                    if(p3 == 0){
                        flie_goToGochonDataSave(goToGochonCSV, occuDay)
                    }
                    if(p3 == 1){
                        flie_goToGochonDataSaveNoTime(goToGochonCSV, occuDay)
                    }
                }
                if(response.goToPungmuCSV){
                    var goToPungmuCSV = response.goToPungmuCSV;
                    if(p3 == 0){
                        flie_goToPungmuDataSave(goToPungmuCSV, occuDay)
                    }
                    if(p3 == 1){
                        flie_goToPungmuDataSaveNoTime(goToPungmuCSV, occuDay)
                    }
                }
            }
        });
    

    }

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
            data: {from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
            success: function(response){
                console.log("response", response);
                let p3 = response.parameter3;

                if(response.goToGimpoCSV){
                    var goToGimpoCSV = response.goToGimpoCSV;
                    // console.log("goToGimpoCSV", goToGimpoCSV);
                    // console.log("p3", p3);
                    if(p3 == 0){
                        flie_goToGimpoDataSave(goToGimpoCSV, from_date, to_date);
                    }
                    if(p3 == 1){
                        flie_goToGimpoDataSaveNoTime(goToGimpoCSV, from_date, to_date)
                    }
                }
                if(response.getOffGimpoCSV){
                    var getOffGimpoCSV = response.getOffGimpoCSV;
                    if(p3 == 0){
                        flie_getOffGimpoDataSave(getOffGimpoCSV, from_date, to_date)
                    }
                    if(p3 == 1){
                        flie_getOffGimpoDataSaveNoTime(getOffGimpoCSV, from_date, to_date)
                    }
                }
                if(response.goToGochonCSV){
                    var goToGochonCSV = response.goToGochonCSV;
                    if(p3 == 0){
                        flie_goToGochonDataSave(goToGochonCSV, from_date, to_date)
                    }
                    if(p3 == 1){
                        flie_goToGochonDataSaveNoTime(goToGochonCSV, from_date, to_date)
                    }
                }
                if(response.goToPungmuCSV){
                    var goToPungmuCSV = response.goToPungmuCSV;
                    if(p3 == 0){
                        flie_goToPungmuDataSave(goToPungmuCSV, from_date, to_date)
                    }
                    if(p3 == 1){
                        flie_goToPungmuDataSaveNoTime(goToPungmuCSV, from_date, to_date)
                    }
                }
            }
        });


    }


    // CSV파일1 생성 시작-----------------------------------------------
    function flie_goToGimpoDataSave(goToGimpoCSV) {

        // CSV 헤더 생성
        let csvContent = "순번,날짜,시간,계단,엘리베이터,에스컬레이터,합계\n";
    
        // CSV 데이터 추가
        for (let i = 0; i < goToGimpoCSV.length-1; i++) {
            var currentItem = goToGimpoCSV[i];

            let row = `${i+1},${currentItem.occuDate},${currentItem.occuTime},${currentItem.gimpo_st_out},${currentItem.gimpo_ev_out},${currentItem.gimpo_ec_out}, ${currentItem.gimpo_st_out+currentItem.gimpo_ev_out+currentItem.gimpo_ec_out}\n`;
            csvContent += row;
        }



        const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });
    
        // CSV 파일 생성
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);



        /*
        // UTF-8로 변환
        // const encoder = new TextEncoder();
        // const utf8Array = encoder.encode(csvContent);
    
        // Blob 생성
        //const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), utf8Array], { type: 'text/csv;charset=utf-8;' });
        */
        
        if(occuMonth){
            link.setAttribute("download", `${occuMonth}김포출근길.csv`);
        }
        if(occuDay){
            link.setAttribute("download", `${occuDay}김포출근길.csv`);
        }
        if(from_date&&to_date){
            link.setAttribute("download", `${from_date}_${to_date}김포출근길.csv`);
        }

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    // CSV파일1 생성 끝-----------------------------------------------


    // CSV파일2 생성 시작-----------------------------------------------
    function flie_goToGimpoDataSaveNoTime(goToGimpoCSV) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,계단,엘리베이터,에스컬레이터,합계\n";

    // CSV 데이터 추가
    for (let i = 0; i < goToGimpoCSV.length-1; i++) {
        var currentItem = goToGimpoCSV[i];
        


        let row = `${i+1},${currentItem.occuDate},${currentItem.gimpo_st_out},${currentItem.gimpo_ev_out},${currentItem.gimpo_ec_out}, ${currentItem.gimpo_st_out+currentItem.gimpo_ev_out+currentItem.gimpo_ec_out}\n`;
        csvContent += row;
    }

    // UTF-8로 변환
    // const encoder = new TextEncoder();
    // const utf8Array = encoder.encode(csvContent);

    // Blob 생성
    //const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), utf8Array], { type: 'text/csv;charset=utf-8;' });
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });

    // CSV 파일 생성
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);

    if(occuMonth){
        link.setAttribute("download", `${occuMonth}김포출근길_noTime.csv`);
    }
    if(occuDay){
        link.setAttribute("download", `${occuDay}김포출근길_noTime.csv`);
    }
    if(from_date&&to_date){
        link.setAttribute("download", `${from_date}_${to_date}김포출근길_noTime.csv`);
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일2 생성 끝-----------------------------------------------


// CSV파일3 생성 시작-----------------------------------------------
function flie_getOffGimpoDataSave(getOffGimpoCSV) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,시간,계단,엘리베이터,에스컬레이터,합계\n";

    // CSV 데이터 추가
    for (let i = 0; i < getOffGimpoCSV.length - 1; i++) {
        var currentItem = getOffGimpoCSV[i];

        let row = `${i + 1},${currentItem.occuDate},${currentItem.occuTime},${currentItem.gimpo_st_in},${currentItem.gimpo_ev_in},${currentItem.gimpo_ec_in}, ${currentItem.gimpo_st_in + currentItem.gimpo_ev_in + currentItem.gimpo_ec_in}\n`;
        csvContent += row;
    }

    // UTF-8로 변환
    // const encoder = new TextEncoder();
    // const utf8Array = encoder.encode(csvContent);

    // Blob 생성
    //const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), utf8Array], { type: 'text/csv;charset=utf-8;' });
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });

    // CSV 파일 생성
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    if(occuMonth){
        link.setAttribute("download", `${occuMonth}김포퇴근길.csv`);
    }
    if(occuDay){
        link.setAttribute("download", `${occuDay}김포퇴근길.csv`);
    }
    if(from_date&&to_date){
        link.setAttribute("download", `${from_date}_${to_date}김포퇴근길.csv`);
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일3 생성 끝-----------------------------------------------


// CSV파일4 생성 시작-----------------------------------------------
function flie_getOffGimpoDataSaveNoTime(getOffGimpoCSV) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,계단,엘리베이터,에스컬레이터,합계\n";

    // CSV 데이터 추가
    for (let i = 0; i < getOffGimpoCSV.length - 1; i++) {
        var currentItem = getOffGimpoCSV[i];

        let row = `${i + 1},${currentItem.occuDate},${currentItem.gimpo_st_in},${currentItem.gimpo_ev_in},${currentItem.gimpo_ec_in}, ${currentItem.gimpo_st_in + currentItem.gimpo_ev_in + currentItem.gimpo_ec_in}\n`;
        csvContent += row;
    }

    // UTF-8로 변환
    // const encoder = new TextEncoder();
    // const utf8Array = encoder.encode(csvContent);

    // Blob 생성
    //const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), utf8Array], { type: 'text/csv;charset=utf-8;' });
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });

    // CSV 파일 생성
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    if(occuMonth){
        link.setAttribute("download", `${occuMonth}김포퇴근길_noTime.csv`);
    }
    if(occuDay){
        link.setAttribute("download", `${occuDay}김포퇴근길_noTime.csv`);
    }
    if(from_date&&to_date){
        link.setAttribute("download", `${from_date}_${to_date}김포퇴근길_noTime.csv`);
    }
    //link.setAttribute("download", `김포퇴근길_noTime.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일4 생성 끝-----------------------------------------------


// CSV파일5 생성 시작-----------------------------------------------
function flie_goToGochonDataSave(goToGochonCSV) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,시간,승차,하차\n";

    // CSV 데이터 추가
    for (let i = 0; i < goToGochonCSV.length - 1; i++) {
        var currentItem = goToGochonCSV[i];

        let row = `${i + 1},${currentItem.occuDate},${currentItem.occuTime},${currentItem.gochon_in},${currentItem.gochon_out}\n`;
        csvContent += row;
    }

    // UTF-8로 변환
    // const encoder = new TextEncoder();
    // const utf8Array = encoder.encode(csvContent);

    // Blob 생성
    //const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), utf8Array], { type: 'text/csv;charset=utf-8;' });
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });

    // CSV 파일 생성
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    if(occuMonth){
        link.setAttribute("download", `${occuMonth}고촌승하차.csv`);
    }
    if(occuDay){
        link.setAttribute("download", `${occuDay}고촌승하차.csv`);
    }
    if(from_date&&to_date){
        link.setAttribute("download", `${from_date}_${to_date}고촌승하차.csv`);
    }
    //link.setAttribute("download", `고촌승하차.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일5 생성 끝-----------------------------------------------


// CSV파일6 생성 시작-----------------------------------------------
function flie_goToGochonDataSaveNoTime(goToGochonCSV) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,승차,하차\n";

    // CSV 데이터 추가
    for (let i = 0; i < goToGochonCSV.length - 1; i++) {
        var currentItem = goToGochonCSV[i];

        let row = `${i + 1},${currentItem.occuDate},${currentItem.gochon_in},${currentItem.gochon_out}\n`;
        csvContent += row;
    }

    // UTF-8로 변환
    // const encoder = new TextEncoder();
    // const utf8Array = encoder.encode(csvContent);

    // Blob 생성
    //const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), utf8Array], { type: 'text/csv;charset=utf-8;' });
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });

    // CSV 파일 생성
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    if(occuMonth){
        link.setAttribute("download", `${occuMonth}고촌승하차_noTime.csv`);
    }
    if(occuDay){
        link.setAttribute("download", `${occuDay}고촌승하차_noTime.csv`);
    }
    if(from_date&&to_date){
        link.setAttribute("download", `${from_date}_${to_date}고촌승하차_noTime.csv`);
    }
    //link.setAttribute("download", `고촌승하차_noTime.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일6 생성 끝-----------------------------------------------


// CSV파일7 생성 시작-----------------------------------------------
function flie_goToPungmuDataSave(goToPungmuCSV) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,시간,승차,하차\n";

    // CSV 데이터 추가
    for (let i = 0; i < goToPungmuCSV.length - 1; i++) {
        var currentItem = goToPungmuCSV[i];

        let row = `${i + 1},${currentItem.occuDate},${currentItem.occuTime},${currentItem.pungmu_in},${currentItem.pungmu_out}\n`;
        csvContent += row;
    }

    // UTF-8로 변환
    // const encoder = new TextEncoder();
    // const utf8Array = encoder.encode(csvContent);

    // Blob 생성
    //const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), utf8Array], { type: 'text/csv;charset=utf-8;' });
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });

    // CSV 파일 생성
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    if(occuMonth){
        link.setAttribute("download", `${occuMonth}풍무승하차.csv`);
    }
    if(occuDay){
        link.setAttribute("download", `${occuDay}풍무승하차.csv`);
    }
    if(from_date&&to_date){
        link.setAttribute("download", `${from_date}_${to_date}풍무승하차.csv`);
    }
    // link.setAttribute("download", `풍무승하차.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일7 생성 끝-----------------------------------------------


// CSV파일8 생성 시작-----------------------------------------------
function flie_goToPungmuDataSaveNoTime(goToPungmuCSV) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,승차,하차\n";

    // CSV 데이터 추가
    for (let i = 0; i < goToPungmuCSV.length - 1; i++) {
        var currentItem = goToPungmuCSV[i];

        let row = `${i + 1},${currentItem.occuDate},${currentItem.pungmu_in},${currentItem.pungmu_out}\n`;
        csvContent += row;
    }

    // UTF-8로 변환
    // const encoder = new TextEncoder();
    // const utf8Array = encoder.encode(csvContent);

    // Blob 생성
    //const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), utf8Array], { type: 'text/csv;charset=utf-8;' });
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });

    // CSV 파일 생성
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    if(occuMonth){
        link.setAttribute("download", `${occuMonth}풍무승하차_noTime.csv`);
    }
    if(occuDay){
        link.setAttribute("download", `${occuDay}풍무승하차_noTime.csv`);
    }
    if(from_date&&to_date){
        link.setAttribute("download", `${from_date}_${to_date}풍무승하차_noTime.csv`);
    }
    //link.setAttribute("download", `풍무승하차_noTime.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일8 생성 끝-----------------------------------------------


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