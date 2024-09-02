import React, { Component } from 'react';

class Form3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
        this.somar = this.somar.bind(this); // permite que o método altere o state.
        this.subtrair = this.subtrair.bind(this); // permite que o método altere o state.
    }

    somar() {
        this.setState(prevState => ({ num: prevState.num + 1 }))
    }

    subtrair() {
        this.setState(prevState => ({ num: prevState.num - 1 }))
    }

    render() {
        return (
            <div>
                <label>{this.state.num}</label>
                <button onClick={this.somar}>Somar</button>
                <button onClick={this.subtrair}>Subtrair</button>
            </div>
        )
    }
}

export default Form3;
