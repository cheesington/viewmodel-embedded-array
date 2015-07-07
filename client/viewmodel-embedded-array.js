
Template.Books.helpers({
	books: function() {
		return Books.find();
	},
});

Template.Book.viewmodel(function(data) { 
	return "book" + data._id;
},
function(data) { 
	return {
		book: function() {
			return Books.findOne(data._id);
		},
	};
},
{
	nameVal: '',
	name: function(name) { 
		if (name) {
			this.nameVal(name === this.book().name ? '' : name);
		} else {
			return this.nameVal() || this.book().name;
		}
	},
	submit: function() {
		Books.update(this.book()._id, {$set: this.book()});
	},
	authors: function() { 
		return book().authors;
	},
},
[]);


Template.Author.viewmodel(function(data) {
	return data;
});
