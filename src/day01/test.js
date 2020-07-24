/**
 * 
 */
$(function(){
	//全选
	$("#check").click(function(){
		var check = $("#check");
		var flag = check.prop("checked");
		$("input[name='checked']").prop("checked",flag);
	})
	
	$("input[name=checked]").click(function(){
		flag = true;
		var checkes = $("input[name=checked]");
		checkes.each(function(){
			if(!$(this).prop("checked")){
				flag = false;
				return;
			}
		})
		$("input[name=checkName]").prop("checked",flag);
	})
	
	//反选
	$("#fanxuan").click(function(){
		var checkes = $("input[type=checkbox]");
		 checkes.each(function(){
			$(this).prop("checked",!$(this).prop("checked"));
		 });
	})
	
	
	//增加
	
	$("#add").click(function(){
		var checks=$("input[name=checked]:checked");
		if(checks.length==0){
			alert("请选择至少一行");
		}else{
			var tr = checks.parent().parent().clone();
			$("#tab").append(tr);
		}
	})
	
	$("#del").click(function(){
		var checks=$("input[name=checked]:checked");
		if(checks.length==0){
			alert("请选择至少一行");
		}else{
			var tr = checks.parent().parent();
			tr.remove();
		}
	})
	
	function danji(th){
		var par = $(th).parent().parent();
		par.childern().eq(3).html("<input type='text' size='3px' onblur = 'bul(this)'");
	}
	
	function bul(th){
		var par = $(th).parent().parent();
		par.childern().eq(3).html(this.val);
	}
})