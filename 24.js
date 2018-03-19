//Markdown文件转换
const fs = require('fs');
const path = require('path');
const marked = require('marked');

//接收需要转换的文件路径
const target = path.join(__dirname,process.argv[2] || './model/3.txt');
//监视文件的变化{interval:200},
fs.watchFile(target,(curr,prev)=>{
  //判断文件到底有没有变化 (判断修改时间)
  if(curr.mtime == prev.mtime){
      //文件没变
      return false;
  }
  //读取文件 转换为新的html
  fs.readFile(target,'utf8',(err,con)=>{
     if(err){
         throw err;
     }
     var html = marked(con);
     htmlcon = template.replace('{{{con}}}',html);
     //path.extname(target)获取文件扩展名
     fs.writeFile(target.replace('.txt','.html'),htmlcon,'utf8');
  });
});

var template = `
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
 </head>
 <body>
  {{{content}}}
 </body>
</html>
`;