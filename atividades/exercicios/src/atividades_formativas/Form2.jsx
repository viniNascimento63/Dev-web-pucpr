import React from 'react';
import './Calculadora.css';

function Form2 () {
    return (
        <div className="container">
            <div className="calculadora">
                <div className="res">0.75</div>
                <button className="clear">AC</button>
                <button className="operacao">/</button>
                <button className="num">7</button>
                <button className="num">8</button>
                <button className="num">9</button>
                <button className="operacao">*</button>
                <button className="num">4</button>
                <button className="num">5</button>
                <button className="num">6</button>
                <button className="operacao">-</button>
                <button className="num">1</button>
                <button className="num">2</button>
                <button className="num">3</button>
                <button className="operacao">+</button>
                <button className="zero">0</button>
                <button className="decimal">.</button>
                <button className="operacao">=</button>
            </div>
        </div>
    );
}

export default Form2;