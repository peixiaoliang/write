$(function(){
	var qifu_bg_btn=$('.qifu_bg ul li');
	var write_fu_box=$('.write_fu_content .write_fu_box');
	qifu_bg_btn.click(function(){
		var index=$(this).index();
		qifu_bg_btn.removeClass('active').eq(index).addClass('active')
		write_fu_box.css("display","none").eq(index).css("display","block");
	})
	
	var canvas=$('.canvas canvas');
	touch.on($('.upbtm'),'touchstart',function(){
		var martop=canvas.css('marginTop');
    	var log=parseInt(martop);
		log=log-1;
		canvas.css('marginTop',log+'px')

	})
	touch.on($('.leftbtm'),'touchstart',function(){
		var marleft=canvas.css('marginLeft');
    	var log=parseInt(marleft)
		log=log-1;
		canvas.css('marginLeft',log+'px')

	})
	touch.on($('.downbtm'),'touchstart',function(){
		var marbottom=canvas.css('marginTop');
  		var log=parseInt(marbottom);
  		log=log+1;	
		canvas.css('marginTop',log+'px')

	})
	touch.on($('.rightbtm'),'touchstart',function(){
		var marright=canvas.css('marginLeft');	
    	var log=parseInt(marright);
		log=log+1;
		canvas.css('marginLeft',log+'px');
	})
	var timeOutEvent=0,cardId;
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
})
	///window.open(document.location, '窗体名称', 'fullscreen');//这句打开并去掉所有栏，
//连系统任务栏都盖住
//window.open(document.location, '窗体名称', '');//只是打开一个新窗口   
//window.open(document.location,'窗体名称','fullscreen,scrollbars');//带滚动条   
window.open(document.location,'maxwindow','toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,resizable=no,status=no'); 
//最简单是这样window.open(document.location,"_blank","a");
//这句可以打开新的窗口并且可以调节各个栏的可见性
//toolbar工具栏,location地址栏,directories链接栏,menubar菜单栏,scrollbars滚动条,resizable可否改变大小,status状态栏
opener=null;//没有这句，关闭时有提示,ie5.5以上有效

})