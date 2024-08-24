import React, {Component} from 'react';

class Ex002 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: 'Meu primeiro título com class component!'
        }
        this.mudarTitulo = this.mudarTitulo.bind(this); // permite que o método altere o state.
    }

    mudarTitulo() {
        this.setState({titulo:'Olá mundo'});
    }

    render() {
        return (
            <div>
                <h1>{this.state.titulo}</h1>
                <button onClick={this.mudarTitulo}>Mudar título</button>
            </div>
        )
    }
}

export default Ex002;
