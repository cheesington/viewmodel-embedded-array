
// Publish

Meteor.startup(function() {

	if (Books.find().count() === 0) { 

		Books.insert({
			name: "Rocking Out Vol 1",
			authors: [{
				firstName: "Alice",
				lastName: "Cooper",
			},
			{
				firstName: "Elton",
				lastName: "John",
			}]
		});

		Books.insert({
			name: "Rocking Out Vol 2",
			authors: [{
				firstName: "Jack",
				lastName: "Black",
			},
			{
				firstName: "Phil",
				lastName: "Collins",
			}]
		});
	}
});

