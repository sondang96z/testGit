class Cat {}
Cat.prototype.run = function(params) {
	console.log('running');
};

Cat.prototype.eat = function(param) {
	console.log('Eating');
	console.log('Eating done');
};

Cat.prototype.sleep = function(param) {
	console.log('Sleep');
	console.log('Sleep done');
};
