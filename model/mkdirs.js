//创建层级目
const fs = require('fs');
const path = require('path');

//创建文件 定义模块成员 导出模块模块成员 载入模块 使用模块
// function mkdirs(pathname,callback){
//     //判断传入的是否是一个绝对路径
//     pathname = path.isAbsolute(pathname)?pathname:path.join(__dirname,pathname);
//     //获取要创建的部分
//     // pathname = pathname.replace(__dirname,'');
//     var relativepath = path.relative(__dirname,pathname);
//     //  console.log(relativepath);
//     var floders = relativepath.split(path.sep);
//     try {
//         var pre = '';
//         floders.forEach(floder =>{
//             fs.mkdirSync(path.join(__dirname,pre,floder));   
//             pre=path.join(pre,floder);
//         });
//           callback && callback(null);
//     } catch (error) {
//         callback && callback(error);
//     }
// }





function mkdirs(pathname,callback){
    //拿调用我的对像
    var root = path.dirname(module.parent.filename);
    // console.log(root);
    
    //判断传入的是否是一个绝对路径
    pathname = path.isAbsolute(pathname)?pathname:path.join(root,pathname);
    //获取要创建的部分
    // pathname = pathname.replace(__dirname,'');
    var relativepath = path.relative(root,pathname);
    //  console.log(relativepath);
    var floders = relativepath.split(path.sep);
    try {
        var pre = '';
        floders.forEach(floder =>{
           try {
               //判断文件是否存在  不存在则报错
             fs.statSync(path.join(root,pre,floder))  
           } catch (error) {
               //当文件不存在时  进入这里创建文件
            fs.mkdirSync(path.join(root,pre,floder));
           }
            pre=path.join(pre,floder);
        });
          callback && callback(null);
    } catch (error) {
        callback && callback(error);
    }
}



module.exports = mkdirs;