package fodics.jsy.dashboard.main.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class CSV {
	
	// csv파일 생성
	private int goToGimpoST;
	private int goToGimpoEV;
	private int goToGimpoEC;
	
	private int getOffGimpoST;
	private int getOffGimpoEV;
	private int getOffGimpoEC;

	
	private int goToPungmu;
	private int getOffPungmu;
	
	private int goToGochon;
	private int getOffGochon;
	

}
