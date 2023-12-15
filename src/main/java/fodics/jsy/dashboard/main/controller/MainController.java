package fodics.jsy.dashboard.main.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import fodics.jsy.dashboard.main.model.dto.Main;
import fodics.jsy.dashboard.main.model.service.MainService;

@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
	@GetMapping("/")
	public String mainForward(
			Model model
			) {
		
		//출근대 김포공항역, 고촌역, 풍무역 승하차 누적 수
		List<Main> rushHourTotalList = service.rushHourTotalCount();
		model.addAttribute("rushHourTotalList", rushHourTotalList);
		
		System.out.println("rushHourTotalList : " + rushHourTotalList);
		
		return "rushHourPage";
	}
	
	
	// 차트데이터 ajax(금일)
	 @GetMapping("/rushHourChartData")
	 @ResponseBody
	 public Map<String, Object> rushHourDaliyData(
			 ){
		 Map<String, Object> map = new HashMap<>();
		 
		
		 //김포공항 & 풍무역 & 고산역 7시 승하차 수
		List<Main> rushHour7List = service.rushHour7CountList();
		map.put("rushHour7List", rushHour7List);
		
		//김포공항 & 풍무역 & 고산역 8시 승하차 수
		List<Main> rushHour8List = service.rushHour8CountList();
		map.put("rushHour8List", rushHour8List);
		
		//김포공항 & 풍무역 & 고산역 9시 승하차 수
		List<Main> rushHour9List = service.rushHour9CountList();
		map.put("rushHour9List", rushHour9List);
		
		 
		 
//		 System.out.println("map : "+map);
		 
		 return map;
	 }
	
	
	
	@GetMapping("/normalPage")
	public String normalModeForward(
			Model model
			) {
		
		//24시간 김포공항역, 고촌역, 풍무역 승하차 누적 수
		List<Main> total24CountList = service.total24Count();
		model.addAttribute("total24CountList", total24CountList);
		
		System.out.println("total24CountList : " + total24CountList);
		
		return "normalPage";
	}
	
	
	// 차트데이터 ajax(금일)
	 @GetMapping("/normalChartData")
	 @ResponseBody
	 public Map<String, Object> noemalDaliyData(
			 ){
		 Map<String, Object> map = new HashMap<>();
		 
		
		//24시간 김포공항역, 고촌역, 풍무역 승하차 수
		 List<Main> normal24List = service.normal24CountList();
		 map.put("normal24List", normal24List);
		 
//		 System.out.println("map : "+ map);
		 
		 return map;
	 }
	
	
	

}
