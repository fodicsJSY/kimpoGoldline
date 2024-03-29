package fodics.jsy.dashboard.main.model.dao;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fodics.jsy.dashboard.main.model.dto.Data;
import fodics.jsy.dashboard.main.model.dto.FileData;

@Repository
public class MainDAO {
	
	@Autowired
	@Resource(name="sqlSessionTemplate1")
	private SqlSessionTemplate sql;
	
	
	@Autowired
	@Resource(name="sqlSessionTemplate2")
	private SqlSessionTemplate sql2;

//	@Autowired
//	private SqlSessionTemplate sql;
	
	

	/** 김포공항 & 풍무역 & 고산역 출근대 승하차 
	 * @return list
	 * sql2
	 */
	public List<Data> rushHourCountList() {
		return sql2.selectList("mainMapper.rushHourCountList");
	}


	
	/** 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 * @return list
	 * sql2
	 */
	public List<Data> rushHourTotalCount() {
		return sql2.selectList("mainMapper.rushHourTotalCount");
	}
	
	
	
	/** 김포공항 & 풍무역 & 고산역 7~9시 승하차 수(날짜검색 시) 
	 *  * @param occuDate
	 * @return list
	 * sql2
	 */
	public List<Data> rushHourDateChangeList(String occuDate) {
		return sql2.selectList("mainMapper.rushHourDateChangeList", occuDate);
	}
	
	
	/** 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수(날짜변경 시) 
	 * @param occuDate
	 * @return list
	 * sql2
	 */
	public List<Data> rushHourChangeTotalCount(String occuDate) {
		return sql2.selectList("mainMapper.rushHourChangeTotalCount", occuDate);
	}


	

	/** 24시간 김포공항역, 고촌역, 풍무역 승하차 수
	 * @return list
	 * sql2
	 */
	public List<Data> normal24CountList() {
		return sql2.selectList("normalMapper.normal24CountList");
	}

	/** 24시간 김포공항역, 고촌역, 풍무역 승하차 누적 수
	 * @return list
	 * sql2
	 */
	public List<Data> total24Count() {
		return  sql2.selectList("normalMapper.total24Count");
	}



	/** 24시간 김포공항역, 고촌역, 풍무역 승하차 수(날짜변경 시)
	 * @param occuDate
	 * @return list
	 * sql2
	 */
	public List<Data> normalDateChangeList(String occuDate) {
		return  sql2.selectList("normalMapper.normalDateChangeList", occuDate);
	}

	/** 24시간 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)
	 * @param occuDate
	 * @return list
	 * sql2
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



	/**
	 * @param map
	 * @return
	 * sql2
	 */
	public List<FileData> goToGimpoCSV(Map<String, Object> map) {
		return sql2.selectList("mainMapper.goToGimpoCSV", map);
	}



	/**
	 * @param map
	 * @return
	 * sql2
	 */
	public List<FileData> getOffGimpoCSV(Map<String, Object> map) {
		return sql2.selectList("mainMapper.getOffGimpoCSV", map);
	}



	/**
	 * @param map
	 * @return
	 * sql2
	 */
	public List<FileData> goToPungmuCSV(Map<String, Object> map) {
		return sql2.selectList("mainMapper.goToPungmuCSV", map);
	}



	/**
	 * @param map
	 * @return
	 * sql2
	 */
	public List<FileData> goToGochonCSV(Map<String, Object> map) {
		return sql2.selectList("mainMapper.goToGochonCSV", map);
	}



	
	




}
