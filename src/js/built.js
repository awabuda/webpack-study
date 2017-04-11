function built (){
  this.timer = null;
  this.speed = null;
  this.obj = null;
  this.scale = 0
}
var plain1_die1 = require("../img/plain1_die1.png");
var plain1_die2 = require("../img/plain1_die2.png");
var plain1_die3 = require("../img/plain1_die3.png");
var plain2_die1 = require("../img/plain2_die1.png");
var plain2_die2 = require("../img/plain2_die2.png");
var plain2_die3 = require("../img/plain2_die3.png");
var plain2_die4 = require("../img/plain2_die4.png");
var plain3_die1 = require("../img/plain3_die1.png");
var plain3_die2 = require("../img/plain3_die2.png");
var plain3_die3 = require("../img/plain3_die3.png");
var plain3_die4 = require("../img/plain3_die4.png");
var plain3_die5 = require("../img/plain3_die5.png");
var plain3_die6 = require("../img/plain3_die6.png");


built.prototype = {

  width : 6,
  height :16,
  init : function (obj,speed,enemyPlanes) {
    this.obj = obj;
    this.enemyPlanes = enemyPlanes || {};
    this.speed = speed || 300;
    this.destoryAll();
    this.settime();

  },
  settime : function () {
    var that = this;
    that.timer = setInterval(function(){
      that.appendDom();
      //that.impact();
      //that.destory();
    },that.speed)
    that.impactTime = setInterval(function () {
        that.impact();
    },10)
  },
  appendDom : function () {
    var that  = this;
    var left = that.obj.left + that.obj.width/2 - that.width/2,
        bottom = that.obj.bottom + that.obj.height,
        bottom2 = $('body').height() + that.height;
        id = that.randomNum();
        that.obj.built[id] = '<div class="built" data-id="'+id + '"></div>'
        $(that.obj.built[id]).appendTo($('body')).css({"left":left,"bottom":bottom}).animate({"bottom": $('body').height()+ that.height},2000,'linear',function(e){
          [].forEach.call($('.built'),function(item){
              if (parseInt ($(item).css('bottom')) >= bottom2){
                $(item).remove()//如果超出页面则去除
                delete that.obj.built[$(item).data('id')]//并删除随机id;
              }
          })
        })
  },
  destory : function (id) {//当子弹到头机会销毁
    var that = this;
    $(that.obj.built[id]).stop().remove();//匹配相对应的id;使其停止动画；并销毁；
    delete that.obj.built[id];
  },
  destoryAll : function (){
    clearInterval(this.timer);
    $('.built').remove();
  },
  randomNum : function (){
        var that = this;
        var n = Math.random().toString(36).substr(2);
        if (!!that.obj.built[n]){
          that.randomNum();
        }else {
          return n ;
        }
  },
  impact: function () {//目前只写竖向的
    var that = this;
    [].forEach.call($('.built'),function (item){
        [].forEach.call($('.dj'),function (dj){
            var minLeft = parseInt($(dj).css('left'))-$(item).width();
            var maxLeft = parseInt($(dj).css('left'))+$(dj).width();
            //console.log("竖向"+(parseInt($(item).css('bottom')) + $('item').height() +parseInt($(dj).css('top'))+ $(dj).height() >=$('body').height()));

          if ((parseInt($(item).css('bottom')) + $('item').height() +parseInt($(dj).css('top'))+ $(dj).height() >=$('body').height()) && parseInt($(item).css('left'))>= minLeft && parseInt($(item).css('left'))<= maxLeft){

            $(item).remove();
            //delete that.obj.built[$(item).data('id')]
            var hp = $(dj).data('hp');
            var enemyId = $(dj).data("id")
            that.enemyPlanes.enemy[enemyId].hp--;
            switch (hp) {
              case 1:
                  if (that.enemyPlanes.enemy[enemyId].hp == 0){
                    $(dj).css('background-image','url('+plain1_die1+')');
                  } else {
                    $(dj).css('background-image','url('+plain1_die2+')');
                  }
                break;
              case 2:
                  if ( that.enemyPlanes.enemy[enemyId].hp ==1 ){
                    $(dj).css('background-image','url('+plain2_die1+')');
                    //$(dj).css('background-image','url(../img/plain2_die2.png)');
                  } else if (that.enemyPlanes.enemy[enemyId].hp == 0){
                    $(dj).css('background-image','url('+plain2_die2+')');
                  //  $(dj).css('background-image','url(../img/plain2_die4.png)');
                } else {
                  $(dj).css('background-image','url('+plain2_die3+')');
                }
                break;
              case 3:
                  if ( that.enemyPlanes.enemy[enemyId].hp ==2 ) {
                    $(dj).css('background-image','url('+plain3_die1+')');
                  } else if (that.enemyPlanes.enemy[enemyId].hp == 1) {
                    $(dj).css('background-image','url('+plain3_die2+')');
                    //$(dj).css('background-image','url('+plain3_die4+')');
                  } else if(that.enemyPlanes.enemy[enemyId].hp == 0) {
                    $(dj).css('background-image','url('+plain3_die3+')');
                    //$(dj).css('background-image','url('+plain3_die6+')');
                  } else {
                    $(dj).css('background-image','url('+plain3_die5+')');

                  }
                break;
              default:

            }
            if (that.enemyPlanes.enemy[enemyId].hp <= -1){
              $(dj).remove();
            }
            that.scale++;
            $('.scale').html(that.scale)
          }

        })
    })
  }

}
var bullt = new built();
module.exports = bullt;
