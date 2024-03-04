

document.getElementById("dataSaveBtn").addEventListener("click", ()=>{

    fetchData();
    
});

// 파일명 받기
async function getFileName() {
    const { value: fname } = await Swal.fire({
        title: "파일명을 입력해주세요.",
        input: "text",
        inputLabel: "파일명을 입력해주세요.",
        showCancelButton: true,
        inputValidator: (value) => {
            //console.log("value : ", value);
            if (!value) {
                return getFileName();
            }
        }
    });
    return fname;
}

// 비동기로 이름 받아오기
async function fetchData() {

    // 파일명 가져오기
    const fname = await getFileName();

    if (fname) {
        fetch("fnameUrl", { 
            method : "POST", 
            headers: {"Content-Type": "application/json"}, 
            body : JSON.stringify( {"fname":fname} ) 
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            // console.log("result : ", result);

            let filename = result.fname;

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

        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch( err => {
            // console.log("err : ", err);
            Swal.fire("파일을 다운로드 할 수 없습니다.");
        }); // 예외 발생 시 처리할 내용을 작성
    }
}




// 파일데이터 가져오기
function saveData(comboValue, filename){

    if(selectMonth.checked){
        var monthSearch = document.getElementById("monthSearch");
        // console.log("monthSearch", monthSearch.value);
        var occuMonth = formatToYYYYMM(monthSearch.value);
        var from_date = occuMonth + "01";
        var to_date = occuMonth + "31";
        // console.log('from_date:', from_date); // 콘솔에 occuDate 값 로그 출력

        if(daySumCheckbox.checked === false ){
        bSum = 0;
        }
        if(daySumCheckbox.checked === true){
        bSum = 1;
        }
        // console.log("bSum", bSum);

        $.ajax({
            url: "/monthUrl", 
            type: "POST",
            data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
            success: function(response){
                // console.log("response", response);
                // console.log("p3", response.parameter3);

                let p3 = response.parameter3;
                
                
                if(response.goToGimpoCSVList.length > 0){
                    var goToGimpoCSVList = response.goToGimpoCSVList;
                    // console.log("goToGimpoCSVList", goToGimpoCSVList);
                    // console.log("p3", p3);
                    if(p3 == 0){
                        file_goToGimpoDataSave(goToGimpoCSVList, filename);
                    }
                    if(p3 == 1){
                        file_goToGimpoDataSaveNoTime(goToGimpoCSVList, filename);
                    }
                }
                if(response.getOffGimpoCSVList.length > 0){
                    var getOffGimpoCSVList = response.getOffGimpoCSVList;
                    if(p3 == 0){
                        file_getOffGimpoDataSave(getOffGimpoCSVList, filename);
                    }
                    if(p3 == 1){
                        file_getOffGimpoDataSaveNoTime(getOffGimpoCSVList, filename);
                    }
                }
                if(response.goToPungmuCSVList.length > 0){
                    var goToPungmuCSVList = response.goToPungmuCSVList;
                    if(p3 == 0){
                        file_goToGochonDataSave(goToPungmuCSVList, filename);
                    }
                    if(p3 == 1){
                        file_goToGochonDataSaveNoTime(goToPungmuCSVList, filename);
                    }
                }
                if(response.goToGochonCSVList.length > 0){
                    var goToGochonCSVList = response.goToGochonCSVList;
                    if(p3 == 0){
                        file_goToPungmuDataSave(goToGochonCSVList, filename);
                    }
                    if(p3 == 1){
                        file_goToPungmuDataSaveNoTime(goToGochonCSVList, filename);
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
                //console.log("response", response);
                let p3 = response.parameter3;
                
                if(response.goToGimpoCSVList){
                    var goToGimpoCSVList = response.goToGimpoCSVList;
                    // console.log("goToGimpoCSVList", goToGimpoCSVList);
                    // console.log("p3", p3);
                    if(p3 == 0){
                        file_goToGimpoDataSave(goToGimpoCSVList, filename);
                    }
                    if(p3 == 1){
                        file_goToGimpoDataSaveNoTime(goToGimpoCSVList, filename);
                    }
                }
                if(response.getOffGimpoCSVList){
                    var getOffGimpoCSVList = response.getOffGimpoCSVList;
                    if(p3 == 0){
                        file_getOffGimpoDataSave(getOffGimpoCSVList, filename);
                    }
                    if(p3 == 1){
                        file_getOffGimpoDataSaveNoTime(getOffGimpoCSVList, filename);
                    }
                }
                if(response.goToPungmuCSVList){
                    var goToPungmuCSVList = response.goToPungmuCSVList;
                    if(p3 == 0){
                        file_goToGochonDataSave(goToPungmuCSVList, filename);
                    }
                    if(p3 == 1){
                        file_goToGochonDataSaveNoTime(goToPungmuCSVList, filename);
                    }
                }
                if(response.goToGochonCSVList){
                    var goToGochonCSVList = response.goToGochonCSVList;
                    if(p3 == 0){
                        file_goToPungmuDataSave(goToGochonCSVList, filename);
                    }
                    if(p3 == 1){
                        file_goToPungmuDataSaveNoTime(goToGochonCSVList, filename);
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
                // console.log("response", response);
                let p3 = response.parameter3;
                
                if(response.goToGimpoCSVList){
                    var goToGimpoCSVList = response.goToGimpoCSVList;
                    // console.log("goToGimpoCSVList", goToGimpoCSVList);
                    // console.log("p3", p3);
                    if(p3 == 0){
                        file_goToGimpoDataSave(goToGimpoCSVList, filename);
                    }
                    if(p3 == 1){
                        file_goToGimpoDataSaveNoTime(goToGimpoCSVList, filename);
                    }
                }
                if(response.getOffGimpoCSVList){
                    var getOffGimpoCSVList = response.getOffGimpoCSVList;
                    if(p3 == 0){
                        file_getOffGimpoDataSave(getOffGimpoCSVList, filename);
                    }
                    if(p3 == 1){
                        file_getOffGimpoDataSaveNoTime(getOffGimpoCSVList, filename);
                    }
                }
                if(response.goToPungmuCSVList){
                    var goToPungmuCSVList = response.goToPungmuCSVList;
                    if(p3 == 0){
                        file_goToGochonDataSave(goToPungmuCSVList, filename);
                    }
                    if(p3 == 1){
                        file_goToGochonDataSaveNoTime(goToPungmuCSVList, filename);
                    }
                }
                if(response.goToGochonCSVList){
                    var goToGochonCSVList = response.goToGochonCSVList;
                    if(p3 == 0){
                        file_goToPungmuDataSave(goToGochonCSVList, filename);
                    }
                    if(p3 == 1){
                        file_goToPungmuDataSaveNoTime(goToGochonCSVList, filename);
                    }
                }    
            }
        });
    }


    // CSV파일1 생성 시작-----------------------------------------------
    function file_goToGimpoDataSave(goToGimpoCSVList, filename) {
        // console.log("goToGimpoCSVList", goToGimpoCSVList);
        // CSV 헤더 생성
        let csvContent = "순번,날짜,시간,계단,엘리베이터,에스컬레이터,합계\n";
    
        // CSV 데이터 추가
        goToGimpoCSVList.forEach(function (item) {
            // console.log("item", item);
    
            item.forEach(function (data, index) {
                // console.log("data", data);
                let row = `${index+1},${data.occuDate},${data.occuTime},${data.gimpo_st_out},${data.gimpo_ev_out},${data.gimpo_ec_out}, ${data.gimpo_st_out+data.gimpo_ev_out+data.gimpo_ec_out}\n`;
                csvContent += row;
            });
        });

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
        Swal.fire(`${filename}가 다운로드 되었습니다.`);
    }
    // CSV파일1 생성 끝-----------------------------------------------


    // CSV파일2 생성 시작-----------------------------------------------
    function file_goToGimpoDataSaveNoTime(goToGimpoCSVList, filename) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,계단,엘리베이터,에스컬레이터,합계\n";

    // CSV 데이터 추가
    goToGimpoCSVList.forEach(function (item) {
        // console.log("item", item);

        item.forEach(function (data, index) {
            // console.log("data", data);
            let row = `${index+1},${data.occuDate},${data.gimpo_st_out},${data.gimpo_ev_out},${data.gimpo_ec_out}, ${data.gimpo_st_out+data.gimpo_ev_out+data.gimpo_ec_out}\n`;
            csvContent += row;
        });
    });

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
    Swal.fire(`${filename}가 다운로드 되었습니다.`);
}
// CSV파일2 생성 끝-----------------------------------------------


// CSV파일3 생성 시작-----------------------------------------------
function file_getOffGimpoDataSave(getOffGimpoCSVList, filename) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,시간,계단,엘리베이터,에스컬레이터,합계\n";

    // CSV 데이터 추가
    getOffGimpoCSVList.forEach(function (item) {
        // console.log("item", item);

        item.forEach(function (data, index) {
            // console.log("data", data);
            let row = `${index+1},${data.occuDate},${data.occuTime},${data.gimpo_st_out},${data.gimpo_ev_out},${data.gimpo_ec_out}, ${data.gimpo_st_out+data.gimpo_ev_out+data.gimpo_ec_out}\n`;
            csvContent += row;
        });
    });

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
    Swal.fire(`${filename}가 다운로드 되었습니다.`);
}
// CSV파일3 생성 끝-----------------------------------------------


// CSV파일4 생성 시작-----------------------------------------------
function file_getOffGimpoDataSaveNoTime(getOffGimpoCSVList, filename) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,계단,엘리베이터,에스컬레이터,합계\n";

    // CSV 데이터 추가
    getOffGimpoCSVList.forEach(function (item) {
        // console.log("item", item);

        item.forEach(function (data, index) {
            // console.log("data", data);
            let row = `${index+1},${data.occuDate},${data.gimpo_st_out},${data.gimpo_ev_out},${data.gimpo_ec_out}, ${data.gimpo_st_out+data.gimpo_ev_out+data.gimpo_ec_out}\n`;
            csvContent += row;
        });
    });

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
    Swal.fire(`${filename}가 다운로드 되었습니다.`);
}
// CSV파일4 생성 끝-----------------------------------------------


// CSV파일5 생성 시작-----------------------------------------------
function file_goToGochonDataSave(goToGochonCSVList, filename) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,시간,승차,하차\n";

    // CSV 데이터 추가
    goToGochonCSVList.forEach(function (item) {
        // console.log("item", item);

        item.forEach(function (data, index) {
            // console.log("data", data);
            let row = `${index+1},${data.occuDate},${data.occuTime},${data.gimpo_st_out},${data.gimpo_ev_out},${data.gimpo_ec_out}, ${data.gimpo_st_out+data.gimpo_ev_out+data.gimpo_ec_out}\n`;
            csvContent += row;
        });
    });

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
    Swal.fire(`${filename}가 다운로드 되었습니다.`);
}
// CSV파일5 생성 끝-----------------------------------------------


// CSV파일6 생성 시작-----------------------------------------------
function file_goToGochonDataSaveNoTime(goToGochonCSVList, filename) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,승차,하차\n";

    // CSV 데이터 추가
    goToGochonCSVList.forEach(function (item) {
        // console.log("item", item);

        item.forEach(function (data, index) {
            // console.log("data", data);
            let row = `${index+1},${data.occuDate},${data.gimpo_st_out},${data.gimpo_ev_out},${data.gimpo_ec_out}, ${data.gimpo_st_out+data.gimpo_ev_out+data.gimpo_ec_out}\n`;
            csvContent += row;
        });
    });

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
    Swal.fire(`${filename}가 다운로드 되었습니다.`);
}
// CSV파일6 생성 끝-----------------------------------------------


// CSV파일7 생성 시작-----------------------------------------------
function file_goToPungmuDataSave(goToPungmuCSVList, filename) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,시간,승차,하차\n";

    // CSV 데이터 추가
    goToPungmuCSVList.forEach(function (item) {
        // console.log("item", item);

        item.forEach(function (data, index) {
            // console.log("data", data);
            let row = `${index+1},${data.occuDate},${data.occuTime},${data.gimpo_st_out},${data.gimpo_ev_out},${data.gimpo_ec_out}, ${data.gimpo_st_out+data.gimpo_ev_out+data.gimpo_ec_out}\n`;
            csvContent += row;
        });
    });

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
    Swal.fire(`${filename}가 다운로드 되었습니다.`);
}
// CSV파일7 생성 끝-----------------------------------------------


// CSV파일8 생성 시작-----------------------------------------------
function file_goToPungmuDataSaveNoTime(goToPungmuCSVList, filename) {
    // CSV 헤더 생성
    let csvContent = "순번,날짜,승차,하차\n";

    // CSV 데이터 추가
    goToPungmuCSVList.forEach(function (item) {
        // console.log("item", item);

        item.forEach(function (data, index) {
            // console.log("data", data);
            let row = `${index+1},${data.occuDate},${data.gimpo_st_out},${data.gimpo_ev_out},${data.gimpo_ec_out}, ${data.gimpo_st_out+data.gimpo_ev_out+data.gimpo_ec_out}\n`;
            csvContent += row;
        });
    });

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
    Swal.fire(`${filename}가 다운로드 되었습니다.`);
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