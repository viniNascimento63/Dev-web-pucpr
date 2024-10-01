import React, { Component } from 'react';
import firebase from '../../Firebase';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dt_nascimento: "",
            email: "",
            senha: "",
            usuarios: [], // Estado para armazenar os dados dos usuários
            mensagem: "", // Estado para armazenar mensagens de sucesso ou erro
        };
        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar() {
        const { nome, sobrenome, dt_nascimento, email, senha } = this.state;

        // Cadastrar usuário no Firebase Authentication
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                const userId = userCredential.user.uid;

                // Salvar dados adicionais no Firestore
                firebase.firestore().collection('usuarios').doc(userId).set({
                    nome: nome,
                    sobrenome: sobrenome,
                    dt_nascimento: dt_nascimento,
                    email: email,
                })
                .then(() => {
                    this.setState({ mensagem: "Usuário criado com sucesso!" });
                    console.log('Dados do usuário salvos no Firestore.');
                })
                .catch((error) => {
                    this.setState({ mensagem: `Erro ao salvar no Firestore: ${error.message}` });
                    console.error('Erro ao salvar no Firestore:', error);
                });
            })
            .catch((error) => {
                this.setState({ mensagem: `Erro ao criar usuário: ${error.message}` });
                console.error('Erro:', error);
            });
    }

    render() {
        return (
            <div>
                <h1>Cadastro</h1>
                <a href="/login"><button>Login</button></a>
                <br />
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
                <input
                    type='text'
                    placeholder='Nome'
                    onChange={(e) => this.setState({ nome: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Sobrenome'
                    onChange={(e) => this.setState({ sobrenome: e.target.value })}
                /><br />
                <input
                    type="date"
                    onChange={(e) => this.setState({ dt_nascimento: e.target.value })}
                /><br />
                <button onClick={this.cadastrar}>Cadastrar</button>

                {/* Exibe a mensagem de sucesso ou erro */}
                {this.state.mensagem && <p>{this.state.mensagem}</p>}
            </div>
        );
    }
}

export default Home;
