package fodics.jsy.dashboard.main.model.dao;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fodics.jsy.dashboard.main.model.dto.CSV;
import fodics.jsy.dashboard.main.model.dto.Data;

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
	public List<Data> rushHourCountList() {
		return sql2.selectList("mainMapper.rushHourCountList");
	}


	
	/** 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 * @return list
	 */
	public List<Data> rushHourTotalCount() {
		return sql2.selectList("mainMapper.rushHourTotalCount");
	}
	
	
	
	/** 김포공항 & 풍무역 & 고산역 7~9시 승하차 수(날짜검색 시) 
	 *  * @param occuDate
	 * @return list
	 */
	public List<Data> rushHourDateChangeList(String occuDate) {
		return sql2.selectList("mainMapper.rushHourDateChangeList", occuDate);
	}
	
	
	/** 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수(날짜변경 시) 
	 * @param occuDate
	 * @return list
	 */
	public List<Data> rushHourChangeTotalCount(String occuDate) {
		return sql2.selectList("mainMapper.rushHourChangeTotalCount", occuDate);
	}


	

	/** 24시간 김포공항역, 고촌역, 풍무역 승하차 수
	 * @return list
	 */
	public List<Data> normal24CountList() {
		return sql2.selectList("normalMapper.normal24CountList");
	}

	/** 24시간 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 * @return list
	 */
	public List<Data> total24Count() {
		return  sql2.selectList("normalMapper.total24Count");
	}



	/** 24시간 김포공항역, 고촌역, 풍무역 승하차 수(날짜변경 시)
	 * @param occuDate
	 * @return list
	 */
	public List<Data> normalDateChangeList(String occuDate) {
		return  sql2.selectList("normalMapper.normalDateChangeList", occuDate);
	}

	/** 24시간 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)
	 * @param occuDate
	 * @return list
	 */
	public List<Data> normalDateChangeCount(String occuDate) {
		return sql2.selectList("normalMapper.normalDateChangeCount", occuDate);
	}



	/** 풍무역 플랫폼1 군중밀집도 
	 * @return 
	 */
	public int selectPungmuPlatform1() {
		return sql.selectOne("mainMapper.selectPungmuPlatform1");
	}



	/** 풍무역 플랫폼2 군중밀집도
	 * @return
	 */
	public int selectPungmuPlatform2() {
		return sql.selectOne("mainMapper.selectPungmuPlatform2");
	}



	/** 고촌역 플랫폼1 군중밀집도
	 * @return
	 */
	public int selectGochonPlatform1() {
		return sql.selectOne("mainMapper.selectGochonPlatform1");
	}



	/** 고촌역 플랫폼2 군중밀집도 
	 * @return
	 */
	public int selectGochonPlatform2() {
		return sql.selectOne("mainMapper.selectGochonPlatform2");
	}



	public List<CSV> goToGimpoCSV(Map<String, Object> map) {
		return sql2.selectList("mainMapper.goToGimpoCSV", map);
	}



	public List<CSV> getOffGimpoCSV(Map<String, Object> map) {
		return sql2.selectList("mainMapper.getOffGimpoCSV", map);
	}



	public List<CSV> goToPungmuCSV(Map<String, Object> map) {
		return sql2.selectList("mainMapper.goToPungmuCSV", map);
	}



	public List<CSV> goToGochonCSV(Map<String, Object> map) {
		return sql2.selectList("mainMapper.goToGochonCSV", map);
	}



	
	




}
