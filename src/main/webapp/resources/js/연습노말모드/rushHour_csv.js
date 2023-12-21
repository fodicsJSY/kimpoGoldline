var csvBtn = document.getElementById("csvBtn");



function getDateStr(){
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;
    return dateString;
}

function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers_top, headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }
    if (headers_top){
        items.unshift(headers_top);
    }
    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    
    var blob = new Blob(["\ufeff"+csv],{ type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


function exportCSVFilePeriod(header_from, header_to, headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }
    if (header_to){
        items.unshift(header_to);
    }
    if (header_from){
        items.unshift(header_from);
    }
    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    
    var blob = new Blob(["\ufeff"+csv],{ type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}



//---------------------------------------------------------------------------------------------------------





/* CSV 대화상자 시작 */
function OnCSV_Click(){			
    document.getElementById("csv_dialog").open = true;  
    document.getElementById('csv_dialog').style.display='block';			
    document.getElementById("bmp_dialog").open = false;  
    document.getElementById('bmp_dialog').style.display='none';			
    document.getElementById("print_dialog").open = false;  
    document.getElementById('print_dialog').style.display='none';
    }
    
    function OnCSV_OK(){
    
    document.getElementById("csv_dialog").open = false; 
    document.getElementById('csv_dialog').style.display='none';	
    
    var chk_val = document.getElementById("chk_csv_human").checked; 
    if(chk_val == true) OnCSV_Human_Select();
    
    chk_val = document.getElementById("chk_csv_vehicle").checked; 
    if(chk_val == true) OnCSV_Vehicle_Select();
    
    chk_val = document.getElementById("chk_csv_event_acc").checked; 
    if(chk_val == true) OnCSV_Event_Acc_Select();
    
    chk_val = document.getElementById("chk_csv_unmask_sex").checked; 
    if(chk_val == true) OnCSV_UnMask_Select();
    
    chk_val = document.getElementById("chk_csv_time_chk").checked; 
    if(chk_val == true) OnCSV_Time_Select();
    
    chk_val = document.getElementById("chk_csv_camera_10ch_human").checked; 
    if(chk_val == true){
    setMainEventTop10();
    setTimeout(() => OnCSV_camera_10_human_Select(), 1000);	
    }
    
    chk_val = document.getElementById("chk_csv_camera_10ch_vehicle").checked; 
    if(chk_val == true){
    setMainVehicleTop10();
      // 인쇄시 '차량' 페이지 전환이 되지 않은 상태에서 값을읽고 동시에 출력하면 버퍼가 빈상태일때가 있다.
    setTimeout(() => OnCSV_camera_10_vehicle_Select(), 1000);			
    }
    
    }
    
    function OnCSV_Human_Select(){
        var itemsFormatted = [];
        var itemsNotFormatted = [];
    
        var headers_top = {						
            FACE_SENIORMALE: '남성'.replace(/,/g, ''), // remove commas to avoid errors
            FACE_MIDDLEMALE: '',
            FACE_ADULTMALE: '',
            FACE_YOUNGMALE: '',
            FACE_SENIORFEMALE: '여성',
            FACE_MIDDLEFEMALE: '',
            FACE_ADULTFEMALE: '',
            FACE_YOUNGFEMALE: '',
        };
        var headers = {						
            FACE_SENIORMALE: '노년'.replace(/,/g, ''), // remove commas to avoid errors
            FACE_MIDDLEMALE: '중년',
            FACE_ADULTMALE: "청년",
            FACE_YOUNGMALE: "미성년",
            FACE_SENIORFEMALE: '노년',
            FACE_MIDDLEFEMALE: '중년',
            FACE_ADULTFEMALE: "청년",
            FACE_YOUNGFEMALE: "미성년"
        };
    
        itemsNotFormatted = jsonDailyCount;			
    
        // format the data
        itemsNotFormatted.forEach((item) => {
            itemsFormatted.push({
                FACE_SENIORMALE: item.FACE_SENIORMALE.replace(/,/g, ''), // remove commas to avoid errors,
                FACE_MIDDLEMALE: item.FACE_MIDDLEMALE,
                FACE_ADULTMALE: item.FACE_ADULTMALE,
                FACE_YOUNGMALE: item.FACE_YOUNGMALE,
                FACE_SENIORFEMALE: item.FACE_SENIORFEMALE,
                FACE_MIDDLEFEMALE: item.FACE_MIDDLEFEMALE,
                FACE_ADULTFEMALE: item.FACE_ADULTFEMALE,
                FACE_YOUNGFEMALE: item.FACE_YOUNGFEMALE,
            });
        });
    
        var fileTitle = '사람_' + getDateStr();
        exportCSVFile(headers_top, headers, itemsFormatted, fileTitle);	
    }
    
    function OnCSV_Vehicle_Select(){
        var itemsFormatted = [];
        var itemsNotFormatted = [];
        var headers_top = {};
        var headers = {						
            VEHICLE_CAR: '자동차'.replace(/,/g, ''), // remove commas to avoid errors
            VEHICLE_BUS: '버스',
            VEHICLE_TRUCK: "트럭",
            VEHICLE_MOTORCYCLE: "오토바이",
            VEHICLE_BICYCLE: '자전거',				
        };
    
        itemsNotFormatted = jsonDailyCount;			
    
        // format the data
        itemsNotFormatted.forEach((item) => {
            itemsFormatted.push({
                VEHICLE_CAR: item.VEHICLE_CAR.replace(/,/g, ''), // remove commas to avoid errors,
                VEHICLE_BUS: item.VEHICLE_BUS,
                VEHICLE_TRUCK: item.VEHICLE_TRUCK,
                VEHICLE_MOTORCYCLE: item.VEHICLE_MOTORCYCLE,
                VEHICLE_BICYCLE: item.VEHICLE_BICYCLE,
                
            });
        });
    
        var fileTitle = '차량_' + getDateStr();
        exportCSVFile(headers_top, headers, itemsFormatted, fileTitle);	
    }
    
    function OnCSV_Event_Acc_Select(){
        var itemsFormatted = [];
        var itemsNotFormatted = [];
        var headers_top = {};
        var headers = {						
            INV_CNT: '침입'.replace(/,/g, ''), // remove commas to avoid errors
            LOT_CNT: '배회',
            CNT_CNT: "카운팅",
            FAL_CNT: "쓰러짐",				
        };
    
        itemsNotFormatted = jsonDailyCount;			
    
        // format the data
        itemsNotFormatted.forEach((item) => {
            itemsFormatted.push({
                INV_CNT: item.INV_CNT.replace(/,/g, ''), // remove commas to avoid errors,
                LOT_CNT: item.LOT_CNT,
                CNT_CNT: item.CNT_CNT,
                FAL_CNT: item.FAL_CNT,
            });
        });
    
        var fileTitle = '이벤트발생_' + getDateStr();
        exportCSVFile(headers_top, headers, itemsFormatted, fileTitle);	
    }
    
    function OnCSV_UnMask_Select(){
        var itemsFormatted = [];
        var itemsNotFormatted = [];
        var headers_top = {						
            FACE_NOMASKMALESENIOR: '남성'.replace(/,/g, ''), // remove commas to avoid errors
            FACE_NOMASKMALEMIDDLE: '',
            FACE_NOMASKMALEADULT: '',
            FACE_NOMASKMALEYOUNG: '',
            FACE_NOMASKFEMALESENIOR: '여성',
            FACE_NOMASKFEMALEMIDDLE: '',
            FACE_NOMASKFEMALEADULT: '',
            FACE_NOMASKFEMALEYOUNG: '',
        };
        var headers = {						
            FACE_NOMASKMALESENIOR: '노년'.replace(/,/g, ''), // remove commas to avoid errors
            FACE_NOMASKMALEMIDDLE: '중년',
            FACE_NOMASKMALEADULT: "청년",
            FACE_NOMASKMALEYOUNG: "미성년",
            FACE_NOMASKFEMALESENIOR: '노년',
            FACE_NOMASKFEMALEMIDDLE: '중년',
            FACE_NOMASKFEMALEADULT: "청년",
            FACE_NOMASKFEMALEYOUNG: "미성년"
        };
    
        itemsNotFormatted = jsonDailyCount;			
    
        // format the data
        itemsNotFormatted.forEach((item) => {
            itemsFormatted.push({
                FACE_NOMASKMALESENIOR: item.FACE_NOMASKMALESENIOR.replace(/,/g, ''), // remove commas to avoid errors,
                FACE_NOMASKMALEMIDDLE: item.FACE_NOMASKMALEMIDDLE,
                FACE_NOMASKMALEADULT: item.FACE_NOMASKMALEADULT,
                FACE_NOMASKMALEYOUNG: item.FACE_NOMASKMALEYOUNG,
                FACE_NOMASKFEMALESENIOR: item.FACE_NOMASKFEMALESENIOR,
                FACE_NOMASKFEMALEMIDDLE: item.FACE_NOMASKFEMALEMIDDLE,
                FACE_NOMASKFEMALEADULT: item.FACE_NOMASKFEMALEADULT,
                FACE_NOMASKFEMALEYOUNG: item.FACE_NOMASKFEMALEYOUNG,
            });
        });
        var fileTitle = '마스크미착용자_' + getDateStr();
        exportCSVFile(headers_top, headers, itemsFormatted, fileTitle);	
    }
    
    function OnCSV_Time_Select(){
        var itemsFormatted = [];
        var itemsNotFormatted = [];
        var headers_top = {};
        var headers = {						
            OCCU_TIME: '시간'.replace(/,/g, ''), // remove commas to avoid errors
            PERSON: '사람',
            VEHICLE: '차량',
            FACE: '얼굴',
            LPR: '번호판',				
            INV_CNT: '침입',
            LOT_CNT: '배회',
            CNT_CNT: '카운팅',
            FAL_CNT: '쓰러짐'
        };
    
        itemsNotFormatted = jsonHourlyCount;			
    
        // format the data
        itemsNotFormatted.forEach((item) => {
            itemsFormatted.push({
                OCCU_TIME: item.OCCU_TIME, // remove commas to avoid errors,
                PERSON: item.PERSON,
                VEHICLE: item.VEHICLE,
                FACE: item.FACE,
                LPR: item.LPR,
                INV_CNT: item.INV_CNT,
                LOT_CNT: item.LOT_CNT,
                CNT_CNT: item.CNT_CNT,
                FAL_CNT: item.FAL_CNT,					
            });
        });
    
        var fileTitle = '시간대별현황_' + getDateStr();
        exportCSVFile(headers_top, headers, itemsFormatted, fileTitle);	
    }
    
    function OnCSV_camera_10_human_Select(){	
        var itemsFormatted = [];
        var itemsNotFormatted = [];
        var headers_top = {};
        var headers = {						
            CAMERA_NAME: '카메라명'.replace(/,/g, ''), // remove commas to avoid errors
            PERSON: '사람',
            FACE: "얼굴",
            INV_CNT: "침입",				
            LOT_CNT: "배회",
            FAL_CNT: "쓰러짐",
            CNT_CNT: "카운팅",				
        };
    
        itemsNotFormatted = jsonTop10CtrlCamera;			
    
        // format the data
        itemsNotFormatted.forEach((item) => {
            itemsFormatted.push({
                CAMERA_NAME: item.CAMERA_NAME.replace(/,/g, ''), // remove commas to avoid errors,
                PERSON: item.PERSON,
                FACE: item.FACE,
                INV_CNT: item.INV_CNT,
                LOT_CNT: item.LOT_CNT,
                FAL_CNT: item.FAL_CNT,
                CNT_CNT: item.CNT_CNT,
            });
        });
    
        var fileTitle = '검지카메라_TOP10_사람' + getDateStr();
        exportCSVFile(headers_top, headers, itemsFormatted, fileTitle);	
        
    }
    
    function OnCSV_camera_10_vehicle_Select(){
        var itemsFormatted = [];
        var itemsNotFormatted = [];
        var headers_top = {};
        var headers = {						
            CAMERA_NAME: '카메라명'.replace(/,/g, ''), // remove commas to avoid errors
            VEHICLE_CAR: '자동차',
            VEHICLE_BUS: "버스",
            VEHICLE_TRUCK: "트럭",				
            VEHICLE_MOTORCYCLE: "오토바이",
            VEHICLE_BICYCLE: "자전거",				
        };
    
        itemsNotFormatted = jsonTop10VehicleCamera;			
    
        // format the data
        itemsNotFormatted.forEach((item) => {
            itemsFormatted.push({
                CAMERA_NAME: item.CAMERA_NAME.replace(/,/g, ''), // remove commas to avoid errors,
                VEHICLE_CAR: item.VEHICLE_CAR,
                VEHICLE_BUS: item.VEHICLE_BUS,
                VEHICLE_TRUCK: item.VEHICLE_TRUCK,
                VEHICLE_MOTORCYCLE: item.VEHICLE_MOTORCYCLE,
                VEHICLE_BICYCLE: item.VEHICLE_BICYCLE,					
            });
        });
    
        var fileTitle = '검지카메라_TOP10_차량_' + getDateStr();
        exportCSVFile(headers_top, headers, itemsFormatted, fileTitle);	
    }
    
    function OnCSV_Cancel(){			
        document.getElementById("csv_dialog").open = false;  
        document.getElementById('csv_dialog').style.display='none';     
    }
    