package fodics.jsy.dashboard.main.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import fodics.jsy.dashboard.main.model.dao.MainDAO;
import fodics.jsy.dashboard.main.model.dto.CSV;
import fodics.jsy.dashboard.main.model.dto.CongestionRate;
import fodics.jsy.dashboard.main.model.dto.Data;
import fodics.jsy.dashboard.main.model.dto.DateParameter;
import fodics.jsy.dashboard.main.model.dto.FileData;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	private MainDAO dao;
	
	/**
	 * 김포공항 & 풍무역 & 고산역 출근대 승하차 수
	 */
	@Override
	public List<Data> rushHourCountList() {
		return dao.rushHourCountList();
	}
	
	
	/**
	 * 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 */
	@Override
	public List<Data> rushHourTotalCount() {
		return dao.rushHourTotalCount();
	}
	
	
	/**
	 *  김포공항 & 풍무역 & 고산역 7~9시 승하차 수(날짜검색 시) 
	 */
	@Override
	public List<Data> rushHourDateChangeList(String occuDate) {
		return dao.rushHourDateChangeList(occuDate);
	}
	
	/**
	 * 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수(날짜변경 시)
	 */
	@Override
	public List<Data> rushHourChangeTotalCount(String occuDate) {
		return dao.rushHourChangeTotalCount(occuDate);
	}
	
	
	/**
	 * 24시간 김포공항역, 고촌역, 풍무역 승하차 수
	 */
	@Override
	public List<Data> normal24CountList() {
		return dao.normal24CountList();
	}
	
	
	/**
	 * 24시간 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 */
	@Override
	public List<Data> total24Count() {
		return dao.total24Count();
	}
	
	
	/**
	 * 24시간 김포공항역, 고촌역, 풍무역 승하차 수(날짜변경 시)
	 */
	@Override
	public List<Data> normalDateChangeList(String occuDate) {
		return dao.normalDateChangeList(occuDate);
	}
	
	
	/**
	 * 24시간 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)
	 */
	@Override
	public List<Data> normalDateChangeCount(String occuDate) {
		return dao.normalDateChangeCount(occuDate);
	}
	
	
	
	/**
	 * 풍무역 플랫폼1 군중밀집도
	 */
	@Override
	public List<CongestionRate> selectPungmuPlatform1() {
		return dao.selectPungmuPlatform1();
	}
	
	
	/** 
	 * 풍무역 플랫폼2 군중밀집도
	 */
	@Override
	public List<CongestionRate> selectPungmuPlatform2() {
		return dao.selectPungmuPlatform2();
	}
	
	
	/**
	 *  고촌역 플랫폼1 군중밀집도
	 */
	@Override
	public List<CongestionRate> selectGochonPlatform1() {
		return dao.selectGochonPlatform1();
	}
	
	
	/**
	 * 고촌역 플랫폼2 군중밀집도
	 */
	@Override
	public List<CongestionRate> selectGochonPlatform2() {
		return dao.selectGochonPlatform2();
	}
	
	
	
	/**
	 * 김포승차 통계조회
	 */
	@Override
	public List<FileData> goToGimpoCSV(DateParameter dateParameter) {
		return dao.goToGimpoCSV(dateParameter);
	}
	
	
	/**
	 * 김포하차 통계조회
	 */
	@Override
	public List<FileData> getOffGimpoCSV(DateParameter dateParameter) {
		return dao.getOffGimpoCSV(dateParameter);
	}
	
	/**
	 * 풍무승하차 통계조회
	 */
	@Override
	public List<FileData> goToPungmuCSV(DateParameter  dateParameter) {
		return dao.goToPungmuCSV(dateParameter);
	}
	
	/**
	 * 고촌승하차 통계조회
	 */
	@Override
	public List<FileData> goToGochonCSV(DateParameter dateParameter) {
		return dao.goToGochonCSV(dateParameter);
	}
	
	
	/**
	 * 	// 풍무역 플랫폼1 군중밀집도 진짜진짜
	 */
	@Override
	public List<Data> gaugeData_P1_list() {

		return dao.gaugeData_P1_list();
	}
	
	
	/**
	 * 김포승차 통계조회 일합계
	 */
	@Override
	public List<FileData> getOffGimpoCSV_daySum(DateParameter dateParameter) {
		return dao.getOffGimpoCSV_daySum(dateParameter);
	}
	
	
	/**
	 * 김포하차 통계조회 일합계
	 */
	@Override
	public List<FileData> goToGimpoCSV_daySum(DateParameter dateParameter) {
		return dao.goToGimpoCSV_daySum(dateParameter);
	}


	/**
	 * 풍무승하차 통계조회 일합계
	 */
	@Override
	public List<FileData> goToGochonCSV_daySum(DateParameter dateParameter) {
		return dao.goToGochonCSV_daySum(dateParameter);
	}
	
	
	/**
	 * 고촌승하차 통계조회 일합계
	 */
	@Override
	public List<FileData> goToPungmuCSV_daySum(DateParameter dateParameter) {
		return dao.goToPungmuCSV_daySum(dateParameter);
	}
	
	
	/**
	 * 기간별 김포승차 통계조회 
	 */
	@Override
	public List<FileData> goToGimpoCSV_custom(DateParameter dateParameter) {
		return dao.goToGimpoCSV_custom(dateParameter);
	}
	
	
	/**
	 * 기간별 김포하차 통계조회
	 */
	@Override
	public List<FileData> getOffGimpoCSV_custom(DateParameter dateParameter) {
		return dao.getOffGimpoCSV_custom(dateParameter);
	}
	
	
	
	/**
	 * 기간별 풍무승하차 통계조회
	 */
	@Override
	public List<FileData> goToPungmuCSV_custom(DateParameter dateParameter) {
		return dao.goToPungmuCSV_custom(dateParameter);
	}
	
	
	/**
	 * 기간별 고촌승하차 통계조회
	 */
	@Override
	public List<FileData> goToGochonCSV_custom(DateParameter dateParameter) {
		return dao.goToGochonCSV_custom(dateParameter);
	}
	
	
	/**
	 * 기간별 김포승차 통계조회 일합계
	 */
	@Override
	public List<FileData> goToGimpoCSV_custom_total(DateParameter dateParameter) {
		return dao.goToGimpoCSV_custom_total(dateParameter);
	}
	
	
	/**
	 * 기간별 김포하차 통계조회 일합계
	 */
	@Override
	public List<FileData> getOffGimpoCSV_custom_total(DateParameter dateParameter) {
		return dao.getOffGimpoCSV_custom_total(dateParameter);
	}
	
	
	
	/**
	 * 기간별 풍무승하차 통계조회 일합계
	 */
	@Override
	public List<FileData> goToPungmuCSV_custom_total(DateParameter dateParameter) {
		return dao.goToPungmuCSV_custom_total(dateParameter);
	}
	
	
	
	/**
	 * 기간별 고촌승하차 통계조회 일합계
	 */
	@Override
	public List<FileData> goToGochonCSV_custom_total(DateParameter dateParameter) {
		return dao.goToGochonCSV_custom_total(dateParameter);
	}
	
	
}
