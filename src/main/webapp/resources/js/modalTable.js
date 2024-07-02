
let no =0;

//테이블 초기화
function fristTible() {

    initialization();

}


function initialization(){
    var dataContainer = document.querySelector(".dataContainer");
    dataContainer.innerHTML = ""; // Clear previous data
    progressDiv.style.display = 'none';
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
}



/* 김포 하선 테이블헤드 시작*/
// thead
function createGimpoHATableNotDaySum() {
    var table = document.createElement("table");
    table.className = "dataTable";
    var thead = document.createElement("thead");
    thead.className = "dataThead";
    table.appendChild(thead);
    var tr = document.createElement("tr");
    thead.appendChild(tr);

    ["순번", "날짜", /*"시간",*/ "계단", "엘리베이터", "에스컬레이터", "합계"].forEach(function (title) {
        var th = document.createElement("th");
        th.innerHTML = title;
        if (title === "순번") {
            th.classList.add("th1");
        } else if (title === "시간") {
            th.classList.add("th2");
        } else if (title === "날짜") {
            th.classList.add("th8");
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
function createGimpoHATableDaySum() {
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

/* 김포 상선 테이블헤드 시작*/
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
    // // console.log("goToGimpoCSVList_length", goToGimpoCSVList.length);

    // var dataTbody = document.getElementById("dataTbody");

    var dataContainer = document.querySelector(".dataContainer");
    dataContainer.innerHTML = ""; // Clear previous data


        let div01 = document.createElement("div");
        dataContainer.appendChild(div01);
        let div02 = document.createElement("div");
        dataContainer.appendChild(div02);

        var dataTable1 = createGimpoHATableNotDaySum();
        dataTable1.className = "dataTable";
        div01.appendChild(dataTable1);

        var dataTable2 = document.createElement("table");
        dataTable2.className = "dataTable";
        div02.appendChild(dataTable2);

        var dataTbody = document.createElement("tbody");
        dataTbody.className = "dataTbody";
        dataTable2.appendChild(dataTbody);

    no =0;
    var processedItems = 0;
    progressDiv.style.display = 'block';
    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";
    
    goToGimpoCSVList.forEach(function (item) {
        // console.log("item", item);
        no++;
        // // console.log("no", no);
        processedItems++;
        // // console.log("processedItems", processedItems);
        // if(item.length == 0){
            //     progressDiv.style.display = 'none';
            // }

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "td_data1", no);
        // createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr, "td", "td_data8", item.occuTime);
        createCell(tr, "td", "td_data3", item.gimpo_st_out);
        createCell(tr, "td", "td_data4", item.gimpo_ev_out);
        createCell(tr, "td", "td_data5", item.gimpo_ec_out);
        createCell(tr, "td", "td_data6", item.gimpo_st_out + item.gimpo_ev_out + item.gimpo_ec_out);

        updateProgressBar01(processedItems, goToGimpoCSVList.length);

    });
}



// function updateProgressBar(processed, total) {
//     var percent = Math.round((processed / total) * 100);
//     // console.log("percent", percent);
//     document.querySelector(".progressNow").style.width = percent + "%";
//     document.querySelector(".progressPer").textContent = percent + " %";



//     if(percent == 100){
//         progressDiv.style.display = 'none';
//     }
// }



// tbody + 일합계
function goGimpoTableDaySum(goToGimpoCSVList) {
    var dataContainer = document.querySelector(".dataContainer");
    dataContainer.innerHTML = ""; // Clear previous data
    let div01 = document.createElement("div");
    dataContainer.appendChild(div01);
    let div02 = document.createElement("div");
    dataContainer.appendChild(div02);

    var dataTable1 = createGimpoHATableDaySum();
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
    // // console.log("totalItems", totalItems);
    var processedItems = 0;
    progressDiv.style.display = 'block';
    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";
    
    goToGimpoCSVList.forEach(function (item) {
        // // console.log("item", item);
        no++;
        processedItems++;
        // // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.cntDate);
        createCell(tr, "td", "td_data3", item.gimpo_st_out);
        createCell(tr, "td", "td_data4", item.gimpo_ev_out);
        createCell(tr, "td", "td_data5", item.gimpo_ec_out);
        createCell(tr, "td", "td_data6", item.gimpo_st_out + item.gimpo_ev_out + item.gimpo_ec_out);

        updateProgressBar01(processedItems, goToGimpoCSVList.length);
    });
}
/* 김포공항 하선/하차인원 끝 */



/* 김포공항 상선/승차인원 시작 */
// tbody 
function getGimpoTableNotDaySum(getOffGimpoCSVList) {
    // // console.log("getOffGimpoCSVList", getOffGimpoCSVList);
    // // console.log("getOffGimpoCSVList_length", getOffGimpoCSVList.length);
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
    // // console.log("totalItems", totalItems);
    var processedItems = 0;
    progressDiv.style.display = 'block';
    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    getOffGimpoCSVList.forEach(function (item) {
        // // console.log("item", item);
        no++;
        // // console.log("no", no);
        processedItems++;
        // // console.log("processedItems", processedItems);
        

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.cntDate);
        createCell(tr, "td", "td_data7", item.occuTime);
        createCell(tr, "td", "td_data3", item.gimpo_st_in);
        createCell(tr, "td", "td_data4", item.gimpo_ev_in);
        createCell(tr, "td", "td_data5", item.gimpo_ec_in);
        createCell(tr, "td", "td_data6", item.gimpo_st_in + item.gimpo_ev_in + item.gimpo_ec_in);

        updateProgressBar01(processedItems, getOffGimpoCSVList.length);
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
    // // console.log("totalItems", totalItems);
    var processedItems = 0;
    progressDiv.style.display = 'block';
    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    getOffGimpoCSVList.forEach(function (item) {
        // // console.log("item", item);
        no++;
        // // console.log("no", no);
        processedItems++;
        // // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);
        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.cntDate);
        createCell(tr, "td", "td_data3", item.gimpo_st_in);
        createCell(tr, "td", "td_data4", item.gimpo_ev_in);
        createCell(tr, "td", "td_data5", item.gimpo_ec_in);
        createCell(tr, "td", "td_data6", item.gimpo_st_in + item.gimpo_ev_in + item.gimpo_ec_in);

        updateProgressBar01(processedItems, getOffGimpoCSVList.length);
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
    // // console.log("totalItems", totalItems);
    var processedItems = 0;

    progressDiv.style.display = 'block';
    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    goToPungmuCSVList.forEach(function (item) {
        // // console.log("item", item);
        // // console.log("itemlength", item.length);

        no++;
        // // console.log("no", no);
        processedItems++;
        // // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data5", item.occuTime);
        createCell(tr, "td", "goPung_td_data3", item.pungmu_in);
        createCell(tr, "td", "goPung_td_data4", item.pungmu_out);

        updateProgressBar01(processedItems, goToPungmuCSVList.length);
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
    // // console.log("totalItems", totalItems);
    var processedItems = 0;
    progressDiv.style.display = 'block';
    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    goToPungmuCSVList.forEach(function (item) {
        // // console.log("item", item);

        no++;
        // // console.log("no", no);
        processedItems++;
        // // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);
        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data3", item.pungmu_in);
        createCell(tr, "td", "goPung_td_data4", item.pungmu_out);

        updateProgressBar01(processedItems, goToPungmuCSVList.length);
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
    // // console.log("totalItems", totalItems);
    var processedItems = 0;

    progressDiv.style.display = 'block';
    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    goToGochonCSVList.forEach(function (item) {
        // // console.log("item", item);

        no++;
        // // console.log("no", no);
        processedItems++;
        // // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);
        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data5", item.occuTime);
        createCell(tr, "td", "goPung_td_data3", item.gochon_in);
        createCell(tr, "td", "goPung_td_data4", item.gochon_out);

        updateProgressBar01(processedItems, goToGochonCSVList.length);
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
    // // console.log("totalItems", totalItems);
    var processedItems = 0;

    progressDiv.style.display = 'block';
    document.querySelector(".progressNow").style.width = 0 + "%";
    document.querySelector(".progressPer").textContent = 0 + " %";

    goToGochonCSVList.forEach(function (item) {
        // // console.log("item", item);
        
        no++;
        // // console.log("no", no);
        processedItems++;
        // // console.log("processedItems", processedItems);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data3", item.gochon_in);
        createCell(tr, "td", "goPung_td_data4", item.gochon_out);

        updateProgressBar01(processedItems, goToGochonCSVList.length);
    });
}
/* 고촌 승하차 끝 */

/* 월별 일별 끝 */











/* 기간별 시작 */
/* 김포공항 하선/하차인원 시작 */
// tbody 
function goGimpoNotDaySum(goToGimpoCSV_custom, goToGimpoCSV_custom_total, num, days) {
    // // console.log("goToGimpoCSV_custom", goToGimpoCSV_custom);
    // // console.log("goToGimpoCSV_custom_length", goToGimpoCSV_custom.length);
    // console.log("goToGimpoCSV_custom_total", goToGimpoCSV_custom_total);
    // console.log("num", num);
    // console.log("days", days);
    

    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data

    if (!dataContainer.innerHTML) {
        let div01 = document.createElement("div");
        dataContainer.appendChild(div01);
        let div02 = document.createElement("div");
        dataContainer.appendChild(div02);

        var dataTable1 = createGimpoHATableNotDaySum();
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

    goToGimpoCSV_custom.forEach(function (item) {
        // // console.log("item", item);

        // no++;
        no = dataTbody.children.length + 1;
        // // console.log("no", no);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "td_data1", no);
        // createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr, "td", "td_data8", item.occuTime);
        createCell(tr, "td", "td_data3", item.gimpo_st_out);
        createCell(tr, "td", "td_data4", item.gimpo_ev_out);
        createCell(tr, "td", "td_data5", item.gimpo_ec_out);
        createCell(tr, "td", "td_data6", item.gimpo_st_out + item.gimpo_ev_out + item.gimpo_ec_out);
    });



    if( num == days){
        // console.log("요기요");
        // console.log("goToGimpoCSV_custom_total[0]", goToGimpoCSV_custom_total[0]);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

        var tr01 = document.createElement("tr");
        dataTbody.appendChild(tr01);
        createCell(tr01, "td", "td_data1", no);
        // createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr01, "td", "td_data7", goToGimpoCSV_custom_total[0].cntDate);
        createCell(tr01, "td", "td_data3", goToGimpoCSV_custom_total[0].gimpo_st_out);
        createCell(tr01, "td", "td_data4", goToGimpoCSV_custom_total[0].gimpo_ev_out);
        createCell(tr01, "td", "td_data5", goToGimpoCSV_custom_total[0].gimpo_ec_out);
        createCell(tr01, "td", "td_data6", goToGimpoCSV_custom_total[0].gimpo_st_out + goToGimpoCSV_custom_total[0].gimpo_ev_out + goToGimpoCSV_custom_total[0].gimpo_ec_out);
    }
}


// tbody + 일합계
function goGimpoDaySum(goToGimpoCSV_daySum, goToGimpoCSV_custom_total, num, days) {
    var dataContainer = document.querySelector(".dataContainer");
    // dataContainer.innerHTML = ""; // Clear previous data

    if (!dataContainer.innerHTML) {
        let div01 = document.createElement("div");
        dataContainer.appendChild(div01);
        let div02 = document.createElement("div");
        dataContainer.appendChild(div02);

        var dataTable1 = createGimpoHATableDaySum();
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
    
    goToGimpoCSV_daySum.forEach(function (item) {
        // // console.log("item", item);
        no = dataTbody.children.length + 1;

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.cntDate);
        createCell(tr, "td", "td_data3", item.gimpo_st_out);
        createCell(tr, "td", "td_data4", item.gimpo_ev_out);
        createCell(tr, "td", "td_data5", item.gimpo_ec_out);
        createCell(tr, "td", "td_data6", item.gimpo_st_out + item.gimpo_ev_out + item.gimpo_ec_out);
    });

    if( num == days){
        // console.log("요기요");
        // console.log("goToGimpoCSV_custom_total[0]", goToGimpoCSV_custom_total[0]);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

        var tr01 = document.createElement("tr");
        dataTbody.appendChild(tr01);
        createCell(tr01, "td", "td_data1", no);
        // createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr01, "td", "td_data7", goToGimpoCSV_custom_total[0].cntDate);
        createCell(tr01, "td", "td_data3", goToGimpoCSV_custom_total[0].gimpo_st_out);
        createCell(tr01, "td", "td_data4", goToGimpoCSV_custom_total[0].gimpo_ev_out);
        createCell(tr01, "td", "td_data5", goToGimpoCSV_custom_total[0].gimpo_ec_out);
        createCell(tr01, "td", "td_data6", goToGimpoCSV_custom_total[0].gimpo_st_out + goToGimpoCSV_custom_total[0].gimpo_ev_out + goToGimpoCSV_custom_total[0].gimpo_ec_out);
    }
}
/* 김포공항 하선/하차인원 끝 */



/* 김포공항 상선/승차인원 시작 */
// tbody 
function getGimpoNotDaySum(getOffGimpoCSV_custom, getOffGimpoCSV_custom_total, num, days) {
    // console.log("getOffGimpoCSV_custom", getOffGimpoCSV_custom);
    // console.log("getOffGimpoCSV_custom_length", getOffGimpoCSV_custom.length);

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


    getOffGimpoCSV_custom.forEach(function (item) {
        // // console.log("item", item);

        no = dataTbody.children.length + 1;
        // // console.log("no", no);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.cntDate);
        createCell(tr, "td", "td_data7", item.occuTime);
        createCell(tr, "td", "td_data3", item.gimpo_st_in);
        createCell(tr, "td", "td_data4", item.gimpo_ev_in);
        createCell(tr, "td", "td_data5", item.gimpo_ec_in);
        createCell(tr, "td", "td_data6", item.gimpo_st_in + item.gimpo_ev_in + item.gimpo_ec_in);

    });

    if( num == days){
        // console.log("요기요");
        // console.log("getOffGimpoCSV_custom_total[0]", getOffGimpoCSV_custom_total[0]);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

        var tr01 = document.createElement("tr");
        dataTbody.appendChild(tr01);
        createCell(tr01, "td", "td_data1", no);
        createCell(tr01, "td", "td_data2", getOffGimpoCSV_custom_total[0].cntDate);
        createCell(tr01, "td", "td_data7", getOffGimpoCSV_custom_total[0].cntDate);
        createCell(tr01, "td", "td_data3", getOffGimpoCSV_custom_total[0].gimpo_st_in);
        createCell(tr01, "td", "td_data4", getOffGimpoCSV_custom_total[0].gimpo_ev_in);
        createCell(tr01, "td", "td_data5", getOffGimpoCSV_custom_total[0].gimpo_ec_in);
        createCell(tr01, "td", "td_data6", getOffGimpoCSV_custom_total[0].gimpo_st_in + getOffGimpoCSV_custom_total[0].gimpo_ev_in + getOffGimpoCSV_custom_total[0].gimpo_ec_in);
    }
}


// tbody + 일합계
function getGimpoDaySum(getOffGimpoCSV_daySum , getOffGimpoCSV_custom_total, num, days) {
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

    getOffGimpoCSV_daySum.forEach(function (item) {
        // // console.log("item", item);
        no = dataTbody.children.length + 1;
        // // console.log("no", no);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);
        createCell(tr, "td", "td_data1", no);
        createCell(tr, "td", "td_data2", item.cntDate);
        createCell(tr, "td", "td_data3", item.gimpo_st_in);
        createCell(tr, "td", "td_data4", item.gimpo_ev_in);
        createCell(tr, "td", "td_data5", item.gimpo_ec_in);
        createCell(tr, "td", "td_data6", item.gimpo_st_in + item.gimpo_ev_in + item.gimpo_ec_in);
    });

    
    if( num == days){
        // console.log("요기요");
        // console.log("getOffGimpoCSV_custom_total[0]", getOffGimpoCSV_custom_total[0]);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

        var tr01 = document.createElement("tr");
        dataTbody.appendChild(tr01);
        createCell(tr01, "td", "td_data1", no);
        createCell(tr01, "td", "td_data2", getOffGimpoCSV_custom_total[0].cntDate);
        createCell(tr01, "td", "td_data7", getOffGimpoCSV_custom_total[0].cntDate);
        createCell(tr01, "td", "td_data3", getOffGimpoCSV_custom_total[0].gimpo_st_in);
        createCell(tr01, "td", "td_data4", getOffGimpoCSV_custom_total[0].gimpo_ev_in);
        createCell(tr01, "td", "td_data5", getOffGimpoCSV_custom_total[0].gimpo_ec_in);
        createCell(tr01, "td", "td_data6", getOffGimpoCSV_custom_total[0].gimpo_st_in + getOffGimpoCSV_custom_total[0].gimpo_ev_in + getOffGimpoCSV_custom_total[0].gimpo_ec_in);
    }
}
/* 김포공항 상선/승차인원 끝 */





/* 풍무 승하차 시작 */
// tbody 
function pungmuNotDaySum(goToPungmuCSV_custom, goToPungmuCSV_custom_total, num, days) {
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

    goToPungmuCSV_custom.forEach(function (item) {
        // // console.log("item", item);
        // // console.log("itemlength", item.length);

        no = dataTbody.children.length + 1;
        // // console.log("no", no);


        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data5", item.occuTime);
        createCell(tr, "td", "goPung_td_data3", item.pungmu_in);
        createCell(tr, "td", "goPung_td_data4", item.pungmu_out);

    });

    if( num == days){
        // console.log("요기요");
        // console.log("goToPungmuCSV_custom_total[0]", goToPungmuCSV_custom_total[0]);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

        var tr01 = document.createElement("tr");
        dataTbody.appendChild(tr01);
        createCell(tr01, "td", "td_data1", no);
        createCell(tr01, "td", "td_data2", goToPungmuCSV_custom_total[0].occuDate);
        createCell(tr01, "td", "td_data7", goToPungmuCSV_custom_total[0].occuDate);
        createCell(tr01, "td", "td_data3", goToPungmuCSV_custom_total[0].pungmu_in);
        createCell(tr01, "td", "td_data4", goToPungmuCSV_custom_total[0].pungmu_out);
    }
}


// tbody + 일합계
function pungmuDaySum(goToPungmuCSV_daySum, goToPungmuCSV_custom_total, num, days) {
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

    goToPungmuCSV_daySum.forEach(function (item) {
        // console.log("item", item);

        no = dataTbody.children.length + 1;
        // // console.log("no", no);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);
        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data3", item.pungmu_in);
        createCell(tr, "td", "goPung_td_data4", item.pungmu_out);

    });

    if( num == days){
        // console.log("요기요");
        // console.log("goToPungmuCSV_custom_total[0]", goToPungmuCSV_custom_total[0]);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

        var tr01 = document.createElement("tr");
        dataTbody.appendChild(tr01);
        createCell(tr01, "td", "td_data1", no);
        // createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr01, "td", "td_data7", goToPungmuCSV_custom_total[0].occuDate);
        createCell(tr01, "td", "td_data3", goToPungmuCSV_custom_total[0].pungmu_in);
        createCell(tr01, "td", "td_data4", goToPungmuCSV_custom_total[0].pungmu_out);
    }
}
/* 풍무 승하차 끝 */



/* 고촌 승하차 시작 */
// tbody 
function gochonNotDaySum(goToGochonCSV_custom, goToGochonCSV_custom_total, num, days) {
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

    goToGochonCSV_custom.forEach(function (item) {
        // // console.log("item", item);

        no = dataTbody.children.length + 1;
        // // console.log("no", no);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);
        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data5", item.occuTime);
        createCell(tr, "td", "goPung_td_data3", item.gochon_in);
        createCell(tr, "td", "goPung_td_data4", item.gochon_out);
    });

    if( num == days){
        // console.log("요기요");
        // console.log("goToGochonCSV_custom_total[0]", goToGochonCSV_custom_total[0]);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

        var tr01 = document.createElement("tr");
        dataTbody.appendChild(tr01);
        createCell(tr01, "td", "td_data1", no);
        createCell(tr01, "td", "td_data2", goToGochonCSV_custom_total[0].occuDate);
        createCell(tr01, "td", "td_data7", goToGochonCSV_custom_total[0].occuDate);
        createCell(tr01, "td", "td_data3", goToGochonCSV_custom_total[0].gochon_in);
        createCell(tr01, "td", "td_data4", goToGochonCSV_custom_total[0].gochon_out);
    }
}


// tbody + 일합계
function gochonDaySum(goToGochonCSV_daySum, goToGochonCSV_custom_total, num, days) {
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

    goToGochonCSV_daySum.forEach(function (item) {
        // // console.log("item", item);
        
        no = dataTbody.children.length + 1;
        // // console.log("no", no);

        var tr = document.createElement("tr");
        dataTbody.appendChild(tr);

        createCell(tr, "td", "goPung_td_data1", no);
        createCell(tr, "td", "goPung_td_data2", item.occuDate);
        createCell(tr, "td", "goPung_td_data3", item.gochon_in);
        createCell(tr, "td", "goPung_td_data4", item.gochon_out);

    });


    
    if( num == days){
        // console.log("요기요");
        // console.log("goToGochonCSV_custom_total[0]", goToGochonCSV_custom_total[0]);

        no = dataTbody.children.length + 1;
        // console.log("no", no);

        var tr01 = document.createElement("tr");
        dataTbody.appendChild(tr01);
        createCell(tr01, "td", "td_data1", no);
        // createCell(tr, "td", "td_data2", item.occuDate);
        createCell(tr01, "td", "td_data7", goToGochonCSV_custom_total[0].occuDate);
        createCell(tr01, "td", "td_data3", goToGochonCSV_custom_total[0].gochon_in);
        createCell(tr01, "td", "td_data4", goToGochonCSV_custom_total[0].gochon_out);
    }
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





function updateProgressBar(processed, total) {
    // // console.log("processed:", processed);
    // // console.log("total :", total);
    var progressNow = document.querySelector("#progressDiv .progressNow");
    var progressPer = document.querySelector("#progressDiv .progressPer");
    
    var percent = Math.round((processed / total ) * 100);
    setTimeout(function() {
    progressNow.style.width = percent + "%";
    progressPer.innerHTML = percent + " %";
        }, 500); // 작업 완료 시간 조정 (밀리초)
    // // console.log("percent:", percent);

    // 작업이 완료되면 프로그래스 바를 숨김
    if(percent >= 100){
        setTimeout(function() {
            document.getElementById("progressDiv").style.display = 'none';
        }, 500); // 작업 완료 시간 조정 (밀리초)
    }
}


function updateProgressBar01(processed, total) {
    // // console.log("processed:", processed);
    // // console.log("total :", total);
    var progressNow = document.querySelector("#progressDiv .progressNow");
    var progressPer = document.querySelector("#progressDiv .progressPer");
    
    var percent = Math.round((processed / total) * 100);
    var currentWidth = parseInt(progressNow.style.width, 10) || 0;
    
    var interval = setInterval(function() {
        if (currentWidth < percent) {
            currentWidth++;
            progressNow.style.width = currentWidth + "%";
            progressPer.innerHTML = currentWidth + " %";
        } else {
            clearInterval(interval);
            if (currentWidth >= 100) {
                setTimeout(function() {
                    document.getElementById("progressDiv").style.display = 'none';
                }, 500); // 작업 완료 시간 조정 (밀리초)
            }
        }
    }, 10); // 게이지가 차오르는 속도 (밀리초)

    // // console.log("percent:", percent);
}