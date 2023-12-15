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

	
	
	

	/** 김포공항 & 풍무역 & 고산역 출근대 승하차 
	 * @return list
	 */
	public List<Main> rushHourCountList() {
		return sql2.selectList("mainMapper.rushHourCountList");
	}


	
	/** 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 * @return list
	 */
	public List<Main> rushHourTotalCount() {
		return sql2.selectList("mainMapper.rushHourTotalCount");
	}
	
	
	
	/** 김포공항 & 풍무역 & 고산역 7~9시 승하차 수(날짜검색 시) 
	 *  * @param occuDate
	 * @return list
	 */
	public List<Main> rushHourDateChangeList(String occuDate) {
		return sql2.selectList("mainMapper.rushHourDateChangeList", occuDate);
	}
	
	
	/** 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수(날짜변경 시) 
	 * @param occuDate
	 * @return list
	 */
	public List<Main> rushHourChangeTotalCount(String occuDate) {
		return sql2.selectList("mainMapper.rushHourChangeTotalCount", occuDate);
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



	/** 24시간 김포공항역, 고촌역, 풍무역 승하차 수(날짜변경 시)
	 * @param occuDate
	 * @return list
	 */
	public List<Main> normalDateChangeList(String occuDate) {
		return  sql2.selectList("normalMapper.normalDateChangeList", occuDate);
	}

	/** 24시간 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)
	 * @param occuDate
	 * @return list
	 */
	public List<Main> normalDateChangeCount(String occuDate) {
		return sql2.selectList("normalMapper.normalDateChangeCount", occuDate);
	}





}
