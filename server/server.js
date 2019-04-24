// Externals
const srv = require('./options');
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const port = srv.conf.port;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.get('/index', async (req, res) => {
	let rss = req.query.url;
	res.json({"err": `hehehehehe`});
});


function getRSS(url){
	return new Promise((res, rej) => {
		request({
			url: url,
			json: true,
			headers: {
				'User-Agent': 'Kjeragbolten'
			}
		},
		function(error, resp, body){
			if(!error && resp.statusCode === 200){
				res(resp.body);
			} else {
				rej(`Unable to resolve url: ${url}, please check if the url is correct`);
			}
		});
	});
}

app.listen(port, () => {
    console.log('info', `c8h11no2 up on: ${port}`);
});