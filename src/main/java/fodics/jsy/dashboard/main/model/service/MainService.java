package fodics.jsy.dashboard.main.model.service;

import java.util.List;

import fodics.jsy.dashboard.main.model.dto.Main;

public interface MainService {

	

	
	//김포공항 & 풍무역 & 고산역 7시 승하차 수
	List<Main> rushHour7CountList();
	
	// 김포공항 & 풍무역 & 고산역 8시 승하차 수
	List<Main> rushHour8CountList();
	
	// 김포공항 & 풍무역 & 고산역 9시 승하차 수
	List<Main> rushHour9CountList();
	
	// 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	List<Main> rushHourTotalCount();
	
	// 24시간 김포공항역, 고촌역, 풍무역 승하차 수
	List<Main> normal24CountList();


	// 24시간 김포공항역, 고촌역, 풍무역 승하차 누적 수
	List<Main> total24Count();

}
