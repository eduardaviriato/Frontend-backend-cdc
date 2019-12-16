// modelo
console.log('carregando models/produto.js');

var mongoose = require('mongoose');

module.exports = function() {
	console.log('definição de modelo Produto.')
	var schema = mongoose.Schema({
	    nome: { 
	      type: String, 
	      required: true
	    }, 
	    email: {
	      type: String, 
	      required: true, 
	      index: {
	        unique: true
		  }
	    }
	}); 
	return mongoose.model('Produto', schema);

};
