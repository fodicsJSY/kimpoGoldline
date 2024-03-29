SELECT *
FROM "TB_EVENT_HIST_DL"; 


SELECT COUNT(event_no) 
FROM "TB_EVENT_HIST_DL"
WHERE event_type = 'DE20200605_000001'
AND OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')

; 



SELECT COUNT(event_no) 
FROM "TB_EVENT_HIST_DL"
WHERE event_type = 'DE20200605_000001'
AND OCCU_TIME = CONVERT(varchar, DATEADD(HOUR, 8, GETDATE()), 112) + REPLACE(CONVERT(varchar, DATEADD(HOUR, 8, GETDATE()), 108), ':', '')
; 


SELECT COUNT(event_no) 
FROM "TB_EVENT_HIST_DL"
WHERE event_type = 'DE20200605_000001'
AND OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, DATEADD(HOUR, 8, GETDATE()), 108), ':', '');

; 


SELECT COUNT(event_no) , CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, DATEADD(HOUR, 7, GETDATE()), 108), ':', '')
FROM "TB_EVENT_HIST_DL"
WHERE event_type = 'DE20200605_000001'
AND OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, DATEADD(HOUR, 7, GETDATE()), 108), ':', '');

; 



SELECT event_status, OCCU_TIME
FROM TB_EVENT_HIST_DL
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '');


SELECT event_status, OCCU_TIME
FROM TB_EVENT_HIST_DL
WHERE OCCU_TIME >= '20231125' + REPLACE(CONVERT(VARCHAR, DATEADD(HOUR, 7, GETDATE()), 108), ':', '')
  AND OCCU_TIME < '20231125' + REPLACE(CONVERT(VARCHAR, DATEADD(HOUR, 8, GETDATE()), 108), ':', '')
  AND CAST(SUBSTRING(OCCU_TIME, 9, 2) AS INT) < 12; -- 추가된 조건: 오전 12시 이전

SELECT *
FROM "TB_EVENT_HIST_DL"
WHERE event_type = 'DE20200605_000001'
AND OCCU_TIME >= 20231125 + REPLACE(CONVERT(VARCHAR, DATEADD(HOUR, 7, GETDATE()), 108), ':', '')
  AND OCCU_TIME < 20231125 + REPLACE(CONVERT(VARCHAR, DATEADD(HOUR, 8, GETDATE()), 108), ':', '');


 
 ---------------------------------------------------------------------------------------------------------
 
  
  
SELECT H.role_code, role_name
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '1'
AND role_name = '풍무 -buzzer-출근';
--AND (
--    H.role_code = 'DL20231125_000280' 
--    OR H.role_code = 'DL20231125_000281' 
--    OR H.role_code = 'DL20231125_000282' 
--    OR H.role_code = 'DL20231204_000303'
--);

------07시 ~ 07시59 --------

