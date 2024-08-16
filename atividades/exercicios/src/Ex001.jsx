import React from 'react';
import './App.css';

const Nome = (props) => {
  return(
    <div className='estilo'>
      {props.nome}
    </div>
  );
}

function Ex001() {
  return (
    <div>
      Olá, Mundo!
      <Nome nome="Vinícius Nascimento"/>
      <Nome nome="Hevelin Nascimento"/>
    </div>
  );
}

export default Ex001;
