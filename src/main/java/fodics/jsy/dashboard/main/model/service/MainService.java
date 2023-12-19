package fodics.jsy.dashboard.main.model.service;

import java.util.List;

import fodics.jsy.dashboard.main.model.dto.Main;

public interface MainService {

	
	
	// 김포공항 & 풍무역 & 고산역 출근대 승하차 수
	List<Main> rushHourCountList();
	
	// 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	List<Main> rushHourTotalCount();
	
	// 김포공항 & 풍무역 & 고산역 7~9시 승하차 수(날짜검색 시) 
	List<Main> rushHourDateChangeList(String occuDate);
	
	// 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수(날짜변경 시)
	List<Main> rushHourChangeTotalCount(String occuDate);

	
	// 24시간 김포공항역, 고촌역, 풍무역 승하차 수
	List<Main> normal24CountList();


	// 24시간 김포공항역, 고촌역, 풍무역 승하차 누적 수
	List<Main> total24Count();

	// 24시간 김포공항역, 고촌역, 풍무역 승하차 수(날짜변경 시)
	List<Main> normalDateChangeList(String occuDate);

	// 24시간 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)
	List<Main> normalDateChangeCount(String occuDate);

	// 풍무역 플랫폼1 군중밀집도
	List<Main> selectPungmuPlatform1();

	// 풍무역 플랫폼2 군중밀집도
	List<Main> selectPungmuPlatform2();

	// 고촌역 플랫폼1 군중밀집도
	List<Main> selectGochonPlatform1();

	// 고촌역 플랫폼2 군중밀집도
	List<Main> selectGochonPlatform2();






}
