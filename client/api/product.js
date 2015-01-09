var DB = require('../lib/db.js');
var db = DB();
var Midware = require('../lib/midware')
var midware = Midware();

//var _ = require("../node_modules/underscore/underscore-min");

module.exports = function(app) {
	app.get('/api/products', function(req, res) {
		db.find('product',{},{},{},10, function(err, docs) {
			if (!err) {
				return res.send(midware.filterId(docs));
			} else {
				return res.send(500, { message : err });
			}
		});
	});
	
	app.post('/api/products', function(req, res){
		db.save('product', req.body, function(err,doc){
			if (!err) {
				return res.send(doc);
			} else {
				return res.send(500, { message : err });
			}
		});
		
	});
	
	app.delete('/api/products/:id', function(req, res){
		var id = req.params.id;
		
		db.remove('product', {'_id': db.getId(id)}, function(err, doc){
			if (!err) {
				res.json(true);
			} else {
				console.log(err);
				res.json(false);
			}
		});
	});
};
