var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var choice = prompt("Type 'all' to see all, 'one' to see one, 'add' to add, or 'delete' to delete, then press enter: ");

	if (choice == "all") {
		collection.find().toArray(function(err, doc) {
			console.log(doc);
		});
	} else if (choice == "one") {
		var which = prompt("Enter the name of the restaurant and press enter: ");
		collection.find({"name": which}).toArray(function(err, doc) {
			console.log(doc);
		});
	} else if (choice == "add") {
		var newName = prompt("Type the name and press enter: ");
		var newAddress = prompt("Type the address and press enter: ");
		var newYelp = prompt("Type the yelp url and press enter: ");
		collection.insert(
			{"name": newName,
			"address": newAddress,
			"yelp": newYelp});
		}
	}
);


//     		console.log("Aw, you don't want to see the restaurants?");
