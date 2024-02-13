

document.getElementById("dataSaveBtn").addEventListener("click", ()=>{

    fetchData()
    async function fetchData() {
        // 사용자로부터 파일명을 입력 받음
        const { value: fname } = await Swal.fire({
            title: "파일명을 입력해주세요.",
            input: "text",
            inputLabel: "파일명을 입력해주세요.",
            showCancelButton: true,
            inputValidator: (value) => {
                console.log("value : ", value);
                if (!value) {
                    return "파일명이 입력되지 않았습니다!";
                }
            }
        });
    
        if (fname) {
            $.ajax({
                url: "/fnameUrl", 
                type: "POST",
                data: { fname:fname},
                success: function(response){
                    console.log("서버로부터 받은 결과: ", response);
                    let filename = response.fname;

                    let comboValue = selectCombo.value;
                    if(comboValue==="GimOut"){
                        saveData(comboValue, filename);
                    }
                    if(comboValue==="GimIn"){
                        saveData(comboValue, filename);
                    }
                    if(comboValue==="PungInOut"){
                        saveData(comboValue, filename);
                    }
                    if(comboValue==="GoInOut"){
                        saveData(comboValue, filename);
                    }
                    Swal.fire(`파일명은 ${fname}`);
                }
            });
        }
    }
    
    

    

    console.log("저장");




});



function saveData(comboValue, filename){

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
                        flie_goToGimpoDataSave(goToGimpoCSV, filename);
                    }
                    if(p3 == 1){
                        flie_goToGimpoDataSaveNoTime(goToGimpoCSV, filename);
                    }
                }
                if(response.getOffGimpoCSV){
                    var getOffGimpoCSV = response.getOffGimpoCSV;
                    if(p3 == 0){
                        flie_getOffGimpoDataSave(getOffGimpoCSV, filename);
                    }
                    if(p3 == 1){
                        flie_getOffGimpoDataSaveNoTime(getOffGimpoCSV, filename);
                    }
                }
                if(response.goToGochonCSV){
                    var goToGochonCSV = response.goToGochonCSV;
                    if(p3 == 0){
                        flie_goToGochonDataSave(goToGochonCSV, filename);
                    }
                    if(p3 == 1){
                        flie_goToGochonDataSaveNoTime(goToGochonCSV, filename);
                    }
                }
                if(response.goToPungmuCSV){
                    var goToPungmuCSV = response.goToPungmuCSV;
                    if(p3 == 0){
                        flie_goToPungmuDataSave(goToPungmuCSV, filename);
                    }
                    if(p3 == 1){
                        flie_goToPungmuDataSaveNoTime(goToPungmuCSV, filename);
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
                        flie_goToGimpoDataSave(goToGimpoCSV, filename);
                    }
                    if(p3 == 1){
                        flie_goToGimpoDataSaveNoTime(goToGimpoCSV, filename);
                    }
                }
                if(response.getOffGimpoCSV){
                    var getOffGimpoCSV = response.getOffGimpoCSV;
                    if(p3 == 0){
                        flie_getOffGimpoDataSave(getOffGimpoCSV, filename);
                    }
                    if(p3 == 1){
                        flie_getOffGimpoDataSaveNoTime(getOffGimpoCSV, filename);
                    }
                }
                if(response.goToGochonCSV){
                    var goToGochonCSV = response.goToGochonCSV;
                    if(p3 == 0){
                        flie_goToGochonDataSave(goToGochonCSV, filename);
                    }
                    if(p3 == 1){
                        flie_goToGochonDataSaveNoTime(goToGochonCSV, filename);
                    }
                }
                if(response.goToPungmuCSV){
                    var goToPungmuCSV = response.goToPungmuCSV;
                    if(p3 == 0){
                        flie_goToPungmuDataSave(goToPungmuCSV, filename);
                    }
                    if(p3 == 1){
                        flie_goToPungmuDataSaveNoTime(goToPungmuCSV, filename);
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
                        flie_goToGimpoDataSave(goToGimpoCSV, filename);
                    }
                    if(p3 == 1){
                        flie_goToGimpoDataSaveNoTime(goToGimpoCSV, filename);
                    }
                }
                if(response.getOffGimpoCSV){
                    var getOffGimpoCSV = response.getOffGimpoCSV;
                    if(p3 == 0){
                        flie_getOffGimpoDataSave(getOffGimpoCSV, filename);
                    }
                    if(p3 == 1){
                        flie_getOffGimpoDataSaveNoTime(getOffGimpoCSV, filename);
                    }
                }
                if(response.goToGochonCSV){
                    var goToGochonCSV = response.goToGochonCSV;
                    if(p3 == 0){
                        flie_goToGochonDataSave(goToGochonCSV, filename);
                    }
                    if(p3 == 1){
                        flie_goToGochonDataSaveNoTime(goToGochonCSV, filename);
                    }
                }
                if(response.goToPungmuCSV){
                    var goToPungmuCSV = response.goToPungmuCSV;
                    if(p3 == 0){
                        flie_goToPungmuDataSave(goToPungmuCSV, filename);
                    }
                    if(p3 == 1){
                        flie_goToPungmuDataSaveNoTime(goToPungmuCSV, filename);
                    }
                }
            }
        });


    }


    // CSV파일1 생성 시작-----------------------------------------------
    function flie_goToGimpoDataSave(goToGimpoCSV, filename) {

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
        
        link.setAttribute("download", `${filename}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    // CSV파일1 생성 끝-----------------------------------------------


    // CSV파일2 생성 시작-----------------------------------------------
    function flie_goToGimpoDataSaveNoTime(goToGimpoCSV, filename) {
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

    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일2 생성 끝-----------------------------------------------


// CSV파일3 생성 시작-----------------------------------------------
function flie_getOffGimpoDataSave(getOffGimpoCSV, filename) {
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

    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일3 생성 끝-----------------------------------------------


// CSV파일4 생성 시작-----------------------------------------------
function flie_getOffGimpoDataSaveNoTime(getOffGimpoCSV, filename) {
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

    
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일4 생성 끝-----------------------------------------------


// CSV파일5 생성 시작-----------------------------------------------
function flie_goToGochonDataSave(goToGochonCSV, filename) {
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

    
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일5 생성 끝-----------------------------------------------


// CSV파일6 생성 시작-----------------------------------------------
function flie_goToGochonDataSaveNoTime(goToGochonCSV, filename) {
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

    
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일6 생성 끝-----------------------------------------------


// CSV파일7 생성 시작-----------------------------------------------
function flie_goToPungmuDataSave(goToPungmuCSV, filename) {
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

    

    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일7 생성 끝-----------------------------------------------


// CSV파일8 생성 시작-----------------------------------------------
function flie_goToPungmuDataSaveNoTime(goToPungmuCSV, filename) {
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

    
    link.setAttribute("download", `${filename}.csv`);
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