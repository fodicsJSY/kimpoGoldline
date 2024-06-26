function gaugeData(){
    fetch("/gaugeData", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify() 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        // console.log("result", result );
    
    
        // 차트호출
        gauge_g1(result);
        gauge_g2(result);
        gauge_p1(result);
        gauge_p2(result);

    
    
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
            // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성

}