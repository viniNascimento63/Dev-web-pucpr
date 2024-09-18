import React, { Component } from 'react';
import firebase from '../../Firebase';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            usuarios: [] // Estado para armazenar os dados dos usuários
        };
        this.gravar = this.gravar.bind(this);
        this.exibir = this.exibir.bind(this);
    }

    async gravar() {
        await firebase.firestore().collection("usuario").doc("1").set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
        });
    }

    exibir() {
        firebase.firestore().collection("usuario").get().then((retorno) => {
            let usuarios = [];
            retorno.forEach((item) => {
                const dados = item.data();
                usuarios.push({
                    nome: dados.nome,
                    sobrenome: dados.sobrenome
                });
            });
            this.setState({ usuarios }); // Atualiza o estado com os dados dos usuários
        });
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <a href="/contato"><button>Contato</button></a>
                <a href="/sobre"><button>Sobre</button></a>
                <br />
                <input
                    type='text'
                    placeholder='Nome'
                    onChange={(e) => this.setState({ nome: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Sobrenome'
                    onChange={(e) => this.setState({ sobrenome: e.target.value })}
                />
                <button onClick={this.gravar}>Gravar</button>
                <button onClick={this.exibir}>Exibir dados</button>

                {/* Exibe os nomes e sobrenomes na tela */}
                <ul>
                    {this.state.usuarios.map((usuario, index) => (
                        <li key={index}>
                            {usuario.nome} {usuario.sobrenome}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Home;