--김포공항 승차
SELECT COUNT(*) AS kimpo7to8
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '1'
AND (
    H.role_code = 'DL20231125_000280' 
    OR H.role_code = 'DL20231125_000281' 
    OR H.role_code = 'DL20231125_000282' 
    OR H.role_code = 'DL20231204_000303'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'070000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'080000'; -- 현재 날짜와 종료 시간으로 대체하세요;

-- 김포공항 하차
SELECT *
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '-1'
AND (
    H.role_code = 'DL20231125_000280' 
    OR H.role_code = 'DL20231125_000281' 
    OR H.role_code = 'DL20231125_000282' 
    OR H.role_code = 'DL20231204_000303'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'070000' -- 현재 날짜와 시작 시간으로 대체하세요
 AND occu_time < CONVERT(varchar, GETDATE(), 112)+'080000'; -- 현재 날짜와 종료 시간으로 대체하세요;


--고촌역 승차
SELECT COUNT(*) AS gochon7to8
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '1'
AND (
    H.role_code = 'DL20231125_000284' 
    OR H.role_code = 'DL20231125_000285' 
    OR H.role_code = 'DL20231125_000286' 
    OR H.role_code = 'DL20231125_000287'
    OR H.role_code = 'DL20231204_000304'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'070000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'080000'; -- 현재 날짜와 종료 시간으로 대체하세요;

 
--풍무역 승차
SELECT COUNT(*) AS pungmu7to8
FROM TB_EVENT_HIST_DL 
WHERE event_status = '1'
AND (
    role_code = 'DL20231125_000289' 
    OR role_code = 'DL20231125_000290' 
    OR role_code = 'DL20231125_000291' 
    OR role_code = 'DL20231125_000292'
    OR role_code = 'DL20231206_000305'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'070000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'080000'; -- 현재 날짜와 종료 시간으로 대체하세요;


 
 ---------- 김포공항 & 풍무역 & 고산역 7시 승하차 수-------------
SELECT COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000280', 'DL20231125_000281', 'DL20231125_000282', 'DL20231204_000303') THEN 1 END) AS GIMPO_IN7,
		COUNT(CASE WHEN H.event_status = '-1' AND H.role_code IN ('DL20231125_000280', 'DL20231125_000281', 'DL20231125_000282', 'DL20231204_000303') THEN 1 END) AS GIMPO_OUT7,
	    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000284', 'DL20231125_000285', 'DL20231125_000286', 'DL20231125_000287', 'DL20231204_000304') THEN 1 END) AS GOCHON7,
	    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000289', 'DL20231125_000290', 'DL20231125_000291', 'DL20231125_000292', 'DL20231206_000305') THEN 1 END) AS PUNGMU7
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
AND
	SUBSTRING(H.OCCU_TIME, 9, 2) = 7
GROUP BY
    SUBSTRING(H.OCCU_TIME, 9, 2);
 
 



------08시 ~ 08시59 --------

--김포공항 승차
SELECT COUNT(*) AS kimpo8to9
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '1'
AND (
    H.role_code = 'DL20231125_000280' 
    OR H.role_code = 'DL20231125_000281' 
    OR H.role_code = 'DL20231125_000282' 
    OR H.role_code = 'DL20231204_000303'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'080000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'090000'; -- 현재 날짜와 종료 시간으로 대체하세요;

-- 김포공항 하차
SELECT COUNT(*)
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '-1'
AND (
    H.role_code = 'DL20231125_000280' 
    OR H.role_code = 'DL20231125_000281' 
    OR H.role_code = 'DL20231125_000282' 
    OR H.role_code = 'DL20231204_000303'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'080000' -- 현재 날짜와 시작 시간으로 대체하세요
 AND occu_time < CONVERT(varchar, GETDATE(), 112)+'090000'; -- 현재 날짜와 종료 시간으로 대체하세요;

  
--고촌역 승차
SELECT COUNT(*) AS gochon8to9
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '1'
AND (
    H.role_code = 'DL20231125_000284' 
    OR H.role_code = 'DL20231125_000285' 
    OR H.role_code = 'DL20231125_000286' 
    OR H.role_code = 'DL20231125_000287'
    OR H.role_code = 'DL20231204_000304'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'080000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'090000'; -- 현재 날짜와 종료 시간으로 대체하세요;

 
--풍무역 승차
SELECT COUNT(*) AS pungmu8to9
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '1'
AND (
    H.role_code = 'DL20231125_000289' 
    OR H.role_code = 'DL20231125_000290' 
    OR H.role_code = 'DL20231125_000291' 
    OR H.role_code = 'DL20231125_000292'
    OR H.role_code = 'DL20231206_000305'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'080000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'090000'; -- 현재 날짜와 종료 시간으로 대체하세요;
 
 
 
 ---------- 김포공항 & 풍무역 & 고산역 8시 승하차 수-------------
SELECT COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000280', 'DL20231125_000281', 'DL20231125_000282', 'DL20231204_000303') THEN 1 END) AS GIMPO_IN8,
		COUNT(CASE WHEN H.event_status = '-1' AND H.role_code IN ('DL20231125_000280', 'DL20231125_000281', 'DL20231125_000282', 'DL20231204_000303') THEN 1 END) AS GIMPO_OUT8,
	    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000284', 'DL20231125_000285', 'DL20231125_000286', 'DL20231125_000287', 'DL20231204_000304') THEN 1 END) AS GOCHON8,
	    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000289', 'DL20231125_000290', 'DL20231125_000291', 'DL20231125_000292', 'DL20231206_000305') THEN 1 END) AS PUNGMU8
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
AND
	SUBSTRING(H.OCCU_TIME, 9, 2) = 8
GROUP BY
    SUBSTRING(H.OCCU_TIME, 9, 2);



------09시 ~ 09시59 --------

 

--김포공항 승차
SELECT count(event_status) AS kimpo9to10
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '1'
AND (
    H.role_code = 'DL20231125_000280' 
    OR H.role_code = 'DL20231125_000281' 
    OR H.role_code = 'DL20231125_000282' 
    OR H.role_code = 'DL20231204_000303'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'090000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'100000'; -- 현재 날짜와 종료 시간으로 대체하세요;

-- 김포공항 하차
SELECT count(event_status)
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '-1'
AND (
    H.role_code = 'DL20231125_000280' 
    OR H.role_code = 'DL20231125_000281' 
    OR H.role_code = 'DL20231125_000282' 
    OR H.role_code = 'DL20231204_000303'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'090000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'100000'; -- 현재 날짜와 종료 시간으로 대체하세요;
 



--고촌역 승차 
SELECT count(event_status) AS gochon9to10
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '1'
AND (
    H.role_code = 'DL20231125_000284' 
    OR H.role_code = 'DL20231125_000285' 
    OR H.role_code = 'DL20231125_000286' 
    OR H.role_code = 'DL20231125_000287'
    OR H.role_code = 'DL20231204_000304'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'090000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'100000'; -- 현재 날짜와 종료 시간으로 대체하세요;

 
--풍무역 승차 
SELECT count(event_status) AS pungmu9to10
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE event_status = '1'
AND (
    H.role_code = 'DL20231125_000289' 
    OR H.role_code = 'DL20231125_000290' 
    OR H.role_code = 'DL20231125_000291' 
    OR H.role_code = 'DL20231125_000292'
    OR H.role_code = 'DL20231206_000305'
)
 AND occu_time >= CONVERT(varchar, GETDATE(), 112)+'090000' -- 현재 날짜와 시작 시간으로 대체하세요
  AND occu_time < CONVERT(varchar, GETDATE(), 112)+'100000'; -- 현재 날짜와 종료 시간으로 대체하세요;


---------- 김포공항 & 풍무역 & 고산역 9시 승하차 수-------------
SELECT COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000280', 'DL20231125_000281', 'DL20231125_000282', 'DL20231204_000303') THEN 1 END) AS GIMPO_IN9,
		COUNT(CASE WHEN H.event_status = '-1' AND H.role_code IN ('DL20231125_000280', 'DL20231125_000281', 'DL20231125_000282', 'DL20231204_000303') THEN 1 END) AS GIMPO_OUT9,
	    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000284', 'DL20231125_000285', 'DL20231125_000286', 'DL20231125_000287', 'DL20231204_000304') THEN 1 END) AS GOCHON9,
	    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000289', 'DL20231125_000290', 'DL20231125_000291', 'DL20231125_000292', 'DL20231206_000305') THEN 1 END) AS PUNGMU9
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
AND
	SUBSTRING(H.OCCU_TIME, 9, 2) = 9
GROUP BY
    SUBSTRING(H.OCCU_TIME, 9, 2);
 
 
 
 
 
 
 SELECT *
 FROM  TB_EVENT_HIST_DL
WHERE SUBSTRING(OCCU_TIME, 1, 8) = '20231221';--CONVERT(varchar, GETDATE(), 112);


----------출근 시간대 막대 그래프-----------
SELECT
    SUBSTRING(H.OCCU_TIME, 9, 2) AS HOUR,
    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_IN_RUSH_HOUR,
    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS GOCHON_RUSH_HOUR,
    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS PUNGMU_RUSH_HOUR
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
AND SUBSTRING(H.OCCU_TIME, 9, 2) IN (7, 8, 9)
GROUP BY SUBSTRING(H.OCCU_TIME, 9, 2)



  

--------출근시간대 누적 수--------
--고촌역
SELECT
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 7 THEN 1 ELSE 0 END) AS GOCHON7COUNT, 
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 8 THEN 1 ELSE 0 END) AS GOCHON8COUNT, 
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 9 THEN 1 ELSE 0 END) AS GOCHON9COUNT
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    event_status = '1'
    AND (
        H.role_code = 'DL20231125_000284' 
        OR H.role_code = 'DL20231125_000285' 
        OR H.role_code = 'DL20231125_000286' 
        OR H.role_code = 'DL20231125_000287'
        OR H.role_code = 'DL20231204_000304'
    );
   
   --고촌역 total
   SELECT
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 7 THEN 1 ELSE 0 END +
        CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 8 THEN 1 ELSE 0 END +
        CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 9 THEN 1 ELSE 0 END) AS GOCHON_COUNT
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    event_status = '1'
    AND (
        H.role_code = 'DL20231125_000284' 
        OR H.role_code = 'DL20231125_000285' 
        OR H.role_code = 'DL20231125_000286' 
        OR H.role_code = 'DL20231125_000287'
        OR H.role_code = 'DL20231204_000304'
    );
   

   

--김포공항역 하차
SELECT
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 7 THEN 1 ELSE 0 END) AS GIMPO_IN_7COUNT,
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 8 THEN 1 ELSE 0 END) AS GIMPO_IN_8COUNT,
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 9 THEN 1 ELSE 0 END) AS GIMPO_IN_9COUNT
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    event_status = '-1'
    AND (
       H.role_code = 'DL20231125_000280'
        OR H.role_code = 'DL20231125_000281'
        OR H.role_code = 'DL20231125_000282'
        OR H.role_code = 'DL20231204_000303'
    );
   
   
   
--김포공항역 하차 total
SELECT
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 7 THEN 1 ELSE 0 END +
    CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 8 THEN 1 ELSE 0 END  +
    CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 9 THEN 1 ELSE 0 END ) AS GIMPO_OUT_COUNT
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    event_status = '-1'
    AND (
       H.role_code = 'DL20231125_000280'
        OR H.role_code = 'DL20231125_000281'
        OR H.role_code = 'DL20231125_000282'
        OR H.role_code = 'DL20231204_000303'
    );
   
   

--풍무역 승차
SELECT
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 7 THEN 1 ELSE 0 END) AS PUNGMU7COUNT,
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 8 THEN 1 ELSE 0 END) AS PUNGMU8COUNT,
    SUM(CASE WHEN SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112) AND SUBSTRING(OCCU_TIME, 9, 2) = 9 THEN 1 ELSE 0 END) AS PUNGMU9COUNT
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    event_status = '1'
    AND (
		H.role_code = 'DL20231125_000289' 
	    OR H.role_code = 'DL20231125_000290' 
	    OR H.role_code = 'DL20231125_000291' 
	    OR H.role_code = 'DL20231125_000292'
	    OR H.role_code = 'DL20231206_000305'
    );


