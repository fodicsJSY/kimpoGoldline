
let no =0;

//테이블 초기화
function fristTible() {
    var dataContainer = document.querySelector(".dataContainer");
    dataContainer.innerHTML = ""; // Clear previous data


    var daySearch = document.getElementById("daySearch");
    // console.log("daySearch", daySearch.value);
    var occuDay = formatToYYYYMMDD(daySearch.value);
    var from_date = occuDay;
    var to_date = occuDay;

      // console.log('occuDay:', occuDay); // 콘솔에 occuDate 값 로그 출력
    var comboValue = 'GimOut';
    var bSum = 0;

    // console.log("bSum", bSum);

    $.ajax({
        url: "/dayUrl", 
        type: "POST",
        data: { from_date:from_date, to_date:to_date, comboValue:comboValue, bSum:bSum},
        timeout: 3000000, // milliseconds (3000 seconds)
        success: function(response){
            // console.log("response", response);
            /* 김포공항 하선/하차인원 */
            goGimpoTableNotDaySum(response.goToGimpoCSV);
        }
    });
}



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
        } else if (title === "날짜") {
            th.classList.add("th2");
        } else if (title === "시간") {
            th.classList.add("th7");
        } else if (title === "계단") {
            th.classList.add("th3");
        } else if (title === "엘리베이터") {
            th.classList.add("th4");
        } else if (title === "에스컬레이터") {
            th.classList.add("th5");
        } else {
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
        } else if (title === "날짜") {
            th.classList.add("th2");
        } else if (title === "계단") {
            th.classList.add("th3");
        } else if (title === "엘리베이터") {
            th.classList.add("th4");
        } else if (title === "에스컬레이터") {
            th.classList.add("th5");
        } else {
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
        } else if (title === "날짜") {
            th.classList.add("goPung_th2");
        } else if (title === "시간") {
            th.classList.add("goPung_th5");
        } else if (title === "승차") {
            th.classList.add("goPung_th3");
        } else {
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
        } else if (title === "날짜") {
            th.classList.add("th2");
        } else if (title === "승차") {
            th.classList.add("th3");
        } else {
            th.classList.add("th4");
        }
        tr.appendChild(th);
    });
    return table;
}
/* 풍무&고촌 테이블헤드 끝*/




/* 월별 일별 시작 */

/* 김포공항 하선/하차인원 시작 */
// tbody 
function goGimpoTableNotDaySum(goToGimpoCSVList) {
    // console.log("goToGimpoCSVList", goToGimpoCSVList);
    // console.log("goToGimpoCSVList_length", goToGimpoCSVList.length);

    // var dataTbody = document.getElementById("dataTbody");

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

    no =0;
    // var totalItems = goToGimpoCSVList.reduce((sum, item) => sum + item.length, 0);
    // console.log("totalItems", totalItems);
    var processedItems = 0;

    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";
    
    goToGimpoCSVList.forEach(function (item) {
        // console.log("item", item);
        no++;
        // console.log("no", no);
        processedItems++;
        // console.log("processedItems", processedItems);
        // if(item.length == 0){
            //     progressDiv.style.display = 'none';
            // }

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr, "td", "td_data7", item.occuTime);
        createCell(tr, "td", "td_data3", item.gimpo_st_out);
        createCell(tr, "td", "td_data4", item.gimpo_ev_out);
        createCell(tr, "td", "td_data5", item.gimpo_ec_out);
        createCell(tr, "td", "td_data6", item.gimpo_st_out + item.gimpo_ev_out + item.gimpo_ec_out);

        updateProgressBar(processedItems, goToGimpoCSVList.length);

    });
}


function updateProgressBar(processed, total) {
    var percent = Math.round((processed / total ) * 100);
    // console.log("percent", percent);
    document.querySelector(".progressNow").style.width = percent + "%";
    document.querySelector(".progressPer").textContent = percent + " %";

    if(percent == 100){
        progressDiv.style.display = 'none';
    }
}


// tbody + 일합계
function goGimpoTableDaySum(goToGimpoCSVList) {
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

    no =0;
    // var totalItems = goToGimpoCSVList.reduce((sum, item) => sum + item.length, 0);
    // console.log("totalItems", totalItems);
    var processedItems = 0;

    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";
    
    goToGimpoCSVList.forEach(function (item) {
        // console.log("item", item);
        no++;
        processedItems++;
        

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr, "td", "td_data3", item.gimpo_st_out);
        createCell(tr, "td", "td_data4", item.gimpo_ev_out);
        createCell(tr, "td", "td_data5", item.gimpo_ec_out);
        createCell(tr, "td", "td_data6", item.gimpo_st_out + item.gimpo_ev_out + item.gimpo_ec_out);

        updateProgressBar(processedItems, goToGimpoCSVList.length);
    });
}
/* 김포공항 하선/하차인원 끝 */



