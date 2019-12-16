import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {contatos: []};
      this.atualizaDados = this.atualizaDados.bind(this)
    }

    atualizaDados(data) {
      this.setState({ contatos: data });
    }

    componentDidMount(){
      axios.get('http://localhost:3333/produto')
        .then(res => this.atualizaDados(res.data))
        .catch(function (error) {
          console.log(error);
        });
    }

    tabRow(){
      var atDados = this.atualizaDados;
      return this.state.contatos.map(function(object, i){
          return <TableRow obj={object} key={i} atualizaDados={atDados}/>;
      });
    }

    render() {
      return (
        <div>
          <Link to={"/create/"} className="btn btn-primary">Criar</Link>
          <Link to={"/cdc"} className="btn btn-primary">Home</Link>
          <h3 align="center">Lista de Contatos</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Quantidade</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }