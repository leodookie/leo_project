import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';


//TESTE
class App extends Component {
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
  
          { this.state.modalOpen && <Modal /> }
        </div>
      );
    }
  }