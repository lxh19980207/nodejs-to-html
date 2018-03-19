//CMD的规范
// define(function (require,module,exports) {
    //在nodejs中实现的是Commonjs规范
    function convert(input){
        return parseFloat(input);
    }
    function add(a, b){
        return convert(a) + convert(b);
    }
    function jian(a, b){
        return convert(a) - convert(b);
    }
    function chen(a, b){
        return convert(a) * convert(b);
    }
    function chu(a, b){
        return convert(a) / convert(b);
    }

    // exports.add=add; 
    //ES6语法
    module.exports={add,jian,chen,chu};
// })