import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';
import Create from './Create';


import { useState } from 'react';




function Createcliente () {
  const [modalOpen, setTeste] = useState(true);

  return (
    <div>
      <button onClick={() => setTeste(true)}>
        Exibir modal
      </button>
      <button onClick={() => setTeste(false)}>
        Remover modal
      </button>
  
      { modalOpen && <Create /> }


      <h4><Link to="/" className="btn btn-primary">Voltar</Link></h4>
    </div>
  );
}


export { Createcliente } ;