/* 김포공항 상선/승차인원 시작 */
// tbody 
function getGimpoTableNotDaySum(getOffGimpoCSVList) {
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

    no =0;
    // var totalItems = getOffGimpoCSVList.reduce((sum, item) => sum + item.length, 0);
    // console.log("totalItems", totalItems);
    var processedItems = 0;

    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    getOffGimpoCSVList.forEach(function (item) {
        // console.log("item", item);
        no++;
        // console.log("no", no);
        processedItems++;
        // console.log("processedItems", processedItems);
        

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr, "td", "td_data7", item.occuTime);
        createCell(tr, "td", "td_data3", item.gimpo_st_in);
        createCell(tr, "td", "td_data4", item.gimpo_ev_in);
        createCell(tr, "td", "td_data5", item.gimpo_ec_in);
        createCell(tr, "td", "td_data6", item.gimpo_st_in + item.gimpo_ev_in + item.gimpo_ec_in);

        updateProgressBar(processedItems, getOffGimpoCSVList.length);
    });
}


// tbody + 일합계
function getGimpoTableDaySum(getOffGimpoCSVList) {
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

    no =0;
    // var totalItems = getOffGimpoCSVList.reduce((sum, item) => sum + item.length, 0);
    // console.log("totalItems", totalItems);
    var processedItems = 0;

    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    getOffGimpoCSVList.forEach(function (item) {
        // console.log("item", item);
        no++;
        // console.log("no", no);
        processedItems++;
        // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);
        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr, "td", "td_data3", item.gimpo_st_in);
        createCell(tr, "td", "td_data4", item.gimpo_ev_in);
        createCell(tr, "td", "td_data5", item.gimpo_ec_in);
        createCell(tr, "td", "td_data6", item.gimpo_st_in + item.gimpo_ev_in + item.gimpo_ec_in);

        updateProgressBar(processedItems, getOffGimpoCSVList.length);
    });
}
/* 김포공항 상선/승차인원 끝 */





/* 풍무 승하차 시작 */
// tbody 
function pungmoTableNotDaySum(goToPungmuCSVList) {
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

    no =0;
    // var totalItems = goToPungmuCSVList.reduce((sum, item) => sum + item.length, 0);
    // console.log("totalItems", totalItems);
    var processedItems = 0;


    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    goToPungmuCSVList.forEach(function (item) {
        // console.log("item", item);
        // console.log("itemlength", item.length);

        no++;
        // console.log("no", no);
        processedItems++;
        // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data5", item.occuTime);
        createCell(tr, "td", "goPung_td_data3", item.pungmu_in);
        createCell(tr, "td", "goPung_td_data4", item.pungmu_out);

        updateProgressBar(processedItems, goToPungmuCSVList.length);
    });
}


// tbody + 일합계
function pungmoTableDaySum(goToPungmuCSVList) {
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

    no =0

    // var totalItems = goToPungmuCSVList.reduce((sum, item) => sum + item.length, 0);
    // console.log("totalItems", totalItems);
    var processedItems = 0;

    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    goToPungmuCSVList.forEach(function (item) {
        // console.log("item", item);

        no++;
        // console.log("no", no);
        processedItems++;
        // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);
        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data3", item.pungmu_in);
        createCell(tr, "td", "goPung_td_data4", item.pungmu_out);

        updateProgressBar(processedItems, goToPungmuCSVList.length);
    });
}
/* 풍무 승하차 끝 */



/* 고촌 승하차 시작 */
// tbody 
function gochonTableNotDaySum(goToGochonCSVList) {
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

    no =0;
    // var totalItems = goToGochonCSVList.reduce((sum, item) => sum + item.length, 0);
    // console.log("totalItems", totalItems);
    var processedItems = 0;


    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    goToGochonCSVList.forEach(function (item) {
        // console.log("item", item);

        no++;
        // console.log("no", no);
        processedItems++;
        // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);
        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data5", item.occuTime);
        createCell(tr, "td", "goPung_td_data3", item.gochon_in);
        createCell(tr, "td", "goPung_td_data4", item.gochon_out);

        updateProgressBar(processedItems, goToGochonCSVList.length);
    });
}


