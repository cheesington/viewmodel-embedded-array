
Template.Books.helpers({
	books: function() {
		return Books.find();
	},
});

Template.Book.viewmodel(function(data) { 
	return {
		autorun: function() {
			this.extend(Books.findOne(data._id));
		},
		save: function() {
			console.log("this.toJS():");
			console.log(this.toJS()); 
		},
	};
},
['authors']);

Template.Author.viewmodel(function(data) {
	return data;
});
