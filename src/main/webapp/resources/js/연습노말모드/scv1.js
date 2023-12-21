document.getElementById("scvBtn").addEventListener("click", ()=>{
    occuDate = formatToYYYYMMDD(document.getElementById('mainDateSearch').value);
    const date = occuDate; 
    const ipaddress = "172.16.111.45";


    console.log('Sending occuDate to server:', occuDate); // 콘솔에 occuDate 값 로그 출력

// 서버에서 데이터 가져오기
fetch('/loadRushHourCSV', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ occuDate: occuDate }),
})
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data); // 서버에서 받아온 데이터 확인

        // CSV 파일 생성 함수 실행
        goToGimpoCSV(data);   // data를 전달하여 함수 호출
        getOffGimpoCSV(data);  // data를 전달하여 함수 호출
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// CSV 파일1 생성
function goToGimpoCSV(data) {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Date/Time,st,ev,ec\n";
    // data를 이용하여 CSV 데이터 추가
    // 예시: data에서 필요한 정보를 추출하여 csvContent에 추가
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "rushHour_chart_data_1.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// CSV 파일2 생성
function getOffGimpoCSV(data) {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Date/Time,st,ev,ec\n";
    // data를 이용하여 CSV 데이터 추가
    // 예시: data에서 필요한 정보를 추출하여 csvContent에 추가
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "rushHour_chart_data_2.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

    


    /* 날짜 형식화 함수 */
    /* YYYYMMDD 형식으로 변환하는 함수 */
    function formatToYYYYMMDD(dateString) {
        var year = dateString.substring(0, 4);
        var month = dateString.substring(5, 7);
        var day = dateString.substring(8, 10);
        return year + month + day;
    }

});

