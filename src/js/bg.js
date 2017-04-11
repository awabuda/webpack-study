function bgEvent () {
      this.positionY = 0;
      this.ele = $('.wrap');
      this.timer = 50;
      this.init();
}
bgEvent.prototype = {
  init : function () {

    this.positionY +=5;
    //console.log(this.positionY)
    this.ele.css('background-Position','0px ' + this.positionY +'px');
  },
  setInter: function (){
    var that = this;
      this.destory();
      that.time = setInterval(function(){
        that.init()
      },that.timer)
  },
  destory: function (){
    clearInterval(this.time)
  }  
}
var bg = new bgEvent();
module.exports = bg;
