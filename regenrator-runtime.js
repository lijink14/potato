require("regenerator-runtime/runtime");
var request = require('request');
var fs = require('fs');
function f_read(){
fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var testdata = data;
    main(testdata);
    });
};
f_read();
function _asyncToGenerator(fn) {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
    function step(key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;}
            catch (error) {reject(error);return;}
                if (info.done) {
                resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });}}
            return step("next");});
}
 function main (event) {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(err, data){
    var sample_data, contextsent,array;
    return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next)
                {
                    case 0:
                        console.log("----------------------------------------case zero is triggered");
                        console.log("sample data\n"+(event.split('{')[2]));
                        async function response(){
                        sample_data = await request.post({url:'api_url'}, function(err,httpResponse){ 
                        var messagebody = httpResponse.body; 
                        console.log(messagebody);
                        return messagebody;    })}
                        response();
                        _context.next = 1;
                        return;
                    case 1:
                        console.log("----------------------------------------case one is triggered");
                        console.log("Data recieved form api call- case 1" + " " + sample_data);
                        console.log("sample data\n"+(event.split('{')[3]));
                        _context.next =2;
                        array =[];
                        array.push("returned data from case 2");
                        return array;
                    case 2:
                        case "end" :
                            contextsent = _context.sent;
                            console.log("----------------------------------------case end is triggerd");
                            console.log("sample data\n"+(event.split('{')[4]));
                            console.log("array data from case 2" + " " +array[0])
                            return _context.stop();
                }}}, _callee, this,[[2,3]]);
        }));
};