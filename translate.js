const request = require("request");
const cheerio = require("cheerio");
const readline = require('readline');

const ApiKey = "trnsl.1.1.20180624T174523Z.f12f6e712a379668.53c39d137bd6ef34c395e05fbe0aec8942048237";

const url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + ApiKey;

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', (command) => {
	switch(command) {
		case 'exit': 
			rl.close();
			break;
		default: 
			request(url + "&lang=en-ru&format=plain&text=" + command, (err, response, body) => {
				if (!err) {
					const data = JSON.parse(body);
					console.log(data.text[0]);
				}
			});
	}
});





