
// Publish

Meteor.startup(function() {

	if (Books.find().count() === 0) { 
		var book = {
			name: "Rocking Out Vol 1",
			authors: [{
				firstName: "Svon",
				lastName: "Jovi",
			},
			{
				firstName: "Ben",
				lastName: "Jovi",
			}]
		};

		Books.insert(book);
		book = {
			name: "Rocking Out Vol 2",
			authors: [{
				firstName: "Pete",
				lastName: "Seeeeeeeeger",
			},
			{
				firstName: "Phil",
				lastName: "Collins",
			}]
		};

		Books.insert(book);
	}
});

// Security

Books.allow({
	insert: function (userId, doc) {
		return false;
	},

	update: function (userId, doc, fieldNames, modifier) {
		return false;
	},

	remove: function (userId, doc) {
		return false;
	}
});

Books.deny({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fieldNames, modifier) {
		return true;
	},

	remove: function (userId, doc) {
		return true;
	}
});
