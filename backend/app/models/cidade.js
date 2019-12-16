// modelo
console.log('carregando models/cidade.js');

var mongoose = require('mongoose');

module.exports = function () {
	console.log('definição de modelo Cidade.')
	var schema = mongoose.Schema({
		nome: {
			type: String,
			required: true
		}
	});
	return mongoose.model('Cidade', schema);

};
