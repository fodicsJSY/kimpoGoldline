package fodics.jsy.dashboard.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import fodics.jsy.dashboard.main.model.service.MainService;

@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
	@GetMapping("/")
	public String mainForward() {
		
		return "main";
	}
	
	

}