// tbody + 일합계
function gochonTableDaySum(goToGochonCSVList) {
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

    no =0;
    // var totalItems = goToGochonCSVList.reduce((sum, item) => sum + item.length, 0);
    // console.log("totalItems", totalItems);
    var processedItems = 0;


    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    goToGochonCSVList.forEach(function (item) {
        // console.log("item", item);
        
        no++;
        // console.log("no", no);
        processedItems++;
        // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data3", item.gochon_in);
        createCell(tr, "td", "goPung_td_data4", item.gochon_out);

        updateProgressBar(processedItems, goToGochonCSVList.length);
    });
}
/* 고촌 승하차 끝 */

/* 월별 일별 끝 */











/* 기간별 시작 */
/* 김포공항 하선/하차인원 시작 */
// tbody 
function goGimpoNotDaySum(goToGimpoCSVList) {
    // console.log("goToGimpoCSVList", goToGimpoCSVList);
    // console.log("goToGimpoCSVList_length", goToGimpoCSVList.length);


    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data

    if (!dataContainer.innerHTML) {
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
    } else {
        var dataTbody = dataContainer.querySelector(".dataTbody");
    }


    no =0;

    goToGimpoCSVList.forEach(function (item) {
        // console.log("item", item);

        // no++;
        no = dataTbody.children.length + 1;
        // console.log("no", no);

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


function updateProgressBar(processed, total) {
    var percent = Math.round((processed / total) * 100);
    // console.log("percent", percent);
    document.querySelector(".progressNow").style.width = percent + "%";
    document.querySelector(".progressPer").textContent = percent + " %";



    if(percent == 100){
        progressDiv.style.display = 'none';
    }
}


// tbody + 일합계
function goGimpoDaySum(goToGimpoCSVList) {
    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data

    if (!dataContainer.innerHTML) {
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
    } else {
        var dataTbody = dataContainer.querySelector(".dataTbody");
    }

    no =0;
    
    goToGimpoCSVList.forEach(function (item) {
        // console.log("item", item);
        no = dataTbody.children.length + 1;

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
/* 김포공항 하선/하차인원 끝 */



/* 김포공항 상선/승차인원 시작 */
// tbody 
function getGimpoNotDaySum(getOffGimpoCSVList) {
    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data

    if (!dataContainer.innerHTML) {
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
    } else {
        var dataTbody = dataContainer.querySelector(".dataTbody");
    }

    no =0;


    getOffGimpoCSVList.forEach(function (item) {
        // console.log("item", item);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

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
function getGimpoDaySum(getOffGimpoCSVList) {
    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data

    if (!dataContainer.innerHTML) {
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
    } else {
        var dataTbody = dataContainer.querySelector(".dataTbody");
    }

    no =0;

    getOffGimpoCSVList.forEach(function (item) {
        // console.log("item", item);
        no = dataTbody.children.length + 1;
        // console.log("no", no);

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
/* 김포공항 상선/승차인원 끝 */





/* 풍무 승하차 시작 */
// tbody 
function pungmuNotDaySum(goToPungmuCSVList) {
    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data

    if (!dataContainer.innerHTML) {
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
    } else {
        var dataTbody = dataContainer.querySelector(".dataTbody");
    }

    no =0;

    goToPungmuCSVList.forEach(function (item) {
        // console.log("item", item);
        // console.log("itemlength", item.length);

        no++;
        // console.log("no", no);


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
function pungmuDaySum(goToPungmuCSVList) {
    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data


    if (!dataContainer.innerHTML) {
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
    } else {
        var dataTbody = dataContainer.querySelector(".dataTbody");
    }

    no =0

    goToPungmuCSVList.forEach(function (item) {
        // console.log("item", item);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

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
function gochonNotDaySum(goToGochonCSVList) {
    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data

    if (!dataContainer.innerHTML) {
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
    } else {
        var dataTbody = dataContainer.querySelector(".dataTbody");
    }

    no =0;

    goToGochonCSVList.forEach(function (item) {
        // console.log("item", item);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

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
function gochonDaySum(goToGochonCSVList) {
    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data

    if (!dataContainer.innerHTML) {
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
    } else {
        var dataTbody = dataContainer.querySelector(".dataTbody");
    }

    no =0;

    goToGochonCSVList.forEach(function (item) {
        // console.log("item", item);
        
        no = dataTbody.children.length + 1;
        // console.log("no", no);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data3", item.gochon_in);
        createCell(tr, "td", "goPung_td_data4", item.gochon_out);

    });
}
/* 고촌 승하차 끝 */
/* 기간별 끝 */





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