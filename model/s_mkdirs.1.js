//创建层级目录
const fs = require('fs');
const path = require('path');
function mkdir(pathname,callback){
    //拿到调用我的对象
    var root = path.dirname(module.parent.filename);
    //判断传入的是否是一个绝对路径
    pathname=path.isAbsolute(pathname)?pathname:path.join(root,pathname);
    //获取要创建的部分
    var relativepath = path.relative(root,pathname);
    //分割 如'foo\\bar\\baz'.split(path.sep)
    // returns ['foo', 'bar', 'baz']
    var floders = relativepath.split(path.sep);
    try {
        var pre = '';
        floders.forEach(fl =>{
            try {
                //判断文件是否存在 不存在则报错
                fs.statSync(path.join(root,pre,fl));
            } catch (error) {
                //当文件不存在时 就进入这里创建文件
                fs.mkdirSync(path.join(root,pre,fl));
            }
            pre = path.join(pre,fl);
        });
        callback && callback(null);
    } catch (error) {
        callback && callback(error);
    }
}

module.exports = mkdir;