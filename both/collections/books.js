
books = new Mongo.Collection('collectionName');  

check(false, String); // remember to change collectionName above

books.attachSchema(new SimpleSchema({
	someField: {
		type: String,
		optional: true,
	},
}));

