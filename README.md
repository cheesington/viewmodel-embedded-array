# viewmodel-embedded-array

I've been trying to figure out how to create a form that will gather data into a document that contains an embedded array.  The fact that a viewmodel can't bind to things inside an ```{{#each }}``` block means that sub-viewmodels need to be used, and I can populate those with data from the document; what I can't figure out how to do is to get the data back out so as to populate the document with any changes that have been made.  

Here's the example I'm working with.  I have Books that look like this:
```javascript
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
```

I have a form that will allow me to edit the contents of each field:
```handlebars
<template name="Books">
	{{#each books}}
		{{> Book}}
	{{/each}}
</template>

<template name="Book">
	<div>
		Name: <input type="text" data-bind="value: name" /> <span data-bind="text: name" ></span>
		<ul>
		{{#each authors}}
			<li>{{> Author}}</li>
		{{/each}}
	</ul>
		<button data-bind="click: save" >Save</button>
	</div>
</template>

<template name="Author">
	<div>
		First Name: <input type="text" data-bind="value: firstName" />
		<span data-bind="text: firstName" > </span>
	</div>
	<div>
		Last Name: <input type="text" data-bind="value: lastName" />
		<span  data-bind="text: lastName"></span>
	</div>
</template>
```

And the associated viewmodel code:
```javascript
Template.Books.helpers({
	books: function() {
		return Books.find();
	},
});

// data in this case is a Book document 
Template.Book.viewmodel(function(data) { 
	return {
		autorun: function() {
			this.extend(Books.findOne(data._id));
		},
		save: function() {
		  // somehow extract the data from the viewmodel for saving
			console.log(this.toJS()); 
		},
	};
},
['authors']);

Template.Author.viewmodel(function(data) {
	return data;
});
```

What should go in the save: function to get the data out?  Or how should the system be structured so as to make getting that data out easy and efficient?  
