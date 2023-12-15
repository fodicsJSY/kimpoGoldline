package fodics.jsy.dashboard.main.model.dao;


import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fodics.jsy.dashboard.main.model.dto.Main;

@Repository
public class MainDAO {
	
	@Autowired
	@Resource(name="sqlSessionTemplate1")
	private SqlSessionTemplate sql;
	
	
	@Autowired
	@Resource(name="sqlSessionTemplate2")
	private SqlSessionTemplate sql2;

	
	
	/**  김포공항 & 풍무역 & 고산역 7시 승하차 수
	 * @return list
	 */
	public List<Main> rushHour7CountList() {
		return sql2.selectList("mainMapper.rushHour7CountList");
	}

	/** 김포공항 & 풍무역 & 고산역 8시 승하차 수
	 * @return list
	 */
	public List<Main> rushHour8CountList() {
		return sql2.selectList("mainMapper.rushHour8CountList");
	}

	/** 김포공항 & 풍무역 & 고산역 9시 승하차 수
	 * @return list
	 */
	public List<Main> rushHour9CountList() {
		return sql2.selectList("mainMapper.rushHour9CountList");
	}
	
	

	/** 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 * @return list
	 */
	public List<Main> rushHourTotalCount() {
		return sql2.selectList("mainMapper.rushHourTotalCount");
	}
	
	

	/** 24시간 김포공항역, 고촌역, 풍무역 승하차 수
	 * @return list
	 */
	public List<Main> normal24CountList() {
		return sql2.selectList("normalMapper.normal24CountList");
	}

	/** 24시간 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 * @return list
	 */
	public List<Main> total24Count() {
		return  sql2.selectList("normalMapper.total24Count");
	}




}
