$(function(){
	var qifu_bg_btn=$('.qifu_bg ul li');
	var write_fu_box=$('.write_fu_content .write_fu_box');
	qifu_bg_btn.click(function(){
		var index=$(this).index();
		qifu_bg_btn.removeClass('active').eq(index).addClass('active')
		write_fu_box.css("display","none").eq(index).css("display","block");
		 resizeCanvas();
	})
	
	var canvas=$('.canvas canvas');
	touch.on($('.upbtm'),'touchstart',function(){
		var martop=canvas.css('marginTop');
    	var log=parseInt(martop);
		log=log-1;

	})
	touch.on($('.leftbtm'),'touchstart',function(){
		var marleft=canvas.css('marginLeft');
    	var log=parseInt(marleft)
		log=log-1;
		canvas.css('marginLeft',log+'px');

	})
	touch.on($('.downbtm'),'touchstart',function(){
		var marbottom=canvas.css('marginTop');
  		var log=parseInt(marbottom);
  		log=log+1;	

	})
	touch.on($('.rightbtm'),'touchstart',function(){
		var marright=canvas.css('marginLeft');	
    	var log=parseInt(marright);
		log=log+1;
		canvas.css('marginLeft',log+'px');
	})
	/*var timeOutEvent=0,cardId;
　　$('.rightbtm').on({
　　touchstart: function(e){
　　　　var that = this;
　　　　timeOutEvent = setTimeout(function () {
　　　　　　//长按触发事件
　　　　　　timeOutEvent = 0;
　　　　var marright=canvas.css('marginLeft');	
    	var log=parseInt(marright);
		log=log+1;
		canvas.css('marginLeft',log+'px');
　　　　},800);
　　　　// e.preventDefault();
　　},
　　touchmove: function(){
　　　　clearTimeout(timeOutEvent);
　　　　timeOutEvent = 0;
　　},
　　touchend: function(){
　　　　clearTimeout(timeOutEvent);
　　　　// return false;
　　}
})
	$('.upbtm').on({
　　touchstart: function(e){
　　　　var that = this;
　　　　timeOutEvent = setTimeout(function () {
　　　　　　//长按触发事件
　　　　　　timeOutEvent = 0;
　　　　var martop=canvas.css('marginTop');	
     	var log=parseInt(martop);
		log=log-1;
		canvas.css('marginTop',log+'px')
　　　　},800);
　　　　// e.preventDefault();
　　},
　　touchmove: function(){
　　　　clearTimeout(timeOutEvent);
　　　　timeOutEvent = 0;
　　},
　　touchend: function(){
　　　　clearTimeout(timeOutEvent);
　　　　// return false;
　　}
})
	$('.leftbtm').on({
　　touchstart: function(e){
　　　　var that = this;
　　　　timeOutEvent = setTimeout(function () {
　　　　　　//长按触发事件
　　　　　　timeOutEvent = 0;
　　　　var marleft=canvas.css('marginLeft');
    	var log=parseInt(marleft)
		log=log-1;
		canvas.css('marginLeft',log+'px')
　　　　},800);
　　　　// e.preventDefault();
　　},
　　touchmove: function(){
　　　　clearTimeout(timeOutEvent);
　　　　timeOutEvent = 0;
　　},
　　touchend: function(){
　　　　clearTimeout(timeOutEvent);
　　　　// return false;
　　}
})
	$('.downbtm').on({
　　touchstart: function(e){
　　　　var that = this;
　　　　timeOutEvent = setTimeout(function () {
　　　　　　//长按触发事件
　　　　　　timeOutEvent = 0;
　　　　var marbottom=canvas.css('marginTop');
  		var log=parseInt(marbottom);
  		log=log+1;	
		canvas.css('marginTop',log+'px')
　　　　},800);
　　　　// e.preventDefault();
　　},
　　touchmove: function(){
　　　　clearTimeout(timeOutEvent);
　　　　timeOutEvent = 0;
　　},
　　touchend: function(){
　　　　clearTimeout(timeOutEvent);
　　　　// return false;
　　}
})*/

})