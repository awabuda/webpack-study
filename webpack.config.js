var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//样式处理
var	autoprefixer = require('autoprefixer');	//样式自动兼容拓写
var CleanPlugin = require('clean-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');//自动打开浏览器插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
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
		     
		   	{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=25000&name=/img/[hash:8].[name].[ext]'},
		   	{ test: /\.js$/, loader: 'babel-loader', //此处不能用use，不知道为啥
			    exclude: /node_modules/ //需要排除的目录
			}
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
		    }),
        new HtmlWebpackPlugin({
        	template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载插件
        new webpack.NoErrorsPlugin(),//不显示错误插件
		new webpack.optimize.DedupePlugin()//查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        
	],

	watch: true,//webpack下的监听变化；
	devServer: {//貌似启动webpack-dev-server 服务;非入口文件的改变则不会被监听到，需要手动进行刷新。	
	    contentBase: "./",//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
  	}
}
//这里记录一下遇到的坑：首先，devServer其实读取的是打包之后的文件，但是这些文件是存储在内存当中（并不会显示在dist下）。然后由于使用HtmlWebpackPlugin这个插件，它可以自动帮你将打包的js插入模版html文件中，因此我们要将原文件（就是作为模版的index.html文件）中插入的main.js这行代码去掉。然后如果开启了publicPath这个选项，HtmlWebpackPlugin会插入publicPth选项的路径（'/assets/main.js'），devServer的index.html此时是无法读取到该目录下的文件。但是奇怪的是devServer此时直接没有插入该scripts。。不知道为啥。。但是为了部署的问题，cdn啥的，对开发环境和生产环境应该开启不同的publicPath，也就是说开发和生产应该使用两个不同的配置文件（包括sourcemap，devserver都不应该出现在生产的配置中）。详细可以参考https://segmentfault.com/a/1190000006151512


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