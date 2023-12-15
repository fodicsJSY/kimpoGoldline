package fodics.jsy.dashboard.main.model.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Main {
	
	private String occuTime;
	private String roleCode;
	private String eventType;
	private int eventStatus;
	
	// 출근길 7시
	private int gimpoIn7;
	private int gimpoOut7;
	private int gochon7;
	private int pungmu7;
	
	// 출근길 8시
	private int gimpoIn8;
	private int gimpoOut8;
	private int gochon8;
	private int pungmu8;
	
	
	// 출근길 9시
	private int gimpoIn9;
	private int gimpoOut9;
	private int gochon9;
	private int pungmu9;

	// 출근길 차트
	private int gimpoInRushHour;
	private int gimpoOutRushHour;
	private int gochonRushHour;
	private int pungmuRushHour;
	
	
	
	// 기본모드 24시 차트
	private String  occuHour;
	private int gimpoIn24;
	private int gimpoOut24;
	private int gochon24;
	private int pungmu24;
	
	
	//출근길 COUNT
	private int gimpoInCount;
	private int gimpoOutCount;
	private int gochonCount;
	private int gochon1_Count;
	private int gochon2_Count;
	private int pungmuCount;
	
	
	//기본모드 COUNT
	private int gimpoIn24Count;
	private int gimpoOut24Count;
	private int gochon24Count;
	private int gochon1_24Count;
	private int gochon2_24Count;
	private int pungmu24Count;
	
	
	// 출근길 날짜변경 막대차트
	private String  hour;
	private int gimpoInChange;
	private int gimpoOutChange;
	private int gochonChange;
	private int pungmuChange;

	// 기본모드 날짜변경 막대차트
	private int gimpoIn24Change;
	private int gimpoOut24Change;
	private int gochon24Change;
	private int pungmu24Change;
	
	
	
	//출근길 COUNT
	private int gimpoInChangeCount;
	private int gimpoOutChangeCount;
	private int gochonChangeCount;
	private int gochon1_ChangeCount;
	private int gochon2_ChangeCount;
	private int pungmuChangeCount;
	
	
	// 기본모드 날짜변경 count
	private int gimpoIn24ChangeCount;
	private int gimpoOut24ChangeCount;
	private int gochon24ChangeCount;
	private int gochon1_24ChangeCount;
	private int gochon2_24ChangeCount;
	private int pungmu24ChangeCount;
	

	
	

}
