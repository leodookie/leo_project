import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';
import Create from './Create';


// Exemplo de exibir modal e subir modal
class Create_cliente extends Component {
    state = {
      modalOpen: false,
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.setState({ modalOpen: true })}>
            Exibir modal
          </button>
          <button onClick={() => this.setState({ modalOpen: false })}>
            Remover modal
          </button>
  
          { this.state.modalOpen && <Create /> }
        </div>
      );
    }
  }


   
  export default Create_cliente;