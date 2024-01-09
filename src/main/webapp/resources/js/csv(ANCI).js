document.getElementById("scvBtn").addEventListener("click", ()=>{
    occuDate = formatToYYYYMMDD(document.getElementById('mainDateSearch').value);


    console.log('Sending occuDate to server:', occuDate); // 콘솔에 occuDate 값 로그 출력


    $(function(){

        
        $.ajax({
            url: "/loadRushHourCSV", 
            type: "POST",
            data: { occuDate: occuDate},
            success: function(response){
                console.log('성공 : ', response);
                
                var goToGimpoCSV = response.goToGimpoCSV;
                var getOffGimpoCSV = response.getOffGimpoCSV;
                var goToGochonCSV = response.goToGochonCSV;
                var goToPungmuCSV = response.goToPungmuCSV;
                
                //console.log('goToGimpoCSV성공 : ', goToGimpoCSV);
                

                // CSV파일 생성 함수 실행
                flie_goToGimpoCSV(goToGimpoCSV, occuDate);
                flie_getOffGimpoCSV(getOffGimpoCSV, occuDate);
                flie_goToPungmuCSV(goToPungmuCSV, occuDate);
                flie_goToGochonCSV(goToGochonCSV, occuDate);



                // CSV파일1 생성 시작-----------------------------------------------
                function flie_goToGimpoCSV(goToGimpoCSV, occuDate) {
                    // CSV 헤더 생성
                    let csvContent = "일시,계단,엘리베이터,에스컬레이터\n";
                    

                    //CSV 데이터 추가
                    for (let i = 0; i < goToGimpoCSV.length; i++) {
                        var currentItem = goToGimpoCSV[i];
                        
                        // console.log('occuTime : ', currentItem.date_time);
                        // console.log('goToGimpoST : ', currentItem.gimpo_st_out);
                        // console.log('goToGimpoEV : ', currentItem.gimpo_ev_out);
                        // console.log('goToGimpoEC : ', currentItem.gimpo_ec_out);
                        
                        
                        let row = `${currentItem.date_time},${currentItem.gimpo_st_out},${currentItem.gimpo_ev_out},${currentItem.gimpo_ec_out}\n`;
                        csvContent += row;
                    }
                    
                    // Blob 생성
                    const encodedUri = encodeURI(csvContent);
                    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=euc-kr;' });

                    // CSV 파일 생성
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.setAttribute("download", `김포출근길${occuDate}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                // CSV파일1 생성 끝-----------------------------------------------


                // CSV파일2 생성 시작-----------------------------------------------
                function flie_getOffGimpoCSV(getOffGimpoCSV, occuDate) {
                    // CSV 헤더 생성
                    let csvContent = "일시,계단,엘리베이터,에스컬레이터\n";


                    //CSV 데이터 추가
                    for (let i = 0; i < getOffGimpoCSV.length; i++) {
                        var currentItem = getOffGimpoCSV[i];




                        let row = `${currentItem.date_time},${currentItem.gimpo_st_in},${currentItem.gimpo_ev_in},${currentItem.gimpo_ec_in}\n`;
                        csvContent += row;
                    }
                
                    // Blob 생성
                    const encodedUri = encodeURI(csvContent);
                    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=euc-kr;' });

                
                    // CSV 파일 생성
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.setAttribute("download", `김포퇴근길${occuDate}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                // CSV파일2 생성 끝-----------------------------------------------



                // CSV파일3 생성 시작-----------------------------------------------
                function flie_goToPungmuCSV(goToPungmuCSV, occuDate) {
                    // CSV 헤더 생성
                    let csvContent = "일시,승차,하차\n";


                    //CSV 데이터 추가
                    for (let i = 0; i < goToPungmuCSV.length; i++) {
                        var currentItem = goToPungmuCSV[i];

                        // console.log('occuTime : ', currentItem.occuTime);
                        // console.log('goToPungmu : ', currentItem.goToPungmu);
                        // console.log('getOffPungmu : ', currentItem.getOffPungmu);


                        let row = `${currentItem.date_time},${currentItem.pungmu_in},${currentItem.pungmu_out}\n`;
                        csvContent += row;
                    }
                
                     // Blob 생성
                    const encodedUri = encodeURI(csvContent);
                    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=euc-kr;' });
 
                
                    // CSV 파일 생성
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.setAttribute("download", `풍무${occuDate}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                // CSV파일3 생성 끝-----------------------------------------------


                // CSV파일4 생성 시작-----------------------------------------------
                function flie_goToGochonCSV(goToGochonCSV, occuDate) {
                    // CSV 헤더 생성
                    let csvContent = "일시,승차,하차\n";


                    //CSV 데이터 추가
                    for (let i = 0; i < goToGochonCSV.length; i++) {
                        var currentItem = goToGochonCSV[i];

                        // console.log('occuTime : ', currentItem.occuTime);
                        // console.log('goToPungmu : ', currentItem.goToGochon);
                        // console.log('getOffGochon : ', currentItem.getOffGochon);

                        let row = `${currentItem.date_time},${currentItem.gochon_in},${currentItem.gochon_out}\n`;
                        csvContent += row;
                    }
                
                    // Blob 생성
                    const encodedUri = encodeURI(csvContent);
                    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=euc-kr;' });
                
                
                    // CSV 파일 생성
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.setAttribute("download", `고촌${occuDate}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                // CSV파일4 생성 끝-----------------------------------------------


            }
        });
    });


    /* 날짜 형식화 함수 */
    /* YYYYMMDD 형식으로 변환하는 함수 */
    function formatToYYYYMMDD(dateString) {
        var year = dateString.substring(0, 4);
        var month = dateString.substring(5, 7);
        var day = dateString.substring(8, 10);
        return year + month + day;
    }

});

