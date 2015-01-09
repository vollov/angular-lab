var Mongojs = require('mongojs');
var Config = require('./config')

module.exports = function(serverName, port, dbName){
	
	if(serverName==null){
		serverName = Config.dbHost;
	}
	
	if(port==null){
		port = Config.dbPort; 
	}
	
	if(dbName==null){
		dbName = Config.dbName;
	}
	
	var db = Mongojs('mongodb://'+ serverName + ':' + port + '/' + dbName);
	
	return {
	    find : function(collection, query, projection, sort, limit, callback) {
//	    	projection = (typeof projection === "undefined") ? {} : projection;
	    	db.collection(collection).find(query, projection).sort(sort).limit(limit).toArray(callback);
	        //console.log('find db=> ' + db + ' , coll=> ' + collection);
	    }
	};

}
