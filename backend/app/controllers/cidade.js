//const passport = require('passport');

module.exports = function (app) {

	console.log('model: ' + app);

	var Contato = app.models.cidade;

	var control = {};

	control.novo_salva = function (req, res) {
		//verificaJWT(req, res, function () {
			console.log("Deu certo");
			var nome1 = req.body.nome;
			var pessoa = new Contato({ nome: nome1 });
			console.log('adicionar: ' + pessoa);

			pessoa.save(function (err) {
				if (err) {
					console.log(err);
				}
				res.send('Product add.');
			});
		//});

	};

	control.atualiza = function (req, res) {
		//verificaJWT(req, res, function () {
			console.log("atualiza");
			var nome1 = req.body.nome;
			var pessoa = { nome: nome1};
			Contato.findByIdAndUpdate(req.params.id, { $set: pessoa }, function (err, product) {
				if (err) return next(err);
				res.send('Product udpated.');
			});
		//});
	};

	control.retorna = function (req, res) {
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

	control.deleta = function (req, res) {
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

	control.cidades = function (req, res) {
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

	return control;
};
