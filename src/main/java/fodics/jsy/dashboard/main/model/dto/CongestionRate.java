package fodics.jsy.dashboard.main.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class CongestionRate {
	
	private int bbox_x; // 사람수
	private int bbox_y; // 단계
	private int bbox_w; // 혼잡도
	private String occuTime;
	private String roleCode;
	private String roleName;
	


}
