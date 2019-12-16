// rotas
module.exports = function(app) {
	var controller = app.controllers.produto;
	var control = app.controllers.cidade;


	app.get('/produto', controller.contatos);
	app.get('/produto/:id', controller.retorna_contato);
	app.post('/produto', controller.novo_salva);
	app.put('/produto/:id', controller.atualiza);
	app.delete('/produto/:id', controller.deleta);

	app.get('/cidade', control.cidades);
	app.get('/cidade/:id', control.retorna);
	app.post('/cidade', control.novo_salva);
	app.put('/cidade/:id', control.atualiza);
	app.delete('/cidade/:id', control.deleta);
}