var DB = require('../lib/db.js');
var db = DB();

module.exports = function(app) {
	app.get('/api/products', function(req, res) {
		db.find('product',{},{},{},10, function(err, docs) {
			if (!err) {
				return res.send(docs);
			} else {
				return console.log(err);
			}
		});
	});
};
