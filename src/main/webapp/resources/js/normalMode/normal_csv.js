document.getElementById("scvBtn").addEventListener("click", ()=>{
    occuDate = formatToYYYYMMDD(document.getElementById('normalDateSearch').value);
    // const date = occuDate; 
    // const ipaddress = "172.16.111.45";


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
                flie_goToGimpoCSV(goToGimpoCSV);
                flie_getOffGimpoCSV(getOffGimpoCSV);
                flie_goToPungmuCSV(goToPungmuCSV);
                flie_goToGochonCSV(goToGochonCSV);



                // CSV파일1 생성 시작-----------------------------------------------
                function flie_goToGimpoCSV(goToGimpoCSV) {
                    // CSV 헤더 생성
                    let csvContent = "data:text/csv;charset=utf-8,";
                    csvContent += "Date/Time,st,ev,ec\n";


                    //CSV 데이터 추가
                    for (let i = 0; i < goToGimpoCSV.length; i++) {
                        var currentItem = goToGimpoCSV[i];

                        // console.log('occuTime : ', currentItem.occuTime);
                        // console.log('goToGimpoST : ', currentItem.goToGimpoST);
                        // console.log('goToGimpoEV : ', currentItem.goToGimpoEV);
                        // console.log('goToGimpoEC : ', currentItem.goToGimpoEC);

                        // occuTime을 8자리와 6자리로 분할하여 / 기호 삽입
                        let formattedOccuTime = currentItem.occuTime.substring(0, 8) + ' / ' +
                                                currentItem.occuTime.substring(8, 10) + ':' +
                                                currentItem.occuTime.substring(10, 12) + ':' +
                                                currentItem.occuTime.substring(12);

                        let row = `${formattedOccuTime},${currentItem.goToGimpoST},${currentItem.goToGimpoEV},${currentItem.goToGimpoEC}\n`;
                        csvContent += row;
                    }
                
                
                    // CSV 파일 생성
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", "go_to_work_gimpo.csv");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                // CSV파일1 생성 끝-----------------------------------------------


                // CSV파일2 생성 시작-----------------------------------------------
                function flie_getOffGimpoCSV(getOffGimpoCSV) {
                    // CSV 헤더 생성
                    let csvContent = "data:text/csv;charset=utf-8,";
                    csvContent += "Date/Time,st,ev,ec\n";


                    //CSV 데이터 추가
                    for (let i = 0; i < getOffGimpoCSV.length; i++) {
                        var currentItem = getOffGimpoCSV[i];

                        // console.log('occuTime : ', currentItem.occuTime);
                        // console.log('getOffGimpoST : ', currentItem.getOffGimpoST);
                        // console.log('getOffGimpoEV : ', currentItem.getOffGimpoEV);
                        // console.log('getOffGimpoEC : ', currentItem.getOffGimpoEC);

                        // occuTime을 8자리와 6자리로 분할하여 / 기호 삽입
                        let formattedOccuTime = currentItem.occuTime.substring(0, 8) + ' / ' +
                        currentItem.occuTime.substring(8, 10) + ':' +
                        currentItem.occuTime.substring(10, 12) + ':' +
                        currentItem.occuTime.substring(12);


                        let row = `${formattedOccuTime},${currentItem.getOffGimpoST},${currentItem.getOffGimpoEV},${currentItem.getOffGimpoEC}\n`;
                        csvContent += row;
                    }
                
                
                    // CSV 파일 생성
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", "get_off_work_gimpo.csv");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                // CSV파일2 생성 끝-----------------------------------------------

                // CSV파일3 생성 시작-----------------------------------------------
                function flie_goToPungmuCSV(goToPungmuCSV) {
                    // CSV 헤더 생성
                    let csvContent = "data:text/csv;charset=utf-8,";
                    csvContent += "Date/Time,Boarding,get off,\n";


                    //CSV 데이터 추가
                    for (let i = 0; i < goToPungmuCSV.length; i++) {
                        var currentItem = goToPungmuCSV[i];

                        // console.log('occuTime : ', currentItem.occuTime);
                        // console.log('goToPungmu : ', currentItem.goToPungmu);
                        // console.log('getOffPungmu : ', currentItem.getOffPungmu);

                        // occuTime을 8자리와 6자리로 분할하여 / 기호 삽입
                        let formattedOccuTime = currentItem.occuTime.substring(0, 8) + ' / ' +
                                                currentItem.occuTime.substring(8, 10) + ':' +
                                                currentItem.occuTime.substring(10, 12) + ':' +
                                                currentItem.occuTime.substring(12);

                        let row = `${formattedOccuTime},${currentItem.goToPungmu},${currentItem.getOffPungmu}\n`;
                        csvContent += row;
                    }
                
                
                    // CSV 파일 생성
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", "pungmu.csv");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                // CSV파일3 생성 끝-----------------------------------------------


                // CSV파일4 생성 시작-----------------------------------------------
                function flie_goToGochonCSV(goToGochonCSV) {
                    // CSV 헤더 생성
                    let csvContent = "data:text/csv;charset=utf-8,";
                    csvContent += "Date/Time,Boarding,get off,\n";


                    //CSV 데이터 추가
                    for (let i = 0; i < goToGochonCSV.length; i++) {
                        var currentItem = goToGochonCSV[i];

                        // console.log('occuTime : ', currentItem.occuTime);
                        // console.log('goToPungmu : ', currentItem.goToGochon);
                        // console.log('getOffGochon : ', currentItem.getOffGochon);


                         // occuTime을 8자리와 6자리로 분할하여 / 기호 삽입
                        let formattedOccuTime = currentItem.occuTime.substring(0, 8) + ' / ' +
                                                currentItem.occuTime.substring(8, 10) + ':' +
                                                currentItem.occuTime.substring(10, 12) + ':' +
                                                currentItem.occuTime.substring(12);

                        let row = `${formattedOccuTime},${currentItem.goToGochon},${currentItem.getOffPungmu}\n`;
                        csvContent += row;
                    }
                
                
                
                    // CSV 파일 생성
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", "gochon.csv");
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

