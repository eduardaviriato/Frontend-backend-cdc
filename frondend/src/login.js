import React, { Component } from 'react';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
import './ap.css';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            showError: false,
            showNullError: false,
        };
    }

    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    loginUser = async (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        if (username === '' || password === '') {
            this.setState({
                showError: false,
                showNullError: true,
                loggedIn: false,
            });
        } else {

            const user = {
                username: username,
                password: password,
            };

            axios.post('http://localhost:3333/loginUser', user)
                .then(res => {
                    console.log(res.data);
                    if (
                        res.data === 'bad username'
                        || res.data === 'passwords do not match'
                    ) {
                        this.setState({
                            showError: true,
                            showNullError: false,
                        });
                    } else {
                        localStorage.setItem('JWT', res.data.token);
                        this.setState({
                            loggedIn: true,
                            showError: false,
                            showNullError: false,
                        });
                    }
                });

        }
    };


    render() {
        const {
            username,
            password,
            showError,
            loggedIn,
            showNullError,
        } = this.state;
        if (!loggedIn) {
            return (
                <div>
                    {/*<form className="profile-form" onSubmit={this.loginUser}>
                        <fieldset>
                            <legend>Login</legend>
                            <input
                                id="username"
                                label="username"
                                value={username}
                                onChange={this.handleChange('username')}
                                placeholder="Username"
                            />
                            <br />
                            <input
                                id="password"
                                label="password"
                                value={password}
                                onChange={this.handleChange('password')}
                                placeholder="Password"
                                type="password"
                            />
                            <br />
                            <button type="submit">Login</button>
                        </fieldset>
            </form>*/}
	<div class="row">
		<div class="col-md-4 login-sec">
		    <h2 class="text-center">Login </h2>
		    <form class="login-form" className="profile-form" onSubmit={this.loginUser}>
                <br/>
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Nome do usuário</label>
    <input type="text" id="username" value={username} onChange={this.handleChange('username')} class="form-control" placeholder=""/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" class="text-uppercase">Senha</label>
    <input type="password" id="password" label="password" value={password} onChange={this.handleChange('password')} class="form-control" placeholder=""/>
  </div>
  
  
    <div class="form-check">
    <button type="submit" class="btn btn-login float-right">Submit</button>
  </div>
  
</form>
		</div>
        
    {/*<div class="carousel-item active">
      <img class="d-block img-fluid" width="100px" height="100px" src="logo.png" alt="First slide"/>
        <Link to={"/register"} style={{margin: '0px 30px'}} className="btn btn-success">Registrar-se</Link>

        </div>*/}
</div>

                    <br />
                    
          
                    {showNullError && (
                        <div>
                            <p>O username e/ou password não pode ser nulo.</p>
                        </div>
                    )}
                    {showError && (
                        <div>
                            <p>
                                Username e/ou password não reconhecido. Por favor, registre-se.
              </p>
                        </div>
                    )}
                <Link to={"/register"} style={{margin: '0px 30px'}} className="btn btn-success">Registrar-se</Link>
                
                </div>
            );
        }
        return <Redirect to={"/cdc" } />;
    }
}

export default Login;