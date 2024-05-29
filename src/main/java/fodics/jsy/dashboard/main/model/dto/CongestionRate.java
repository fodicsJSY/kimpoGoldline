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
	
	private int ObjectClass; // 밀집률
	private String grade; // 등급

}
