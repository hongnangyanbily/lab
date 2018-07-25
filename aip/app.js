var express = require('express')
var app = express()
var c=0 
app.get('/', function (req, res) {

	c++
	res.send('hi, you have visited this page '+c+' times')
})
 
app.listen(3000)
