import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';
import Create from './Create';


import { useState } from 'react';

const Create_client = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>
        Exibir modal
      </button>
      <button onClick={() => setModalOpen(false)}>
        Remover modal
      </button>

      { modalOpen && <Create /> }
    </div>
  );
}