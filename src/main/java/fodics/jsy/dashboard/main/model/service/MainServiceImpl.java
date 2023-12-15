package fodics.jsy.dashboard.main.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import fodics.jsy.dashboard.main.model.dao.MainDAO;
import fodics.jsy.dashboard.main.model.dto.Main;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	private MainDAO dao;
	
	/**
	 * 김포공항 & 풍무역 & 고산역 7시 승하차 수
	 */
	@Override
	public List<Main> rushHour7CountList() {
		return dao.rushHour7CountList();
	}
	
	/**
	 * 김포공항 & 풍무역 & 고산역 8시 승하차 수
	 */
	@Override
	public List<Main> rushHour8CountList() {
		return dao.rushHour8CountList();
	}
	
	/**
	 * 김포공항 & 풍무역 & 고산역 9시 승하차 수
	 */
	@Override
	public List<Main> rushHour9CountList() {
		return dao.rushHour9CountList();
	}
	
	
	/**
	 * 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 */
	@Override
	public List<Main> rushHourTotalCount() {
		return dao.rushHourTotalCount();
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
	
	
	
	
	
	
	
	
}
