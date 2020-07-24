package day01;

import java.util.ArrayList;
import java.util.List;

public class Student {
	private int number;
	private String name;
	private double score;
	
	public void SetRecord(int number,String name,double score) {
		this.number = number;
		this.name = name;
		this.score = score;
	}
	
	public Student(int number,String name,double score){
		this.number = number;
		this.name = name;
		this.score = score;
	}
	public double GetRecord(int number){
		
		return score;
	}
	
	public List<String> Vector(){
		List<String> list = new ArrayList<String>();
		String coure1 =  "Math";
		String coure2 = "Chinese";
		String coure3 = "Political";
		String coure4 = "Physical";
		String coure5 = "English";
		list.add(coure1);
		list.add(coure2);
		list.add(coure3);
		list.add(coure4);
		list.add(coure5);
		return list;
	}
	public  static void main(String[] arms){
		Student student = new Student(1,"ÕÅÈı",98);
		List<String> list = student.Vector();
		for(String str:list){
			System.out.println(str);
		}
	}
}
