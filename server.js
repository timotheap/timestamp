var express = require('express');
var app = express();
var moment = require('moment');


var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/:qs', function (req, res) {
var querySearch = req.params.qs;

if(querySearch.length === 10 && querySearch.match(/^[0-9]+$/) != null){
var time = Number(querySearch);
console.log(moment.unix(time).format("YYYY-MM-DD"));
}else{
    var year = querySearch.slice(querySearch.indexOf(",")+ 1);
    console.log(year);
    var month = querySearch.slice(querySearch.indexOf( /[a-zA-Z]/));
    console.log(month);

}
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
