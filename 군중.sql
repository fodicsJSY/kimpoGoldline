SELECT *
FROM "TB_EVENT_HIST_DL"; 


SELECT *
FROM "TB_EVENT_ROLE_DL"; 


SELECT object_class, camera_code , occu_time
FROM "TB_EVENT_HIST_DL"
WHERE camera_code = 'CD4ACB17520231123_000113'
AND event_type = 'DE20230104_000023'
AND occu_time ='20231125142222'; 

SELECT occu_time
FROM "TB_EVENT_HIST_DL"; 


SELECT *
FROM "TB_EVENT_HIST_DL"
WHERE occu_time ='20231025170101'; 

--현재 날짜
SELECT *
FROM "TB_EVENT_HIST_DL"
WHERE SUBSTRING(OCCU_TIME, 1, 8) = CONVERT(varchar, GETDATE(), 112); 


SELECT *
FROM "TB_EVENT_HIST_DL"
WHERE SUBSTRING(OCCU_TIME, 1, 8) = '20231025'; 

--현재날짜 +시분초
SELECT OCCU_TIME
FROM "TB_EVENT_HIST_DL"
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
; 

--값이 나올 때 잇고 안나올 때 있음..
SELECT object_class
FROM "TB_EVENT_HIST_DL"
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '');




SELECT *
FROM "TB_EVENT_HIST_DL";
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '');




SELECT object_class, H.role_code 
FROM "TB_EVENT_HIST_DL" H
JOIN "TB_EVENT_ROLE_DL" R ON(H.role_code = R.role_code)
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
;







 
 ---------------------------------------------------------------------------------------------------------
  SELECT OCCU_TIME 
 FROM TB_EVENT_HIST_DL 
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '');
 
-- 군중밀집도 쿼리 테스트
 SELECT object_class ,OCCU_TIME
 FROM TB_EVENT_HIST_DL 
WHERE OCCU_TIME >= CONVERT(varchar, GETDATE(), 112) + '171000';
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '');
 
-- 풍무역 플랫폼1 군중밀집도
SELECT object_class 
FROM TB_EVENT_HIST_DL 
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
AND role_code = 'DL20231125_000289' ;

-- 풍무역 플랫폼2 군중밀집도
SELECT object_class 
FROM TB_EVENT_HIST_DL 
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
AND role_code = 'DL20231125_000290' ;
 
 
-- 고촌역 플랫폼1 군중밀집도
SELECT object_class 
FROM TB_EVENT_HIST_DL 
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
AND role_code = 'DL20231125_000284' ;

-- 고촌역 플랫폼2 군중밀집도
SELECT object_class 
FROM TB_EVENT_HIST_DL 
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
AND role_code = 'DL20231125_000285' ;
 

SELECT object_class 
FROM TB_EVENT_HIST_DL 
WHERE role_code = 'DL20231125_000285';
SELECT object_class 
FROM TB_EVENT_HIST_DL 
WHERE role_code = 'DL20231125_000284';



SELECT object_class 
FROM TB_EVENT_HIST_DL 
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '');


AND  ;

SELECT *
from TB_EVENT_ROLE_DL;


-- 고촌역 플랫폼2 군중밀집도
SELECT *
FROM TB_EVENT_HIST_DL 
WHERE OCCU_TIME = CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '');

WHERE SUBSTRING(OCCU_TIME, 1, 8) = '20231025'
AND SUBSTRING(OCCU_TIME, 9, 14) = '170101'
AND role_code = 'DL20231125_000285';



SELECT TOP 1 object_class, role_name --풍무1
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE OCCU_TIME < CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
AND role_name LIKE '%풍무%'
AND(role_name LIKE '%군중%'
OR role_name LIKE '%밀집%'
OR role_name LIKE '%crowd%')
AND role_name LIKE '%1'
ORDER BY occu_time DESC;


		
		
SELECT TOP 1 object_class, role_name --풍무2
  FROM TB_EVENT_HIST_DL H
  JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
  WHERE OCCU_TIME < CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
  AND role_name LIKE '%풍무%'
AND(role_name LIKE '%군중%'
OR role_name LIKE '%밀집%'
OR role_name LIKE '%crowd%')
AND role_name LIKE '%2'
  ORDER BY occu_time DESC;
		  
		 
 SELECT TOP 1 object_class, role_name --고촌1
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE OCCU_TIME < CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
AND role_name LIKE '%고촌%'
AND(role_name LIKE '%군중%'
OR role_name LIKE '%밀집%'
OR role_name LIKE '%crowd%')
AND role_name LIKE '%1'
ORDER BY occu_time DESC;

 SELECT TOP 1 object_class, role_name --고촌2
FROM TB_EVENT_HIST_DL H
JOIN TB_EVENT_ROLE_DL R ON H.role_code = R.role_code
WHERE OCCU_TIME < CONVERT(varchar, GETDATE(), 112) + REPLACE(CONVERT(varchar, GETDATE(), 108), ':', '')
AND role_name LIKE '%고촌%'
AND(role_name LIKE '%군중%'
OR role_name LIKE '%밀집%'
OR role_name LIKE '%crowd%')
AND role_name LIKE '%2'
ORDER BY occu_time DESC;







