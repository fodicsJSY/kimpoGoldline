
setTimeout(function() {
    setInterval(getTime, 10);
}, 10);

function getTime() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var dayOfWeek = d.getDay(); // 요일을 가져옵니다.
    var hur = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    var days = ['일', '월', '화', '수', '목', '금', '토'];
    var dayStr = days[dayOfWeek];

    var timeBoard = document.getElementById("time_title");

    if (timeBoard == null) {
        return;
    }

    if (Number(month) < 10)
        month = '0' + month;

    if (Number(day) < 10)
        day = '0' + day;

    if (Number(hur) < 10)
        hur = '0' + hur;

    if (Number(min) < 10)
        min = '0' + min;

    if (Number(sec) < 10)
        sec = '0' + sec;

    var time = year + "년" + month + "월" + day + "일(" + dayStr + ") " + hur + ":" + min + ":" + sec;
    timeBoard.innerText = time;
}
