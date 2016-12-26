// JavaScript Document
$(document).ready(function(){
	/******************** 메인리스트 ********************/
	/* 검색 포커스 인 */
	function focus_in(){
		//마이메뉴 아이콘을 검색 초기화 아이콘으로
		$(".btn_my").addClass("btn_reset");
		$(".header_logo").css("display","none");
		// 검색바에 글씨가 써지거나 써져있는 경우
		if($("#header_srch").val().length > 0){
			$(".header_srch label").css("display","none");
			$(".srch_del").css("display","block");
			$(".btn_voice").css("display","none");
			$(".btn_shrch").css("display","block");
			//검색어 삭제 버튼을 클릭한 경우
			$(".srch_del").click(function(){
				$("#header_srch").val("");
			});
		// 검색바에 글씨가 없는 경우
		} else {
			$(".header_srch label").css("display","block");
			$(".srch_del").css("display","none");
			$(".btn_voice").css("display","block");
			$(".btn_shrch").css("display","none");
		}
	}
	/* 검색 포커스 아웃 */
	function focus_out(){
		// 검색바에 글씨가 없는 경우
		if($("#header_srch").val().length <= 0){
			$(".btn_my").removeClass("btn_reset");
			$(".header_logo").css("display","block");
			$(".header_srch label").css("display","none");
		}
	}
	$("#header_srch").focusin(function(){
		focus_in()
	});
	$("#header_srch").focusout(function(){
		focus_out()
	});
	$("#header_srch").keyup(function(){
		focus_in()
	});
	$(".srch_del").click(function(){
		$("#header_srch").val("");
		focus_in()
	});
	$(".link_reset").click(function(){
		$("#header_srch").val("");
		focus_out()
	});
	
	/* 새로고침 click시 애니메이션 */
	function rfsh_on(){
		// 화살표 사라짐
		$(".arrow_span").addClass("arrow_span_on");
		// 로딩애니메이션
		setTimeout(function(){
			$(".result_rfsh").addClass("result_rfsh_on");
		},150);
		// 원상복귀
		setTimeout(function(){
			$(".arrow_span").removeClass("arrow_span_on");
			$(".result_rfsh").removeClass("result_rfsh_on");
		},700);
	}
	$(".result_rfsh").click(function(){
		rfsh_on();
	});
});