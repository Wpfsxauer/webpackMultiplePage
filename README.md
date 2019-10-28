* **前言**
     
       性能优化是前端工程领域不可缺少的一部分，追求变态级优化，是我们前端人员的不懈追求。下面是我关于前端wbpack多页
       面配置的一些理解，希望对大家的开发有所帮助。
#### 一、在config/index配置configuration对象。
       configuration:[
        'sipevaluate',
        'sipapprove'
      ],//在这里我们可以配置需要打包的界面，非常灵活。


#### 二、在utils里面我们定义入口对象函数。
        function getMultiEntry (globPath) {
        
          let entries = {}, tmp = [];
        
          glob.sync(globPath).forEach(entry=> {
        
            config.configuration.forEach(value=>{
        
              tmp = entry.split('/').splice(-4);
        
              if( tmp[2] === value) entries[tmp[2]] = entry;
        
            })
        
          });
        
          return entries;
        }   
           这里我们使用了一个核心库 **glob**，它的作用是解析我们传入的路径，然后输出文件路径。
           比如：我们输入的 路径是 "./src/modules/**/**/*.js".
           输出结果是：./src/modules/sipapprove/sipapprove.js。


#### 三、在utils里面我们定义输出html模板函数。
     const page = getMultiEntry('./src/modules/**/*.html')

     exports.page = function (plugins,pages = page) {
    
      for (let pathname in pages) {
        const conf = {
          filename: pathname + '.html',
          template: pages[pathname],
          chunks: ['manifest','vendor',pathname],
          inject: true,
          hash:true
        };
    
        plugins.push(new HtmlWebpackPlugin(conf));
      }
    }
#### 四、我们配置webpack.dev.conf.js文件。
     utils.page(module.exports.plugins);
#### 五、我们配置webpack.prod.conf.js文件。
     utils.page(webpackConfig.plugins);
#### github地址：https://github.com/Wpfsxauer/webpackMultiplePage.git
