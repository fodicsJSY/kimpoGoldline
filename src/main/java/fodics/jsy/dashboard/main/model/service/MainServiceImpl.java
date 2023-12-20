package fodics.jsy.dashboard.main.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import fodics.jsy.dashboard.main.model.dao.MainDAO;
import fodics.jsy.dashboard.main.model.dto.CSV;
import fodics.jsy.dashboard.main.model.dto.Main;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	private MainDAO dao;
	
	/**
	 * 김포공항 & 풍무역 & 고산역 출근대 승하차 수
	 */
	@Override
	public List<Main> rushHourCountList() {
		return dao.rushHourCountList();
	}
	
	
	/**
	 * 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 */
	@Override
	public List<Main> rushHourTotalCount() {
		return dao.rushHourTotalCount();
	}
	
	
	/**
	 *  김포공항 & 풍무역 & 고산역 7~9시 승하차 수(날짜검색 시) 
	 */
	@Override
	public List<Main> rushHourDateChangeList(String occuDate) {
		return dao.rushHourDateChangeList(occuDate);
	}
	
	/**
	 * 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수(날짜변경 시)
	 */
	@Override
	public List<Main> rushHourChangeTotalCount(String occuDate) {
		return dao.rushHourChangeTotalCount(occuDate);
	}
	
	
	/**
	 * 24시간 김포공항역, 고촌역, 풍무역 승하차 수
	 */
	@Override
	public List<Main> normal24CountList() {
		return dao.normal24CountList();
	}
	
	
	/**
	 * 24시간 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 */
	@Override
	public List<Main> total24Count() {
		return dao.total24Count();
	}
	
	
	/**
	 * 24시간 김포공항역, 고촌역, 풍무역 승하차 수(날짜변경 시)
	 */
	@Override
	public List<Main> normalDateChangeList(String occuDate) {
		return dao.normalDateChangeList(occuDate);
	}
	
	
	/**
	 * 24시간 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)
	 */
	@Override
	public List<Main> normalDateChangeCount(String occuDate) {
		return dao.normalDateChangeCount(occuDate);
	}
	
	
	
	/**
	 * 풍무역 플랫폼1 군중밀집도
	 */
	@Override
	public int selectPungmuPlatform1() {
		return dao.selectPungmuPlatform1();
	}
	
	
	/** 
	 * 풍무역 플랫폼2 군중밀집도
	 */
	@Override
	public int selectPungmuPlatform2() {
		return dao.selectPungmuPlatform2();
	}
	
	
	/**
	 *  고촌역 플랫폼1 군중밀집도
	 */
	@Override
	public int selectGochonPlatform1() {
		return dao.selectGochonPlatform1();
	}
	
	
	/**
	 * 고촌역 플랫폼2 군중밀집도
	 */
	@Override
	public int selectGochonPlatform2() {
		return dao.selectGochonPlatform2();
	}
	
	
	
	/**
	 *csv파일1
	 */
	@Override
	public List<CSV> goToGimpoCSV(String occuDate) {
		return dao.goToGimpoCSV(occuDate);
	}
	
	
	/**
	 * csv파일2
	 */
	@Override
	public List<CSV> getOffGimpoCSV(String occuDate) {
		return dao.getOffGimpoCSV(occuDate);
	}
	
	/**
	 *csv파일3
	 */
	@Override
	public List<CSV> goToPungmuCSV(String occuDate) {
		return dao.goToPungmuCSV(occuDate);
	}
	
	/**
	 *csv파일4
	 */
	@Override
	public List<CSV> goToGochonCSV(String occuDate) {
		return dao.goToGochonCSV(occuDate);
	}
	
	
	
	
}
