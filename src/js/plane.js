var plane = {
  frequency:300,
  ele:$('.float'),
  width:null,
  height:null,
  clientY:null,
  clientX:null,
  init: function (cb){
    this.cb = cb;



    this.fire();
    this.move();
  },
  planePosition: function (){

  },
  move: function (){
    // $('body').on('touchmove',function(){
    //   alert(1)
    // })
    var that = this;
    $('body').on('mousemove touchmove',function (e){
      

    })
  },
  fire: function (){//发射子弹；
    var that = this;
    setInterval(function () {
      if (that.cb){
        that.cb();
      }
    },that.frequency)
  }

}
module.exports = plane;
