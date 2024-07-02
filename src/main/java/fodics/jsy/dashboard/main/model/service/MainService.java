package fodics.jsy.dashboard.main.model.service;

import java.util.List;
import java.util.Map;

import fodics.jsy.dashboard.main.model.dto.CongestionRate;
import fodics.jsy.dashboard.main.model.dto.Data;
import fodics.jsy.dashboard.main.model.dto.DateParameter;
import fodics.jsy.dashboard.main.model.dto.FileData;

public interface MainService {

	
	
	// 김포공항 & 풍무역 & 고산역 출근대 승하차 수
	List<Data> rushHourCountList();
	
	// 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	List<Data> rushHourTotalCount();
	
	// 김포공항 & 풍무역 & 고산역 7~9시 승하차 수(날짜검색 시) 
	List<Data> rushHourDateChangeList(String occuDate);
	
	// 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수(날짜변경 시)
	List<Data> rushHourChangeTotalCount(String occuDate);

	
	// 24시간 김포공항역, 고촌역, 풍무역 승하차 수
	List<Data> normal24CountList();


	// 24시간 김포공항역, 고촌역, 풍무역 승하차 누적 수
	List<Data> total24Count();

	// 24시간 김포공항역, 고촌역, 풍무역 승하차 수(날짜변경 시)
	List<Data> normalDateChangeList(String occuDate);

	// 24시간 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)
	List<Data> normalDateChangeCount(String occuDate);

	// 풍무역 플랫폼1 군중밀집도
	List<CongestionRate> selectPungmuPlatform1();

	// 풍무역 플랫폼2 군중밀집도
	List<CongestionRate> selectPungmuPlatform2();

	// 고촌역 플랫폼1 군중밀집도
	List<CongestionRate> selectGochonPlatform1();

	// 고촌역 플랫폼2 군중밀집도
	List<CongestionRate> selectGochonPlatform2();

	//김포승차 통계조회
	List<FileData> goToGimpoCSV(DateParameter  dateParameter);

	//김포하차 통계조회
	List<FileData> getOffGimpoCSV(DateParameter  dateParameter);

	//풍무승하차 통계조회
	List<FileData> goToPungmuCSV(DateParameter  dateParameter);

	// 고촌승하차 통계조회
	List<FileData> goToGochonCSV(DateParameter dateParameter);

	
	// 풍무역 플랫폼1 군중밀집도 진짜진짜
	List<Data> gaugeData_P1_list();

	//김포승차 통계조회 일합계
	List<FileData> goToGimpoCSV_daySum(DateParameter dateParameter);

	//김포하차 통계조회 일합계
	List<FileData> getOffGimpoCSV_daySum(DateParameter dateParameter);

	//풍무승하차 통계조회 일합계
	List<FileData> goToPungmuCSV_daySum(DateParameter dateParameter);

	//고촌승하차 통계조회 일합계
	List<FileData> goToGochonCSV_daySum(DateParameter dateParameter);

	// 기간별 김포승차 통계조회
	List<FileData> goToGimpoCSV_custom(DateParameter dateParameter);
	
	// 기간별 김포하차 통계조회
	List<FileData> getOffGimpoCSV_custom(DateParameter dateParameter);
	
	// 기간별 풍무승하차 통계조회
	List<FileData> goToPungmuCSV_custom(DateParameter dateParameter);
	
	// 기간별 고촌승하차 통계조회
	List<FileData> goToGochonCSV_custom(DateParameter dateParameter);

	// 기간별 김포승차 통계조회 일합계
	List<FileData> goToGimpoCSV_custom_total(DateParameter dateParameter);

	// 기간별 김포하차 통계조회 일합계
	List<FileData> getOffGimpoCSV_custom_total(DateParameter dateParameter);

	// 기간별 풍무승하차 통계조회 일합계
	List<FileData> goToPungmuCSV_custom_total(DateParameter dateParameter);

	// 기간별 고촌승하차 통계조회 일합계
	List<FileData> goToGochonCSV_custom_total(DateParameter dateParameter);








}
