function exportToCSV(chartData) {
    // CSV 헤더 생성
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Hour,Gimpo Out Change,Gochon Change,Pungmu Change\n";

    // CSV 데이터 추가
    for (let i = 0; i < chartData.hour.length; i++) {
        let row = `${chartData.hour[i]},${chartData.gimpoOutChange[i]},${chartData.gochonChange[i]},${chartData.pungmuChange[i]}\n`;
        csvContent += row;
    }

    // CSV 파일 생성
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "chart_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}





document.getElementById("scvBtn").addEventListener("click", () => {

    occuDate = formatToYYYYMMDD(document.getElementById('mainDateSearch').value);
    console.log('Sending occuDate to server:', occuDate); // 콘솔에 occuDate 값 로그 출력


    fetch("/loadData", {
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify({"occuDate" : occuDate.value})
    })
    .then(resp => resp.json())
    .then((chartList) => {
        console.log(chartList);

    });









    /*exportToCSV(chartData);*/
});


    /* 날짜 형식화 함수 */
    /* YYYYMMDD 형식으로 변환하는 함수 */
    function formatToYYYYMMDD(dateString) {
        var year = dateString.substring(0, 4);
        var month = dateString.substring(5, 7);
        var day = dateString.substring(8, 10);
        return year + month + day;
    }