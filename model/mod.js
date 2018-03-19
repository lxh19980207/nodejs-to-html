// import { connect } from 'net';

//获当前脚本所在路径
// console.log(__dirname);
// //文件路径
// console.log(__filename);

const fs = require('fs');



fs.readFile(__dirname+'/../2.txt',(error,content)=>{
    
    console.log(content);
});