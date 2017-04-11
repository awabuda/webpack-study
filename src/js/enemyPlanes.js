function enemyPlanes () {
  this.timer = null;
  this.obj = {};
  this.speed = null;
  this.enemy = {};
}
enemyPlanes.prototype = {
 limitLeft:$('.wrap').offset().left,//敌机出现的左边界限制
 limitRight:$('.wrap').width() + $('.wrap').offset().left,//敌机出现的右边界限制
 minWidth:59,
 minHeight:36,
 middleHeight:92,
 maxHeight:256,
 middleWidth:70,
 maxWidth:165,
 init : function (s) {
   this.s = s || 1000;
   this.destoryAll();
   this.settime();

 },
 settime :function () {
   var that = this;
   that.timer = setInterval(function(){
     that.appendDom()
   },that.s)
 },
 appendDom : function (){
   var n =[1,2,1,2,1,2,1,2,1,2,3,2,3,1,2,2,2,1,2,2];
   var that = this, distanceX,distanceY,id = this.randomNum(),hp = n[parseInt((Math.random()*20))];//敌机血量；
   var left = parseInt(Math.random()*(that.limitRight - that.limitLeft)+ that.limitLeft)
   switch (hp) {
     case 1:
       distanceX = that.minWidth;
       distanceY = that.minHeight;
       break;
     case 2:
      distanceX = that.middleWidth;
      distanceY = that.middleHeight;
      break;
    case 3:
      distanceX = that.maxWidth;
      distanceY = that.maxHeight;
      break;
   }
   if ( left >  ( $('.wrap').width()+$('.wrap').offset().left -distanceX ) ) {
     left = $('.wrap').width()+$('.wrap').offset().left -distanceX;
   }
   this.enemy[id] = {};
   this.enemy[id].dom = '<div class="enemyplanes dj enemy'+hp+'" data-id="'+id+'" data-hp="'+ hp++ +'"></div>';
   this.enemy[id].hp = hp;
   $(this.enemy[id].dom).appendTo($('body')).css({"left": left,"top": -distanceY}).animate({"top":$('.wrap').height()+distanceY},5000,'linear',function(){
    [].forEach.call($('.dj'),function (item){
      if (parseInt($(item).css('top') )>= $('.wrap').height()+distanceY){
        $(item).remove();
        delete that.enemy[$(item).data('id')];
      }

    })
   })
 },
 destory : function () {

 },
 destorySpecail : function () {//这个方法是特殊炸弹效果；

 },
 destoryAll : function () {
   $('.enemyplanes').remove();
   clearInterval(this.timer)
 },
 randomNum : function () {
    var that = this;
    var n = Math.random().toString(36).substr(2);
    if(!!that.enemy[n]){
      that.randomNum();
    }else {
      return n;
    }
 }
}
var dj = new enemyPlanes();
module.exports = dj;
