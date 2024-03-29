package fodics.jsy.dashboard.main.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import fodics.jsy.dashboard.main.model.dto.Data;
import fodics.jsy.dashboard.main.model.dto.FileData;
import fodics.jsy.dashboard.main.model.service.MainService;

@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
	@Autowired
	@Resource(name="sqlSessionTemplate2")
	private SqlSessionTemplate sql2;

//	@Autowired
//	private SqlSessionTemplate sql;

	
	@GetMapping("/")
	public String mainForward(
			Model model
			) {
		
		//출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
		List<Data> rushHourTotalList = service.rushHourTotalCount();
		model.addAttribute("rushHourTotalList", rushHourTotalList);
		
		// 풍무역 플랫폼1 군중밀집도
		int selectPungmuPlatform1 = service.selectPungmuPlatform1();
		model.addAttribute("selectPungmuPlatform1", selectPungmuPlatform1);

		// 풍무역 플랫폼2 군중밀집도
		int selectPungmuPlatform2 = service.selectPungmuPlatform2();
		model.addAttribute("selectPungmuPlatform2", selectPungmuPlatform2);
		
		// 고촌역 플랫폼1 군중밀집도
		int selectGochonPlatform1 = service.selectGochonPlatform1();
		model.addAttribute("selectGochonPlatform1", selectGochonPlatform1);
		
		// 고촌역 플랫폼2 군중밀집도
		int selectGochonPlatform2 = service.selectGochonPlatform2();
		model.addAttribute("selectGochonPlatform2", selectGochonPlatform2);
		
//		System.out.println("rushHourTotalList : " + rushHourTotalList);
		
		return "rushHourPage";
	}
	
	
	// 차트데이터 ajax(금일)
	 @GetMapping("/rushHourChartData")
	 @ResponseBody
	 public Map<String, Object> rushHourDaliyData(
			 ){
		 Map<String, Object> map = new HashMap<>();
		 
		

		// 김포공항 & 풍무역 & 고산역 출근대 승하차 수
		List<Data> rushHourCountList = service.rushHourCountList();
		map.put("rushHourCountList", rushHourCountList);
		 
		 
//		 System.out.println("map : "+map);
		 
		 return map;
	 }
	
	
	 
	 
	// 차트데이터 ajax(날짜 변경)
	 @GetMapping("/rushHourDateChange")
	 @ResponseBody
	 public Map<String, Object> rushHourDataChange(
			 @RequestParam(value="occuDate") String occuDate
			 ){
		 Map<String, Object> map = new HashMap<>();
	
		 // 김포공항 & 풍무역 & 고산역 7~9시 승하차 수(날짜검색 시)
		 List<Data> rushHourDateChangeList = service.rushHourDateChangeList(occuDate);
		 map.put("rushHourDateChangeList", rushHourDateChangeList);

		 // 출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수(날짜검색 시)
		 List<Data> rushHourChangeTotalCount = service.rushHourChangeTotalCount(occuDate);
		 map.put("rushHourChangeTotalCount", rushHourChangeTotalCount);
		 
//		 System.out.println("map : "+ map);
		 
		 return map;
	 }

	 
	@GetMapping("/normalPage")
	public String normalModeForward(
			Model model
			) {
		
		//24시간 김포공항역, 고촌역, 풍무역 승하차 
		List<Data> total24CountList = service.total24Count();
		model.addAttribute("total24CountList", total24CountList);
		
		// 풍무역 플랫폼1 군중밀집도
		int selectPungmuPlatform1 = service.selectPungmuPlatform1();
		model.addAttribute("selectPungmuPlatform1", selectPungmuPlatform1);

		// 풍무역 플랫폼2 군중밀집도
		int selectPungmuPlatform2 = service.selectPungmuPlatform2();
		model.addAttribute("selectPungmuPlatform2", selectPungmuPlatform2);
		
		// 고촌역 플랫폼1 군중밀집도
		int selectGochonPlatform1 = service.selectGochonPlatform1();
		model.addAttribute("selectGochonPlatform1", selectGochonPlatform1);
				
		// 고촌역 플랫폼2 군중밀집도
		int selectGochonPlatform2 = service.selectGochonPlatform2();
		model.addAttribute("selectGochonPlatform2", selectGochonPlatform2);
		
//		System.out.println("total24CountList : " + total24CountList);
		
		return "normalPage";
	}
	
	
	// 차트데이터 ajax(금일)
	 @GetMapping("/normalChartData")
	 @ResponseBody
	 public Map<String, Object> normalDaliyData(
			 ){
		 Map<String, Object> map = new HashMap<>();
		 
		
		//24시간 김포공항역, 고촌역, 풍무역 승하차 수
		 List<Data> normal24List = service.normal24CountList();
		 map.put("normal24List", normal24List);
		 

		 return map;
	 }
	
	 
	 
		// 차트데이터 ajax(날짜 변경)
	 @GetMapping("/normalDateChange")
	 @ResponseBody
	 public Map<String, Object> normalDataChange(
			 @RequestParam(value="occuDate") String occuDate
			 ){
		 Map<String, Object> map = new HashMap<>();
	
		 // 김포공항 & 풍무역 & 고산역 24시 승하차 수(날짜변경 시)
		 List<Data> normalDateChangeList = service.normalDateChangeList(occuDate);
		 map.put("normalDateChangeList", normalDateChangeList);
		 
		 // 24시간 김포공항역, 고촌역, 풍무역 누적 수(날짜변경 시)
		 List<Data> normalDateChangeCount = service.normalDateChangeCount(occuDate);
		 map.put("normalDateChangeCount", normalDateChangeCount);
		 
//		 System.out.println("map : "+ map);
		 
		 return map;
	 }
	 
	
	 // 출근길 csv
	 //@PostMapping("/loadRushHourCSV")
	 //@ResponseBody
	 /*
	 public Map<String, Object> loadRushHourCSV(
			 @RequestParam(value="occuDate") String occuDate,
			 Model model
			 ){
		 	Map<String, Object> map = new HashMap<>();

		 	
		 	// csv파일1 프로시저 호출
		 	map.put("parameter", occuDate);
		 	
		 	sql2.selectList("mainMapper.callSP_GIMPO_OUT", map);
		 	
		 
		 	// csv파일1
//		 	List<CSV> goToGimpoCSV = service.goToGimpoCSV(map);
//		 	map.put("goToGimpoCSV", goToGimpoCSV);
		 	
		 	
		 	
		 	// csv파일2 프로시저 호출
//		 	map.put("parameter", occuDate);
		 	sql2.selectList("mainMapper.callSP_GIMPO_IN", map);
	        
			 // csv파일2
//			 List<CSV> getOffGimpoCSV = service.getOffGimpoCSV(map);
//			 map.put("getOffGimpoCSV", getOffGimpoCSV);
			 
		 	
		 	// csv파일3 프로시저 호출
//		 	map.put("parameter", occuDate);
		 	sql2.selectList("mainMapper.callSP_PUNGMU_INOUT", map);
		 	
			 
			 // csv파일3
//			 List<CSV> goToPungmuCSV = service.goToPungmuCSV(map);
//			 map.put("goToPungmuCSV", goToPungmuCSV);
			 
			 
			 
			// csv파일4 프로시저 호출
//		 	map.put("parameter", occuDate);
		 	sql2.selectList("mainMapper.callSP_GOCHON_INOUT", map);
			 
			// csv파일4
//			List<CSV> goToGochonCSV = service.goToGochonCSV(map);
//			map.put("goToGochonCSV", goToGochonCSV);
			 
//		 System.out.println("map : "+ map);
		 
	
		 return map;
	 }
*/

	 
	// 팝업 페이지로 이동
	@GetMapping("/popUp")
	public String openPopUp() {
		return "/popUp";
	}
	
	// 월 데이터
	 @PostMapping("/monthUrl")
	 @ResponseBody
	 public Map<String, Object> loadMonthData(
			 
			 @RequestParam(value="from_date") String from_date,
			 @RequestParam(value="to_date") String to_date,
			 @RequestParam(value="comboValue") String comboValue,
			 @RequestParam(value="bSum") String bSum,
			 Model model
			 ){
		 	
		 	Map<String, Object> map = new HashMap<>();
		 	
			map.put("parameter1", from_date);
			map.put("parameter2", to_date);
			map.put("parameter3", bSum);
			
//			System.out.println("map1 :" +map);
			
			
			
		    List<List<FileData>> goToGimpoCSVList = new ArrayList<>();
		    List<List<FileData>> getOffGimpoCSVList = new ArrayList<>();
		    List<List<FileData>> goToPungmuCSVList = new ArrayList<>();
		    List<List<FileData>> goToGochonCSVList = new ArrayList<>();
			
		    int chunkSize = 1;
		    
		    
		 	// 김포승차
		 	if("GimOut".equals(comboValue)) {
		 		
		 		sql2.selectList("mainMapper.callSP_GIMPO_OUT_month", map);
			 	
//			 	// csv파일1
			 	List<FileData> goToGimpoCSV = service.goToGimpoCSV(map);
//			 	System.out.println("goToGimpoCSV"+goToGimpoCSV);
			 	
			    for (int i = 0; i <= goToGimpoCSV.size(); i += chunkSize) {
			        int end = Math.min(goToGimpoCSV.size(), i + chunkSize);
			        List<FileData> subList = goToGimpoCSV.subList(i, end);
			        goToGimpoCSVList.add(subList);
//			        System.out.println("goToGimpoCSVList : " + goToGimpoCSVList);
				}
		 	}
		 	
		 	
		 	
		 	//김포하차
		 	if("GimIn".equals(comboValue)) {
		 		// 김포하차 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_GIMPO_IN_month", map);
			 	
			 	// csv파일2
				 List<FileData> getOffGimpoCSV = service.getOffGimpoCSV(map);

			    for (int i = 0; i <= getOffGimpoCSV.size(); i += chunkSize) {
			        int end = Math.min(getOffGimpoCSV.size(), i + chunkSize);
			        List<FileData> subList = getOffGimpoCSV.subList(i, end);
			        getOffGimpoCSVList.add(subList);
//			        System.out.println("getOffGimpoCSVList : " + getOffGimpoCSVList);
				}
		 	}
		 	
		 	
		 	
		 	//풍무 승하차
		 	if("PungInOut".equals(comboValue)) {
		 		// 풍무 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_PUNGMU_INOUT_month", map);
			 	
			 	// csv파일3
				List<FileData> goToPungmuCSV = service.goToPungmuCSV(map);

			    for (int i = 0; i <= goToPungmuCSV.size(); i += chunkSize) {
			        int end = Math.min(goToPungmuCSV.size(), i + chunkSize);
			        List<FileData> subList = goToPungmuCSV.subList(i, end);
			        goToPungmuCSVList.add(subList);
//			        System.out.println("goToPungmuCSVList : " + goToPungmuCSVList);
				}
		 	}
		 	
		 	
		 	//고촌 승하차
		 	if("GoInOut".equals(comboValue)) {
		 		// 고촌 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_GOCHON_INOUT_month", map);
			 	
				// csv파일4
				List<FileData> goToGochonCSV = service.goToGochonCSV(map);
				
				for (int i = 0; i <= goToGochonCSV.size(); i += chunkSize) {
			        int end = Math.min(goToGochonCSV.size(), i + chunkSize);
			        List<FileData> subList = goToGochonCSV.subList(i, end);
			        goToGochonCSVList.add(subList);
//			        System.out.println("goToGochonCSVList : " + goToGochonCSVList);
				}
		 	}
		 	
				
				
			map.put("goToGimpoCSVList", goToGimpoCSVList);	
			map.put("getOffGimpoCSVList", getOffGimpoCSVList);	
			map.put("goToPungmuCSVList", goToPungmuCSVList);	
			map.put("goToGochonCSVList", goToGochonCSVList);	
//		 	System.out.println("map"+ map);
		 	
		 	return map;
	 }
	 
	 
	 

	 
	 
	 
	 
	// 일 데이터
	 @PostMapping("/dayUrl")
	 @ResponseBody
	 public Map<String, Object> loadDayData(
			 @RequestParam(value="from_date") String from_date,
			 @RequestParam(value="to_date") String to_date,
			 @RequestParam(value="comboValue") String comboValue,
			 @RequestParam(value="bSum") String bSum,
			 Model model
			 ){
		 	Map<String, Object> map = new HashMap<>();
		 	
//		 	System.out.println("comboValue"+ comboValue);
//		 	System.out.println("to_date"+ to_date);
//		 	System.out.println("from_date"+ from_date);
//		 	System.out.println("bSum"+ bSum);
		 	
		 	map.put("parameter1", from_date);
		 	map.put("parameter2", to_date);
		 	map.put("parameter3", bSum);
		 	
		 	
		    List<List<FileData>> goToGimpoCSVList = new ArrayList<>();
		    List<List<FileData>> getOffGimpoCSVList = new ArrayList<>();
		    List<List<FileData>> goToPungmuCSVList = new ArrayList<>();
		    List<List<FileData>> goToGochonCSVList = new ArrayList<>();
			
		    int chunkSize = 7;
		    
		    
		 	// 김포승차
		 	if("GimOut".equals(comboValue)) {
		 		
		 		sql2.selectList("mainMapper.callSP_GIMPO_OUT_month", map);
			 	
//			 	// csv파일1
			 	List<FileData> goToGimpoCSV = service.goToGimpoCSV(map);
			 	
			    for (int i = 0; i <= goToGimpoCSV.size(); i += chunkSize) {
			        int end = Math.min(goToGimpoCSV.size(), i + chunkSize);
			        List<FileData> subList = goToGimpoCSV.subList(i, end);
			        goToGimpoCSVList.add(subList);
//			        System.out.println("goToGimpoCSVList : " + goToGimpoCSVList);
				}
			 	
		 	}
		 	
		 	
		 	
		 	//김포하차
		 	if("GimIn".equals(comboValue)) {
		 		// 김포하차 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_GIMPO_IN_month", map);
			 	
			 	// csv파일2
				 List<FileData> getOffGimpoCSV = service.getOffGimpoCSV(map);

			    for (int i = 0; i <= getOffGimpoCSV.size(); i += chunkSize) {
			        int end = Math.min(getOffGimpoCSV.size(), i + chunkSize);
			        List<FileData> subList = getOffGimpoCSV.subList(i, end);
			        getOffGimpoCSVList.add(subList);
//			        System.out.println("getOffGimpoCSVList : " + getOffGimpoCSVList);
				}
		 	}
		 	
		 	
		 	
		 	//풍무 승하차
		 	if("PungInOut".equals(comboValue)) {
		 		// 풍무 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_PUNGMU_INOUT_month", map);
			 	
			 	// csv파일3
				List<FileData> goToPungmuCSV = service.goToPungmuCSV(map);

			    for (int i = 0; i <= goToPungmuCSV.size(); i += chunkSize) {
			        int end = Math.min(goToPungmuCSV.size(), i + chunkSize);
			        List<FileData> subList = goToPungmuCSV.subList(i, end);
			        goToPungmuCSVList.add(subList);
//			        System.out.println("goToPungmuCSVList : " + goToPungmuCSVList);
				}
		 	}
		 	
		 	
		 	//고촌 승하차
		 	if("GoInOut".equals(comboValue)) {
		 		// 고촌 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_GOCHON_INOUT_month", map);
			 	
				// csv파일4
				List<FileData> goToGochonCSV = service.goToGochonCSV(map);
				
				for (int i = 0; i <= goToGochonCSV.size(); i += chunkSize) {
			        int end = Math.min(goToGochonCSV.size(), i + chunkSize);
			        List<FileData> subList = goToGochonCSV.subList(i, end);
			        goToGochonCSVList.add(subList);
//			        System.out.println("goToGochonCSVList : " + goToGochonCSVList);
				}
		 	}
		 	
				
				
			map.put("goToGimpoCSVList", goToGimpoCSVList);	
			map.put("getOffGimpoCSVList", getOffGimpoCSVList);	
			map.put("goToPungmuCSVList", goToPungmuCSVList);	
			map.put("goToGochonCSVList", goToGochonCSVList);	
//			 System.out.println("map : "+ map);
		 	
		 	return map;
	 }
	 
	 
	 
	 
	 // 기간 데이터
	 @PostMapping("/customUrl")
	 @ResponseBody
	 public Map<String, Object> loadCustomData(
			 @RequestParam(value="from_date") String from_date,
			 @RequestParam(value="to_date") String to_date,
			 @RequestParam(value="comboValue") String comboValue,
			 @RequestParam(value="bSum") String bSum,
			 Model model
			 ){
		 	Map<String, Object> map = new HashMap<>();
		 	
//		 	System.out.println("comboValue"+ comboValue);
//		 	System.out.println("from_date"+ from_date);
//		 	System.out.println("bSum"+ bSum);
		 	
		 	map.put("parameter1", from_date);
		 	map.put("parameter2", to_date);
		 	map.put("parameter3", bSum);
		 	
		 	
		    List<List<FileData>> goToGimpoCSVList = new ArrayList<>();
		    List<List<FileData>> getOffGimpoCSVList = new ArrayList<>();
		    List<List<FileData>> goToPungmuCSVList = new ArrayList<>();
		    List<List<FileData>> goToGochonCSVList = new ArrayList<>();
			
		    int chunkSize = 1;
		    
		    
		 	// 김포승차
		 	if("GimOut".equals(comboValue)) {
		 		
		 		sql2.selectList("mainMapper.callSP_GIMPO_OUT_month", map);
			 	
//			 	// csv파일1
			 	List<FileData> goToGimpoCSV = service.goToGimpoCSV(map);
			 	
			    for (int i = 0; i <= goToGimpoCSV.size(); i += chunkSize) {
			        int end = Math.min(goToGimpoCSV.size(), i + chunkSize);
			        List<FileData> subList = goToGimpoCSV.subList(i, end);
			        goToGimpoCSVList.add(subList);
//			        System.out.println("goToGimpoCSVList : " + goToGimpoCSVList);
			        
			        
				}
			 	
		 	}
		 	
		 	
		 	
		 	//김포하차
		 	if("GimIn".equals(comboValue)) {
		 		// 김포하차 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_GIMPO_IN_month", map);
			 	
			 	// csv파일2
				 List<FileData> getOffGimpoCSV = service.getOffGimpoCSV(map);

			    for (int i = 0; i <= getOffGimpoCSV.size(); i += chunkSize) {
			        int end = Math.min(getOffGimpoCSV.size(), i + chunkSize);
			        List<FileData> subList = getOffGimpoCSV.subList(i, end);
			        getOffGimpoCSVList.add(subList);
//			        System.out.println("getOffGimpoCSVList : " + getOffGimpoCSVList);
			        
			        
				}
		 	}
		 	
		 	
		 	
		 	//풍무 승하차
		 	if("PungInOut".equals(comboValue)) {
		 		// 풍무 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_PUNGMU_INOUT_month", map);
			 	
			 	// csv파일3
				List<FileData> goToPungmuCSV = service.goToPungmuCSV(map);

			    for (int i = 0; i <= goToPungmuCSV.size(); i += chunkSize) {
			        int end = Math.min(goToPungmuCSV.size(), i + chunkSize);
			        List<FileData> subList = goToPungmuCSV.subList(i, end);
			        goToPungmuCSVList.add(subList);
//			        System.out.println("goToPungmuCSVList : " + goToPungmuCSVList);
			        
				}
		 	}
		 	
		 	
		 	//고촌 승하차
		 	if("GoInOut".equals(comboValue)) {
		 		// 고촌 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_GOCHON_INOUT_month", map);
			 	
				// csv파일4
				List<FileData> goToGochonCSV = service.goToGochonCSV(map);
				
				for (int i = 0; i <= goToGochonCSV.size(); i += chunkSize) {
			        int end = Math.min(goToGochonCSV.size(), i + chunkSize);
			        List<FileData> subList = goToGochonCSV.subList(i, end);
			        goToGochonCSVList.add(subList);
//			        System.out.println("goToGochonCSVList : " + goToGochonCSVList);
			        
				}
		 	}
		 	
				
				
			map.put("goToGimpoCSVList", goToGimpoCSVList);	
			map.put("getOffGimpoCSVList", getOffGimpoCSVList);	
			map.put("goToPungmuCSVList", goToPungmuCSVList);	
			map.put("goToGochonCSVList", goToGochonCSVList);	
//			 System.out.println("map : "+ map);
			
		 	return map;
	 }
	 
	 
	 
	 
	 
 
	 // 파일명 데이터
	 @PostMapping("/fnameUrl")
	 @ResponseBody
	 public Map<String, Object> fname(
			 @RequestBody Map<String, Object> paramMap
			 ){
		 	
//		 	System.out.println("paramMap : " + paramMap);
		 	
		 	return paramMap;
	 }
	 
	 
	 
	 // 모두저장 파일명 데이터
	 @PostMapping("/fileNameUrl")
	 @ResponseBody
	 public Map<String, Object> nameArray(
			 @RequestBody Map<String, Object> paramMap
			 ){
		 	
//		 	System.out.println("paramMap : " + paramMap);
		 	
		 	return paramMap;
	 }
	 
	 
	 //모두저장 월조건
		// 월 데이터
	 @PostMapping("/monthAllDataUrl")
	 @ResponseBody
	 public Map<String, Object> loadMonthAllData(
			 @RequestBody Map<String, Object> paramMap
			 ){
		 	Map<String, Object> map = new HashMap<>();
		 	

//		 	System.out.println("paramMap"+ paramMap);
		 	
		 	
		 	  // paramMap에서 각 요소를 하나씩 꺼내서 사용
		    Object from_date = paramMap.get("from_date");
		    Object to_date = paramMap.get("to_date");
		    Object bSum = paramMap.get("bSum");
		 	
		    
//		    System.out.println("from_date : "+ from_date);
//		    System.out.println("to_date : "+ to_date);
//		    System.out.println("bSum : "+ bSum);
		    
		    
		    
		 	map.put("parameter1", from_date);
		 	map.put("parameter2", to_date);
		 	map.put("parameter3", bSum);
		 	
		 	
//		    System.out.println("map : "+ map);
		 	
		 	
		 	//김포승차
		 		// 김포승차 프로시저 호출
		 		sql2.selectList("mainMapper.callSP_GIMPO_OUT_month", map);
		 	
			 	// csv파일1
			 	List<FileData> goToGimpoCSV = service.goToGimpoCSV(map);
			 	map.put("goToGimpoCSV", goToGimpoCSV);
		 	
		 	
		 	
		 	//김포하차
		 		// 김포하차 프로시저 호출
			 	sql2.selectList("mainMapper.callSP_GIMPO_IN_month", map);
			 	
			 	// csv파일2
				 List<FileData> getOffGimpoCSV = service.getOffGimpoCSV(map);
				 map.put("getOffGimpoCSV", getOffGimpoCSV);
		 	
		 	
		 	
		 	//풍무 승하차
		 		// 풍무 프로시저 호출
				 sql2.selectList("mainMapper.callSP_PUNGMU_INOUT_month", map);
			 	
			 	// csv파일3
				List<FileData> goToPungmuCSV = service.goToPungmuCSV(map);
				map.put("goToPungmuCSV", goToPungmuCSV);
		 	
		 	
		 	//고촌 승하차
		 		// 고촌 프로시저 호출
				sql2.selectList("mainMapper.callSP_GOCHON_INOUT_month", map);
			 	
				// csv파일4
				List<FileData> goToGochonCSV = service.goToGochonCSV(map);
				map.put("goToGochonCSV", goToGochonCSV);
		 	
		 	
		 	return map;
	 }
	 
	 
 		//모두저장 일조건
		 @PostMapping("/dayAllDataUrl")
		 @ResponseBody
		 public Map<String, Object> loadDayAllData(
				 @RequestBody Map<String, Object> paramMap
				 ){
			 	Map<String, Object> map = new HashMap<>();
			 	
//			 	System.out.println("paramMap"+ paramMap);
			 	
			 	
			 	  // paramMap에서 각 요소를 하나씩 꺼내서 사용
			    Object from_date = paramMap.get("from_date");
			    Object to_date = paramMap.get("to_date");
			    Object bSum = paramMap.get("bSum");
			 	
			    
//			    System.out.println("from_date : "+ from_date);
//			    System.out.println("to_date : "+ to_date);
//			    System.out.println("bSum : "+ bSum);
			    
			    
			    
			 	map.put("parameter1", from_date);
			 	map.put("parameter2", to_date);
			 	map.put("parameter3", bSum);
			 	
			 	
//			    System.out.println("map : "+ map);
			 	
			 	
			 	
			 	//김포승차
			 		// 김포승차 프로시저 호출
			 		sql2.selectList("mainMapper.callSP_GIMPO_OUT_day", map);
			 	
				 	// csv파일1
				 	List<FileData> goToGimpoCSV = service.goToGimpoCSV(map);
				 	map.put("goToGimpoCSV", goToGimpoCSV);
			 	
			 	
			 	
			 	//김포하차
			 		// 김포하차 프로시저 호출
				 	sql2.selectList("mainMapper.callSP_GIMPO_IN_day", map);
				 	
				 	// csv파일2
					 List<FileData> getOffGimpoCSV = service.getOffGimpoCSV(map);
					 map.put("getOffGimpoCSV", getOffGimpoCSV);
			 	
			 	
			 	
			 	//풍무 승하차
			 		// 풍무 프로시저 호출
					 sql2.selectList("mainMapper.callSP_PUNGMU_INOUT_day", map);
				 	
				 	// csv파일3
					List<FileData> goToPungmuCSV = service.goToPungmuCSV(map);
					map.put("goToPungmuCSV", goToPungmuCSV);
			 	
			 	
			 	//고촌 승하차
			 		// 고촌 프로시저 호출
					sql2.selectList("mainMapper.callSP_GOCHON_INOUT_day", map);
				 	
					// csv파일4
					List<FileData> goToGochonCSV = service.goToGochonCSV(map);
					map.put("goToGochonCSV", goToGochonCSV);
			 	
			 	
			 	return map;
		 }
		 
	 
	 
		 //모두저장 기간조건
		 @PostMapping("/customAllDataUrl")
		 @ResponseBody
		 public Map<String, Object> loadCustomAllData(
				 @RequestBody Map<String, Object> paramMap
				 ){
			 	Map<String, Object> map = new HashMap<>();
			 	
//			 	System.out.println("paramMap"+ paramMap);
			 	
			 	
			 	  // paramMap에서 각 요소를 하나씩 꺼내서 사용
			    Object from_date = paramMap.get("from_date");
			    Object to_date = paramMap.get("to_date");
			    Object bSum = paramMap.get("bSum");
			 	
			    
//			    System.out.println("from_date : "+ from_date);
//			    System.out.println("to_date : "+ to_date);
//			    System.out.println("bSum : "+ bSum);
			    
			    
			    
			 	map.put("parameter1", from_date);
			 	map.put("parameter2", to_date);
			 	map.put("parameter3", bSum);
			 	
			 	
//			    System.out.println("map : "+ map);
			 	
			 	
			 	//김포승차
			 		// 김포승차 프로시저 호출
			 		sql2.selectList("mainMapper.callSP_GIMPO_OUT_custom", map);
			 	
				 	// csv파일1
				 	List<FileData> goToGimpoCSV = service.goToGimpoCSV(map);
				 	map.put("goToGimpoCSV", goToGimpoCSV);
			 	
			 	
			 	
			 	//김포하차
			 		// 김포하차 프로시저 호출
				 	sql2.selectList("mainMapper.callSP_GIMPO_IN_custom", map);
				 	
				 	// csv파일2
					 List<FileData> getOffGimpoCSV = service.getOffGimpoCSV(map);
					 map.put("getOffGimpoCSV", getOffGimpoCSV);
			 	
			 	
			 	
			 	//풍무 승하차
			 		// 풍무 프로시저 호출
					 sql2.selectList("mainMapper.callSP_PUNGMU_INOUT_custom", map);
				 	
				 	// csv파일3
					List<FileData> goToPungmuCSV = service.goToPungmuCSV(map);
					map.put("goToPungmuCSV", goToPungmuCSV);
			 	
			 	
			 	//고촌 승하차
			 		// 고촌 프로시저 호출
					sql2.selectList("mainMapper.callSP_GOCHON_INOUT_custom", map);
				 	
					// csv파일4
					List<FileData> goToGochonCSV = service.goToGochonCSV(map);
					map.put("goToGochonCSV", goToGochonCSV);
					
					
			 	return map;
		 }
	 
}