--- 출근길 누적COUNT
SELECT
    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_IN_COUNT,
    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS GOCHON_COUNT,
    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-역사입구1') THEN 1 END) AS GOCHON1_COUNT,
    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-역사입구2') THEN 1 END) AS GOCHON2_COUNT,
    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS PUNGMU_COUNT
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
AND (SUBSTRING(OCCU_TIME, 9, 2) = 7
OR  SUBSTRING(OCCU_TIME, 9, 2) = 8
OR SUBSTRING(OCCU_TIME, 9, 2) = 9)
;

SELECT *
from  TB_EVENT_ROLE_DL;

	
------24시--------


 SELECT DISTINCT OCCU_TIME
 FROM TB_EVENT_HIST_DL 
WHERE SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112);

SELECT SUBSTRING(OCCU_TIME, 9, 2)
 FROM TB_EVENT_HIST_DL;

SELECT DISTINCT SUBSTRING(OCCU_TIME, 9, 2)
 FROM TB_EVENT_HIST_DL 
WHERE SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112);


--풍무역 승차
SELECT
    SUBSTRING(H.OCCU_TIME, 9, 2) AS OCCU_HOUR,
    COUNT(*) AS kimpoin24
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
    AND H.event_status = '1'
    AND (
        H.role_code = 'DL20231125_000280'
        OR H.role_code = 'DL20231125_000281'
        OR H.role_code = 'DL20231125_000282'
        OR H.role_code = 'DL20231204_000303'
    )
