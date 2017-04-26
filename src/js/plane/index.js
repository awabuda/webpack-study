
(function(){
	require('../../css/plane.css');
	var bg = require('./bg.js');
	var plane = require('./plane.js');
	var built = require('./built.js');
	var enemyPlanes = require('./enemyPlanes.js');

	bg.setInter();//整体背景；
	plane.init();
	built.init(plane,100,enemyPlanes);
	enemyPlanes.init(1000,plane);



	$(window).resize(function () {
		bg.setInter();//整体背景；
		plane.init();
		built.init(plane,100,enemyPlanes);
		enemyPlanes.init();
	})
})()
