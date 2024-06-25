let nameArray = [];

document.getElementById("dataAllSaveBtn").addEventListener("click", ()=>{

    nameArray = [];

    //console.log("클릭");
    fetchNameData();
    
});



// 파일명 받기
async function getAllDataFileName() {

    /* 김포공항 하선/하차인원 */
    const { value: goToGimpoFileName } = await Swal.fire({
        title: "김포공항 하선/하차인원 데이터를 저장할 파일의 이름을 입력해주세요.",
        input: "text",
        inputLabel: "김포공항 하선/하차인원 데이터를 저장할 파일의 이름을 입력해주세요.",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "김포공항 하선/하차인원 데이터를 저장할 파일의 이름을 입력해주세요.";
            }
        }
    });
    nameArray.push(goToGimpoFileName);

    /* 김포공항 상선/승차인원 */
    const { value: getoffGimpoFileName } = await Swal.fire({
        title: "김포공항 상선/승차인원 데이터를 저장할 파일의 이름을 입력해주세요.",
        input: "text",
        inputLabel: "김포공항 상선/승차인원 데이터를 저장할 파일의 이름을 입력해주세요.",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "김포공항 상선/승차인원 데이터를 저장할 파일의 이름을 입력해주세요.";
            }
        }
    });
    nameArray.push(getoffGimpoFileName);

    /* 풍무 승하차 */
    const { value: goToPungmuFileName } = await Swal.fire({
        title: "풍무역 승/하차 데이터를 저장할 파일의 이름을 입력해주세요.",
        input: "text",
        inputLabel: "풍무역 승/하차 데이터를 저장할 파일의 이름을 입력해주세요.",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "풍무역 승/하차 데이터를 저장할 파일의 이름을 입력해주세요.";
            }
        }
    });
    nameArray.push(goToPungmuFileName);

    /* 고촌 승하차 */
    const { value: goToGochonFileName } = await Swal.fire({
        title: "고촌역 승/하차 데이터를 저장할 파일의 이름을 입력해주세요.",
        input: "text",
        inputLabel: "고촌역 승/하차 데이터를 저장할 파일의 이름을 입력해주세요.",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "고촌역 승/하차 데이터를 저장할 파일의 이름을 입력해주세요.";
            }
        }
    });
    nameArray.push(goToGochonFileName);

    // console.log(" nameArray : ", nameArray);
    return nameArray;
}

