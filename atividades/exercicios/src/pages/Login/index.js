import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Navigate } from 'react-router-dom'; // Para redirecionamento

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            mensagem: "", // Estado para armazenar mensagens de sucesso ou erro
            isAuthenticated: false // Estado para verificar se o usuário está autenticado
        };
        this.login = this.login.bind(this);
    }

    // Função de login
    login() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then((userCredential) => {
                // Autenticação bem-sucedida
                this.setState({ isAuthenticated: true });
            })
            .catch((error) => {
                // Caso de erro ao autenticar
                this.setState({ mensagem: "Usuário não cadastrado ou dados incorretos." });
                console.error('Erro:', error);
            });
    }

    render() {
        // Se o usuário estiver autenticado, redireciona para a página principal
        if (this.state.isAuthenticated) {
            return <Navigate to="/principal" />; // Redireciona para a rota da página principal
        }

        return (
            <div>
                <h1>Login</h1>
                <input
                    type='email'
                    placeholder='Email'
                    onChange={(e) => this.setState({ email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='Senha'
                    onChange={(e) => this.setState({ senha: e.target.value })}
                /><br />
                <button onClick={this.login}>Login</button>
                <a href="/"><button>Home</button></a>

                {/* Exibir a mensagem de erro, se houver */}
                {this.state.mensagem && <p>{this.state.mensagem}</p>}
            </div>
        );
    }
}

export default Login;
