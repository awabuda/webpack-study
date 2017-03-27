var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//样式处理
var	autoprefixer = require('autoprefixer');	//样式自动兼容拓写
var CleanPlugin = require('clean-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');//自动打开浏览器插件
	
var path = require('path');
module.exports = {
  	entry: {
  		mainindex:'./src/js/index.js' //编译入口
  	},
	output: {
	    path: path.resolve(__dirname,'dist/'),//编译后的路径
	    filename: '[name].js',//编译后的名字
	    publicPath:path.resolve(__dirname,'dist/')//发布路径
	},
	module: {//处理是需要加载的依赖
	    loaders: [
	     {test:/\.scss$/, loader: 'css-loader!sass-loader'},
	     {test: /\.css$/, loader:  ExtractTextPlugin.extract({loader: 'css-loader!postcss-loader?importLoaders=1'}) },
	     
	   	 { test: /\.(png|jpg)$/, loader: 'url-loader?limit=25000&name=/img/[hash:8].[name].[ext]'}
	    ]
	},
	plugins:[//webpack强大的插件
		new CleanPlugin('./dist/**/'),
	  	new webpack.BannerPlugin("this is build by cpt"),//在脚本中拆入一些注释
	  	new webpack.ProvidePlugin({    //加载jq将jq作为全局
            $: 'jquery'
        }),        
        new webpack.LoaderOptionsPlugin({ //这种写法是webapck2的方法；样式兼容自动添加；
		    debug: false,
		    options: {
		        postcss: [
		            autoprefixer()//需要引进postcss与autoprefixer;
		        ],
	   		 },
			}),
        new ExtractTextPlugin({//这一步终于把css提取出来了；如果不提取可以把这个插件干掉；然后上面的css 模块可以把style-loader 加上；
		      filename: "./css/[name].css",
		      allChunks: true,
		    })
        
	],

	watch: true,//webpack下的监听变化；
	devServer: {//
	    contentBase: "./",//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
  	}
}



////////////////////////////////////////////////////////////////////  
//                            _ooOoo_                             //  
//                           o8888888o                            //      
//                           88" . "88                            //      
//                           (| -_- |)                            //      
//                           O\  =  /O                            //  
//                        ____/`---'\____                         //                          
//                      .'  \\|     |//  `.                       //  
//                     /  \\|||  :  |||//  \                      //      
//                    /  _||||| -:- |||||-  \                     //  
//                    |   | \\\  -  /// |   |                     //  
//                    | \_|  ''\---/''  |   |                     //          
//                    \  .-\__  `-`  ___/-. /                     //          
//                  ___`. .'  /--.--\  `. . ___                   //      
//                ."" '<  `.___\_<|>_/___.'  >'"".                //  
//              | | :  `- \`.;`\ _ /`;.`/ - ` : | |               //      
//              \  \ `-.   \_ __\ /__ _/   .-` /  /               //  
//        ========`-.____`-.___\_____/___.-`____.-'========       //      
//                             `=---='                            //  
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^      //  
//         佛祖保佑       永无BUG        永不修改                    //  
//////////////////////////////////////////////////////////////////// 