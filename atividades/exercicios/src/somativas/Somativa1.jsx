import React, { Component } from 'react';

class Somativa1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'email@generico.com',
            password: '123456'
        }

        this.validarLogin = this.validarLogin.bind(this);
    }

    validarLogin() {
        const inputEmail = document.querySelector('#email');
        const inputSenha = document.querySelector('#senha');
        let pRes = document.querySelector('#res');

        // Valida se os campos estão preenchidos
        if (!inputEmail.value || !inputSenha.value) {
            pRes.textContent = "Por favor, preencha todos os campos.";
            return;
        }

        if (inputEmail.value === this.state.email && inputSenha.value === this.state.password) {
            pRes.textContent = "Acessado com sucesso!";
            console.log('ok');
        } else {
            pRes.textContent = "Usuário ou senha incorretos!";
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type="email" id="email" /><br />
                <input type="password" id="senha" /><br />
                <button onClick={this.validarLogin}>Acessar</button>
                <div>
                    <p id="res">Aguardando validação...</p>
                </div>
            </div>
        );
    }
}

export default Somativa1;