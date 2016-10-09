$(function(){
	$('.header-inner .search').on("click",function(){
		$('.header').addClass('header-donghua')
	})
	$('.header-inner .closes').on("click",function(){
		$('.header').removeClass('header-donghua')
	})
	$('.footer .footer-top').on("click",".add-fir",function(){
		$(this).parent().toggleClass('footer-donghua')
		$(this).siblings().addClass('ani fade-in-down')
	})
	$('.header-phone .phone').on('click',function(){
		$('.header').toggleClass('header-close')
		$(this).parent().parent().next().children().addClass('ani fade-in-down')
	})


    var sliders=$(".gallery-slide-wrapper a");
    var dots=$(".dots div");
    var flag=false;
    moveTo=function (elm,dir) {
        flag=true;
        dots.removeClass("active");
        dots.eq(sliders.index(elm)).addClass("active");
        if(dir==="left"){
             sliders.filter(".active").removeClass("active").addClass("right").delay(1000).queue(function () {
                 flag=false;
                 $(this).removeClass("right").dequeue();
            });
            $(elm).addClass("active").addClass("left");
            sliders.get(0).offsetWidth;
            $(elm).removeClass("left")

        }else if(dir==="right"){
            sliders.filter(".active").removeClass("active").addClass("leave").delay(1000).queue(function () {
                flag=false;
                $(this).removeClass("leave").dequeue();
            });
            $(elm).addClass("active").addClass("enter");
            sliders.get(0).offsetWidth;
            $(elm).removeClass("enter");
        }
    }
    function right() {
        var active=sliders.filter(".active").remove("active");
        var now=active.next().length?active.next():sliders.eq(0);
        moveTo(now,"right");
    }
   function left() {
       var active=sliders.filter(".active").remove("active");
       var now=active.prev().length?active.prev():sliders.eq(-1);
       moveTo(now,"left")
   }
    dots.on("click",function () {
        if(flag){return};
        var e=sliders.index( $(".active") );
        var n=dots.index($(this));
        
        $(this).addClass('dot-bg').siblings().removeClass('dot-bg');
        console.dir(e)
        console.dir(n)
//      if(e===n){return}
        if(e>n){
           moveTo(sliders.eq(n),"left")
        }else if(e<n){
            moveTo(sliders.eq(n),"right")
        }

    })
//  t=setInterval(right,1000)
    $(".carousel").on("mouseenter",function () {
        clearInterval(t);
    })
    $(".carousel").on("mouseleave",function () {
//      t=setInterval(right,3000)
    })
    $(".btn-left").on("click",function () {
        left();
    })
    $(".btn-right").on("click",function () {
        right();
    })
    
    //	slides=$('.gallery-slide-wrapper a');
//	dots=$('dots div');
//	var index=0;
//	var next;
//	
//	move=function(){
//		index++;
//		if(index==slides.length){
//			index=0;
//		}
//		slides.eq(index-1).addClass('leave')
////		slides.eq(index-1).get(0).offsetWidth;
//		slides.eq(index-1).delay(1000).queue(function(){
//			$(this).removeClass('leave').dequeue();
//		});
//		
//		slides.eq(index).addClass('active').queue(function(){
//			slides.eq(index-1).removeClass('active')
//			.dequeue()
//		})
//		
//		slides.eq(index).addClass('enter');
//		slides.eq(index).get(0).offsetWidth;
//		slides.eq(index).removeClass('enter');
//		
////		slides.eq(index).addClass('active').siblings().removeClass('active')
////		console.dir(slides.eq(next))
//		
//		
//	
//	}
//	
//	moveR=function(){
//		move();
//	}
//	moveL=function(){
//		move();
//	}


})