GROUP BY
    SUBSTRING(H.OCCU_TIME, 9, 2);
   




-- 김포공항 하차
   SELECT
    SUBSTRING(H.OCCU_TIME, 9, 2) AS OCCU_HOUR,
    COUNT(*) AS kimpoOut24
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
    AND H.event_status = '-1'
    AND (
        H.role_code = 'DL20231125_000280'
        OR H.role_code = 'DL20231125_000281'
        OR H.role_code = 'DL20231125_000282'
        OR H.role_code = 'DL20231204_000303'
    )
GROUP BY
    SUBSTRING(H.OCCU_TIME, 9, 2);
   



--고촌역 승차 
SELECT
    SUBSTRING(H.OCCU_TIME, 9, 2) AS OCCU_HOUR,
    COUNT(*) AS gochon24
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
    AND H.event_status = '1'
    AND (
	    H.role_code = 'DL20231125_000284' 
	    OR H.role_code = 'DL20231125_000285' 
	    OR H.role_code = 'DL20231125_000286' 
	    OR H.role_code = 'DL20231125_000287'
	    OR H.role_code = 'DL20231204_000304'
    )
GROUP BY
    SUBSTRING(H.OCCU_TIME, 9, 2);
   
   
 
--풍무역 승차 
   SELECT
    SUBSTRING(H.OCCU_TIME, 9, 2) AS OCCU_HOUR,
    COUNT(*) AS pungmu24
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
    AND H.event_status = '1'
    AND (
	    H.role_code = 'DL20231125_000289' 
	    OR H.role_code = 'DL20231125_000290' 
	    OR H.role_code = 'DL20231125_000291' 
	    OR H.role_code = 'DL20231125_000292'
	    OR H.role_code = 'DL20231206_000305'
    )
