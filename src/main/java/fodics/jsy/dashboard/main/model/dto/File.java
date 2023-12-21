package fodics.jsy.dashboard.main.model.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class File {

	
	private String date_time;
	private int gimpo_st_out;
	private int gimpo_ev_out;
	private int gimpo_ec_out;
	private int gimpo_total_out;

	private int gimpo_st_in;
	private int gimpo_ev_in;
	private int gimpo_ec_in;
	private int gimpo_total_in;
	
	
	
	
	private int pungmu_in;
	private int pungmu_out;

	private int gochon_in;
	private int gochon_out;

	
}
