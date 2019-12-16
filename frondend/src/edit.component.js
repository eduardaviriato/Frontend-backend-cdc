import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      email: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:3333/produto/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                nome: response.data.nome, 
                email: response.data.email });
          })
          .catch(function (error) {
              console.log(error);
          });
    }

  onChangeName(e) {
    this.setState({
      nome: e.target.value
    })  
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nome: this.state.nome,
      email: this.state.email
    };
    axios.put('http://localhost:3333/produto/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
        this.setState({
          nome: '',
          email: '',
        })
    
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
           <Link to={"/ind/"} className="btn btn-primary">Listar Produtos</Link>

            <h3 align="center">Update </h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nome:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nome}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update " 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}