GROUP BY
    SUBSTRING(H.OCCU_TIME, 9, 2);
   
   
   
   
   
   
   
   
   
---- -- 24시간 김포공항역, 고촌역, 풍무역 승하차 수------
   
SELECT
    SUBSTRING(H.OCCU_TIME, 9, 2) AS OCCU_HOUR,
    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS kimpoIn24,
    COUNT(CASE WHEN H.event_status = '-1' AND H.role_code IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS kimpoOut24,
    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS gochon24,
    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS pungmu24
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112)
GROUP BY
    SUBSTRING(H.OCCU_TIME, 9, 2);
   
   
   
   
   
   
--------기본시간대 누적 수--------
   
   
   SELECT
    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_IN_24COUNT,
    COUNT(CASE WHEN H.event_status = '-1' AND H.role_code IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_OUT_24COUNT,
    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS GOCHON24COUNT,
    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('고촌-역사입구1') THEN 1 END) AS GOCHON1_24COUNT,
    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('고촌-역사입구2') THEN 1 END) AS GOCHON2_24COUNT,
    COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS PUNGMU24COUNT
FROM
    TB_EVENT_HIST_DL H
JOIN
    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE
    SUBSTRING(H.OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112);
   
   
   
   
   
   
   
   
   
   -- 김포공항 & 풍무역 & 고산역 7~9시 승하차 수(날짜변경) -->
	    SELECT
	        SUBSTRING(H.OCCU_TIME, 9, 2) AS HOUR,
	        COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근' ) THEN 1 END) AS GIMPO_IN_CHANGE,
	        COUNT(CASE WHEN H.event_status = '-1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_OUT_CHANGE,
	        COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS GOCHON_CHANGE,
	        COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS PUNGMU_CHANGE
	    FROM TB_EVENT_HIST_DL H
	    JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
	    WHERE SUBSTRING(H.OCCU_TIME, 1, 8) = #{occuDate}
	    AND SUBSTRING(H.OCCU_TIME, 9, 2) IN (7, 8, 9)
	    GROUP BY SUBSTRING(H.OCCU_TIME, 9, 2);

	        
	-- 김포공항 & 풍무역 & 고산역 24시 승하차 수(날짜변경) -->       
  	SELECT
	    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_IN_24CHANGE,
	    COUNT(CASE WHEN H.event_status = '-1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_OUT_24CHANGE,
	    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS GOCHON24CHANGE,
	    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS PUNGMU24CHANGE
	FROM TB_EVENT_HIST_DL H
	JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
	WHERE SUBSTRING(H.OCCU_TIME, 1, 8) = #{occuDate}
	GROUP BY SUBSTRING(H.OCCU_TIME, 9, 2);
	        
	        
	    
	--------출근대 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)--------

SELECT
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_IN_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '-1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_OUT_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS GOCHON_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-역사입구1') THEN 1 END) AS GOCHON1_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-역사입구2') THEN 1 END) AS GOCHON2_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS PUNGMU_CHANGE_COUNT
		FROM
		    TB_EVENT_HIST_DL H
		JOIN
		    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
		WHERE
		    SUBSTRING(H.OCCU_TIME, 1, 8) = #{occuDate}
		AND (SUBSTRING(OCCU_TIME, 9, 2) = 7 OR SUBSTRING(OCCU_TIME, 9, 2) = 8 OR SUBSTRING(OCCU_TIME, 9, 2) = 9)
	    
	    
	    
	-------- 24시간 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)--------
		    
	SELECT
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근' ) THEN 1 END) AS GIMPO_IN_24_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '-1' AND R.role_name IN ('김포-EC-출근', '김포-ST-출근', '김포-EV-출근') THEN 1 END) AS GIMPO_OUT_24_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS GOCHON24_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-역사입구1') THEN 1 END) AS GOCHON1_24_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-역사입구2') THEN 1 END) AS GOCHON2_24_CHANGE_COUNT,
		    COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS PUNGMU24_CHANGE_COUNT
		FROM
		    TB_EVENT_HIST_DL H
		JOIN
		    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
		WHERE
		    SUBSTRING(H.OCCU_TIME, 1, 8) =  '20231206'
		    --#{occuDate}
		    
		    
	--------------------------------------------------------------------------------------
	
		  SELECT  
		    *
		    FROM
		    TB_EVENT_ROLE_DL R;
		   
		   
		  SELECT  
		    *
		    FROM
		    TB_EVENT_HIST_DL H;
		JOIN
		    TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
		   WHERE  H.role_code = 'DL20231125_000289';

		    
		    
		    
		    
		  
		   SELECT
	       -- SUBSTRING(H.OCCU_TIME, 9, 2) AS HOUR,
	        COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000280', 'DL20231125_000281', 'DL20231125_000282', 'DL20231204_000303') THEN 1 END) AS GIMPO_IN_CHANGE,
	        COUNT(CASE WHEN H.event_status = '-1' AND H.role_code IN ('DL20231125_000280', 'DL20231125_000281', 'DL20231125_000282', 'DL20231204_000303') THEN 1 END) AS GIMPO_OUT_CHANGE,
	        COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000284', 'DL20231125_000285', 'DL20231125_000286', 'DL20231125_000287', 'DL20231204_000304') THEN 1 END) AS GOCHON_CHANGE,
	        COUNT(CASE WHEN H.event_status = '1' AND H.role_code IN ('DL20231125_000289', 'DL20231125_000290', 'DL20231125_000291', 'DL20231125_000292', 'DL20231206_000305') THEN 1 END) AS PUNGMU_CHANGE
	    FROM
	        TB_EVENT_HIST_DL H
	    JOIN
	        TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
	    WHERE
	        SUBSTRING(H.OCCU_TIME, 1, 8) = '20231125'
	        AND SUBSTRING(H.OCCU_TIME, 9, 2) IN (7, 8, 9);
	    GROUP BY
	        SUBSTRING(H.OCCU_TIME, 9, 2);
		  
	      