// 비동기로 파일명 가져오기
async function fetchNameData(){

    // 파일명 가져오기
    const nameArray = await getAllDataFileName();

    let goToGimpoName = nameArray[0];
    // console.log("goToGimpoName", goToGimpoName);
    let getOffGimpoName = nameArray[1];
    // console.log("getOffGimpoName", getOffGimpoName);
    let goToPungmuName = nameArray[2];
    // console.log("goToPungmuName", goToPungmuName);
    let goToGochonName = nameArray[3];
    // console.log("goToGochonName", goToGochonName);

    if (nameArray) {
        fetch("fileNameUrl", { 
            method : "POST", 
            headers: {"Content-Type": "application/json"}, 
            body : JSON.stringify( {"goToGimpoName":goToGimpoName, "getOffGimpoName":getOffGimpoName, "goToPungmuName":goToPungmuName, "goToGochonName":goToGochonName} ) 
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            // console.log("result : ", result);

            // console.log("result", result);
            let goToGimpoName = result.goToGimpoName;
            // console.log("result goToGimpoName", goToGimpoName);
            let getOffGimpoName = result.getOffGimpoName;
            // console.log("result getOffGimpoName", getOffGimpoName);
            let goToPungmuName = result.goToPungmuName;
            // console.log("result goToPungmuName", goToPungmuName);
            let goToGochonName = result.goToGochonName;
            // console.log("result goToGochonName", goToGochonName);

            saveAllData(goToGimpoName, getOffGimpoName, goToPungmuName, goToGochonName);

        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch( err => {
            // console.log("err : ", err);
            Swal.fire("파일을 다운로드 할 수 없습니다.");
        }); // 예외 발생 시 처리할 내용을 작성
    }

}


// 파일명 받아서 저장하기
function saveAllData(goToGimpoName, getOffGimpoName, goToPungmuName, goToGochonName){

    if(selectMonth.checked){
        var monthSearch = document.getElementById("monthSearch");
        // console.log("monthSearch", monthSearch.value);
        var occuMonth = formatToYYYYMM(monthSearch.value);
        var from_date = occuMonth + "01";
        let monthValue = monthSearch.value;
        // console.log('monthValue:', monthValue); // 콘솔에 occuDate 값 로그 출력
        var monthDate = monthValue + "-" + "01";
        // console.log('monthDate:', monthDate); // 콘솔에 occuDate 값 로그 출력
        
        let lastDate = new Date(monthDate);
        // console.log('lastDate:', lastDate); // 콘솔에 occuDate 값 로그 출력
        
        
        let to_date = formatToLastDay(lastDate);
        // console.log('from_date:', from_date); // 콘솔에 occuDate 값 로그 출력

        if(daySumCheckbox.checked === false ){
        bSum = 0;
        }
        if(daySumCheckbox.checked === true){
        bSum = 1;
        }

        fetch("monthAllDataUrl", { 
            method : "POST", 
            headers: {"Content-Type": "application/json"}, 
            body : JSON.stringify( {"from_date":from_date, "to_date":to_date, "bSum":bSum} ) 
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            // console.log("result : ", result);

            let p3 = result.parameter3;
            // console.log("p3 : ", p3);

            var goToGimpoCSV = result.goToGimpoCSV;
            var getOffGimpoCSV = result.getOffGimpoCSV;
            var goToGochonCSV = result.goToGochonCSV;
            var goToPungmuCSV = result.goToPungmuCSV;

            if(p3 == 0){
                flie_goToGimpoAllDataSave(goToGimpoCSV, goToGimpoName);
                flie_getOffGimpoAllDataSave(getOffGimpoCSV, getOffGimpoName);
                flie_goToGochonAllDataSave(goToGochonCSV, goToGochonName);
                flie_goToPungmuAllDataSave(goToPungmuCSV, goToPungmuName);
                Swal.fire(`${goToGimpoName}, ${getOffGimpoName}, ${goToGochonName}, ${goToPungmuName}가 다운로드 되었습니다.`);
            }
            if(p3 == 1){
                flie_goToGimpoAllDataSaveNoTime(goToGimpoCSV, goToGimpoName);
                flie_getOffGimpoAllDataSaveNoTime(getOffGimpoCSV, getOffGimpoName);
                flie_goToGochonAllDataSaveNoTime(goToGochonCSV, goToGochonName);
                flie_goToPungmuAllDataSaveNoTime(goToPungmuCSV, goToPungmuName);
                Swal.fire(`${goToGimpoName}, ${getOffGimpoName}, ${goToGochonName}, ${goToPungmuName}가 다운로드 되었습니다.`);
            }
        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch( err => {
            // console.log("err : ", err);
            Swal.fire("파일을 다운로드 할 수 없습니다.");
        }); // 예외 발생 시 처리할 내용을 작성
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

        fetch("dayAllDataUrl", { 
            method : "POST", 
            headers: {"Content-Type": "application/json"}, 
            body : JSON.stringify( {"from_date":from_date, "to_date":to_date, "bSum":bSum} ) 
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            // console.log("result : ", result);

            let p3 = result.parameter3;
            // console.log("p3 : ", p3);

            var goToGimpoCSV = result.goToGimpoCSV;
            var getOffGimpoCSV = result.getOffGimpoCSV;
            var goToGochonCSV = result.goToGochonCSV;
            var goToPungmuCSV = result.goToPungmuCSV;

            if(p3 == 0){
                flie_goToGimpoAllDataSave(goToGimpoCSV, goToGimpoName);
                flie_getOffGimpoAllDataSave(getOffGimpoCSV, getOffGimpoName);
                flie_goToGochonAllDataSave(goToGochonCSV, goToGochonName);
                flie_goToPungmuAllDataSave(goToPungmuCSV, goToPungmuName);
                Swal.fire(`${goToGimpoName}, ${getOffGimpoName}, ${goToGochonName}, ${goToPungmuName}가 다운로드 되었습니다.`);
            }
            if(p3 == 1){
                flie_goToGimpoAllDataSaveNoTime(goToGimpoCSV, goToGimpoName);
                flie_getOffGimpoAllDataSaveNoTime(getOffGimpoCSV, getOffGimpoName);
                flie_goToGochonAllDataSaveNoTime(goToGochonCSV, goToGochonName);
                flie_goToPungmuAllDataSaveNoTime(goToPungmuCSV, goToPungmuName);
                Swal.fire(`${goToGimpoName}, ${getOffGimpoName}, ${goToGochonName}, ${goToPungmuName}가 다운로드 되었습니다.`);
            }

        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch( err => {
            // console.log("err : ", err);
            Swal.fire("파일을 다운로드 할 수 없습니다.");
        }); // 예외 발생 시 처리할 내용을 작성
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

        fetch("customAllDataUrl", { 
            method : "POST", 
            headers: {"Content-Type": "application/json"}, 
            body : JSON.stringify( {"from_date":from_date, "to_date":to_date, "bSum":bSum} ) 
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            // console.log("result : ", result);

            let p3 = result.parameter3;
            // console.log("p3 : ", p3);

            var goToGimpoCSV = result.goToGimpoCSV;
            var getOffGimpoCSV = result.getOffGimpoCSV;
            var goToGochonCSV = result.goToGochonCSV;
            var goToPungmuCSV = result.goToPungmuCSV;

            if(p3 == 0){
                flie_goToGimpoAllDataSave(goToGimpoCSV, goToGimpoName);
                flie_getOffGimpoAllDataSave(getOffGimpoCSV, getOffGimpoName);
                flie_goToGochonAllDataSave(goToGochonCSV, goToGochonName);
                flie_goToPungmuAllDataSave(goToPungmuCSV, goToPungmuName);
                Swal.fire(`${goToGimpoName}, ${getOffGimpoName}, ${goToGochonName}, ${goToPungmuName}가 다운로드 되었습니다.`);
            }
            if(p3 == 1){
                flie_goToGimpoAllDataSaveNoTime(goToGimpoCSV, goToGimpoName);
                flie_getOffGimpoAllDataSaveNoTime(getOffGimpoCSV, getOffGimpoName);
                flie_goToGochonAllDataSaveNoTime(goToGochonCSV, goToGochonName);
                flie_goToPungmuAllDataSaveNoTime(goToPungmuCSV, goToPungmuName);
                Swal.fire(`${goToGimpoName}, ${getOffGimpoName}, ${goToGochonName}, ${goToPungmuName}가 다운로드 되었습니다.`);
            }

        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch( err => {
            // console.log("err : ", err);
            Swal.fire("파일을 다운로드 할 수 없습니다.");
        }); // 예외 발생 시 처리할 내용을 작성
    }
}



 // CSV파일1 모두 생성 시작-----------------------------------------------
function flie_goToGimpoAllDataSave(goToGimpoCSV, goToGimpoName) {
    // console.log("goToGimpoCSV", goToGimpoCSV);

    // CSV 헤더 생성
    let csvContent = "순번,날짜,시간,계단,엘리베이터,에스컬레이터,합계\n";

    // CSV 데이터 추가
    for (let i = 0; i < goToGimpoCSV.length; i++) {
        var currentItem = goToGimpoCSV[i];
        // console.log("goToGimpoCSV currentItem", currentItem);
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
    
    link.setAttribute("download", `${goToGimpoName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// CSV파일1 모두 생성 끝-----------------------------------------------


// CSV파일2 모두 생성 시작-----------------------------------------------
function flie_goToGimpoAllDataSaveNoTime(goToGimpoCSV, goToGimpoName) {
    // console.log("goToGimpoCSV", goToGimpoCSV);
// CSV 헤더 생성
let csvContent = "순번,날짜,계단,엘리베이터,에스컬레이터,합계\n";

// CSV 데이터 추가
for (let i = 0; i < goToGimpoCSV.length; i++) {
    var currentItem = goToGimpoCSV[i];
    // console.log("goToGimpoCSVSUM currentItem", currentItem);
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

link.setAttribute("download", `${goToGimpoName}.csv`);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
// CSV파일2 모두 생성 끝-----------------------------------------------


// CSV파일3 모두 생성 시작-----------------------------------------------
function flie_getOffGimpoAllDataSave(getOffGimpoCSV, getOffGimpoName) {
    // console.log("getOffGimpoCSV", getOffGimpoCSV);
// CSV 헤더 생성
let csvContent = "순번,날짜,시간,계단,엘리베이터,에스컬레이터,합계\n";

// CSV 데이터 추가
for (let i = 0; i < getOffGimpoCSV.length; i++) {
    var currentItem = getOffGimpoCSV[i];
    // console.log("getOffGimpoCSV currentItem", currentItem);
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

link.setAttribute("download", `${getOffGimpoName}.csv`);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
// CSV파일3 모두 생성 끝-----------------------------------------------


// CSV파일4 모두 생성 시작-----------------------------------------------
function flie_getOffGimpoAllDataSaveNoTime(getOffGimpoCSV, getOffGimpoName) {
    // console.log("getOffGimpoCSV", getOffGimpoCSV);
// CSV 헤더 생성
let csvContent = "순번,날짜,계단,엘리베이터,에스컬레이터,합계\n";

// CSV 데이터 추가
for (let i = 0; i < getOffGimpoCSV.length; i++) {
    var currentItem = getOffGimpoCSV[i];
    // console.log("getOffGimpoCSVSUM currentItem", currentItem);
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


link.setAttribute("download", `${getOffGimpoName}.csv`);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
// CSV파일4 모두 생성 끝-----------------------------------------------


// CSV파일5 모두 생성 시작-----------------------------------------------
function flie_goToGochonAllDataSave(goToGochonCSV, goToGochonName) {
    // console.log("goToGochonCSV", goToGochonCSV);
// CSV 헤더 생성
let csvContent = "순번,날짜,시간,승차,하차\n";

// CSV 데이터 추가
for (let i = 0; i < goToGochonCSV.length; i++) {
    var currentItem = goToGochonCSV[i];
    // console.log("goToGochonCSV currentItem", currentItem);
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


link.setAttribute("download", `${goToGochonName}.csv`);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
// CSV파일5 모두 생성 끝-----------------------------------------------


// CSV파일6 모두 생성 시작-----------------------------------------------
function flie_goToGochonAllDataSaveNoTime(goToGochonCSV, goToGochonName) {
    // console.log("goToGochonCSV", goToGochonCSV);
    // CSV 헤더 생성
    let csvContent = "순번,날짜,승차,하차\n";
    
    // CSV 데이터 추가
    for (let i = 0; i < goToGochonCSV.length; i++) {
        var currentItem = goToGochonCSV[i];
        // console.log("goToGochonCSVSUM currentItem", currentItem);
        // console.log("currentItem", currentItem);
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


link.setAttribute("download", `${goToGochonName}.csv`);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
// CSV파일6 모두 생성 끝-----------------------------------------------


// CSV파일7 모두 생성 시작-----------------------------------------------
function flie_goToPungmuAllDataSave(goToPungmuCSV, goToPungmuName) {
    // console.log("goToPungmuCSV", goToPungmuCSV);
// CSV 헤더 생성
let csvContent = "순번,날짜,시간,승차,하차\n";

// CSV 데이터 추가
for (let i = 0; i < goToPungmuCSV.length; i++) {
    var currentItem = goToPungmuCSV[i];
    // console.log("goToPungmuCSV currentItem", currentItem);
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



link.setAttribute("download", `${goToPungmuName}.csv`);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
// CSV파일7 모두 생성 끝-----------------------------------------------


// CSV파일8 모두 생성 시작-----------------------------------------------
function flie_goToPungmuAllDataSaveNoTime(goToPungmuCSV, goToPungmuName) {
    // console.log("goToPungmuCSV", goToPungmuCSV);
// CSV 헤더 생성
let csvContent = "순번,날짜,승차,하차\n";

// CSV 데이터 추가
for (let i = 0; i < goToPungmuCSV.length; i++) {
    var currentItem = goToPungmuCSV[i];
    // console.log("goToPungmuCSVSUM currentItem", currentItem);
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


link.setAttribute("download", `${goToPungmuName}.csv`);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
// CSV파일8 모두 생성 끝-----------------------------------------------