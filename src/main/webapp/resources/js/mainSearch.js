
/* 전역변수 시작 */
var forDate = document.getElementById('mainDateSearch').value
/* 전역변수 끝 */

/* 오늘 날짜로 초기화 시작*/
// 페이지 로드 시 오늘 날짜로 초기화
document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var formattedDate = today.toISOString().substring(0, 10);
    document.getElementById('mainDateSearch').value = formattedDate;
    forDate = formattedDate; // forDate 초기화
});
/* 오늘 날짜로 초기화 끝*/







/* 날짜 input값 바뀔때마다 서버로 보내기 */
document.getElementById('rushHourModeSearchBtn').addEventListener('click', function () {
    sendToServer();
});


/* 전역변수 보내기 시작???? */
function sendToServer() {
    occuDate = formatToYYYYMMDD(document.getElementById('mainDateSearch').value);
    console.log('Sending occuDate to server:', occuDate); // 콘솔에 occuDate 값 로그 출력

    /* 날짜 형식화 함수 */
    /* YYYYMMDD 형식으로 변환하는 함수 */
    function formatToYYYYMMDD(dateString) {
        var year = dateString.substring(0, 4);
        var month = dateString.substring(5, 7);
        var day = dateString.substring(8, 10);
        return year + month + day;
    }
};