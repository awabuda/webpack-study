var plane = {
  frequency : null,
  ele : $('.float'),
  width : null,
  height : null,
  clientX : $('body').width()/2,//鼠标的距离坐标Y；
  clientY : $('body').height()-$('.float').height()/2,//鼠标的坐标X
  left : null,//飞机的左定位
  bottom : null,//飞机的又定位；
  built:{},
  init : function (cb,frequency) {
    this.cb = cb;
    this.resizeWidth();

    this.width = this.ele.width();
    this.height = this.ele.height();
    this.planePosition();
    this.move();
  },
  resizeWidth : function () {
    if ($('body').width() <= 600){
      $('.wrap').css('width','100%');
    }
    //$('.float').remove();
  },
  planePosition : function () {
      //左边距；
      this.left = this.clientX - this.width/2;
      this.left = this.left <= $('.wrap').offset().left ? $('.wrap').offset().left: this.left;
      this.left = this.left >= $('.wrap').width()+$('.wrap').offset().left-$('.float').width()?  $('.wrap').width()+$('.wrap').offset().left-$('.float').width() : this.left;
      //下边界；
      this.bottom = $('body').height()- this.clientY - this.height/2;
      this.bottom = this.bottom <=0 ? 0 : this.bottom;
      this.bottom = this.bottom > $('body').height() - this.height*2 ?  this.bottom > $('body').height() - this.height*2 : this.bottom;

      this.ele.css({"left":this.left,"bottom":this.bottom})
  },
  move : function () {
    var that = this;
    $('body').off('mousedown').on('mousemove',function (e) {
      var e = e || window.event;
      that.clientY = e.clientY;
      that.clientX = e.clientX;
      that.planePosition();

    })
    $('body').on('touchstart touchmove',function (e) {
      var e = e.originalEvent;
      that.clientX = e.targetTouches[0].clientX;
      that.clientY = e.targetTouches[0].clientY;
      that.planePosition();

    })
    $('body').on('touchend',function (e) {
      var e = e.originalEvent;
      that.clientX = e.changedTouches[0].clientX;
      that.clientY = e.changedTouches[0].clientY;
      that.planePosition();
    })
  },
  gameover: function (){
    alert('gameover')
  }

}
module.exports = plane;
