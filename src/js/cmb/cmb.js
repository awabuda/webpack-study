
require('../../css/cmb.css');
var musicBtn = require('../../img/musicBtn.png')
 		musicBtnOff = require('../../img/musicBtnOff.png');
window.onload=function(){
	var flag=true;
	if(flag){
		window.addEventListener("touchstart",function(){
			var music=document.getElementsByClassName("audio")[0];
			music.play()
			flag=false;
		},false)
	}

/*这是上下滑动的*/
	var num=0,starY,moveY,endY;
	setDomresize()
	addClassName(num)
	window.addEventListener("resize",setDomresize,false)
	function setDomresize(){
		var Dom=document.documentElement||document.body;
		Dom.style.fontSize=Dom.clientWidth/6.4+"px";
		//Dom.style.fontSize=640/6.4+"px";
		$(".container").height(9*Dom.clientHeight)
		$(".one").height(Dom.clientHeight)
		$(".two").height(Dom.clientHeight)
		$(".three").height(Dom.clientHeight)
		$(".four").height(Dom.clientHeight)
		$(".fifth").height(Dom.clientHeight)
		$(".six").height(Dom.clientHeight)
		$(".seven").height(Dom.clientHeight)
		$(".nine").height(Dom.clientHeight)
		$(".eight").height(Dom.clientHeight)
	}
	var Dom=document.documentElement||document.body;
	var contWrap=document.getElementById("contWrap");
	contWrap.addEventListener('touchstart',touchStar,false)
	contWrap.addEventListener('touchmove',touchMove,false)
	contWrap.addEventListener('touchend',touchEnd,false)
	function touchStar(event){
		starY=event.touches[0].pageY;
	}
	function touchMove(event){
		moveY=event.touches[0].pageY;
		if(moveY-starY>0){
			$(".container").css({top:-num*Dom.clientHeight+(moveY-starY)+"px"})
		}
		if(moveY-starY<0){
			$(".container").css({top:-num*Dom.clientHeight+(moveY-starY)+"px"})
		}
	}
	function touchEnd(event){
		endY=event.changedTouches[0].pageY;
		if(endY-starY>150){
			num--
		}
		if(endY-starY<-150){
			num++
		}
		if(num<0){
			num=0
		}
		if(num>8){
			num=8
		}
		$(".container").animate({top:-num*Dom.clientHeight+"px"},500,function(){
				addClassName(num)
		})
	}
	function addClassName(num){
		switch(num){
			case 0:
					$(".container")[0].className="container"
					$(".container").addClass("hd1")
			break;
			case 1:
					$(".container")[0].className="container"
					$(".container").addClass("hd2")
			break;
			case 2:
					$(".container")[0].className="container"
					$(".container").addClass("hd3")

			break;
			case 3:
					$(".container")[0].className="container";
					$(".container").addClass("hd4")
			break;
			case 4:
					$(".container")[0].className="container"
					$(".container").addClass("hd5")

			break;
			case 5:
					$(".container")[0].className="container"
					$(".container").addClass("hd6")
			break;
			case 6:
					$(".container")[0].className="container"
					$(".container").addClass("hd7")
			break;
			case 7:
					$(".container")[0].className="container"
					$(".container").addClass("hd8")
			break;
			case 8:
					$(".container")[0].className="container"
					$(".container").addClass("hd9")
			break;

		}
	}
	$(".kong").click(function(){

		$(".eight").addClass("eight-second").find(".lightOff-wrap").hide()

	})
	var nll=0
	$(".musicBtn").click(function(){
		nll++
		if(nll>=3){
			nll=1
		}
		if(nll==1){
			$(".musicBtn").find("img").attr({"src":musicBtnOff})
			$("audio")[0].pause()
		}
		if(nll==2){
			$(".musicBtn").find("img").attr({"src":musicBtn})

			$("audio")[0].play()
		}
	})


}