SELECT 
  COUNT(CASE WHEN R.role_name IN ('김포-ST-출근') THEN 1 END) AS GO_TO_GIMPO_ST
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
GROUP BY
    occu_time;
   
   
SELECT 
    DATEADD(MINUTE, DATEDIFF(MINUTE, 0, CONVERT(datetime, STUFF(STUFF(STUFF(STUFF(LEFT(H.occu_time, 12), 9, 0, ':'), 7, 0, ':'), 5, 0, ' '), 13, 0, ':')), 0) AS interval_start,
    COUNT(CASE WHEN R.role_name = '김포-ST-출근' THEN 1 END) AS GO_TO_GIMPO_ST
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE CONVERT(datetime, STUFF(STUFF(STUFF(STUFF(LEFT(H.occu_time, 12), 9, 0, ':'), 7, 0, ':'), 5, 0, ' '), 13, 0, ':')) >= DATEADD(MINUTE, -5, GETDATE()) -- 현재 시간에서 5분 전까지의 데이터만 조회
GROUP BY DATEADD(MINUTE, DATEDIFF(MINUTE, 0, CONVERT(datetime, STUFF(STUFF(STUFF(STUFF(LEFT(H.occu_time, 12), 9, 0, ':'), 7, 0, ':'), 5, 0, ' '), 13, 0, ':')), 0)
ORDER BY interval_start DESC;



	       
	--파일 1(김포출근)       
SELECT 
    occu_time, 
    COUNT(CASE WHEN R.role_name IN ('김포-ST-출근') THEN 1 END) AS GO_TO_GIMPO_ST,
    COUNT(CASE WHEN R.role_name IN ('김포-EV-출근') THEN 1 END) AS GO_TO_GIMPO_EV,
    COUNT(CASE WHEN R.role_name IN ('김포-EC-출근') THEN 1 END) AS GO_TO_GIMPO_EC
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE H.event_type = 'DE20200605_000002'   
AND R.role_name = '김포-buzzer-출근'
AND SUBSTRING(H.OCCU_TIME, 1, 8) = '20231206'
GROUP BY
    occu_time;
   
   --파일 2(김포퇴근) occu_time 5분 단위로 계산       
SELECT 
    occu_time,
    COUNT(CASE WHEN R.role_name IN ('김포-ST-퇴근') AND  THEN 1 END) AS GET_OFF_GIMPO_ST,
    COUNT(CASE WHEN R.role_name IN ('김포-EV-퇴근') THEN 1 END) AS GET_OFF_GIMPO_EV,
    COUNT(CASE WHEN R.role_name IN ('김포-EC-퇴근') THEN 1 END) AS GET_OFF_GIMPO_EC
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE SUBSTRING(H.OCCU_TIME, 1, 8) = '20231206'
AND CAST(SUBSTRING(H.OCCU_TIME, 11, 2) AS INT) % 5 = 0
AND SUBSTRING(H.OCCU_TIME, 13, 2) = 0
GROUP BY occu_time ;




   
   
   --파일 3(풍무)     
SELECT occu_time,
	COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS GO_TO_PUNGMU,
	COUNT(CASE WHEN H.event_status = '-1' AND R.role_name IN ('풍무-플랫폼1-출근', '풍무-플랫폼2-출근', '풍무-플랫폼3-출근', '풍무-플랫폼4-출근') THEN 1 END) AS GET_OFF_PUNGMU
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE  SUBSTRING(H.OCCU_TIME, 1, 8) = '20231206'
AND  H.event_type = 'DE20200605_000002'   
AND R.role_name = '풍무-buzzer-출근'
GROUP BY occu_time;
   
   
   
   
   
   	          select *
from TB_EVENT_ROLE_DL;
   

      --파일 4(고촌)     
SELECT occu_time,
	COUNT(CASE WHEN H.event_status = '1' AND R.role_name IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS GO_TO_GOCHON,
	COUNT(CASE WHEN H.event_status = '-1' AND R.role_name IN ('고촌-플랫폼1-출근', '고촌-플랫폼2-출근', '고촌-플랫폼3-출근', '고촌-플랫폼4-출근') THEN 1 END) AS GET_OFF_GOCHON
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE  SUBSTRING(H.OCCU_TIME, 1, 8) = '20231206'
AND H.event_type = 'DE20200605_000002'   
AND R.role_name = '고촌-buzzer-출근'
GROUP BY occu_time;
	       




   