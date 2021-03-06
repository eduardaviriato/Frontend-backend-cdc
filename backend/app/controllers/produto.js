//const passport = require('passport');

module.exports = function (app) {

	console.log('model: ' + app);

	var Contato = app.models.produto;

	var controller = {};

	controller.novo_salva = function (req, res) {
		//verificaJWT(req, res, function () {
			console.log("Deu certo");
			var nome1 = req.body.nome;
			var email1 = req.body.email;
			var quantidade1= req.body.quantidade;
			var pessoa = new Contato({ nome: nome1, email: email1, quantidade:quantidade1 });
			console.log('adicionar: ' + pessoa);

			pessoa.save(function (err) {
				if (err) {
					console.log(err);
				}
				res.send('Product add.');
			});
		//});

	};

	controller.atualiza = function (req, res) {
		//verificaJWT(req, res, function () {
			console.log("atualiza");
			var nome1 = req.body.nome;
			var email1 = req.body.email;
			var quantidade1= req.body.quantidade;
			var pessoa = { nome: nome1, email: email1, quantidade:quantidade1 };
			Contato.findByIdAndUpdate(req.params.id, { $set: pessoa }, function (err, product) {
				if (err) return next(err);
				res.send('Product udpated.');
			});
		//});
	};

	controller.retorna_contato = function (req, res) {
		//verificaJWT(req, res, function () {
			console.log("retorna_contato");
			Contato.findById(req.params.id)
				.then((data) => {
					res.json(data);
				})
				.catch((err) => {
					console.log(err);
				})
		//});
	};

	controller.deleta = function (req, res) {
		//verificaJWT(req, res, function () {
			Contato.findByIdAndRemove(req.params.id, function (err) {
				if (err) return next(err);
				Contato.find()
					.then((data) => {
						res.json(data);
					})
					.catch((err) => {
						console.log(err);
					})
			})
		//});
	};

	controller.contatos = function (req, res) {
	//	verificaJWT(req, res, function () {
			console.log("Listar")
			Contato.find()
				.then((data) => {
					res.json(data);
				})
				.catch((err) => {
					console.log(err);
				})
		//});
	};

	/*verificaJWT = function (req, res, executar) {
		passport.authenticate('jwt', { session: false }, (err, user, info) => {
			if (err) {
				console.log(err);
			}
			if (info !== undefined) {
				console.log(info.message);
			} else if (user.username === req.query.username) {
				executar();
			} else {
				console.error('jwt id and username do not match');
			}
		})(req, res);
	}*/

	return controller;
};
