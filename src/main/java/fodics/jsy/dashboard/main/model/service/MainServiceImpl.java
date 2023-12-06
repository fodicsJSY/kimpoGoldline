package fodics.jsy.dashboard.main.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import fodics.jsy.dashboard.main.model.dao.MainDAO;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	private MainDAO dao;
	
	
}
