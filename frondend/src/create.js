import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
    }
  }
  onChangePersonName(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nome: this.state.nome,

    };
    axios.post('http://localhost:3333/cidade', obj)
        .then(res => console.log(res.data));
   this.setState({
      nome: '',
    }
    )
  }
  

  render() {
    return (
        <div style={{ marginTop: 10 }}>
          <Link to={"/cdc"} className="btn btn-primary">Home</Link>
          <Link to={"/menu"} className="btn btn-primary">Listar Cidades</Link>



            <h3 align="center">Registre a nova Cidade</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nome: </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nome}
                      onChange={this.onChangePersonName}
                      />
                </div>

                <div className="form-group">
                    <input type="submit" 
                      value="Registrar Cidade " 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}