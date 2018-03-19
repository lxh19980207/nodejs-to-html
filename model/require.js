//自己写一个require函数
'use strict';
function $require(id){
    //1、先找到文件(如果文件不存在 报错)Cannot find module
    //2、读取文件内容  内容是js代码 
    const fs = require('fs');
    const path = require('path');
    //要加载的js文件的完整路径
    const filename = path.join(__dirname,id);
    $require.cache = $require.cache || {};
    if($require.cache[filename]){

        return $require.cache[filename].exports;
    }
   //没有缓存 第一次
    const dirname = path.dirname(filename);
    let code = fs.readFileSync(filename,'utf8');
    //3、执行代码 所要执行的代码 需要营造一个私有空间
    let module = {id:filename,exports:{}};
    let exports = module.exports;
    code = `
    (function($require,module,exports,__dirname,__filename){
         ${code} 
        })($require,module,exports,dirname,filename);`;
   eval(code);
//缓存起来
   $require.cache[filename]=module;
    //4、返回值
    return module.exports;
}


// var m4 = $require('./model/ttt.js');

// m4.say('hello');

var m4 = $require('./index.js');

// m4.say('hello');
m4.a.say();
m4.b.say();

// require('./module/1.js')


